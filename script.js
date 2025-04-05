document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userMessage");
    const chatBox = document.getElementById("chat-box");
    const recommendedContainer = document.getElementById("recommended-videos-container");
    const YOUTUBE_API_KEY = 'AIzaSyCBhuqU4WRMgdbqukowZQ_4xz-60yLJeBQ';  // Replace with a valid API key

    sendBtn.addEventListener("click", async function () {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("You", userMessage);
        userInput.value = ""; 

        try {
            const videoData = await fetchYouTubeVideos(userMessage);

            if (videoData.error) {
                appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
                return;
            }

            if (videoData.items.length === 0) {
                appendMessage("Bot", "Sorry, I couldn't find any videos on that topic.");
            } else {
                // Display the first video in the chat box
                const firstVideo = videoData.items[0];
                appendMessage("Bot", `Here's a video I found: ${firstVideo.snippet.title}`);
                appendVideo(firstVideo.id.videoId);

                // Clear previous recommended videos
                recommendedContainer.innerHTML = "";

                // Show recommended videos outside the chat
                videoData.items.slice(1, 4).forEach(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const thumbnailUrl = item.snippet.thumbnails.medium.url;  // Fetch thumbnail
                    appendRecommendedVideo(videoId, videoTitle, thumbnailUrl);
                });
            }
        } catch (error) {
            appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
        }
    });

    async function fetchYouTubeVideos(query) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=5&key=${YOUTUBE_API_KEY}`;
        const response = await fetch(url);
        return await response.json();
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendVideo(videoId) {
        const videoElement = document.createElement("div");
        videoElement.classList.add("message");
        videoElement.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        `;
        chatBox.appendChild(videoElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendRecommendedVideo(videoId, videoTitle, thumbnailUrl) {
        const videoElement = document.createElement("div");
        videoElement.classList.add("recommended-video");
        videoElement.innerHTML = `
            <img src="${thumbnailUrl}" alt="${videoTitle}" class="video-thumbnail">
            <h3>${videoTitle}</h3>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch Video</a>
            <div class="video-actions">
                <button class="like-btn">👍 <span>0</span></button>
                <button class="heart-btn">❤️ <span>0</span></button>
            </div>
        `;

        // Append to the recommended videos container
        recommendedContainer.appendChild(videoElement);

        // Add event listeners for like and heart buttons
        const likeBtn = videoElement.querySelector(".like-btn");
        const heartBtn = videoElement.querySelector(".heart-btn");

        likeBtn.addEventListener("click", function () {
            toggleReaction(likeBtn);
        });

        heartBtn.addEventListener("click", function () {
            toggleReaction(heartBtn);
        });
    }

    function toggleReaction(button) {
        let countSpan = button.querySelector("span");
        let count = parseInt(countSpan.innerText, 10);

        if (button.classList.contains("active")) {
            count -= 1;
            button.classList.remove("active");
        } else {
            count += 1;
            button.classList.add("active");
        }

        countSpan.innerText = count;
    }
});

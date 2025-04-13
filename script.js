// document.addEventListener("DOMContentLoaded", function () {
//     const sendBtn = document.getElementById("sendBtn");
//     const userInput = document.getElementById("userMessage");
//     const chatBox = document.getElementById("chat-box");
//     const recommendedContainer = document.getElementById("recommended-videos-container");
//     const YOUTUBE_API_KEY = 'AIzaSyCBhuqU4WRMgdbqukowZQ_4xz-60yLJeBQ';

//     // Send on Enter key
//     userInput.addEventListener("keypress", function (event) {
//         if (event.key === "Enter") {
//             sendBtn.click();
//         }
//     });

//     sendBtn.addEventListener("click", async function () {
//         const userMessage = userInput.value.trim();
//         if (userMessage === "") return;

//         appendMessage("You", userMessage);
//         userInput.value = "";

//         try {
//             const videoData = await fetchYouTubeVideos(userMessage);

//             if (videoData.error) {
//                 console.log(videoData.error);
//                 appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
//                 return;
//             }

//             if (videoData.items.length === 0) {
//                 appendMessage("Bot", "Sorry, I couldn't find any videos on that topic.");
//             } else {
//                 const firstVideo = videoData.items[0];
//                 appendMessage("Bot", `Here's a video I found: ${firstVideo.snippet.title}`);
//                 appendVideo(firstVideo.id.videoId);

//                 recommendedContainer.innerHTML = "";

//                 videoData.items.slice(1, 4).forEach(item => {
//                     const videoId = item.id.videoId;
//                     const videoTitle = item.snippet.title;
//                     const thumbnailUrl = item.snippet.thumbnails.medium.url;
//                     appendRecommendedVideo(videoId, videoTitle, thumbnailUrl);
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//             appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
//         }
//     });

//     async function fetchYouTubeVideos(query) {
//         const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=5&safeSearch=strict&key=${YOUTUBE_API_KEY}`;
//         const response = await fetch(url);
//         return await response.json();
//     }

//     function appendMessage(sender, message) {
//         const messageElement = document.createElement("div");
//         messageElement.classList.add("message");
//         messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatBox.appendChild(messageElement);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

//     function appendVideo(videoId) {
//         const videoElement = document.createElement("div");
//         videoElement.classList.add("message");
//         videoElement.innerHTML = `
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
//         `;
//         chatBox.appendChild(videoElement);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

//     function appendRecommendedVideo(videoId, videoTitle, thumbnailUrl) {
//         const videoElement = document.createElement("div");
//         videoElement.classList.add("recommended-video");
//         videoElement.innerHTML = `
//             <img src="${thumbnailUrl}" alt="${videoTitle}" class="video-thumbnail" style="cursor:pointer;">
//             <h3 style="cursor:pointer;">${videoTitle}</h3>
//             <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Open on YouTube</a>
//             <div class="video-actions">
//                 <button class="like-btn">👍 <span>0</span></button>
//                 <button class="heart-btn">❤️ <span>0</span></button>
//             </div>
//         `;

//         recommendedContainer.appendChild(videoElement);

//         const likeBtn = videoElement.querySelector(".like-btn");
//         const heartBtn = videoElement.querySelector(".heart-btn");
//         const thumbnail = videoElement.querySelector("img");
//         const title = videoElement.querySelector("h3");

//         likeBtn.addEventListener("click", () => toggleReaction(likeBtn));
//         heartBtn.addEventListener("click", () => toggleReaction(heartBtn));

//         // Click to play video inside chat
//         thumbnail.addEventListener("click", () => {
//             appendMessage("Bot", `Playing: ${videoTitle}`);
//             appendVideo(videoId);
//         });
//         title.addEventListener("click", () => {
//             appendMessage("Bot", `Playing: ${videoTitle}`);
//             appendVideo(videoId);
//         });
//     }

//     function toggleReaction(button) {
//         let countSpan = button.querySelector("span");
//         let count = parseInt(countSpan.innerText, 10);

//         if (button.classList.contains("active")) {
//             count -= 1;
//             button.classList.remove("active");
//         } else {
//             count += 1;
//             button.classList.add("active");
//         }

//         countSpan.innerText = count;
//     }
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const sendBtn = document.getElementById("sendBtn");
//     const userInput = document.getElementById("userMessage");
//     const chatBox = document.getElementById("chat-box");
//     const recommendedContainer = document.getElementById("recommended-videos-container");

//     console.log('DOM Loaded'); // Check if the DOM is ready

//     console.log('Send Button:', sendBtn); // Check if the send button exists
//     console.log('User Input Element:', userInput); // Check if the input element exists

//     sendBtn.addEventListener("click", async function () {
//         console.log('Send button clicked'); // Check if the button click is working
        
//         const userMessage = userInput.value.trim();
//         console.log('User Input:', userMessage); // Debugging input value
        
//         if (userMessage === "") return;

//         // Append the user's message
//         appendMessage("You", userMessage);
//         userInput.value = "";

//         // Fetch YouTube video data
//         try {
//             const videoData = await fetchYouTubeVideos(userMessage);
//             if (videoData.error) {
//                 console.log(videoData.error);
//                 appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
//                 return;
//             }

//             if (videoData.items.length === 0) {
//                 appendMessage("Bot", "Sorry, I couldn't find any videos on that topic.");
//             } else {
//                 const firstVideo = videoData.items[0];
//                 appendMessage("Bot", `Here's a video I found: ${firstVideo.snippet.title}`);
//                 appendVideo(firstVideo.id.videoId);

//                 recommendedContainer.innerHTML = "";
//                 videoData.items.slice(1, 4).forEach(item => {
//                     const videoId = item.id.videoId;
//                     const videoTitle = item.snippet.title;
//                     const thumbnailUrl = item.snippet.thumbnails.medium.url;
//                     appendRecommendedVideo(videoId, videoTitle, thumbnailUrl);
//                 });
//             }
//         } catch (error) {
//             console.error(error);
//             appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
//         }
//     });

//     async function fetchYouTubeVideos(query) {
//         const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=5&safeSearch=strict&key=AIzaSyCBhuqU4WRMgdbqukowZQ_4xz-60yLJeB`;
//         const response = await fetch(url);
//         return await response.json();
//     }

//     function appendMessage(sender, message) {
//         const messageElement = document.createElement("div");
//         messageElement.classList.add("message");
//         messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatBox.appendChild(messageElement);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

//     function appendVideo(videoId) {
//         const videoElement = document.createElement("div");
//         videoElement.classList.add("message");
//         videoElement.innerHTML = `
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
//         `;
//         chatBox.appendChild(videoElement);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }

//     function appendRecommendedVideo(videoId, videoTitle, thumbnailUrl) {
//         const videoElement = document.createElement("div");
//         videoElement.classList.add("recommended-video");
//         videoElement.innerHTML = `
//             <img src="${thumbnailUrl}" alt="${videoTitle}" class="video-thumbnail" style="cursor:pointer;">
//             <h3 style="cursor:pointer;">${videoTitle}</h3>
//             <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Open on YouTube</a>
//         `;
//         recommendedContainer.appendChild(videoElement);

//         const thumbnail = videoElement.querySelector("img");
//         const title = videoElement.querySelector("h3");

//         thumbnail.addEventListener("click", () => {
//             appendVideo(videoId);
//         });
//         title.addEventListener("click", () => {
//             appendVideo(videoId);
//         });
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userMessage");
    const chatBox = document.getElementById("chat-box");
    const recommendedContainer = document.getElementById("recommended-videos-container");
    const YOUTUBE_API_KEY = 'AIzaSyCBhuqU4WRMgdbqukowZQ_4xz-60yLJeBQ';

    // Features State
    let darkMode = false;
    let emojiEnabled = false;
    let chatbotMemory = [];

    // Send on Enter key press
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });

    sendBtn.addEventListener("click", async function () {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        // Append the user's message
        appendMessage("You", userMessage);
        chatbotMemory.push({ sender: "You", message: userMessage });
        userInput.value = "";

        try {
            const videoData = await fetchYouTubeVideos(userMessage);

            if (videoData.error) {
                console.log(videoData.error);
                appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
                return;
            }

            if (videoData.items.length === 0) {
                appendMessage("Bot", "Sorry, I couldn't find any videos on that topic.");
            } else {
                const firstVideo = videoData.items[0];
                appendMessage("Bot", `Here's a video I found: ${firstVideo.snippet.title}`);
                appendVideo(firstVideo.id.videoId);

                recommendedContainer.innerHTML = "";

                videoData.items.slice(1, 4).forEach(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const thumbnailUrl = item.snippet.thumbnails.medium.url;
                    appendRecommendedVideo(videoId, videoTitle, thumbnailUrl);
                });
            }
        } catch (error) {
            console.error(error);
            appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        darkMode = !darkMode;
        document.body.style.backgroundColor = darkMode ? "#333" : "#fff";
        document.body.style.color = darkMode ? "#fff" : "#000";
    });

    // Emoji Reactions Toggle
    const emojiToggle = document.getElementById("emojiToggle");
    emojiToggle.addEventListener("click", function () {
        emojiEnabled = !emojiEnabled;
        if (emojiEnabled) {
            appendMessage("Bot", "Emoji reactions are now enabled! You can reply with emojis like 🙂, 😢, 😡.");
        } else {
            appendMessage("Bot", "Emoji reactions are now disabled.");
        }
    });

    async function fetchYouTubeVideos(query) {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&maxResults=5&safeSearch=strict&key=${YOUTUBE_API_KEY}`;
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>
        `;
        chatBox.appendChild(videoElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function appendRecommendedVideo(videoId, videoTitle, thumbnailUrl) {
        const videoElement = document.createElement("div");
        videoElement.classList.add("recommended-video");
        videoElement.innerHTML = `
            <img src="${thumbnailUrl}" alt="${videoTitle}" class="video-thumbnail" style="cursor:pointer;">
            <h3 style="cursor:pointer;">${videoTitle}</h3>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Open on YouTube</a>
            <div class="video-actions">
                <button class="like-btn">👍 <span>0</span></button>
                <button class="heart-btn">❤️ <span>0</span></button>
            </div>
        `;

        recommendedContainer.appendChild(videoElement);

        const likeBtn = videoElement.querySelector(".like-btn");
        const heartBtn = videoElement.querySelector(".heart-btn");
        const thumbnail = videoElement.querySelector("img");
        const title = videoElement.querySelector("h3");

        likeBtn.addEventListener("click", () => toggleReaction(likeBtn));
        heartBtn.addEventListener("click", () => toggleReaction(heartBtn));

        // Click to play video inside chat
        thumbnail.addEventListener("click", () => {
            appendMessage("Bot", `Playing: ${videoTitle}`);
            appendVideo(videoId);
        });
        title.addEventListener("click", () => {
            appendMessage("Bot", `Playing: ${videoTitle}`);
            appendVideo(videoId);
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

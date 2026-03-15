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




import { GoogleGenerativeAI } from "@google/generative-ai";

document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");
    const userInput = document.getElementById("userMessage");
    const chatBox = document.getElementById("chat-box");
    const recommendedContainer = document.getElementById("recommended-videos-container");
    const YOUTUBE_API_KEY = 'AIzaSyCBhuqU4WRMgdbqukowZQ_4xz-60yLJeBQ';
    
    // Real Gemini API Key from user
    const GEMINI_API_KEY = 'AIzaSyCpa05o8Ej4PyPgmlZHZTtJ7Kza3fLQ0vQ'; 
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    // Features State
    let darkMode = false;
    let emojiEnabled = false;
    let chatbotMemory = [];
    let activeVideo = null;
    let player = null; // YouTube Player instance

    // Initialize UI state
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");

    // History
    let watchHistory = JSON.parse(localStorage.getItem("tubechat_history") || "[]");
    renderHistory();

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

        const lowerMessage = userMessage.toLowerCase();

        // 1. Check for Video Control Commands
        if (player && player.getPlayerState) {
            if (lowerMessage === "pause" || lowerMessage === "stop") {
                player.pauseVideo();
                appendMessage("Bot", "Video paused.");
                return;
            } else if (lowerMessage === "play" || lowerMessage === "resume") {
                player.playVideo();
                appendMessage("Bot", "Video playing.");
                return;
            } else if (lowerMessage.startsWith("skip to ")) {
                const timeStr = lowerMessage.replace("skip to ", "").trim();
                const timeParts = timeStr.split(":");
                let seconds = 0;
                if (timeParts.length === 2) {
                    seconds = parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
                } else {
                    seconds = parseInt(timeStr);
                }
                if (!isNaN(seconds)) {
                    player.seekTo(seconds, true);
                    appendMessage("Bot", `Skipped to ${seconds} seconds.`);
                    return;
                }
            }
        }

        const isQuestion = lowerMessage.includes("explain") || lowerMessage.includes("doubt") || lowerMessage.includes("why") || lowerMessage.includes("what") || lowerMessage.includes("how") || lowerMessage.includes("?");
        
        // Show Typing Indicator
        const typingId = showTypingIndicator();
        
        // 2. Handle AI Questions
        if (isQuestion) {
            try {
                let contextPrompt = `The user is asking a question: "${userMessage}". `;
                if (activeVideo) {
                    contextPrompt += `They are currently watching a YouTube video titled "${activeVideo.title}". Answer the question concisely and helpfully in the context of this video title.`;
                } else {
                    contextPrompt += `Answer the question concisely and helpfully.`;
                }


                const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
                const result = await model.generateContent(contextPrompt);
                const response = result.response.text();
                
                hideTypingIndicator(typingId);
                appendMessage("Bot", response);
            } catch (error) {
                console.error("Gemini API Error:", error);
                hideTypingIndicator(typingId);
                appendMessage("Bot", `Sorry, my AI brain encountered an error: ${error.message}`);
            }
            return;
        }

        // 3. Normal Search Flow
        try {
            const videoData = await fetchYouTubeVideos(userMessage);
            hideTypingIndicator(typingId);

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
                appendVideo(firstVideo.id.videoId, firstVideo.snippet.title);

                recommendedContainer.innerHTML = "";

                videoData.items.slice(1, 4).forEach(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const thumbnailUrl = item.snippet.thumbnails.medium.url;
                    appendRecommendedVideo(videoId, videoTitle, thumbnailUrl);
                });
                
                // Smooth scroll down to suggestions
                setTimeout(() => {
                    document.querySelector('.recommended-videos').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
        } catch (error) {
            console.error(error);
            hideTypingIndicator(typingId);
            appendMessage("Bot", "Sorry, something went wrong while fetching video data.");
        }
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function () {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.replace("light-mode", "dark-mode");
        } else {
            document.body.classList.replace("dark-mode", "light-mode");
        }
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

    // Voice Input Toggle
    const micBtn = document.getElementById("micBtn");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;
    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function() {
            micBtn.classList.add("listening");
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            userInput.value = transcript;
            micBtn.classList.remove("listening");
            sendBtn.click(); // Auto-send after speaking
        };

        recognition.onerror = function(event) {
            console.error("Speech recognition error", event.error);
            micBtn.classList.remove("listening");
        };

        recognition.onend = function() {
            micBtn.classList.remove("listening");
        };

        micBtn.addEventListener("click", () => {
             recognition.start();
        });
    } else {
        micBtn.style.display = 'none'; // Hide if not supported
    }

    // Typing Indicator
    function showTypingIndicator() {
        const id = "typing-" + Date.now();
        const indicator = document.createElement("div");
        indicator.classList.add("message", "typing-indicator");
        indicator.id = id;
        indicator.innerHTML = `<span></span><span></span><span></span>`;
        chatBox.appendChild(indicator);
        chatBox.scrollTop = chatBox.scrollHeight;
        return id;
    }

    function hideTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

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

    function appendVideo(videoId, videoTitle) {
        activeVideo = { id: videoId, title: videoTitle };
        const videoElement = document.createElement("div");
        videoElement.classList.add("message");
        videoElement.style.width = "100%";
        videoElement.style.maxWidth = "100%";
        videoElement.innerHTML = `
            <div id="yt-player-container-${videoId}" style="width: 100%; height: 315px;"></div>
            <br>
            <button class="action-btn summarize-btn" data-videoid="${videoId}" data-title="${videoTitle}">Summarize Video</button>
        `;
        chatBox.appendChild(videoElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Initialize YouTube Player API in the container
        player = new YT.Player(`yt-player-container-${videoId}`, {
            height: '315',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'playsinline': 1,
                'autoplay': 1
            }
        });

        // Add to history
        addToHistory(videoId, videoTitle, `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);

        const summarizeBtn = videoElement.querySelector(".summarize-btn");
        summarizeBtn.addEventListener("click", async () => {
            const typingId = showTypingIndicator();

            try {
                const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
                const prompt = `Give a concise, exciting 2-sentence summary of what a YouTube video titled "${videoTitle}" would likely be about.`;
                const result = await model.generateContent(prompt);
                
                hideTypingIndicator(typingId);
                appendMessage("Bot", `**Summary of ${videoTitle}:**\n${result.response.text()}`);
            } catch (error) {
                console.error("Gemini API Error:", error);
                hideTypingIndicator(typingId);
                appendMessage("Bot", `Sorry, I couldn't generate a summary right now. Error: ${error.message}`);
            }
        });
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
            appendVideo(videoId, videoTitle);
            document.querySelector('.chat-section').scrollIntoView({ behavior: 'smooth' });
        });
        title.addEventListener("click", () => {
            appendMessage("Bot", `Playing: ${videoTitle}`);
            appendVideo(videoId, videoTitle);
            document.querySelector('.chat-section').scrollIntoView({ behavior: 'smooth' });
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

    // Watch History functionality
    function addToHistory(videoId, title, thumbnail) {
        // Prevent duplicates
        watchHistory = watchHistory.filter(v => v.id !== videoId);
        watchHistory.unshift({ id: videoId, title, thumbnail });
        if (watchHistory.length > 10) watchHistory.pop(); // Keep last 10
        localStorage.setItem("tubechat_history", JSON.stringify(watchHistory));
        renderHistory();
    }

    function renderHistory() {
        const historyContainer = document.getElementById("watch-history-container");
        if (!historyContainer) return;
        
        historyContainer.innerHTML = "";
        
        if (watchHistory.length === 0) {
            historyContainer.innerHTML = '<p class="history-emptyMsg">No history yet. Start exploring!</p>';
            return;
        }

        watchHistory.forEach(video => {
            const el = document.createElement("div");
            el.classList.add("recommended-video");
            el.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                <h3>${video.title}</h3>
            `;
            el.addEventListener("click", () => {
                appendMessage("Bot", `Playing from history: ${video.title}`);
                appendVideo(video.id, video.title);
                document.querySelector('.chat-section').scrollIntoView({ behavior: 'smooth' });
            });
            historyContainer.appendChild(el);
        });
    }
});

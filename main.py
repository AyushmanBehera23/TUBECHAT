from fastapi import FastAPI, HTTPException
from googleapiclient.discovery import build
from dotenv import load_dotenv
import os

# Load API key from .env file
load_dotenv()
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

if not YOUTUBE_API_KEY:
    raise ValueError("YouTube API Key is missing. Please check your .env file.")

app = FastAPI()

# Connect to YouTube API
youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

@app.get("/search")
def search_videos(query: str):
    if not query:
        raise HTTPException(status_code=400, detail="Query parameter is required")

    # Call YouTube API
    request = youtube.search().list(
        q=query,
        part="snippet",
        maxResults=5,
        type="video"
    )
    response = request.execute()

    # Extract video data
    results = [
        {
            "title": item["snippet"]["title"],
            "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}",
            "thumbnail": item["snippet"]["thumbnails"]["default"]["url"],
            "channel": item["snippet"]["channelTitle"]
        }
        for item in response.get("items", [])
    ]

    return {"results": results}

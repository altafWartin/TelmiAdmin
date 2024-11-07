import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player'; // Import ReactPlayer
import { liveVideosByUserId } from '../api/apiFunctions'; // Adjust the import path as necessary

const HorizontalCardList = ({ userId }) => {
  console.log('HorizontalCardList', userId);
  const scrollRef = useRef(null);
  const [videos, setVideos] = useState([]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await liveVideosByUserId(userId);

        // Convert the object to an array if the response is an object
        const videoArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));

        setVideos(videoArray); // Set the videos state to the array
        console.log(videoArray); // Log the videos array for debugging
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    if (userId) {
      fetchVideos();
    }
  }, [userId]); // Fetch videos when userId changes

  return (
    <div className="bg-white rounded-lg p-4">
      <h1 className="text-lg font-bold mb-4 text-gray-800">Recorded Live Videos</h1>
      <div className="flex items-center justify-start">
        <button
          onClick={() => scroll("left")}
          className="bg-slate-300 p-2 rounded-full mr-2"
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 max-w-[62vw] scroll-smooth border border-gray-300 rounded-lg p-2"
        >
          {videos.length > 0 ? (
            videos.map((video) => (
              <div
                key={video.id}
                className="bg-white border border-gray-300 rounded-lg min-w-[14rem] h-[12rem] flex justify-center items-center"
              >
                <ReactPlayer
                  url={`${video.url}?alt=media`}
                  controls
                  playing={false}
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                />

              </div>
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
        <button
          onClick={() => scroll("right")}
          className="bg-slate-300 p-2 rounded-full ml-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HorizontalCardList;

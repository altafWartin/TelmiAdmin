import React, { useEffect, useState } from 'react';
import { FaEye, FaHeart } from 'react-icons/fa'; // Using Font Awesome for icons
import { MdAccessTime } from 'react-icons/md'; // Using Material Design for time icon
import { hostedRooms } from '../api/apiFunctions'; // Adjust the import path for hostedRooms

const RoomsHosted = ({ userId, onRoomData }) => { // Destructure onRoomData from props

    const [roomData, setRoomData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHostedRooms = async () => {
            try {
                const data = await hostedRooms(userId);
                setRoomData(data); // Assuming the rooms data is in data.rooms

                // Calculate total likes and total views
                const totalLikes = data.totalLikes;
                const totalViews = data.totalViews;

                // Call the parent's callback function with likes and views
                onRoomData(totalLikes, totalViews);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchHostedRooms();
    }, [userId, onRoomData]); // Add onRoomData to dependency array

    if (loading) {
        return <p>Loading...</p>; // Show loading state
    }

    // Optionally handle error state
    if (error) {
        return <p>Error: {error.message}</p>; // Display error message if there was an error
    }

    return (
        <div className='w-[58rem] p-4'>
            {roomData.rooms && <h1 className="text-xl font-bold mb-4 text-[#5A5B5C]">Hosted Rooms : {roomData.numberOfRooms}</h1>}

            {/* Container for horizontal scrolling */}
            <div className='overflow-x-auto'>
                {/* Flex container for cards */}
                <div className='flex gap-4'>
                {roomData.rooms.reverse().map((room, index) => ( // Change variable from video to room
                        <div key={index} className='p-3 my-2 w-full max-w-xs bg-[#227DFF0D] rounded-2xl shadow-sm flex flex-col'>
                            <div className='w-[17rem] h-8 flex justify-between mb-2'>
                                <p className="text-[#5A5B5C] font-medium capitalize">{room.time}</p>
                                <p className="text-[#5A5B5C] font-bold capitalize">{room.date}</p>
                            </div>
                            <div className='flex items-start justify-between'>
                                <div className='items-center'>
                                    <div className='flex'>
                                        <FaEye className='text-[#86B3F3] w-4 h-4 my-1' />
                                        <p className="text-[#5A5B5C] text-mini text-center font-normal leading-4 capitalize mt-[3px] ml-1">{room.views}</p>
                                    </div>
                                    <div className='flex'>
                                        <FaHeart className='text-[#86B3F3] w-4 h-4 my-1' />
                                        <p className="text-[#5A5B5C] text-sm text-center font-normal leading-4 capitalize ml-1 mt-[2px]">{room.likes}</p>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <MdAccessTime className='text-[#86B3F3] w-4 h-4 my-1' />
                                    <p className="text-[#5A5B5C] text-sm text-center font-normal leading-4 capitalize ml-1 mt-[3px]">{room.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsHosted;

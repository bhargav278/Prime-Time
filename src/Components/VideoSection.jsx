import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = ({ idKey }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const closeModal = () => {
        setIsPlaying(false);
    };

    return (idKey) ? (
        <div className=''>
            <div className="teaser-container border mx-4 border-gray-500">
                <div className="teaser-middle">
                    {!isPlaying ? (
                        <div className="thumbnail-wrapper" onClick={handlePlay}>
                            <img
                                className="thumbnail-image w-full h-[180px] sm:h-[250px] object-cover"
                                src={`https://img.youtube.com/vi/${idKey}/maxresdefault.jpg`}
                                alt="Thumbnail"
                            />
                            <div className="play-button"></div>
                        </div>
                    ) : (
                        <div className="teaser-video relative">
                            <iframe
                                className='md:w-6/12 h-[300px] sm:h-[400px] mx-auto'
                                src={`https://www.youtube.com/embed/${idKey}?autoplay=1&rel=0&modestbranding=1`}
                                allow="autoplay; encrypted-media;"
                                frameBorder="0"
                                allowFullScreen
                            />
                            <span className="closeVideo absolute top-2 right-2 text-white text-2xl cursor-pointer" onClick={closeModal}>&times;</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : <></>
};

export default VideoSection;

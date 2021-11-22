import React, { useEffect, useRef } from 'react';
import styles from './UiVideo.module.css'
import cn from 'classnames';

const UiVideo = ({
    src,
    classes,
    playbackRate=1.0
}) => {
    const videoRef = useRef()

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, [])



    return (
        <div>
            <video 
                loop
                autoPlay
                muted
                src={src}
                className={cn(styles.video, classes)}
                ref={videoRef}
            ></video>
        </div>
    );
};

export default UiVideo;

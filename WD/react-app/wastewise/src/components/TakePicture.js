import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const TakePicture = () => {

    const videoConstraints = {
        width: 320,
        facingMode: "environment"
    };

    const camRef = useRef(null);
    const [url, setUrl] = useState(null);

    const captureImage = () => {
        const img = camRef.current.getScreenshot();
        // console.log(img);
        setUrl(img);
    }

    return (
        <div>
            <h2>What do you want to dispose of?</h2>
            <p>Just take a picture!</p>
            <div>
                <Webcam
                    ref={camRef}
                    audio={false}
                    screenshotFormat="image/png"
                    videoConstraints={videoConstraints}
                    mirrored={true}
                    screenshotQuality={1}
                />
            </div>
            <div>
                <button onClick={captureImage}>Click!</button>
            </div>
            { url && (
                <div>
                    <img src={url} alt={'The photo you just took.'} />
                </div>
            )}
        </div>
    );
};

export default TakePicture;
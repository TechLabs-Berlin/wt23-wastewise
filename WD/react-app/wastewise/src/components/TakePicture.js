import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const TakePicture = () => {

    const videoConstraints = {
        // width: 320,
        // display width and max-height are set by CSS
        facingMode: "environment"
    };

    const camRef = useRef(null);
    const [url, setUrl] = useState(null);
    const [camOn, setCamOn] = useState(false);

    const captureImage = () => {
        const img = camRef.current.getScreenshot();
        // console.log(img);
        // console.log(camRef.current)
        setUrl(img);
        setCamOn(false);
    }

    return (
        <div className='takepicture'>

            {!camOn && !url && (
                <>
                    <h1>What do you want to dispose of?</h1>
                    <button onClick={() => setCamOn(true)}>Take a picture</button>
                </>
            )}
           
            {camOn && (
                <>
                    <Webcam
                        ref={camRef}
                        audio={false}
                        screenshotFormat="image/png"
                        videoConstraints={videoConstraints}
                        mirrored={true}
                        screenshotQuality={1}
                        // forceScreenshotSourceSize={true}
                    />
                    <button onClick={captureImage}>Click!</button>
                </>
            )}
            
            {!camOn && url && (
                <>
                    <img src={url} alt={'The photo you just took.'} />
                    <button onClick={() => setCamOn(true)}>Take another one?</button>
                </>
            )}
        </div>
    );
};

export default TakePicture;
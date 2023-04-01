import { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import TakePictureAnimation from './TakePictureAnimation';
import ShowResult from './ShowResult';


const TakePicture = () => {

    const camRef = useRef(null);
    const [dataURL, setDataURL] = useState(null);
    const [camReady, setCamReady] = useState(false);
    const [category, setCategory] = useState(null);

    const videoConstraints = {
        width: 2000,
        height: 2000,
        facingMode: "environment"
    };

    const captureImage = () => {
        const img = camRef.current.getScreenshot();
        // console.log(img);
        // console.log(camRef.current)
        setDataURL(img);
    };

    const handleReset = () => {
        setCategory(null);
        setDataURL(null);
    };

    useEffect(() => {
        // don't run initially, run only after user has taken a picture
        if (!dataURL) return;
        
        // calling AI MAGIC → hook not working yet
        // const result = useIdentifyItem(dataURL);

            /* Temporary: Faking/pretending AI MAGIC with setTimeout and a random category value */
            const randomTime = Math.floor(Math.random() * 4000 + 1000);
            setTimeout(() => {
                if (Math.random() < 0.3) setCategory('x');
                else {
                    const random2 = Math.floor(Math.random() * 9 + 1);
                    setCategory(random2);
                };
            }, randomTime);

    }, [dataURL]);

    return (
        <>
            {!dataURL && (
                <main className="takepicture">
                    <div className="takepicture__media-box">
                        <div className="takepicture__frame">
                            <div className="takepicture__canvas">
                                <div className="takepicture__loader"></div>

                                {camReady ? null : (
                                    <div className="takepicture__waiting">
                                        <h2 className="takepicture__waiting__headline">Waiting for your camera…</h2>
                                        <p className="takepicture__waiting__text">For this app to work properly, you need to grant it access to your camera.</p>
                                    </div>
                                )}

                                <Webcam
                                    ref={camRef}
                                    audio={false}
                                    screenshotFormat="image/png"
                                    videoConstraints={videoConstraints}
                                    mirrored={true}
                                    screenshotQuality={1}
                                    // imageSmoothing={false}
                                    forceScreenshotSourceSize={true}
                                    
                                    onUserMedia={() => {setCamReady(true)}}
                                    onUserMediaError={() => {setCamReady(false)}}

                                    // videoRef={videoRef}
                                    
                                    className={"takepicture__video"}
                                />

                            </div> 
                        </div>
                    </div>
                    <div className="takepicture__button-box">
                        <svg onClick={captureImage} className="takepicture__button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                            <circle className="takepicture__button__background" cx="60" cy="60" r="40"/>
                            <path className="takepicture__button__background" d="M95.8 108.149a60.004 60.004 0 0 0 20.776-68.129A59.999 59.999 0 0 0 2.021 44.56a60 60 0 0 0 26.1 66.271l5.232-8.343a50.149 50.149 0 0 1-21.816-55.394 50.151 50.151 0 1 1 78.388 53.153l5.876 7.903Z"/>
                            <mask id="a" width="40" height="36" x="40" y="42" maskUnits="userSpaceOnUse" style={{maskType: 'alpha'}}>
                                <path fill="#000" fill-rule="evenodd" d="M76 46h-6.34l-2.48-2.7c-.74-.82-1.82-1.3-2.94-1.3h-8.48c-1.12 0-2.2.48-2.96 1.3L50.34 46H44c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V50c0-2.2-1.8-4-4-4ZM60 56a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-10 6c0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10-10 4.48-10 10Z" clip-rule="evenodd"/>
                            </mask>
                            <g mask="url(#a)">
                                <path className="takepicture__button__icon" d="M36 36h48v48H36z"/>
                            </g>
                        </svg>
                    </div>
                </main>
            )}

            {dataURL && !category && (
                <TakePictureAnimation dataURL={dataURL} />
            )}

            {dataURL && category && (  
                <ShowResult dataURL={dataURL} category={category} handleReset={handleReset} />
            )}
        </>
    );
};

export default TakePicture;
const TakePictureAnimation = ({dataURL}) => {
    return (
        <main className="takepicture">
            <div className="takepicture__media-box">
                <div className="takepicture__frame">
                    <div className="takepicture__canvas">

                        <div className="takepicture__processing-box">
                            <img
                                src={dataURL}
                                alt="the photo you just took in a blurred and animated version"
                                className="takepicture__photo u-blur"
                            />
                            <div className="takepicture__processing-animation">
                                <img
                                    src={dataURL}
                                    alt="the photo you just took"
                                    className="takepicture__photo"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="takepicture__button-box">
                <svg className="takepicture__button t-inactive" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 120 120">
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
    );
};

export default TakePictureAnimation;
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
                <svg className="takepicture__button t-inactive" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" clipRule="evenodd" viewBox="0 0 120 111">
                    <path className="takepicture__button__background" d="M60 20c22.077 0 40 17.923 40 40s-17.923 40-40 40-40-17.923-40-40 17.923-40 40-40zm-6.003 20l-3.66 4h-6.34c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V48c0-2.2-1.8-4-4-4h-6.34l-3.66-4h-12zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16.4a6.403 6.403 0 00-6.4 6.4c0 3.532 2.867 6.4 6.4 6.4 3.532 0 6.4-2.868 6.4-6.4 0-3.532-2.868-6.4-6.4-6.4z"></path>
                    <path className="takepicture__button__background" d="M59.994 9.853c-22.653.002-42.626 15.351-48.457 37.241-5.482 20.579 2.734 42.439 20.228 54.356a1.953 1.953 0 01.566 2.66c-.906 1.453-2.233 3.569-3.154 5.037a1.96 1.96 0 01-1.248.875 1.96 1.96 0 01-1.497-.285C5.361 95.509-4.558 69.263 2.021 44.56 8.994 18.368 32.891 0 59.994-.002h.003C87.1 0 110.996 18.368 117.97 44.56c6.575 24.689-3.328 50.918-24.377 65.149a1.999 1.999 0 01-1.527.291 1.994 1.994 0 01-1.272-.892c-.916-1.453-2.215-3.525-3.116-4.962a2 2 0 01.578-2.721c17.473-11.919 25.676-33.765 20.198-54.331-5.832-21.89-25.805-37.239-48.457-37.241h-.003z"></path>
                    <path fill="none" d="M35.997 36h48v48h-48z"></path>
                    <circle className="takepicture__button__icon" cx="59.997" cy="60" r="6.4" fill="#cc339f"></circle>
                    <path className="takepicture__button__icon" fill="#cc339f" fillRule="nonzero"
                        d="M53.997 40l-3.66 4h-6.34c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V48c0-2.2-1.8-4-4-4h-6.34l-3.66-4h-12zm6 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z">
                    </path>
                </svg>
            </div>
        </main>
    );
};

export default TakePictureAnimation;
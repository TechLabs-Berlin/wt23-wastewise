import Link from 'next/link';

const PreTakePicture = () => {

    return (    
        <main className="takepicture">
            <h1 className="takepicture__question">What do you want to dispose of?</h1>
            <Link href="/scan" className="button">Take a picture</Link>
        </main>
    );
};

export default PreTakePicture;
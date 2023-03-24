const ShowResult = ({dataURL, category, handleReset}) => {

    const output = [
        {
            class: 'm-fail',
            h: <>Sorry, we couldn’t find a match. 😞</>,
            p: <><b>Please try again.</b> Make sure you only scan a single item at a time. Also placing the object on a plain background like a tabletop or a wall can help us make a suggestion.</>
        },
        {   
            class: 'm-cat1',
            h: <>You can dispose of this in the <i>organic waste bin.</i></>,
            p: <>Usually there is one in your backyard. Such a bin is usually brown and labeled <b><i>Biotonne</i></b> or <b><i>Biomüll</i></b>.</>
        },
        {
            class: 'm-cat2',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat3',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {   
            class: 'm-cat4',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat5',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat6',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat7',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat8',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        },
        {
            class: 'm-cat9',
            h: 'Lorem ipsum dolor sit amet consectetur.',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis delectus debitis expedita voluptatem ipsam rerum aperiam ad rem corporis asperiores repudiandae sapiente veritatis illum earum neque accusamus, sequi est?'
        }
    ];

    const getCategoryDetails = (cat) => {
        if (cat === 'x') { return output[0] };
        return output[cat];
    };

    const result = getCategoryDetails(category);

    return (
        <main className="showresult">
            <div className={`showresult__flexbox ${result.class}`}>
                <img src={dataURL} alt="Your captured photo" className="showresult__photo" />
                <div className="showresult__text-box">
                    <h3>{result.h}</h3>
                    <p>{result.p}</p>
                </div>
            </div>
            <button className="showresult__button" onClick={handleReset}>
                <svg className="showresult__button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                    <path d="M17.65 6.35a7.95 7.95 0 0 0-6.48-2.31c-3.67.37-6.69 3.35-7.1 7.02C3.52 15.91 7.27 20 12 20a7.98 7.98 0 0 0 7.21-4.56c.32-.67-.16-1.44-.9-1.44-.37 0-.72.2-.88.53a5.994 5.994 0 0 1-6.8 3.31c-2.22-.49-4.01-2.3-4.48-4.52A6.002 6.002 0 0 1 12 6c1.66 0 3.14.69 4.22 1.78l-1.51 1.51c-.63.63-.19 1.71.7 1.71H19c.55 0 1-.45 1-1V6.41c0-.89-1.08-1.34-1.71-.71l-.64.65z"/>
                </svg>              
            </button>
        </main>
    );
}

export default ShowResult;
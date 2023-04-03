const ShowResult = ({dataURL, category, handleReset}) => {

    const output = [
        {
            class: 'm-fail',
            label: null,
            h3: <>Sorry, I couldn’t find a match. <span className="u-bigger">😞</span></>,
            p: <><b>Please try again.</b> Make sure you only scan a single item at a time. Also placing the object on a plain background like a tabletop or a wall can help me make a suggestion.</>
        },
        {   
            class: 'm-cat1',
            label: <>Recyclable Waste</>,
            h3: <>You can dispose of it in the recycling bin.</>,
            p: <>Such a bin is usually either <b>orange</b> or <b>yellow</b> (or has such a lid or sticker) and is labeled <b><i>Wertstoffe</i></b>. There should be one in your courtyard.</>
        },
        {
            class: 'm-cat2',
            label: <>Organic Waste</>,
            h3: <>You can dispose of it in the organic waste bin.</>,
            p: <>Such a bin is usually <b>brown</b> (or has such a lid or sticker) and is labeled <b><i>Biogut</i></b>. There should be one in your courtyard.</>
        },
        {
            class: 'm-cat3',
            label: <>Paper Waste</>,
            h3: <>You can dispose of it in the <b>paper and cardboard bin</b>.</>,
            p: <>Such a bin is usually <b>blue</b> (or has such a lid or sticker) and is labeled <b><i>Papier</i></b> or <i>Papier Pappe</i> or <i>Papiertiger</i>. There should be one in your courtyard.</>
        },
        {
            class: 'm-cat4',
            label: <>Household Waste</>,
            h3: <>Unfortunately, this cannot be recycled. You can dispose of it in the household waste bin.</>,
            p: <>Such a bin is <b>dark grey</b> and labeled <b><i>Hausmüll</i></b> (or even not at all). There should be one in your courtyard.</>
        },
        {
            class: 'm-cat5',
            label: <>Electronic Waste</>,
            h3: <>It is valuable electronic waste. Please take it to a <b>collection point</b>.</>,
            p: <>You will find a so-called <b><i>BSR Recyclinghof</i></b> in almost every district. See a map of the locations <a href="https://www.bsr.de/recyclinghoefe-20503.php">here</a>. Small electronic devices are also accepted by <b>electronics shops</b>.</>
        },
        {
            class: 'm-cat6',
            label: <>Waste Glass</>,
            h3: <>Please be sure to dispose of it <b>sorted by color</b> in <b>special waste glass containers</b> in public streets.</>,
            p: <>See a map of the locations <a href="https://www.bsr.de/recyclinghoefe-20503.php?activeLayer=glas">here</a>. There may also be bins in your courtyard. The bins are usually <b>green</b>, but also can match the colour of the glass (<b><i>Glas</i></b>). Always check the label as there is white (<i>weiß</i> or <i>WEISS</i>), amber (<i>braun</i>), green (<i>grün</i>), and coloured glass incl. brown and green (<i>bunt</i>).</>
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
                    {result.label ? (
                        <h2 className="showresult__label">{result.label}</h2>
                    ) : null}
                    <h3>{result.h3}</h3>
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
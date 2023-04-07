const ShowResult = ({dataURL, identifiedItem, handleReset}) => {

    const items = {
        "error-x": { "type":"error-x"},
        "error-y": { "type":"error-y"},
        "aluminum_foil": { "description":"this is aluminium foil", "type":1},
        "apples": { "description":"these are apple leftovers", "type":2},
        "banana_peels": { "description":"these are banana peels", "type":2},
        "cardboard": { "description":"this is cardboard", "type":3},
        "condoms": { "description":"this is a condom", "type":4},
        "diapers": { "description":"these are diapers", "type":4},
        "food_waste": { "description":"this is food waste", "type":2},
        "glass_bottle": { "description":"this is a glass bottle", "type":6},
        "old_books": { "description":"this is an old book", "type":3},
        "oranges": { "description":"these are orange leftovers", "type":2},
        "pans": { "description":"this is a pan", "type":1},
        "pizza_box": { "description":"this is a pizza box", "type":3},
        "plastic_bags": { "description":"this is a plastic bag", "type":1},
        "plastic_packaging": { "description":"this is plastic packaging", "type":1},
        "plastic_toys": { "description":"this is a plastic toy", "type":1},
        "smartphone": { "description":"this is a smartphone", "type":5},
        "tampons": { "description":"this is a tampon", "type":4},
        "tea_bags": { "description":"this is a tea bag", "type":2},
        "tetrapack": { "description":"this is a Tetra Pack", "type":1},
        "toothbrush": { "description":"this is a tooth brush", "type":1},
    }
      
    const types = {
        "error-x": { "cssClass":"m-fail", "title":"failed", "instructions":"Sorry, I’m not sure what this is.", "info":<><b>Please try again.</b> Make sure you only scan a single item at a time. Placing it on a plain background like a tabletop or wall can also help me identify.</>},
        "error-y": { "cssClass":"m-fail", "title":"failed", "instructions":"Sorry, an error has occurred.", "info":<><b>Please try again.</b> Make sure your device is connected to the internet.</>},
        "1": { "cssClass":"m-cat1", "title":"Recyclable Waste", "instructions":"Please dispose of it in the recycling bin.", "info":<>Such a bin is usually either <b>orange</b> or <b>yellow</b> (or has such a lid or sticker) and is labeled <b><i>Wertstoffe</i></b>. There should be one in your courtyard.</>},
        "2": { "cssClass":"m-cat2", "title":"Organic waste", "instructions":"Please dispose of it in the organic waste bin.", "info":<>Such a bin is usually <b>brown</b> (or has such a lid or sticker) and is labeled <b><i>Biogut</i></b>. There should be one in your courtyard.</>},
        "3": { "cssClass":"m-cat3", "title":"Paper waste", "instructions":"Please dispose of it in the paper and cardboard bin.", "info":<>Such a bin is usually <b>blue</b> (or has such a lid or sticker) and is labeled <b><i>Papier</i></b> or <i>Papier Pappe</i> or <i>Papiertiger</i>. There should be one in your courtyard.</>},
        "4": { "cssClass":"m-cat4", "title":"Household waste", "instructions":"Unfortunately, this cannot be recycled. Please dispose of it in the household waste bin.", "info":<>Such a bin is <b>dark grey</b> and labeled <b><i>Hausmüll</i></b> (or even not at all). There should be one in your courtyard.</>},
        "5": { "cssClass":"m-cat5", "title":"Electronic waste", "instructions":"It is valuable electronic waste. Please take it to a collection point.", "info":<>You will find a so-called <b><i>BSR Recyclinghof</i></b> in almost every district. See a map of the locations <a href='https://www.bsr.de/recyclinghoefe-20503.php'>here</a>. Small electronic devices are also accepted by <b>electronics shops</b>.</>},
        "6": { "cssClass":"m-cat6", "title":"Waste glass", "instructions":"Please be sure to dispose of it sorted by color in special waste glass containers in public streets.", "info":<>See a map of the locations <a href='https://www.bsr.de/recyclinghoefe-20503.php?activeLayer=glas'>here</a>. There may also be bins in your courtyard. The bins are usually <b>green</b>, but also can match the colour of the glass (<b><i>Glas</i></b>). Always check the label as there is white (<i>weiß</i> or <i>WEISS</i>), amber (<i>braun</i>), green (<i>grün</i>), and coloured glass incl. brown and green (<i>bunt</i>).</>},
    }

    const type = items[identifiedItem].type;

    return (
        <main className="showresult">
            <div className={`showresult__flexbox ${types[type].cssClass}`}>
                <img src={dataURL} alt="Your captured photo" className="showresult__photo" />
                <div className="showresult__text-box">
                    <h2>
                        <span className="showresult__label">{types[type].title}</span>
                        {type === 'x' || type === 'y' ? (
                            <> <span className="showresult__sad-smiley">😞</span></>
                        ) : null}
                    </h2>
                    <h3>
                        {items[identifiedItem].description ? (
                            <>Apparently, {items[identifiedItem].description}. </>
                        ) : null}
                        {types[type].instructions}
                    </h3>
                    <p>{types[type].info}</p>
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
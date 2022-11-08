import './EachArtPieceBig.css';

let curAPIURLBase = 'https://dagmawibabi.com/tupm/eachArtCount';
export const EachArtPieceBig = (props) => {
    async function artViewCount(event) {
        // View Count
        fetch(curAPIURLBase + `${props.link}/1`)
        .then((response) => response.json())
        .catch((e) => console.log("error: " + e))
    }
    async function artDownloadCount(event) {
        // Download Count
        fetch(curAPIURLBase + `${props.link}/2`)
        .then((response) => response.json())
        .catch((e) => console.log("error: " + e))
    }
    
    return (
        <div className={props.darkMode ? "eachArtPieceBigContainerDark" : 'eachArtPieceBigContainer'}>
            <img src={props.image} alt={props.alt} className={props.magnifyOnHover ? "sizeBigHover" : "sizeBig"}></img>
            <br />
            <div className={props.darkMode ? 'captionAndDownloadDark' : 'captionAndDownload'}>
                <div className={props.darkMode ? 'captionDark' : 'caption'} onClick={props.gotoIGPage2} id={props.alt}>
                    <span className={props.darkMode ? 'artistNameBigPiecesDark' : 'artistNameBigPieces'} id={props.alt}> {props.artist} </span>
                    <br></br>
                    <span className={props.darkMode ? 'artistLinkBigPiecesDark' : 'artistLinkBigPieces'} id={props.alt}> @{props.link} </span>
                </div>
                <div>
                    <a href={props.HQImage} onClick={artViewCount}>
                        <img onClick={artViewCount} className={props.darkMode ? 'viewEachArtPieceBigBtnDark' : 'viewEachArtPieceBigBtn'} src={require("../assets/icons/eye.png")} alt={props.alt}></img>
                    </a>
                    <a href={props.HQImage} onClick={artDownloadCount} download>
                        <img onClick={artDownloadCount} className={props.darkMode ? 'downloadEachArtPieceBigBtnDark' : 'downloadEachArtPieceBigBtn'} src={require("../assets/icons/download.png")} alt={props.alt}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
import './EachArtPieceBig.css';

export const EachArtPieceBig = (props) => {
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
                    <a href={props.HQImage}>
                        <img className={props.darkMode ? 'viewEachArtPieceBigBtnDark' : 'viewEachArtPieceBigBtn'} src={require("../assets/icons/eye.png")} alt={props.alt}></img>
                    </a>
                    <a href={props.HQImage} download>
                        <img className={props.darkMode ? 'downloadEachArtPieceBigBtnDark' : 'downloadEachArtPieceBigBtn'} src={require("../assets/icons/download.png")} alt={props.alt}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}
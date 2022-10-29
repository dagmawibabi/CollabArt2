import './EachArtPieceBig.css';

export const EachArtPieceBig = (props) => {
    return (
        <div className='eachArtPieceBigContainer'>
            <img src={props.image} alt="art" className="sizeBig"></img>
            <br />
            <div className='captionAndDownload'>
                <div className='caption'>
                    <span className='artistNameBigPieces'> {props.artist} </span>
                    <br></br>
                    <span className='artistLinkBigPieces'> @{props.link} </span>
                </div>
                <div>
                    <img className='downloadEachArtPieceBigBtn' src={require("../assets/icons/download.png")} alt='downloadBtn'></img>
                </div>
            </div>
        </div>
    )
}
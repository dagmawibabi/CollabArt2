// import { useState } from 'react';
import './ArtGrid.css'
import { EachArtPieceBig } from './EachArtPieceBig';

export const ArtGrid = (props) => {
    let artList = [
        {
            "compressed": require("../assets/compressed/21.png"),
            "uncompressed": require("../assets/uncompressed/21.png"),
            "artist": "Mubarek Seid",
            "link": "muba_901"
        },
        {
            "compressed": require("../assets/compressed/13.png"),
            "uncompressed": require("../assets/uncompressed/13.png"),
            "artist": "Kirubel Seyoum",
            "link": "seyoum.kirubel"
        },
        {
            "compressed": require("../assets/compressed/10.png"),
            "uncompressed": require("../assets/uncompressed/10.png"),
            "artist": "Matthew Muluneh",
            "link": "mad_art_14"
        },
        {
            "compressed": require("../assets/compressed/7.png"),
            "uncompressed": require("../assets/uncompressed/7.png"),
            "artist": "Selamawit Debebe",
            "link": "sd_selam_art"
        },
        {
            "compressed": require("../assets/compressed/9.png"),
            "uncompressed": require("../assets/uncompressed/9.png"),
            "artist": "Michael Gebru",
            "link": "michael_gebru7"
        },
        {
            "compressed": require("../assets/compressed/22.png"),
            "uncompressed": require("../assets/uncompressed/22.png"),
            "artist": "Yohanan Mengistu",
            "link": "y.ohanan"
        },
        {
            "compressed": require("../assets/compressed/15.png"),
            "uncompressed": require("../assets/uncompressed/15.png"),
            "artist": "Estifanos Tewodros",
            "link": "steve.arts_"
        },
        {
            "compressed": require("../assets/compressed/3.jpg"),
            "uncompressed": require("../assets/uncompressed/3.jpg"),
            "artist": "Yeabtsega Getachew",
            "link": "yabi_7"
        },
        {
            "compressed": require("../assets/compressed/4.png"),
            "uncompressed": require("../assets/uncompressed/4.png"),
            "artist": "Nuhamin Dawit",
            "link": "nohuyop"
        },
        {
            "compressed": require("../assets/compressed/5.png"),
            "uncompressed": require("../assets/uncompressed/5.png"),
            "artist": "Samuel Chalachew",
            "link": "sammy_drawss"
        },
        {
            "compressed": require("../assets/compressed/23.png"),
            "uncompressed": require("../assets/compressed/23.png"),
            "artist": "Tsemru Firemariam",
            "link": "tsemru.f"
        },
        {
            "compressed": require("../assets/compressed/6.png"),
            "uncompressed": require("../assets/uncompressed/6.png"),
            "artist": "Hope Alemayehu",
            "link": "epohul"
        },
        {
            "compressed": require("../assets/compressed/1.png"),
            "uncompressed": require("../assets/uncompressed/1.png"),
            "artist": "Ruth Dawit",
            "link": "ruth.yop"
        },
        {
            "compressed": require("../assets/compressed/2.png"),
            "uncompressed": require("../assets/uncompressed/2.png"),
            "artist": "Kaleab Birhanu",
            "link": "kaleab.b11"
        },
        {
            "compressed": require("../assets/compressed/8.jpg"),
            "uncompressed": require("../assets/uncompressed/8.jpg"),
            "artist": "Eyoel Paulos",
            "link": "eyoel_99"
        },
        {
            "compressed": "",
            "uncompressed": "",
            "artist": "",
            "link": ""
        },
        {
            "compressed": require("../assets/compressed/16.jpg"),
            "uncompressed": require("../assets/uncompressed/16.jpg"),
            "artist": "Michael Asrat",
            "link": "abby.comics"
        },
        {
            "compressed": require("../assets/compressed/12.png"),
            "uncompressed": require("../assets/uncompressed/12.PNG"),
            "artist": "Maraki Girma",
            "link": "maraki_girma"
        },
        {
            "compressed": require("../assets/compressed/11.jpg"),
            "uncompressed": require("../assets/uncompressed/11.jpg"),
            "artist": "Robel Tilahun",
            "link": "tilla_studios"
        },
        {
            "compressed": require("../assets/compressed/14.png"),
            "uncompressed": require("../assets/uncompressed/14.png"),
            "artist": "Daniel Temesgen",
            "link": "daniel_temesgen_"
        },
        {
            "compressed": "",
            "uncompressed": "",
            "artist": "",
            "link": ""
        },
        {
            "compressed": require("../assets/compressed/20.jpg"),
            "uncompressed": require("../assets/uncompressed/20.jpg"),
            "artist": "Yohannes Mitiku",
            "link": "johnny_mitiku"
        },
        {
            "compressed": require("../assets/compressed/19.JPG"),
            "uncompressed": require("../assets/uncompressed/19.JPG"),
            "artist": "Tina Habtewold",
            "link": "tina1creates"
        },
        {
            "compressed": require("../assets/compressed/18.png"),
            "uncompressed": require("../assets/uncompressed/18.png"),
            "artist": "Biruk Yohannes",
            "link": "biruk.blend"
        },
        {
            "compressed": require("../assets/compressed/17.png"),
            "uncompressed": require("../assets/uncompressed/17.png"),
            "artist": "Tigist Dula",
            "link": "tg_dula"
        },
    ];
    function showDetails(event) {
        let detailDIV = document.getElementsByClassName("artOverlay")[0];
        detailDIV.textContent = event.offsetX;
        detailDIV.style.left = (event.screenX - 80) + "px";
        detailDIV.style.top = (event.screenY - 160) + "px";
        detailDIV.style.visibility = "visible";
        let name = document.createElement("span");
        name.innerText = artList[event.target.alt]["artist"];
        name.className = "artistName";
        let link = document.createElement("span");
        link.innerText = " @" + artList[event.target.alt]["link"];
        link.className = "artistLink";
        let br = document.createElement("br");
        detailDIV.appendChild(name)        
        detailDIV.appendChild(link)        
        detailDIV.appendChild(br)        
        // detailDIV.innerHTML = artList[event.target.alt]["artist"] + "<br />" + artList[event.target.alt]["link"];
    }
    function hideDetails(event) {
        let detailDIV = document.getElementsByClassName("artOverlay")[0];
        detailDIV.style.visibility = "hidden";
    }
    function gotoIGPage(event) {
        let url = "https://www.instagram.com/" + artList[event.target.alt]["link"];
        console.log(event.target.alt);
        window.open(url, '_blank').focus();
    }
    function gotoIGPage2(event) {
        let url = "https://www.instagram.com/" + artList[event.target.id]["link"];
        // console.log(event.target.id);
        window.open(url, '_blank').focus();
    }
    return (
        <div className="container">
            <div className="artOverlay"> </div>                                     
            <div className={props.smallGrid ? "gridViewSmall" : "gridView"}> 
                {
                    artList.map((content, index) => {
                            return (
                                content["uncompressed"] === "" ?
                                    (index + 1) % 4 === 0 ? 
                                        <div className={props.smallGrid ? "emptyArt rightScaleSmall artHover" :"emptyArt rightScale artHover"}> </div> 
                                    : <div className={props.smallGrid ? "emptyArt centerScaleSmall artHover" :"emptyArt centerScale artHover"}> </div>
                                : (index + 1) % 4 === 0 ? 
                                       <img key={index} src={props.highQualityImages ? content["uncompressed"] : content["compressed"]} className={props.smallGrid ? "rightScaleSmall artHover" :"rightScale artHover"} alt={index} onClick={gotoIGPage} onMouseMove={props.showArtistDetail ? showDetails : ()=>{}} onMouseOut={hideDetails}  />                                      
                                  : <img key={index} src={props.highQualityImages ? content["uncompressed"] : content["compressed"]} className={props.smallGrid ? "centerScaleSmall artHover" : "centerScale artHover"} alt={index} onClick={gotoIGPage} onMouseMove={props.showArtistDetail ? showDetails : ()=>{}} onMouseOut={hideDetails} />
                            )
                        }
                    )   
                }
            </div>
            <div className="artOverlay"> </div>                                     
            {/* <div className={props.smallGrid ? "gridViewSmall" : "gridView"}>  */}
            <div style={{marginTop: "100px"}}></div> 
            <div style={{textAlign: "center"}}>
                <span style={{color: props.darkMode ? "whitesmoke" : "black", textAlign: "center", fontSize: "22px", fontWeight: "bold"}}> Let's admire all the individual pieces </span>
                <p style={{color: props.darkMode ? "#c9c9c9" : "#202020"}}> Here you can look at all the individual art pieces that make up the beautiful mural in detail </p>
            </div>
            <div > 
                {
                    artList.map((content, index) => {
                            return (
                                content["uncompressed"] === "" ?
                                    <div> </div>
                                : <EachArtPieceBig key={index} darkMode={props.darkMode} image={props.highQualityImages ? content["uncompressed"] : content["compressed"]} alt={index} gotoIGPage2={gotoIGPage2} artist={content["artist"]} link={content["link"]} />
                            )
                        }
                    )   
                }
            </div>
        </div>
    );
}
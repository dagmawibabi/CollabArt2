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
            "compressed": require("../assets/compressed/9.jpg"),
            "uncompressed": require("../assets/uncompressed/9.png"),
            "artist": "Michael Gebru",
            "link": "michael_gebru7"
        },
        {
            "compressed": require("../assets/compressed/22.jpg"),
            "uncompressed": require("../assets/uncompressed/22.png"),
            "artist": "Yohanan Mengistu",
            "link": "yoh.an.an"
        },
        {
            "compressed": require("../assets/compressed/15.jpg"),
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
            "compressed": require("../assets/compressed/5.jpg"),
            "uncompressed": require("../assets/uncompressed/5.png"),
            "artist": "Samuel Chalachew",
            "link": "sammy_drawss"
        },
        {
            "compressed": require("../assets/compressed/23.jpg"),
            "uncompressed": require("../assets/uncompressed/23.png"),
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
            "compressed": require("../assets/compressed/24.jpg"),
            "uncompressed": require("../assets/uncompressed/24.png"),
            "artist": "Yohannes Tesfu",
            "link": "johntesfu5"
        },
        {
            "compressed": require("../assets/compressed/16.png"),
            "uncompressed": require("../assets/uncompressed/16.png"),
            "artist": "Michael Asrat",
            "link": "abby.comics"
        },
        {
            "compressed": require("../assets/compressed/12.jpg"),
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
            "compressed": require("../assets/compressed/25.jpg"),
            "uncompressed": require("../assets/uncompressed/25.jpg"),
            "artist": "Robel Tamiru",
            "link": "dotphic"
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
            "compressed": require("../assets/compressed/18.jpg"),
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
        // A
        {
            "compressed": require("../assets/compressed/26.jpg"),
            "uncompressed": require("../assets/uncompressed/26.jpg"),
            "artist": "Tesfamariam Teshome",
            "link": "hopethio"
        },
        {
            "compressed": require("../assets/compressed/38.png"),
            "uncompressed": require("../assets/uncompressed/38.png"),
            "artist": "Amanuel Dejene",
            "link": "amex.ttw"
        },
        {
            "compressed": require("../assets/compressed/28.png"),
            "uncompressed": require("../assets/uncompressed/28.png"),
            "artist": "Noah Eyob",
            "link": "1noahark"
        },
        {
            "compressed": require("../assets/compressed/46.png"),
            "uncompressed": require("../assets/uncompressed/46.png"),
            "artist": "Medhanit Bitew",
            "link": "azul_celeste8187"
        },
        {
            "compressed": require("../assets/compressed/27.jpg"),
            "uncompressed": require("../assets/uncompressed/27.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        // B
        {
            "compressed": require("../assets/compressed/32.jpg"),
            "uncompressed": require("../assets/uncompressed/32.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        {
            "compressed": require("../assets/compressed/33.jpg"),
            "uncompressed": require("../assets/uncompressed/33.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        {
            "compressed": require("../assets/compressed/34.jpg"),
            "uncompressed": require("../assets/uncompressed/34.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        {
            "compressed": require("../assets/compressed/35.jpg"),
            "uncompressed": require("../assets/uncompressed/35.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        {
            "compressed": require("../assets/compressed/36.jpg"),
            "uncompressed": require("../assets/uncompressed/36.jpg"),
            "artist": "Astray Nahusenay",
            "link": "icebirrd"
        },
        // C
        {
            "compressed": require("../assets/compressed/31.jpg"),
            "uncompressed": require("../assets/uncompressed/31.jpg"),
            "artist": "Lehem Moges",
            "link": "sensei.gong"
        },
        {
            "compressed": require("../assets/compressed/39.jpg"),
            "uncompressed": require("../assets/uncompressed/39.jpg"),
            "artist": "Mikias Muluneh",
            "link": "mike_muluneh"
        },
        {
            "compressed": require("../assets/compressed/29.PNG"),
            "uncompressed": require("../assets/uncompressed/29.PNG"),
            "artist": "Raphaella Fekadu",
            "link": "raphaelafkdtes"
        },
        {
            "compressed": require("../assets/compressed/49.jpg"),
            "uncompressed": require("../assets/uncompressed/49.jpg"),
            "artist": "Bereket Girma",
            "link": "bereket6244"
        },
        {
            "compressed": require("../assets/compressed/30.png"),
            "uncompressed": require("../assets/uncompressed/30.png"),
            "artist": "Eyob Solomon",
            "link": "21_inthe_street"
        },
        // D
        {
            "compressed": require("../assets/compressed/37.jpg"),
            "uncompressed": require("../assets/uncompressed/37.png"),
            "artist": "Rufael Anteneh",
            "link": "rufael_art"
        },
        {
            "compressed": require("../assets/compressed/48.png"),
            "uncompressed": require("../assets/uncompressed/48.png"),
            "artist": "Nura Mohammed",
            "link": "runa_m1"
        },
        {
            "compressed": require("../assets/compressed/40.png"),
            "uncompressed": require("../assets/uncompressed/40.png"),
            "artist": "Betemariam Brook",
            "link": "arc_hive21"
        },
        {
            "compressed": require("../assets/compressed/50.jpg"),
            "uncompressed": require("../assets/uncompressed/50.jpg"),
            "artist": "Hanan Juhar",
            "link": "hanuni1212"
        },
        {
            "compressed": require("../assets/compressed/42.jpg"),
            "uncompressed": require("../assets/uncompressed/42.jpg"),
            "artist": "Luladay Beyene",
            "link": "littleundecided"
        },
        // E
        {
            "compressed": require("../assets/compressed/41.png"),
            "uncompressed": require("../assets/uncompressed/41.png"),
            "artist": "Abel Bedilu",
            "link": "abelbedilu"
        },
        {
            "compressed": require("../assets/compressed/44.png"),
            "uncompressed": require("../assets/uncompressed/44.png"),
            "artist": "Abel Bedilu",
            "link": "abelbedilu"
        },
        {
            "compressed": require("../assets/compressed/47.png"),
            "uncompressed": require("../assets/uncompressed/47.png"),
            "artist": "Mahder Gebru",
            "link": "mery.21st"
        },
        {
            "compressed": require("../assets/compressed/45.png"),
            "uncompressed": require("../assets/uncompressed/45.png"),
            "artist": "Daniel Habtamu",
            "link": "danielhabtamu_"
        },
        {
            "compressed": require("../assets/compressed/43.jpg"),
            "uncompressed": require("../assets/uncompressed/43.jpg"),
            "artist": "Luladay Beyene",
            "link": "littleundecided"
        },
    ];
    function showDetails(event) {
        let detailDIV = document.getElementsByClassName("artOverlay")[0];
        detailDIV.textContent = event.offsetX;
        // detailDIV.style.left = (event.screenX - 80) + "px";
        // detailDIV.style.top = (event.screenY - 160) + "px";
        detailDIV.style.left = (event.clientX - 120) + "px";
        detailDIV.style.top = (event.clientY - 100) + "px";
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
        // let url = "https://www.instagram.com/" + artList[event.target.alt]["link"];
        // console.log(event.target.alt);
        // window.open(url, '_blank').focus();
        let url = "";
        if(event.target.alt > 0){
            url = "#" + (event.target.alt - 1);
        } else {
            url = "#" + event.target.alt;
        }
        console.log(url);
        window.open(url, '_self').focus();
    }
    function gotoIGPage2(event) {
        let url = "https://www.instagram.com/" + artList[event.target.id]["link"];
        console.log(event.target.id);
        window.open(url, '_blank').focus();
    }
    let artHover = (props.magnifyOnHover ? "artHoverHover" : "artHover");
    if(props.content === 1){
        return <div className="container">
            <div className="artOverlay"> </div> 
            <div className={props.smallGrid ? "gridViewSmall" : "gridView"}> 
            {
                artList.map((content, index) => {
                        return (
                            content["uncompressed"] === "" ?
                                <div className={props.smallGrid ? "emptyArt centerScaleSmall " + artHover :"emptyArt centerScale " + artHover}> </div>
                            : <img key={index} src={props.highQualityImages ? content["uncompressed"] : content["compressed"]} className={props.smallGrid ? "centerScaleSmall " + artHover : "centerScale " + artHover} alt={index} onClick={gotoIGPage} onMouseMove={props.showArtistDetail ? showDetails : ()=>{}} onMouseOut={hideDetails} />
                        )
                    }
                )   
            }
            </div>
            <div className="artOverlay"> </div> 
        </div>
    } else if (props.content === 2){
        return <div className='letsAdmire'>
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
                                : <EachArtPieceBig key={index} id={index} darkMode={props.darkMode} magnifyOnHover={props.magnifyOnHover} image={props.highQualityImages ? content["uncompressed"] : content["compressed"]} HQImage={content["uncompressed"]} alt={index} gotoIGPage2={gotoIGPage2} artist={content["artist"]} link={content["link"]} />
                            )
                        }
                    )   
                }
            </div>
        </div>
    }
}
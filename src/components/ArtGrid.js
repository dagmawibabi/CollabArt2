import './ArtGrid.css'

export const ArtGrid = () => {
    let artList = [
        {
            "image": require("../assets/13.png"),
            "artist": "Kirubel Seyoum",
            "link": "seyoum.kirubel"
        },
        {
            "image": require("../assets/10.png"),
            "artist": "Mad Art",
            "link": "mad_art_14"
        },
        {
            "image": require("../assets/7.png"),
            "artist": "Selamawit Debebe",
            "link": "sd_selam_art"
        },
        {
            "image": require("../assets/9.png"),
            "artist": "Michael Gebru",
            "link": "michael_gebru7"
        },
        {
            "image": "",
            "artist": "",
            "link": ""
        },
        {
            "image": require("../assets/3.jpg"),
            "artist": "Yeabtsega Getachew",
            "link": "yabi_7"
        },
        {
            "image": require("../assets/4.png"),
            "artist": "Nuhamin Dawit",
            "link": "nohuyop"
        },
        {
            "image": require("../assets/5.jpg"),
            "artist": "Samuel Chalachew",
            "link": "sammy_drawss"
        },
        {
            "image": require("../assets/6.png"),
            "artist": "Hope Alemayehu",
            "link": "epohul"
        },
        {
            "image": require("../assets/1.png"),
            "artist": "Ruth Dawit",
            "link": "ruth.yop"
        },
        {
            "image": require("../assets/2.png"),
            "artist": "Kaleab Demilew",
            "link": "kaleab.b11"
        },
        {
            "image": require("../assets/8.jpg"),
            "artist": "Eyoel Paulos",
            "link": "eyoel_99"
        },
        {
            "image": "",
            "artist": "",
            "link": ""
        },
        {
            "image": require("../assets/12.PNG"),
            "artist": "Maraki Girma",
            "link": "maraki_girma"
        },
        {
            "image": require("../assets/11.jpg"),
            "artist": "Robel Tilahun",
            "link": "tilla_studios"
        },
        {
            "image": "",
            "artist": "Daniel Temesgen",
            "link": "daniel_temesgen_"
        },
        {
            "image": "",
            "artist": "",
            "link": ""
        },
        {
            "image": "",
            "artist": "",
            "link": ""
        },
        {
            "image": "",
            "artist": "",
            "link": ""
        },
        {
            "image": "",
            "artist": "",
            "link": ""
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
        link.innerText = "@" + artList[event.target.alt]["link"];
        link.className = "artistLink";
        let br = document.createElement("br");
        detailDIV.appendChild(name)        
        detailDIV.appendChild(br)        
        detailDIV.appendChild(link)        
        // detailDIV.innerHTML = artList[event.target.alt]["artist"] + "<br />" + artList[event.target.alt]["link"];
    }
    function hideDetails(event) {
        let detailDIV = document.getElementsByClassName("artOverlay")[0];
        detailDIV.style.visibility = "hidden";
    }
    function gotoIGPage(event) {
        let url = "https://www.instagram.com/" + artList[event.target.alt]["link"];
        window.open(url, '_blank').focus();
    }
    return (
        <div className="container">
            <div className="artOverlay"> </div>                                     
            <div className="gridView"> 
                {
                    artList.map((content, index) => {
                            return (
                                content["image"] === "" ?
                                    (index + 1) % 4 === 0 ? 
                                        <div className="emptyArt rightScale artHover"> </div> 
                                    : <div className="emptyArt centerScale artHover"> </div>
                                : (index + 1) % 4 === 0 ? 
                                       <img key={index} src={content["image"]} className="rightScale artHover" alt={index} onClick={gotoIGPage} onMouseMove={showDetails} onMouseOut={hideDetails}  />                                      
                                  : <img key={index} src={content["image"]} className="centerScale artHover" alt={index} onClick={gotoIGPage} onMouseMove={showDetails} onMouseOut={hideDetails} />
                            )
                        }
                    )   
                }
            </div>
        </div>
    );
}
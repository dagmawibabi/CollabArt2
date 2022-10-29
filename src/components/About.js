import './About.css'
import projectUnity from '../assets/uncompressed/1.png'
import Switch from "react-switch";
// import { useState } from 'react';

export const About = (props) => {
     if(props.content === 1){
        return <div className='About' id='about'>
            <span className={props.darkMode ? "title" : "titleDark"}> About </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> The Unity Project Mural is a digital destination hosting the biggest and most diverse collaboration art where people can share their arts and edits in a way that connects to all art pieces surrounding it telling the story of how we as humans are all entwined, entangled and connected to one another in different aspects of life. All the artwork found within this project came from the incredible and diverse creative community all around the world. </p>
            <br />
            <br />
            <div className='controls'> 
                <span className={props.darkMode ? "title" : "titleDark"}> Controls </span>
                <br />
                <br />
                <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                    <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> High Quality Images </span>
                    <Switch onChange={props.changeHighQualityImages} checked={props.highQualityImages} onColor="#00AA00" offColor="#880000"  />
                </div>
                <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                    <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> Artist Detail on Hover</span>
                    <Switch onChange={props.changeShowArtistDetail} checked={props.showArtistDetail} onColor="#00AA00" offColor="#880000"  />
                </div>
                <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                    <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> Smaller Images </span>
                    <Switch onChange={props.changeGridSize} checked={props.smallGrid} onColor="#00AA00" offColor="#880000"  />
                </div>
            </div>
        </div>
    } else if (props.content === 2) {
        return <div className='Download' id='download'>
            <span className={props.darkMode ? "title" : "titleDark"}> Download </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> You can download this gorgeous art piece in different resolutions for free. </p>
            <br />
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download Low Resolution ( 10.6 MB ) </button>
            </a> 
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download Medium Resolution ( 20.6 MB ) </button>
            </a> 
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download High Resolution ( 30.6 MB ) </button>
            </a> 
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download Phone Wallpaper ( 30.6 MB ) </button>
            </a> 
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download PC Wallpaper ( 30.6 MB ) </button>
            </a> 
        </div>
    } else if (props.content === 3) {
        return <div className='Contribute' id='contribute'>
            <span className={props.darkMode ? "title" : "titleDark"}> Contribute </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> If you are a digital artist wanting to contribute to this collection of connected art pieces, follow the steps below accordingly and your art will be hosted here in no time! </p>
            {/* <p className={props.darkMode ? "description" : "descriptionDark"}> Follow these steps to contribute </p> */}
            <p className={props.darkMode ? "description" : "descriptionDark"}> 1.  </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 2.  </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 3.  </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 4.  </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> We'd be honored to have your work! </p>
        </div>
    } else if (props.content === 4) {
        return <div className='Contact' id='contact'>
            <span className={props.darkMode ? "title" : "titleDark"}> Contact </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> You can reach out to the developer and organizers of this project through the following socials. </p>
            <div className='socialMedias'> 
                <a href='https://www.instagram.com/dagmawibabi/' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/instagram.png")} alt="logo" />
                </a>
                <a href='https://t.me/Dagmawi_Babi/' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/telegram.png")} alt="logo" />
                </a>
                <a href='https://twitter.com/DagmawiBabi' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/twitter.png")} alt="logo" />
                </a>
                <a href='https://discordapp.com/users/1931' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/discord.png")} alt="logo" />
                </a>
                <a href='https://tiktok.com/@dagmawi_babi' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/tik-tok.png")} alt="logo" />
                </a>
                <a href='https://www.linkedin.com/in/dagmawibabi/' target={"_blank"} rel="noreferrer">
                    <img className='socialMediaLogo' src={require("../assets/icons/linkedin.png")} alt="logo" />
                </a>
            </div>
        </div>
    } else if (props.content === 5) {
        return <div className='About'>
            <span className={props.darkMode ? "ThankYou" : "ThankYouDark"}> Thank You! </span>
        </div>
    }
}
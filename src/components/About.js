import './About.css'
import projectUnity1 from '../assets/uncompressed/ALL1.png'
import projectUnity2 from '../assets/uncompressed/ALL2.png'
import projectUnity3 from '../assets/uncompressed/ALL3.png'
import projectUnity4 from '../assets/uncompressed/ALL4.png'
import TextFormat1 from '../assets/icons/TextFormat1.png'
import TextFormat2 from '../assets/icons/TextFormat2.png'
import Positions from '../assets/icons/positions.png'
import Switch from "react-switch";
// import { useState } from 'react';

export const About = (props) => {
     if(props.content === 1){
        return <div className='About' id='about'>
            <span className={props.darkMode ? "title" : "titleDark"}> About </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> The Unity Project Mural is the biggest and most diverse collaboration art where people can share their arts in a way that connects to all art pieces surrounding it telling the story of how we, as humans, are all entwined, entangled and connected to one another in different aspects of life. All the artwork found within this project came from the incredible and diverse creative community all around the world. </p>
        </div>
    } else if (props.content === 2) {
        return <div className='Download' id='download'>
            <span className={props.darkMode ? "title" : "titleDark"}> Download </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> You can download this gorgeous art piece in different resolutions for free. </p>
            <br />
            <div className='downloadBtns'>
                <a href={projectUnity1} download> 
                    <button className='downloadBtn'> Download Low Resolution ( 6.2 MB ) </button>
                </a> 
                <a href={projectUnity2} download> 
                    <button className='downloadBtn'> Download Medium Resolution ( 21.0 MB ) </button>
                </a> 
                <a href={projectUnity3} download> 
                    <button className='downloadBtn'> Download High Resolution ( 39.2 MB ) </button>
                </a> 
                <a href={projectUnity4} download> 
                    <button className='downloadBtn'> Download Ultra-High Resolution ( 59.5 MB ) </button>
                </a> 
            </div>
        </div>
    } else if (props.content === 3) {
        return <div className='Contribute' id='contribute'>
            <span className={props.darkMode ? "title" : "titleDark"}> Contribute </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> If you are a digital artist wanting to contribute to this collection of connected art pieces, follow the steps below accordingly and your art will be hosted here in no time! </p>
            {/* <p className={props.darkMode ? "description" : "descriptionDark"}> Follow these steps to contribute </p> */}
            <p className={props.darkMode ? "description" : "descriptionDark"}> 1. Pick an empty box that has a drawing above, beside or below it </p>
            <img src={Positions} style={{width: "380px", height: "730px"}} alt="positions" /> 
            <p className={props.darkMode ? "description" : "descriptionDark"}> 2. Join <a href="https://t.me/+VrGpsjEU4bdiZDE0" style={props.darkMode ? {color: "cyan"} : {color: "royalblue"}}> @TheUnityProjectMuralGroup </a> on telegram  </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 3. Check the group for the pinned messages to check if the spot you chose is reserved or not </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 4. If the spot is reserved; Pick another spot above and recheck </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 5. If the spot is not reserved; Quickly text the group in the following format </p>
            <img src={TextFormat1} style={{width: "290px", height: "160px"}} alt="textFormat" /> 
            <img src={TextFormat2} style={{width: "230px", height: "140px"}} alt="textFormat" /> 
            <p className={props.darkMode ? "description" : "descriptionDark"}> 6. When choosing time to finish the drawing choose from a minimum of 2 hours to a maximum of 2 days </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 7. If you don't deliver by the time frame, your spot will be given to someone else </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 8. If all goes right your text will be pinned by the organizers to show that you have successfully reserved your spot </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 9. The dimension for your drawing should be any square with a minimum of 500x500 pixels</p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 10. Then draw your art piece in a way it connects to the arts besides the spot you chose </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 11. Also draw in a way that it lets others continue off from your drawing in all sides </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 12. Finally, When you finish drawing send the uncompressed high quality file in the group </p>
            <p className={props.darkMode ? "description" : "descriptionDark"}> 13. The project organizers will then upload your drawing to the website and host it for the world to admire! </p>
            <p className={props.darkMode ? "description" : "descriptionDark"} style={{fontWeight: "bold", fontSize: "20px"}}> We'd be honored to have your work! </p>
        </div>
    } else if (props.content === 4) {
        return <div className='Contact' id='contact'>
            <span className={props.darkMode ? "title" : "titleDark"}> Contact </span>
            <p className={props.darkMode ? "description" : "descriptionDark"}> You can reach out to the developers and organizers of this project through the following socials. </p>
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
            <br />
            <br />
            <br />
            <span className={props.darkMode ? "ThankYou visitors" : "ThankYouDark visitors"} style={{padding: "12px 20px", border: "solid 2px", "borderImage": "linear-gradient(90deg, purple, orange) 2", clipPath: "inset(0 round 2px)"}}> 💛 &nbsp;&nbsp; {props.visitorsCount / 2} Art Lovers Have Been Here &nbsp;&nbsp; 💛 </span>
        </div>
    } else if (props.content === 6) {
        return (
            // <div className='About'>
                <div className={props.darkMode ? 'ControlsDark' : 'Controls'} > 
                    <div style={{display: "block", "justifyContent": "center"}}>
                        <span className={props.darkMode ? "title controlTitleHover" : "titleDark controlTitleHoverDark"} style={{cursor: "pointer", fontSize: "18px"}} onClick={props.changeExpand}> Grid Controls </span>
                        <div style={{height: "5px"}}> </div>
                        <span className={props.darkMode ? "title controlTitleHover" : "titleDark controlTitleHoverDark"} style={{cursor: "pointer", fontSize: "12px", fontWeight: "normal"}} onClick={props.changeExpand}> {props.isExpanded ? "click to collapse ↑" : "click to expand ↓"} </span>
                        {props.isExpanded ? (<div> <br/> <br/> </div>) : ""}

                    </div>
                    <div style={props.isExpanded ? {display: "block"} : {display: "none"}}>
                        <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                            <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> Smaller Images </span>
                            <Switch onChange={props.changeGridSize} checked={props.smallGrid} onColor="#00AA00" offColor="#880000"  />
                        </div>
                        <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                            <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> Magnify on Hover </span>
                            <Switch onChange={props.changeMagnifyOnHover} checked={props.magnifyOnHover} onColor="#00AA00" offColor="#880000"  />
                        </div>
                        <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                            <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> High Quality Images </span>
                            <Switch onChange={props.changeHighQualityImages} checked={props.highQualityImages} onColor="#00AA00" offColor="#880000"  />
                        </div>
                        <div className={props.darkMode ? 'eachControlDark' : 'eachControl'} >
                            <span className={props.darkMode ? 'controlTitleDark' : 'controlTitle'}> Artist Detail on Hover</span>
                            <Switch onChange={props.changeShowArtistDetail} checked={props.showArtistDetail} onColor="#00AA00" offColor="#880000"  />
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
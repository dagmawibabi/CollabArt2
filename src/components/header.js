import { useState } from 'react';
import './header.css'

export const Header = (props) => {
    let iryCount = 0;
    const [titleHover, setTitleHover] = useState("")
    function iry() {
        if(props.darkMode === false){
            iryCount += 1
            if(iryCount === 7){
                setTitleHover("I rain you med, all this art but you're the art I wanna look at forever!");
            } else {
                setTitleHover("")
            }
        }
    }
    return (
        <div className='responsiveHeaderStyle'>
            <div className='headerStyle' > 
                <img className='darkMode' src={ props.darkMode ? require("../assets/icons/brightness.png") : require("../assets/icons/crescent-moon.png")} alt="lightmode" onClick={props.switchDarkMode} style={props.darkMode ? {width: "22px", height: "22px", cursor: "pointer"} : {width: "18px", height: "18px", cursor: "pointer"}} />
                <div className='projectLogoAndName'>
                    <img src={require("../assets/icons/unity.png")} alt="logo" className='projectLogo' />
                    <span className='projectTitle' title={titleHover} onClick={iry}> The Unity Project Mural </span>
                </div>
                <img className='responsiveDarkMode' src={ props.darkMode ? require("../assets/icons/brightness.png") : require("../assets/icons/crescent-moon.png")} alt="lightmode" onClick={props.switchDarkMode} style={props.darkMode ? {width: "22px", height: "22px", cursor: "pointer"} : {width: "18px", height: "18px", cursor: "pointer"}} />
                <div className='navigation' style={{visibility: "visible"}} >
                    <a href='#about' rel='noreferrer'> 
                        <span> About </span>
                    </a>
                    <a href='#download' rel='noreferrer'> 
                        <span> Download </span>
                    </a>
                    <a href='#contribute' rel='noreferrer'> 
                        <span> Contribute </span>
                    </a>
                    <a href='#contact' rel='noreferrer'> 
                        <span> Contact </span>
                    </a>
                    <img className='responsiveDarkMode2' src={ props.darkMode ? require("../assets/icons/brightness.png") : require("../assets/icons/crescent-moon.png")} alt="lightmode" onClick={props.switchDarkMode} style={props.darkMode ? {width: "22px", height: "22px", cursor: "pointer"} : {width: "22px", height: "22px", cursor: "pointer"}} />
                </div>
            </div>
            <div className='responsiveNavigation'>
                    <a href='#about' rel='noreferrer'> 
                        <span> About </span>
                    </a>
                    <a href='#download' rel='noreferrer'> 
                        <span> Download </span>
                    </a>
                    <a href='#contribute' rel='noreferrer'> 
                        <span> Contribute </span>
                    </a>
                    <a href='#contact' rel='noreferrer'> 
                        <span> Contact </span>
                    </a>
                </div>
        </div>
    );
}
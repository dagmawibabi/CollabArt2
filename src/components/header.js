import './header.css'

export const Header = (props) => {
    return (
        <div className='headerStyle' > 
            <img src={ props.darkMode ? require("../assets/icons/brightness.png") : require("../assets/icons/crescent-moon.png")} alt="lightmode" onClick={props.switchDarkMode} style={props.darkMode ? {width: "22px", height: "22px", cursor: "pointer"} : {width: "18px", height: "18px", cursor: "pointer"}} />
            <div className='projectLogoAndName'>
                <img src={require("../assets/icons/unity.png")} alt="logo" className='projectLogo' />
                <span className='projectTitle'> The Unity Project Mural </span>
            </div>
            <div className='navigation'>
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
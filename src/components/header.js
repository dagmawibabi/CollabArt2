import './header.css'

export const Header = (props) => {
    return (
        <div className='headerStyle' > 
            <img src={ props.darkMode ? require("../assets/icons/brightness.png") : require("../assets/icons/crescent-moon.png")} alt="lightmode" onClick={props.switchDarkMode} style={props.darkMode ? {width: "20px", height: "20px", cursor: "pointer"} : {width: "18px", height: "18px", cursor: "pointer"}} />
            <span style={{marginRight: "-280px", fontWeight: "bold"}}> The Unity Project Mural </span>
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
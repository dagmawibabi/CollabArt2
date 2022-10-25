import './About.css'
import projectUnity from '../assets/1.png'

export const About = (props) => {
     if(props.content === 1){
        return <div className='About' id='about'>
            <span className="title"> About </span>
            <p className="description"> The Unity Project Mural is a digital destination where people can share art, stories, and perspectives about bullying, its impact, and how we — the creative community — can help stop it. All the artwork and projects found within this Behance project come from the Behance creative community. </p>
        </div>
    } else if (props.content === 2) {
        return <div className='Download' id='download'>
            <span className="title"> Download </span>
            <p className="description"> You can download this gorgeous art piece in high resolution for free. </p>
            <br />
            <a href={projectUnity} download> 
                <button className='downloadBtn'> Download High Resolution ( 20.0 MB ) </button>
            </a> 
        </div>
    } else if (props.content === 3) {
        return <div className='Contribute' id='contribute'>
            <span className="title"> Contribute </span>
            <p className="description"> If you are a digital artist and you want to contribute to this collection of connected art pieces you can contact me using any of the following links. </p>
            <p className="description"> We'd be honored to have your work! </p>
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
    } else if (props.content === 4) {
        return <div className='About'>
            <span className="ThankYou"> Thank You! </span>
        </div>
    }
}
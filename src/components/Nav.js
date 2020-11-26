import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";

const Nav = ({libraryStatus, setLibraryStatus, currentSong}) => {
    return (
        <nav>
            <div className='logo'>   
               <a href="http://www.foxdesign.ie" target="_blank"><img src={logo} alt="FOXdesign logo" /></a>  
            </div>
           
            <button style={{ color: ` ${currentSong.color[1]}` }}  onClick={() => setLibraryStatus(!libraryStatus)} > 
                <span>PLAYLIST </span><FontAwesomeIcon icon={faCompactDisc} size="2x" />
            </button>
        </nav>
    )
};

export default Nav;
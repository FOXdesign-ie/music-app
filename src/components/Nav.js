import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <div className='logo'>   
                 <img src={logo} alt="FOXdesign logo" />
            </div>
           
            <button onClick={() => setLibraryStatus(!libraryStatus)} > 
                <span>PLAYLIST </span><FontAwesomeIcon icon={faCompactDisc} size="2x" />
            </button>
        </nav>
    )
};

export default Nav;
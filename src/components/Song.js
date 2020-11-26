// img
import Deck from "../deck.png";

const Song = ({ currentSong, isPlaying }) => {
    return (
        <div className="song">
            <div className="song__data">
                <p><i>"{currentSong.name}"</i></p>
                <p>{currentSong.artist}</p>
            </div>

            <div className="song__img">
                <img className="song__img--deck" src={Deck} alt="turntable" />
                <img className= {`song__img--cover ${isPlaying ? "rotate" : ""}`} src={currentSong.cover} alt={currentSong.title} />
            </div>
        </div>
    )
};

export default Song;
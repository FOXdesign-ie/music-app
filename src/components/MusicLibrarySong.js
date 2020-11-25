// import { faSmog } from "@fortawesome/free-solid-svg-icons";

const MusicLibrarySong = ({ song, songs, id, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    // select the song
    const songSelectHandler = () => {
        setCurrentSong(song);
    
    // Add active state to animete selected song 
    const activeSong = songs.map((song) => {
        if(song.id === id) {
            return {
                ...song,
                active: true,
            }
        } else {
                return {
                    ...song,
                    active: false,
                }
            }
    });
    setSongs(activeSong);

    if (isPlaying) {
        const playPromise = audioRef.current.play();
        playPromise.then((audio) => {
            audioRef.current.play();
        })
    }
}

    return (
        <div onClick={songSelectHandler} className={`music-library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.title} />
            <div className="music-library-song__data">
                <p>{song.artist}</p>
                <p>"{song.name}"</p>
            </div>
        </div>
    )
};

export default MusicLibrarySong;
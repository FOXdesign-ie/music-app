import MusicLibrarySong from "./MusicLibrarySong";

const MusicLibrary = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
    return (
        <div className= {`music-library ${libraryStatus ? "active-library" : ""}`}>
            <div className="music-library-songs">
                <h2>PLAYLIST</h2>
                {songs.map(song => (
                    <MusicLibrarySong
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        key={song.id}
                        id={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />))}
            </div>
        </div>

    )
};

export default MusicLibrary;
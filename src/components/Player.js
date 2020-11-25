import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const Player = ({ songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, songTime, setSongTime, audioRef }) => {
    // Add active state to animete selected song 
    const activeLibraryHandler = (nextPrev) => {
        const activeSong = songs.map((song) => {
            if(song.id === nextPrev.id) {
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
    }

    if(isPlaying) {
        const playPromise = audioRef.current.play()
        if(playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play()
            })
        }
    }
    
    // Play or pause
    const playHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    };
  
    // Display time in easier way
    const getTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const secondsWithZero = String(seconds).padStart(2, "0");
        return `${minutes}:${secondsWithZero}`;
    };

    // Drag the input range
    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        setSongTime({
            ...songTime,
            currentTime: e.target.value
        })
    };

    // Skip Back and Forward
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

        if(direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if(direction === 'skip-back') {
            if(currentIndex === 0) {
                await setCurrentSong(songs[songs.length -1]);
                activeLibraryHandler(songs[songs.length -1]);

            } else {
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
            }
        }
    };

    // add the styles to input range
    const trackAnimation = {
        transform: `translateX(${songTime.animationPercentage}%)`
    };

    return (
        <div className="player">
            <div  className="player--time-control">
                <p>{getTime(songTime.currentTime)}</p>

                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }} className="track">
                    <input
                        min={0}
                        max={songTime.duration || 0}
                        value={songTime.currentTime}
                        onChange={dragHandler}
                        type="range" />
                    <div style={trackAnimation} className='animate-track'></div>
                </div>

                <p>{getTime(songTime.duration || 0)}</p>
               
            </div>

            <div className="player--controllers">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={playHandler} size="2x" icon={isPlaying ? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} size="2x" icon={faForward} />
            </div>
        </div>
    )
};

export default Player;
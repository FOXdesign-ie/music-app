import React, { useRef, useState } from 'react';

// components
import Song from './components/Song';
import Player from './components/Player';
import Nav from './components/Nav';
import MusicLibrary from './components/MusicLibrary';
// style
import './styles/app.scss';

// Music data
import musicData from './musicData';

function App() {
  // useRef
  const audioRef = useRef(null);
  // State
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  
  // Current song time
  const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      // Calculate % to input range
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const animation = Math.round((roundedCurrent / roundedDuration) * 100);

      setSongTime({
          ...songTime,
          currentTime: current,
          duration,
          animationPercentage: animation
      })
  };

  const songEndedHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song 
        currentSong={currentSong}
        isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songTime={songTime}
        setSongTime={setSongTime}
        songs={songs}
        setSongs={setSongs}
        />
      <MusicLibrary
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying} 
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        />
      <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio}
          onEnded={songEndedHandler}>
      </audio>
    </div>
  );
}

export default App;
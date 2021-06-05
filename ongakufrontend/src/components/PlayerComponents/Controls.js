import React from 'react';

import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as Pause } from "../../assets/pause.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import { ReactComponent as Prev } from "../../assets/prev.svg";
// function Controls(props) {
//     console.log(props);
//     return (
        // <div className="c-player--controls" style={{display:"none"}}>
        //     <button className="btn skip-btn" onClick={() => {
        //             props.SkipSong(false);
        //         }}>
        //         <i className="fas fa-step-backward" />
        //     </button>
        //     <button 
        //         className="btn play-btn" 
        //         id="btnPlay" 
        //         onClick={
        //             () =>  props.setIsPlaying(!props.isPlaying)
        //         }
        //     >
        //         {
        //             props.isPlaying ? <i className="fas fa-pause" /> : <i className="fas fa-play" /> }
        //     </button>
        //     <button className="btn skip-btn" onClick={() => {
        //         props.SkipSong();
        //     }}>
        //         <i class="fas fa-step-forward"></i>
        //     </button>
        // </div>
//     )
// }
const AudioControls = ({isPlaying,onPlayPauseClick,onPrevClick,onNextClick}) => {
    return(

  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <Next />
    </button>
  </div>
);
}; 

export default AudioControls;

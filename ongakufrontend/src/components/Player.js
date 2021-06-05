import React, {useState, useRef, useEffect} from 'react'
import Controls from './PlayerComponents/Controls';
import Details from './PlayerComponents/Details';

//Importing scss
import "../sass/components/_player.scss";
import "../sass/components/_progressbar.scss";
import ReactAudioPlayer from 'react-audio-player';

import AudioControls from './PlayerComponents/Controls';


function Player(props) {
    console.log(props)
    
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        if(props.songs && props.songs.length>0){
            if (isPlaying) {
                audioEl.current.play();
            } else {
                audioEl.current.pause();
            }
        }     
    },[isPlaying]);

    useEffect(()=>{  
        if(props.songs && props.songs.length>0){ 
            setIsPlaying(true)
            setTimeout(audioEl.current.play(), [2])
        }
    }, [props.currentSongIndex])

    const SkipSong = (forwards = true) => {
        setTimeout(()=>{document.getElementById('btnPlay').click();},[2])
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                console.log(temp)
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                
                return temp;
            });
            
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                console.log(temp)
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
        setTimeout(()=>{document.getElementById('btnPlay').click();},[2])
    }


    var music = document.getElementById('audioPlaying');
    var progress_bar = document.getElementById('progress_bar');
    var progressed = document.getElementById('progressed');
    let total_duration = document.getElementById('duration');
    let current_time = document.getElementById('current_time');
try{
     music.ontimeupdate = function(e){
            progressed.style.width = Math.floor(music.currentTime * 100/ music.duration) + "%";
                
            const {currentTime, duration} = e.srcElement;

            let min_duration = Math.floor(duration / 60);
            let sec_duration = Math.floor(duration % 60);
            let tot_duration = `${min_duration}:${sec_duration}`;
            if(duration){
                total_duration.textContent = `${tot_duration}`;  
            }
            
            let min_currentTime = Math.floor(currentTime / 60);
            let sec_currentTime = Math.floor(currentTime % 60);
            if(sec_currentTime < 10){
                sec_currentTime = `0${sec_currentTime}`;
            }
            let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
            current_time.textContent = `${tot_currentTime}`;
            }
            progress_bar.onclick = function(e){
                music.currentTime = ((e.offsetX/progress_bar.offsetWidth) * music.duration);
            }
        music.addEventListener("ended",SkipSong);        
   }
   catch(err){
       console.log(err);
   } 
    return (
        <>
            <div>
                <div class="progress_container" id="progress_container">
                    <div class="progress_duration_meter d-flex justify-content-between">
                        <div id="current_time"></div>
                        <div id="duration"></div>
                    </div>
                </div>

                {/* <!-- Progress Bar Container --> */}
                <div class="container-fluid border p-0 progress_bar" id="progress_bar">
                    <div class=" progressed" id="progressed"></div>
                </div>
            </div>
            <div className="c-player player-div">
                {
                    props.songs ?
                    
                       
                    <>
                     
                        {/* <p>{'http://localhost:8000/'+props.songs[props.currentSongIndex].audio_file}</p> */}
                        <audio src={'http://localhost:8000/'+props.songs[props.currentSongIndex].audio_file} id="audioPlaying" ref={audioEl}></audio>
                        {/* <h4>{props.songs[props.currentSongIndex].title}</h4> */}

                        <Details song={props.songs[props.currentSongIndex]} />
                        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
                        {/* <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p> */}
                        {/* <Progressbar/> */}
                    </>
                    :
                    <small style={{display:'none'}}></small>

                } 
            </div>
            
        </>      
    );
};

export default Player;

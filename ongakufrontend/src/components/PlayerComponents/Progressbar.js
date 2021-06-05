import { React, useState, useEffect} from 'react';
import axios from 'axios';

import '../../sass/components/_progressbar.scss';

const Progressbar = ()=>{

    var music = document.getElementById('music');
    var progress_bar = document.getElementById('progress_bar');
    var progressed = document.getElementById('progressed');
    let total_duration = document.getElementById('duration');
    let current_time = document.getElementById('current_time');


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
        
    return(
        <>
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
        </>
    );
};

export default Progressbar;


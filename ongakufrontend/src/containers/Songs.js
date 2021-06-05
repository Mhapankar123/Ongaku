import React , {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Sidebar from '../components/Sidebar';
import Player from '../components/Player';

import ReactAudioPlayer from 'react-audio-player';

import '../sass/containers/_songs.scss';
const SongsPage = ()=>{


    const [searchTerm, setSearchTerm] = useState('');
    const image_demo = useRef();

    const [songs, setSongs] = useState([]);
    useEffect(()=>{
        getSongs();
        return;
    }, []);

    const getSongs = async() =>{
        const config = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": 1
            }
        }
        try{
            const res = await axios.get('http://localhost:8000/songspage/', config);
            const populate  = setSongs(res.data);
            if(populate){
                return 200;
            }
        }catch(err){
            console.log(err);
        }
    }

    
    const [masterAudio, setMasterAudio] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
        } else {
            return currentSongIndex + 1;
        }
        });
    }, [currentSongIndex]);
    console.log(currentSongIndex);



    return(
        <>
        <div className="container-fluid row p-0 m-0 whole-cont">
            {/* <div className="row p-0 m-0"> */}
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 p-0 m-0 sidecont">
                    <Sidebar/>
                </div>
                <div className='imagediv'></div>
                <div className="col-xs-6 col-sm-6 col-md-10 col-lg-10 col-xl-10 p-0 m-0 songpagediv">
                    <div>
                        <div className="p-0 m-0 col-sm-12">
                            <div className=" row my-4 mx-4 d-flex">
                                <div className="p-0 m-0 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                    {/* SearchBar  */}
                                    <div className='d-flex border border-primary' style={{width:'80%', borderRadius: '17px'}}>
                                        <i class="fas fa-search my-auto pl-4" />
                                        <input className="searchbarin text-center" style={{width: "80%", outline: "none", border: 'none'}} placeholder="Search" classtype="text" name="Search" id="search" onChange={e =>{setSearchTerm(e.target.value )}} />
                                    </div>

                                    <div className="container" style={{position:"relative"}}>
                                        <ul type="none" className="bg-white container border" style={{zIndex: "2", position: "absolute", width: "75%", outline: "none", border: 'none'}}>
                                            {songs.filter((val)=>{
                                                if(searchTerm == ""){
                                                    return ''
                                                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                                    return val
                                                }
                                            }).map((val, id)=>{
                                                return(
                                                <li onClick={()=>{
                                                    setMasterAudio('http://localhost:8000/'+val.audio_file)
                                                }}>{val.title}</li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid py-3">
                            <h4>Hi There, Hope.</h4>
                            <h4>Trending Now <i className="fas fa-fire text-danger fa-spin"/></h4>
                        </div>
                        <div className="container-fluid row">
                            <h6 className="col-sm-1 col-md-1 col-lg-1"></h6>
                            <h6 className="col-sm-3 col-md-3 col-lg-3 text-center"></h6>
                            <h6 className="col-sm-4 col-md-4 col-lg-4 text-center"></h6>
                            <h6 className="col-sm-4 col-md-4 col-lg-4 text-center"></h6>
                        </div>
                        <div className="container mainsec mb-5">
                            <div className="row p-2">
                                
                                    {/* {
                                        songs.length > 0 ?
                                        songs.map((item, id)=>(
                                            <div 
                                                key={id} 
                                                className="songdiv col-sm-12 col-md-4 col-lg-2 col-xl-2 mb-2"
                                                onClick = {
                                                    ()=>{ 
                                                        setCurrentSongIndex(id);
                                                    }
                                                }
                                            >
                                                
                                                <div className="">
                                            
                                                    {
                                                        item.image ?
                                                        <img  src={"http://localhost:8000/"+item.image} alt={item.title} className="img-fluid rounded"/>
                                                        :
                                                        <img src="https://via.placeholder.com/150" alt={item.title} className="img-fluid"/>
                                                    }

                                                </div>
                                                <h5 className="">{item.title} {id}</h5>
                                                <small className="text-muted">{item.artist}</small>
                                                {/* <audio src={"http://localhost:8000/"+item.audio_file}></audio> */}
                                            {/* </div>
                                        ))
                                                    
                                        :
                                        <h1>None</h1>
                                    }  */}
                                    {
                                        songs.length > 0 ?
                                        songs.map((item, id)=>(
                                            <div 
                                                key={id} 
                                                className="container-fluid row d-flex flex-row justify-content-around my-2 py-5 songdetaildiv"
                                                onClick = {
                                                    ()=>{ 
                                                        //setCurrentSongIndex(id);
                                                        setMasterAudio('http://localhost:8000/'+item.audio_file)
                                                        setCurrentIndex(id);
                                                    }
                                                }
                                            >
                                                {/* <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                                                <button className="btn btn-primary"

                                                    onClick = {
                                                    ()=>{ 
                                                        //setCurrentSongIndex(id);
                                                        if(item.artist === 'Adnan Sami'){
                                                        <>
                                                        ...item.image ?
                                                        <img  src={"http://localhost:8000/"+item.image} alt={item.title} className="img-fluid rounded" style={{height:"5rem", width:"5rem"}}/>
                                                        :
                                                        <img src="https://via.placeholder.com/150" alt={item.title} className="img-fluid"/>
                                                    
                                                        
                                                        setCurrentIndex(id);
                                                        </>
                                                       }
                                                    }
                                                }
                                                    >Filter</button>
                                                </div> */}

                                                <div className="col-sm-1 col-md-1 col-lg-1 d-flex align-items-center">
                                                    <large className="text-muted">{id+1}</large>
                                                </div>
                                                <div className="col-sm-3 col-md-3 col-lg-3 text-center">
                                            
                                                    {
                                                        item.image ?
                                                        <img  src={"http://localhost:8000/"+item.image} alt={item.title} className="img-fluid rounded" style={{height:"5rem", width:"5rem"}}/>
                                                        :
                                                        <img src="https://via.placeholder.com/150" alt={item.title} className="img-fluid"/>
                                                    }

                                                </div>
                                                
                                                <div className="col-sm-4 col-md-4 col-lg-4 d-flex align-items-center">
                                                    <h5 className="">{item.artist}</h5>
                                                </div>

                                                <div className="col-sm-4 col-md-4 col-lg-4 d-flex align-items-center">
                                                    <h5 className="">{item.title}</h5>
                                                </div>
                                                
                                                {/* <audio src={"http://localhost:8000/"+item.audio_file}></audio> */}
                                            </div>
                                        ))
                                                    
                                        :
                                        <h1>None</h1>
                                    }
                            </div>
                        </div>   

                        {/* {
                            songs.length>0&&
                            <>
                            <Player 
                                currentSongIndex={currentSongIndex} 
                                setCurrentSongIndex={setCurrentSongIndex} 
                                nextSongIndex={nextSongIndex} 
                                songs={songs}
                            />
                            </>
                        }                 */}

                        <div className="fixed-bottom d-flex justify-content-around" style={{backgroundColor:"rgba(245,245,245,1)"}}>
                            <button className="btn" onClick={()=>{
                                if(currentIndex-1>=0){
                                    let a_file = songs[currentIndex-1].audio_file
                                    setMasterAudio('http://localhost:8000/'+a_file)
                                    setCurrentIndex(currentIndex-1)
                                }
                            }}>
                                <i className="fas fa-step-backward" />
                            </button>
                            <ReactAudioPlayer className="container-fluid player-container"
                                src={masterAudio}
                                controls
                            />
                            <button className="btn" onClick={()=>{
                                if(currentIndex+1<=songs.length){
                                    let a_file = songs[currentIndex+1].audio_file
                                    setMasterAudio('http://localhost:8000/'+a_file)
                                    setCurrentIndex(currentIndex+1)
                                }
                            }}>
                                <i className="fas fa-step-forward" />
                            </button>

                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
        </>
    )
}

export default SongsPage;
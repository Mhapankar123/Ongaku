import React , {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import axios from 'axios';
import Player from './Player';

//Importing Scss
import '../sass/components/_mainsection.scss';

//Importing ReactAudioPlayer
import ReactAudioPlayer from 'react-audio-player';

const MainSection = ({ logout, isAuthenticated }) =>{   


    //Searchbar code start
    const [searchTerm, setSearchTerm] = useState('');

    // const [songs, setSongs] = useState([]);
    // useEffect(()=>{
    //     getSongs();
    //     return;
    // }, []);

    // const getSongs = async() =>{
    //     const config = {
    //         headers:{
    //             "Content-Type": "multipart/form-data",
    //             "Authorization": 1
    //         }
    //     }
    //     try{
    //         const res = await axios.get('http://localhost:8000/songs/', config);
    //         const populate  = setSongs(res.data);
    //         if(populate){
    //             return 200;
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    // }




    const image_demo = useRef();
    // const song_img = useRef();
    // const song_details = res.data.amp
    var artistsList = new Set();
    const [songs, setSongs] = useState([]);
    useEffect(()=>{
        getSongs();
        return;
    }, []);

    //gET ALL ARTISTS
    
    useEffect(()=>{
        if(songs.length>0){
            for(let i=1; i<songs.length; i++){
                let art = songs[i].artist.split(',')
                
                for(let j=0; j<art.length; j++){
                    artistsList.add(art[j].trim())
                }
            }
        }
        
    },[songs])

    let artistsListShow;

    // useEffect(()=>{
    //     console.log(artistsList);
    //     artistsListShow = [...artistsList];
    //     console.log(artistsListShow)
    //     for(let j=0; j<artistsListShow.length; j++){
    //         document.getElementById('artistShow').innerHTML+= `< a href="http://localhost:3000/artists/${artistsListShow[j]}">${artistsListShow[j]}</a>`
    //     }
    // },[artistsList])
    

    
    const getSongs = async() =>{
        const config = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Authorization": 1
            }
        }
        try{
            const res = await axios.get('http://localhost:8000/songs/', config);
            const populate  = setSongs(res.data);
            if(populate){
                return 200;
            }
        }catch(err){
            console.log(err);
        }
    }
    // console.log(songs)
    const [masterAudio, setMasterAudio] = useState(''); 
    const [currentIndex, setCurrentIndex] = useState(0);
    // useEffect(()=>{
    //     console.log(masterAudio)
    // },[masterAudio])


    const guestLinks = () =>(
        <div className="inli d-flex">
            <h5 className="p-2"><Link className="px-2" style={{textDecoration:"none",}} to="/login">Login</Link></h5>
            <h5 className="p-2"><Link className="px-2" style={{textDecoration:"none",}} to="/signup">Singup</Link></h5>
        </div>
    );

    const authLinks = () =>(
            <li className="nav-item">    
                <a href="" onClick={logout}>Logout</a>  
            </li>
    );

    // //To get songs and change the songs
    // const [currentSongIndex, setCurrentSongIndex] = useState(0);
    // const [nextSongIndex, setNextSongIndex] = useState(0);

    // useEffect(() => {
    //     setNextSongIndex(() => {
    //     if (currentSongIndex + 1 > songs.length - 1) {
    //         return 0;
    //     } else {
    //         return currentSongIndex + 1;
    //     }
    //     });
    // }, [currentSongIndex]);
    // console.log(currentSongIndex);    
    return(
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
                            <ul type="none" className="bg-white container border rounded" style={{zIndex: "2", position: "absolute", width: "75%", outline: "none", border: 'none'}}>
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
                    {isAuthenticated ? authLinks() : guestLinks()}
                    
                </div>
            </div>

            <div className="container-fluid m-0 p-0">
                {/* Song Section  */}
                <div className="container-fluid">
                    <div className="row p-2 pb-5">
                        <div className="container-fluid py-3">
                            <h4>Hi There, Hope.</h4>
                            <h4>Trending Now <i className="fas fa-fire text-danger fa-spin"/></h4>
                        </div>
                        {/* <div id="artistShow"></div> */}
                            {
                                songs.length > 0 ?
                                songs.map((item, id)=>(
                                    <>
                                    {
                                        item.user === 1 ? 
                                        <div 
                                            key={id} 
                                            className="songdiv col-sm-6 col-md-4 col-lg-2 col-xl-2 mb-2"
                                            onClick = {
                                                ()=>{ 
                                                    //setCurrentSongIndex(id);
                                                    setMasterAudio('http://localhost:8000/'+item.audio_file)
                                                    setCurrentIndex(id);
                                                }
                                            }
                                        >
                                            <div className="imagediv">

                                                {
                                                    item.image ?
                                                    <img  src={"http://localhost:8000/"+item.image} alt={item.title} className="img-fluid rounded"/>
                                                    :
                                                    <img src="https://via.placeholder.com/150" alt={item.title} className="img-fluid"/>
                                                }

                                            </div>
                                            <h6 className="text-center p-2">{item.title}</h6>
                                            <h6 className="text-center" style={{fontWeight:"400",fontSize:'0.8rem'}}>{item.artist}</h6>
                                            {/* <audio src={"http://localhost:8000/"+item.audio_file}></audio> */}
                                        </div>
                                        
                                        : ''
                                    }
                                    {/*  */}
                                    </>
                            ))
                                        
                            :
                            <h1>None</h1>
                        }
                    </div>
                </div>  
            </div>
           <div className="container-fluid">

           </div>
            <div className="d-flex fixed-bottom justify-content-around" style={{backgroundColor:"rgba(245,245,245,1)"}} >
                <button className="btn text-center" onClick={()=>{
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
                <button className="btn text-center" onClick={()=>{
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
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(MainSection);
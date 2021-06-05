import React , {useRef, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Sidebar from '../components/Sidebar';

    
const ArtistPage = ()=>{

    const [searchTerm, setSearchTerm] = useState('');
    
    // const image_demo = useRef();
    // const [songs, setSongs] = useState([]);
    // useEffect(()=>{
    //     getSongs();
    //     return;
    // }, []);

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

    useEffect(()=>{
        console.log(artistsList);
        artistsListShow = [...artistsList];
        console.log(artistsListShow)
        for(let j=0; j<artistsListShow.length; j++){
            document.getElementById('artistShow').innerHTML+= `<a style="color:red; text-decoration:none;" href="http://localhost:3000/artists/${artistsListShow[j]}">${artistsListShow[j]}</a>`
        }
    },[artistsList])
    

    

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
            <div className="container-fluid p-0 m-0 whole-cont">
                <div className="row p-0 m-0">
                    <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 p-0 m-0 sidecont">
                        <Sidebar/>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-10 col-lg-10 col-xl-10 p-0 m-0 mainsectioncontainer">
                            <h4 className="p-5">Artist on Ongaku Platform</h4>
                        <div className="container-fluid row">
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sdlhivkcdnems04.cdnsrv.jio.com/c.saavncdn.com/artists/Arijit_Singh_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Arijit Singh</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sgdccdnems04.cdnsrv.jio.com/c.saavncdn.com/artists/AR_Rahman_002_20210120084455_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">A.R.Rahaman</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sklktcdnems04.cdnsrv.jio.com/c.saavncdn.com/artists/Lata_Mangeshkar_002_20200212082631_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Lata Mangeshkar</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sgdccdnems01.cdnsrv.jio.com/c.saavncdn.com/artists/Lucky_Ali_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Lucky Ali</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sgdccdnems04.cdnsrv.jio.com/c.saavncdn.com/artists/Mohammed_Rafi_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Mohammed Rafi</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sklktecdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/KK_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">K.K</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sklktecdnems02.cdnsrv.jio.com/c.saavncdn.com/artists/Justin_Bieber_005_20201127112218_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Justin Beaber</h6>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3">
                                <img src="https://sklktcdnems07.cdnsrv.jio.com/c.saavncdn.com/artists/Shreya_Ghoshal_002_20200822043816_500x500.jpg" className="img-fluid rounded-circle" alt="Arjit Singh"/>
                                <h6 className="text-center">Shreya Ghoshal</h6>
                            </div>
                        </div>
    
                        <div className="container-fluid row artist-div p-5">
                            <div className="container d-flex flex-column" id="artistShow">
                                <h3 className="h3">Select any artist to get his songs</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistPage;
import { React, useState, useEffect} from 'react';
import axios from 'axios';


const Searchbar = () =>{

    const [searchTerm, setSearchTerm] = useState('');
    
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
            const res = await axios.get('http://localhost:8000/songs/', config);
            const populate  = setSongs(res.data);
            if(populate){
                return 200;
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
        <input className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center m-0 p-0 searchterm" placeholder="Search" classtype="text" name="Search" id="search" onChange={e =>{setSearchTerm(e.target.value )}} />
        <div className="container">
            <ul>
                
        {songs.filter((val)=>{
            if(searchTerm == ""){
                return val
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val, key)=>{
            return(
               <li onClick={playSong()}>{val.title}</li>
            );
        })}
        </ul>
        </div>
        </>
    )
}

export default Searchbar;
import React from 'react';
import {Link} from 'react-router-dom';


//Importing scss
import '../sass/components/_sidebar.scss';

const Sidebar= ()=>{
    return(
        <>
        <div className="text-center side-cont">
            <ul className="ul p-0 m-0">
                <h2 className=" py-3"> 
                    <Link to="/">
                        <a className="title" href="">Ongaku</a> 
                    </Link>
                </h2>
                <h5 className="library my-5">library</h5>
                <li className="pb-4 pt-2">
                    <Link to="/">
                        <i class="fas fa-home pr-2"></i>
                        <a href="#">Home</a>
                    </Link>    
                </li>
                <li className="py-4">
                    <Link to="/songs">
                        <i class="fas fa-music pr-2"></i>
                        <a href="#" >Songs</a>
                    </Link>
                </li>
                <li className="py-4">
                    <Link to="/albums">
                        <i class="fas fa-compact-disc pr-2"></i>
                        <a href="#" >Albums</a>
                    </Link>
                </li>
                <li className="py-4">
                    <Link to='/artistpage'>
                        <i class="fas fa-microphone pr-2"></i>
                        <a href="#" >Artists</a>
                    </Link>
                </li>
                <li className="py-4">
                    <Link to='/newlyadded'>
                        <i class="fas fa-plus pr-2"></i>
                        <a href="#" >Newly Added</a>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Sidebar;
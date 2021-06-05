import React from 'react';

import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection';


// Importing Scss 
import '../sass/containers/_home.scss';

const Home = ()=>{

    return(
        <>
        <div className="container-fluid p-0 m-0 whole-cont">
            <div className="row p-0 m-0">
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 p-0 m-0 sidecont">
                    <Sidebar/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-10 col-lg-10 col-xl-10 p-0 m-0 mainsectioncontainer">
                    <MainSection/>
                </div>
            </div>
        </div>
        </>
    
    );
};

export default Home;
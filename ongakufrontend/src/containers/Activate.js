import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';


//Importing scss
import '../sass/containers/_login.scss';

const Activate = ({ verify, match })=>{
    
    const [verified, setVerified] = useState(false);

    const verify_account = e =>{
        const uid = match.params.uid;
        const token = match.params.token;
        verify( uid, token);
        setVerified(true);
    };

    if (verified){
        return <Redirect to="/"/>
    }

    return(
        <>
            <div className="container-fluid logincont">
                <div className="row h-100">
                    <div className="left-login col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="Ongaku  p-5">
                            <Link className="homel h1" style={{textDecoration:"none", color:"#111"}} to="/">Ongaku</Link>
                        </div>
                        <h1>Any Music </h1>
                        <h3>AnyWhere</h3>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center right-login">     
                        <h1>Verify Your Account</h1>
                        <button onClick={ verify_account } type="button" className="btn btn-primary">Verify</button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default connect(null, { verify })(Activate);
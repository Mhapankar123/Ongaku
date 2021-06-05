import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';


//Importing scss
import '../sass/containers/_login.scss';


const ResetPassword = ({ reset_password })=>{
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
    });

    const { email } = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        reset_password( email );
        setRequestSent(true);
    };

    if (requestSent){
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
                        <h2>Request Password Reset</h2>
                        <form className="w-50" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input className="form-control rounded-pill" type="email" placeholder="Email" name="email" value={email} onChange = {e => onChange(e)} required/>
                                <button className="btn btn-primary mt-3" type="submit">Reset Password</button>
                            </div>
                            <h5><Link to="/signup">Signup</Link></h5>
                            <h5><Link to="/login">Login</Link></h5>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};


export default connect(null ,{ reset_password })(ResetPassword);
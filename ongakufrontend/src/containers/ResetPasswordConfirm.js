import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';


//Importing scss
import '../sass/containers/_login.scss';


const ResetPasswordConfirm = ({ match, reset_password_confirm })=>{
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    });

    const { new_password, re_new_password } = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm( uid, token, new_password, re_new_password );
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
                        <form className="w-50" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input className="form-control rounded-pill mt-3" type="password" placeholder="New Password" name="new_password" value={new_password} onChange = {e => onChange(e)} minLength="6" required/>
                                <input className="form-control rounded-pill mt-3" type="password" placeholder="Confirm New Password" name="re_new_password" value={re_new_password} onChange = {e => onChange(e)} minLength="6" required/>
                                <button className="btn btn-primary mt-3" type="submit">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};


export default connect(null ,{ reset_password_confirm })(ResetPasswordConfirm);
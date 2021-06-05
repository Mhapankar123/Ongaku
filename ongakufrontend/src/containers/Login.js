import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


//Importing scss
import '../sass/containers/_login.scss';

const Login = ({login, isAuthenticated})=>{
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const {email, password} = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        login( email, password);
    };

    if (isAuthenticated){
        return <Redirect to="/"/>
    }

    return(
        <>
            <div className="container-fluid logincont">
                <div className="row h-100">
                    <div className="left-login col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center img-fluid">
                        <div className="Ongaku  p-5">
                            <Link className="homel h4" style={{textDecoration:"none", color:"#111"}} to="/">Ongaku</Link>
                        </div>
                        <h1>Any Music </h1>
                        <h3>AnyWhere</h3>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center right-login">     
                        <h2>Welcome to Ongaku.</h2>
                        <h4>Login into your account.</h4>
                        <form className="w-50" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input className="form-control rounded-pill" type="email" placeholder="Email" name="email" value={email} onChange = {e => onChange(e)} required/>
                                <input className="form-control rounded-pill mt-3" type="password" placeholder="Password" name="password" value={password} onChange = {e => onChange(e)} minLength="6" required/>
                                <button className="btn btn-primary mt-3" type="submit">Login</button>
                            </div>
                        </form>
                        <h5 className="mt-3">
                            Don't have an account? <Link to="/signup"><span>Sign Up</span></Link>
                        </h5>
                        <h5 className="mt-3">
                            Forget Your Password? <Link to="/reset-password"><span>Reset Password</span></Link>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';


//Importing scss
import '../sass/containers/_singup.scss';


const Signup = ({signup, isAuthenticated})=>{
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        re_password:''
    });

    const {name, email, password, re_password} = formData;

    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        if(password === re_password){
            signup( name, email, password, re_password);
            setAccountCreated(true);
            console.log(name, email, password, re_password);
        }
    };

    if(isAuthenticated){
        return <Redirect to="/"/>
    }
    if(accountCreated){
        return <Redirect to="/login"/>
    }

    return(
        <>
            <div className="container-fluid signincont">
                <div className="row h-100">
                    <div className="left-singup col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center">
                        <div className="Ongaku p-5">
                            <Link className="homel h4" style={{textDecoration:"none", color:"#111"}} to="/">Ongaku</Link>
                        </div>
                        <h1>Any Music </h1>
                        <h3>AnyWhere</h3>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-center align-items-center right-singup">     
                        <h2>Welcome to Ongaku.</h2>
                        <h4>Create an account on Ongaku.</h4>
                        <form className="w-50" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input className="form-control rounded-pill" type="text" placeholder="Name*" name="name" value={name} onChange = {e => onChange(e)} required/>
                                <input className="form-control rounded-pill mt-3" type="email" placeholder="Email*" name="email" value={email} onChange = {e => onChange(e)} required/>
                                <input className="form-control rounded-pill mt-3" type="password" placeholder="Password*" name="password" value={password} onChange = {e => onChange(e)} minLength="6" required/>
                                <input className="form-control rounded-pill mt-3" type="password" placeholder="Confirm-Password*" name="re_password" value={re_password} onChange = {e => onChange(e)} minLength="6" required/>
                                <button className="btn btn-primary mt-3" type="submit">Register</button>
                            </div>
                        </form>
                        <h5 className="mt-3">
                            Already have an account? <Link to="/login">Login</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
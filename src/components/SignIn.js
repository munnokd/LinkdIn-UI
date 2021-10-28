import React from 'react'
import './SignIn.css'
import { connect } from 'react-redux'
import {signInAPI} from '../actions'
import { Redirect } from 'react-router'

const SignIn = (props) => {
    return (
        <div className="signIn">
        {
            props.user && <Redirect to='/home'/>
        }
            <nav className="signIn__head">
                <a href="/" >
                    <img src="Images/Linkedin-Logo.svg" alt="" />
                </a>
                <div className="signIn__right">
                    <a className="join">Join Now</a>
                    <a className="sign">Sign in</a>
                </div>
            </nav>
            <div className="signIn__sec">
                <div className="signIn__sec__">
                    <h1>Welcome to your professional community</h1>
                    <img src="/Images/login-bg.png" alt="" />
                </div>
                <div className="signIn__sec__google">
                    <div className="signIn__sec__google__photo" onClick={()=>props.signIn()} >
                        <img src="/Images/google.png" alt="" />
                        Sign in with Google
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        user:state.userState.user,
    };
}

const mapDispatchToProps=(dispatch)=>({
    signIn:()=>dispatch(signInAPI()),
})


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)


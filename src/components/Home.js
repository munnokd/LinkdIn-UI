import React from 'react'
import './Home.css'
import Left from './Left'
import Mid from './Mid'
import Right from './Right'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'

const Home = (props) => {
    return (
        <>
        
        <div className="home">
        {
            !props.user && <Redirect to="/"/>
        }
            <Left />
            <div className="home__right">
                <Mid />
                <Right />
            </div>
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    }
}

export default connect(mapStateToProps)(Home)

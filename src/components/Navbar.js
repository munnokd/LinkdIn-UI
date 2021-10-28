import React, { useState } from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Collapse from 'react-bootstrap/Collapse'
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import WorkOutlinedIcon from '@material-ui/icons/WorkOutlined';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { connect } from 'react-redux'
import { signOutAPI } from '../actions';

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const [collaps, setClose] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <div className="navbar" >
            <div className="navbar__1">
                <span className="navbar__1__logo">
                    <a href="/home" >
                        <img src="/Images/linkdin.png" alt="" />
                    </a>
                </span>
                <div className="navbar__1__search" >
                    <SearchIcon onClick={() => setSearch(!search)}
                        aria-controls="collaps__search"
                        aria-expanded={search} />
                    <div className="navbar__1__input">
                        <input type="text" placeholder="Search" />
                    </div>
                    <Collapse in={search}>
                        <div id="collaps__search" className="collaps__search">
                            <input type="text" placeholder="Search" />
                        </div>
                    </Collapse>
                </div>
                <div className="navbar__1__menu">
                    <div className="navbar__1__list">
                        <a>
                            <HomeRoundedIcon />
                            Home
                        </a>
                    </div>
                    <div className="navbar__1__list">
                        <a>
                            <PeopleIcon />
                            Network
                        </a>
                    </div>
                    <div className="navbar__1__list">
                        <a>
                            <WorkIcon />
                            Jobs
                        </a>
                    </div>
                    <div className="navbar__1__list">
                        <a>
                            <SmsRoundedIcon />
                            Msg
                        </a>
                    </div>
                    <div className="navbar__1__list">
                        <a>
                            <NotificationsRoundedIcon />
                            notification
                        </a>
                    </div>
                    <div className="navbar__1__list" id="navbar__collaps">
                        <a onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
                            aria-expanded={open}>
                            {props.user && props.user.photoURL ?
                                (<Avatar src={props.user.photoURL} style={{ height: '25px', width: '25px' }} />) : (<Avatar src="" style={{ height: '25px', width: '25px' }} />)
                            }
                            <div className="navbar__1__down">
                                Me
                                <ArrowDropDownIcon />
                            </div>
                        </a>
                        <Collapse in={open} >
                            <div id="example-collapse-text" className="collaps">
                                <div className="collaps__name">
                                    {props.user && props.user.photoURL ?
                                        (<Avatar src={props.user.photoURL} style={{ height: '50px', width: '50px' }} />) : (<Avatar src="" style={{ height: '50px', width: '50px' }} />)
                                    }
                                    <div className="collaps__info">
                                        <h6>{props.user?props.user.displayName:""}</h6>
                                        <p>{props.user ? props.user.email: ""}</p>
                                    </div>
                                </div>
                                <hr />
                                <h1 onClick={()=>props.signOut()} >Sign Out</h1>
                            </div>
                        </Collapse>
                    </div>
                    <div className="navbar__1__list" style={{ borderLeft: "1px solid lightgray" }}>
                        <a onClick={() => setClose(!collaps)} aria-controls="example-collapse-text"
                            aria-expanded={collaps}>
                            <AppsIcon />
                            <div className="navbar__1__down">
                                Work
                                <ArrowDropDownIcon />
                            </div>
                        </a>
                        <Collapse in={collaps} >
                            <div id="example-collapse-text" className="collaps__1">
                                <CastForEducationIcon />
                                <WorkOutlinedIcon />
                                <GroupAddIcon />
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}
const mapDispatchToProps = (dispatch) => ({
    signOut:()=>dispatch(signOutAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

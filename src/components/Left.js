import React from 'react'
import './Left.css'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import { Avatar } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

const Left = (props) => {
    return (
        <div className="left">
            <div className="left__card">
                <div className="left__card__info">
                    <div className="left__card__background" />
                    <a>
                    {
                        props.user && props.user.photoURL ? <Avatar src={props.user.photoURL} style={{height:'70px',width:'70px',border:'2px solid white',margin:'-38px auto 12px'}}/> : <Avatar style={{height:'70px',width:'70px',border:'2px solid white',margin:'-38px auto 12px'}}/>
                    }
                        
                        <h6>{props.user?props.user.displayName:""}</h6>
                        <p>{props.user?props.user.email:""}</p>
                    </a>
                    <a className="left__card__add">
                        <CameraEnhanceIcon fontSize="large" />
                    </a>
                </div>
                <div className="left__card__save">
                    <a className="left__card__text">
                        <span className="left__card__span">Connections<p>2</p></span>
                        <span>Grow your Network</span>
                    </a>
                    <a className="left__card__book">
                        <BookmarkIcon/>
                        <span>My items</span>
                    </a>
                </div>
            </div>
            <div className="left__nano">
                <a>
                    <span>Recents</span>
                    <ExpandMoreIcon/>
                </a>
                <a>
                    <span>Groups</span>
                    <ExpandMoreIcon/>
                </a>
                <a>
                    <span>Events</span>
                    <AddIcon/>
                </a>
                <a>
                    <span>Followed Hashtags</span>
                </a>
                <a className="left__nano__more">
                    Discover more
                </a>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    }
}

export default connect(mapStateToProps)(Left)

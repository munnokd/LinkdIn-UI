import React, { useState } from 'react'
import './PostShare.css'
import CloseIcon from '@material-ui/icons/Close';
import { Avatar } from '@material-ui/core';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ReactPlayer from 'react-player'
import {connect} from 'react-redux'
import firebase from 'firebase'
import { postArticleAPI } from '../actions';

const PostShare = (props) => {
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const [video, setVideo] = useState('')
    const [area, setArea] = useState('')

    const switchArea = (area) => {
        setImage("");
        setVideo('');
        setArea(area);
    }

    const handleImage = (e) => {
        const img = e.target.files[0]
        if (img === "" || img === undefined) {
            alert(`not a image the file is ${typeof img}`)
            return
        }
        setImage(img);
    }

    const postArticle=(e)=>{
        e.preventDefault()
        if(e.target!== e.currentTarget){
            console.log('Hello')
            return;
        }
        const payload={
            image:image,
            video:video,
            user:props.user,
            description:text,
            timestamp:firebase.firestore.Timestamp.now(),
        }
        props.postArticle(payload)
        reset(e);
    }

    const reset = (e) => {
        setText("");
        setImage("");
        setVideo('');
        setArea('');
        props.handleClick(e);
    }
    
    return (
        <>
            {props.showPost === 'open' &&
                <div className="postShare">
                    <div className="postShare__1">
                        <div className="postShare__1__head">
                            <h4>Create a post</h4>
                            <CloseIcon onClick={(e) => reset(e)} />
                        </div>
                        <div className="postShare__1__mid">
                        {props.user.photoURL ?(<Avatar src={props.user.photoURL} style={{ width: '50px', height: '50px' }} />):(<Avatar style={{ width: '50px', height: '50px' }} />)  }
                        <h6>{props.user?props.user.displayName:""}</h6>
                        </div>
                        <div className="postShare__1__text">
                            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="What do you want to talk about?" autoFocus={true} ></textarea>
                            { area==='image' ? (
                                <div>
                                <input type="file" accept='image/gif,image/jpeg,image/png' name="imageid" id="img" style={{ display: 'none' }} onChange={handleImage} ></input>
                                <p>
                                    <label htmlFor="img" >
                                        Share an Image
                                    </label>
                                </p>
                                {image && <img className="postShare__1__imageShare" src={URL.createObjectURL(image)} />
                                }
                                </div>) : ( area==="videos" && (
                                <>
                                    <input type="text" style={{ width: '100%', borderRadius: '5px', outlineWidth: '0', padding: "5px 10px", border: "1px solid gray " }} value={video} placeholder="Enter Video Link" onChange={(e) => setVideo(e.target.value)} />

                                    {video && <ReactPlayer width={'100%'} url={video} />}
                                </>)
                                )
                            }
                        </div>
                        <div className="postShare__1__down">
                            <div className="postShare__1__down__1">
                                <div className="postShare__1__down__icon">
                                    <PhotoSizeSelectActualOutlinedIcon onClick={()=>switchArea("image")} />
                                    <PlayCircleFilledOutlinedIcon onClick={()=>switchArea("videos")} />
                                </div>
                                <div className="postShare__1__down__2">
                                    <div className="postShare__1__down__com">
                                        <ChatOutlinedIcon />
                                        Anyone
                                    </div>
                                </div>
                            </div>
                            <div className="postShare__1__down__post">
                                <button  disabled={!text ? true : false} onClick={(event)=>postArticle(event)}  >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.userState.user,
    }
};

const mapDispatchToProps=(dispatch)=>({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(PostShare)

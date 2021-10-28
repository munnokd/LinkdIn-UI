import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './Mid.css'
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import Post from './Post';
import PostShare from './PostShare'
import { connect } from 'react-redux';
import { getArticleAPI } from '../actions';

const Mid = (props) => {
    const [showPost, setShowPost] = useState('close')

    useEffect(() => {
        props.getArticles()
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target !== e.currentTarget) {
            return;
        }
        switch (showPost) {
            case "open":
                setShowPost('close');
                break;
            case "close":
                setShowPost('open');
                break;
            default:
                setShowPost("close");
                break;
        }
    }
    return (
        <>

            <div className="mid">
                <div className="mid__share">
                    <div className="mid__share__up">
                        {props.user && props.user.photoURL ? <Avatar src={props.user.photoURL} /> : <Avatar />
                        }
                        <button disabled={props.loading ? true : false} onClick={handleClick} > Start a post</button>
                    </div>
                    <div className="mid__share__down">
                        <div className="mid__down__icon" id="mid__down__icon1" >
                            <PhotoOutlinedIcon />
                            <p>Photo</p>
                        </div>
                        <div className="mid__down__icon" id="mid__down__icon2">
                            <PlayCircleOutlineOutlinedIcon />
                            <p>Video</p>
                        </div>
                        <div className="mid__down__icon" id="mid__down__icon3">
                            <TodayOutlinedIcon />
                            <p>Event</p>
                        </div>
                        <div className="mid__down__icon" id="mid__down__icon4">
                            <SubjectOutlinedIcon />
                            <p>Write article</p>
                        </div>
                    </div>
                </div>
                <hr style={{ color: "gray" }} />
                <div className='postload'>
                    {
                        props.loading && <img className="postload__image" src="/Images/Loader.svg" />
                    }
                    {
                        props.articles.length > 0 &&
                        props.articles.map((article, key) => (

                            <Post key={key}
                                avatar={article.actor.image}
                                name={article.actor.title}
                                about={article.actor.description}
                                desc={article.description}
                                time={article.actor.date.toDate().toLocaleDateString()}
                                article={article}
                                like={article.like}
                                comment={article.comments}
                            />
                        ))
                    }
                </div>
                <PostShare showPost={showPost} handleClick={handleClick} />
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        loading: state.articleState.loading,
        articles: state.articleState.articles
    }
}

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI())
})

export default connect(mapStateToProps, mapDispatchToProps)(Mid)

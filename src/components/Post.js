import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import GroupIcon from '@material-ui/icons/Group';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SubdirectoryArrowRightOutlinedIcon from '@material-ui/icons/SubdirectoryArrowRightOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import { getArticleAPI } from '../actions';

const Post = (props) => {
    return (       
            <div className='post' >
                <div className="post__head">
                    <div className="post__head__info">
                        <div className="post__head__avtar">
                            <Avatar src={props.avatar} />
                            <div className="post__head__title">
                                <h5>{props.name}</h5>
                                <p>{props.about}</p>
                                <p>{props.time} • <GroupIcon /></p>
                            </div>
                        </div>
                        <MoreHorizIcon />
                    </div>
                    <p>{props.desc}</p>
                </div>
                <div className="post__image">
                    { !props.article.sharedImg && props.article.video ? <ReactPlayer width={'100%'} url={props.article.video}/> : (
                        props.article.sharedImg && <img src={props.article.sharedImg}/>
                    )
                    }
                </div>
                <div className="post__bottom">
                    <div className="post__count">
                        <ThumbUpAltRoundedIcon />
                        <p>{props.like}</p>•
                        <p>{props.comment} comment</p>
                    </div>
                    <hr style={{ color: "gray" }} />
                    <div className="post__like">
                        <div className="post__like__">
                            <ThumbUpAltOutlinedIcon />
                            Like
                        </div>
                        <div className="post__like__">
                            <ChatOutlinedIcon />
                            Comment
                        </div>
                        <div className="post__like__">
                            <SubdirectoryArrowRightOutlinedIcon />
                            Share
                        </div>
                        <div className="post__like__">
                            <SendOutlinedIcon />
                            Send
                        </div>
                    </div>
                </div>
            </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        loading:state.articleState.loading,
        articles: state.articleState.articles
    }
}
const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI())
})

export default connect(mapStateToProps,mapDispatchToProps)(Post)

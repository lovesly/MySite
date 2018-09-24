import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    return (
        <div className={`post post-${props.data.index} col-sm-4`}>
            <h5>{ props.data.title }</h5>
            <img src={ props.data.url } alt=""/>
            <p>{ props.data.desc }</p>
            <div className="my-btn-container">
                <Link className="nav-link" to={`/main/article/${props.data.articleId}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Post;
import React from 'react';
import Post from './Post';

const Posts = () => {
    // hard coded for now
    const dataset = [
        {
            articleId: '5b9dea024a68a8840e98750c',
            title: 'Post Title 1',
            desc: 'some text',
            url: './images/posts/one.jpg',
        }, 
        {
            articleId: '5b9debd8b4d06b84649fc7c3',
            title: 'Post Title 2',
            desc: 'some text',
            url: './images/posts/two.jpg',
        },
        {
            articleId: '3',
            title: 'Post Title 3',
            desc: 'some text',
            url: './images/posts/three.jpg',
        }
    ];
    const Posts = dataset.map(function(el, index) {
        return <Post key={index} data={el} />
    });
    return (
        <div className="blog-posts container">
            <div className="row">
                { Posts }
            </div>
        </div>
    );
};

export default Posts;
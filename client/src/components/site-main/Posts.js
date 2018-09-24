import React from 'react';
import Post from './Post';

const Posts = () => {
    // hard coded for now
    const dataset = [
        {
            index: 1,
            articleId: '',
            title: '如何毁掉一个游戏',
            desc: '外挂都不是事儿， 封号再买个游戏就可以继续玩哦， 蓝洞开心地笑笑',
            url: './images/starWar/article1.jpg',
        }, 
        {
            index: 2,
            articleId: '5ba50e6f61bf33359511b23a',
            title: 'Youtube观察员',
            desc: '潜伏在 Youtube， Quora 评论区， 是时候拉出你的意大利炮了',
            url: './images/starWar/article2.jpeg',
        },
        {
            index: 3,
            articleId: '5ba5d20fe53dbf83a8f1a298',
            title: '联想 Sucks！',
            desc: '美帝良心， 股价腰斩， 有心杀贼， 无力回天',
            url: './images/starWar/article3.jpeg',
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
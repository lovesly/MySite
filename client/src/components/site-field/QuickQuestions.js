import React from 'react';

const QuickQuestions = () => {
    // data: [{ question: '', answer: '' }, ...]
    const shortQuestions = 
    [{
        question: 'Windows 还是 Mac',
        answer: '真是难以抉择， 不过考虑到我的 steam 游戏库， 还是 windows 好了',
    }, {
        question: '安卓 还是 IOS',
        answer: '看了9月的发布会， 突然想用诺基亚',
    }, {
        question: 'Tab 几个空格',
        answer: '4个。 2个会难受， 1个请弄死我',
    }, {
        question: 'Function 后面大括号',
        answer: '隔一个空格跟在后面， 另起一行很痛苦',
    }, {
        question: '编辑器',
        answer: 'VSCode',
    }, {
        question: '浏览器',
        answer: 'Chrome',
    }, {
        question: 'AMD 还是 Nvidia',
        answer: '老黄',
    }, {
        question: 'Dota 还是 LOL',
        answer: 'Ah fresh meat',
    }, {
        question: '巫师 还是 黑魂',
        answer: 'Geralt of 石景山',
    }, {
        question: '豆腐脑',
        answer: '咸的',
    }, {
        question: '西红柿炒鸡蛋',
        answer: '咸的',
    }, {
        question: '粽子',
        answer: '甜的',
    }, {
        question: '粥',
        answer: '原味',
    }, 
    // {
    //     question: '女朋友和你妈掉水里了先救谁',
    //     answer: '谁问救谁， 两个一起问我选择死亡',
    // }, 
    {
        question: '保大的保小的',
        answer: '大的',
    }, {
        question: '最好的语言是？',
        answer: '... 这个 ... 中文？',
    }, {
        question: '你笑起来还能看见东西吗？',
        answer: '能看见， 并不是一片黑暗， 再问要打人了',
    }];
    const questions = shortQuestions.map(function(el, index) {
        return (
            <div className="alert alert-success" role="alert" key={ index }>
                <h6 className="alert-heading">{ el.question }</h6>
                <hr/>
                <p className="mb-0">{ el.answer }</p>
            </div>
        );
    });
    return (
        <div className="question-container">
            { questions }
        </div>
    );
};

export default QuickQuestions;
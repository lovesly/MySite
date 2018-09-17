import React from 'react';

const QuickQuestions = () => {
    // data: [{ question: '', answer: '' }, ...]
    const testData = 
    [{
        question: '游戏',
        answer: '真是难以抉择， 不过考虑到我的 steam 游戏库， 还是 windows 好了',
    }];
    const questions = testData.map(function(el, index) {
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
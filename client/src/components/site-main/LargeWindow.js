import React from 'react';
import { Link } from 'react-router-dom';

const LargeWindow = () => {
    return (
        <div className="large-window">
            <div className="window-tint">
                <div className="promo-text">
                    当我不在工作
                    <strong>我在做什么</strong>
                    <Link to='/main/hobby' className="window-cta">详情</Link>
                </div>
            </div>
        </div>
    );
};

export default LargeWindow;

import React from 'react';
import { Link } from 'react-router-dom';

const GridLink = () => {
    return (
        <div className="grid-container">
            <figure className="triBlock tri1">
                            {/* <img src="./images/starWar/tri1.svg" alt=""/> */}
                            <figcaption>
                                <div>
                                    <h2>职业</h2>
                                    <p>为什么会成为前端?</p>
                                    <Link to='/main/field/Career'>Read More</Link>
                                </div>
                            </figcaption>
            </figure>
            <figure className="triBlock tri2">
                            {/* <img src="./images/starWar/tri1.svg" alt=""/> */}
                            <figcaption>
                                <h2>经历</h2>
                                <p>为什么胖了10斤</p>
                                <Link to='/main/field/Story'>Read More</Link>
                            </figcaption>
            </figure>
            <figure className="triBlock tri3">
                            {/* <img src="./images/starWar/tri1.svg" alt=""/> */}
                            <figcaption>
                                <h2>计划</h2>
                                <p>明天吃火锅?</p>
                                <Link to='/main/field/Future'>Read More</Link>
                            </figcaption>
            </figure>
            <figure className="triBlock tri4">
                            {/* <img src="./images/starWar/tri1.svg" alt=""/> */}
                            <figcaption>
                                <h2>常见问题</h2>
                                <p>快问快答</p>
                                <Link to='/main/field/question' >Read More</Link>
                            </figcaption>
            </figure>
            <div className="btn-container">
                <button id="my-btn" type="button" className="btn btn-outline-light">Load Transmision Link</button>
            </div>

            

        </div>
    );
};

export default GridLink;
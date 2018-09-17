import React from 'react';
import { Link } from 'react-router-dom';

const MainIntro = () => {
    return (
        // relative url for img?
        <div className="clothes-pics container">
            <div className="row">
                <figure className="col-sm">
                            <img src="/images/starWar/tri44.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>看书</h2>
                                <p>Description</p>
                                <Link to='/main/hobby/book'>More</Link>
                            </figcaption>
                </figure>
                <figure className="col-sm">
                            <img src="/images/starWar/tri0.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>游戏</h2>
                                <p>Description</p>
                                <Link to='/main/hobby/game'>More</Link>
                            </figcaption>
                </figure>
                <figure className="col-sm">
                            <img src="/images/starWar/tri1.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>打球</h2>
                                <p>Description</p>
                                <Link to='/main/hobby/basketball'>More</Link>
                            </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MainIntro;
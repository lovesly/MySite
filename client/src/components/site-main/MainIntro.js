import React from 'react';
import { Link } from 'react-router-dom';

// handler
// need to refactor it later.
const blockHandler = function(e) {
    let a = e.currentTarget.querySelector('figcaption a');
    if (a) {
        a.click();
    }
};

const MainIntro = () => {
    return (
        <div className="clothes-pics container">
            <div className="row">
                <figure className="col-sm" onClick={ (e) => blockHandler(e) }>
                            <img src="/images/starWar/tri44.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>看书</h2>
                                <Link to='/main/hobby/Book'>More</Link>
                            </figcaption>
                </figure>
                <figure className="col-sm" onClick={ (e) => blockHandler(e) }>
                            <img src="/images/starWar/tri0.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>Dota</h2>
                                <Link to='/main/hobby/Dota'>More</Link>
                            </figcaption>
                </figure>
                <figure className="col-sm" onClick={ (e) => blockHandler(e) }>
                            <img src="/images/starWar/tri1.svg" alt="Img Not Found"/>
                            <figcaption>
                                <h2>打球</h2>
                                <Link to='/main/hobby/Basketball'>More</Link>
                            </figcaption>
                </figure>
            </div>
        </div>
    );
};

export default MainIntro;
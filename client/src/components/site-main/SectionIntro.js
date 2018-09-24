import React from 'react';

const SectionIntro = (props) => {
    return (
        <div className="section-intro">
            <h1>{ props.data.title }</h1>
            <hr/>
            <p>{ props.data.content || 'Nothing' }</p>
            <hr/>
        </div>
        
    );
};

export default SectionIntro;
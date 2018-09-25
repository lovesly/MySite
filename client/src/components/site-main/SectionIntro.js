import React from 'react';

const SectionIntro = (props) => {
    console.log(props);
    const data = props.data || { title: 'Title', content: 'Nothing' }
    return (
        <div className="section-intro">
            <h1>{ data.title }</h1>
            <hr/>
            <p>{ data.content }</p>
            <hr/>
        </div>
        
    );
};

export default SectionIntro;
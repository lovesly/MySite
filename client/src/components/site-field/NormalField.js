import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NormalField = (props) => {
    const questions = [].map(function(el, index) {
        return (
            <div className="alert alert-success" role="alert" key={ index }>
                <h6 className="alert-heading">{ el.question }</h6>
                <hr/>
                <p className="mb-0">{ el.answer }</p>
            </div>
        );
    });
    return (
        <Fragment>
            <Link to='/main'>Back to Main</Link>
                <div className="paragraph">
                    { articleItem }
                </div>
            <Link to='/main'>Back to Main</Link>
        </Fragment>
    );
};

export default NormalField;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionIntro from '../site-main/SectionIntro';
// should use dynamic import
import QuickQuestions from '../site-field/QuickQuestions';

class Field extends Component {

    componentDidMount() {        
        // load different content based on param type
        
        // scroll to start position
        window.scrollTo(0, 0);
    }
    
    render() {
        const sec1 = { title: 'Unique Style', content: 'some text' };
        return (
            <article id="">
                <Link to='/main'>Back to Main</Link>
                <SectionIntro data={ sec1 }/>
                {/* under specific condition */}
                <QuickQuestions />
                <Link to='/main'>Back to Main</Link>
            </article>
        );
    }
}

Field.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
// 过早的优化是万恶之源

export default connect(mapStateToProps)(Field);
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionIntro from '../site-main/SectionIntro';
import MainIntro from '../site-main/MainIntro';
import HobbyType from '../site-hobby/HobbyType';
import $ from 'jquery';

class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: null
        }
    }
    
    // 爱好
    componentDidMount() {        
        if (this.props.auth.isAuthenticated) {

        }
        $(window).on('scroll', function() {
            if ($('.clothes-pics').length === 0) return;
            const wScroll = $(this).scrollTop();
            if (wScroll > $('.clothes-pics').offset().top - window.innerHeight/2 && !$('.clothes-pics').hasClass('showing-added')) {
                // called only once?
                $('.clothes-pics').addClass('showing-added');
                $('.clothes-pics figure').each(function(index, el) {
                    const self = this;
                    setTimeout(function() {
                        // setTimeout closure issue
                        // this refers to window.
                        $(self).addClass('is-showing');
                    }, 300 * index);
                });
            }
        });        
    }
    
    render() {
        const sec1 = { title: 'Unique Style', content: 'some text' };
        return (
            <article id="">
                <Link to='/main'>Back to Main</Link>
                <SectionIntro data={ sec1 }/>
                <MainIntro />
                <Route path="/main/hobby/:type" component={ HobbyType } exact={ true }/>
            </article>
        );
    }
}

Hobby.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
// 过早的优化是万恶之源

export default connect(mapStateToProps)(Hobby);
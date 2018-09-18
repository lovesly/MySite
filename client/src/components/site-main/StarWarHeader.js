import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


const scrollHandler = function() {
    const wScroll = $(this).scrollTop();
    $('.logo').css({
        'transform': `translate(0px, ${ wScroll/2 }%)`
    });

    $('.back-bird').css({
        'transform': `translate(${ wScroll/6 }%, ${ wScroll/3 }%) scale(${ 0.5 + wScroll/700 })`
    });
    
    $('.fore-bird').css({
        'transform': `translate(0px, -${ wScroll/32 }%)`
    });

    if (wScroll > $('section.content').offset().top) {
        if ($('nav#navbar').hasClass('is-showing')) {
            $('nav#navbar').removeClass('is-showing');
        }
    } else {
        if (!$('nav#navbar').hasClass('is-showing')) {
            $('nav#navbar').addClass('is-showing');
        }
    }
}

class StarWarHeader extends Component {

    componentDidMount() {
        // add eventlistener
        window.addEventListener('scroll', scrollHandler, false);
    }
    componentWillUnmount() {
        // remove eventlistener
        window.removeEventListener('scroll', scrollHandler, false);
    }
    render() {
        return (
            <header className="bird-box">
                    <div className="back-bird"></div>
                    <div className="logo"></div>
            </header>
        );
    }
}

StarWarHeader.propTypes = {

};

export default StarWarHeader;
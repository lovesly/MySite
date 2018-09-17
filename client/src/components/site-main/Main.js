import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from '../site-main/Posts';
import SectionIntro from '../site-main/SectionIntro';
import GridLink from '../site-main/GridLink';
import MainIntro from '../site-main/MainIntro';
import LargeWindow from '../site-main/LargeWindow';
import $ from 'jquery';

class Main extends Component {

    componentDidMount() {
        document.querySelector('#my-btn').addEventListener('click', function(e) {
            e.preventDefault();
            $('.triBlock').each(function(index) {
                const self = this;
                $(self).css({ 'background-image': `url('../../images/starWar/tri${index}.svg')`});
                console.log(this);
                setTimeout(function() {
                    // this refers to window.
                    $(self).addClass('is-showing');
                }, 300 * (index + 1));
            });
            $(this).hide('slow').remove();
        });
    }

    render() {
        const sec1 = { title: 'Unique Style', content: 'some text' };
        const sec2 = { title: 'Link Magic Cube', content: 'some text' };
        const sec3 = { title: 'Large Window', content: 'some text' };
        const sec4 = { title: 'Recommended articles', content: 'some text' };
        return (
            <article id="main-article">
                <SectionIntro data={ sec1 }/>
                <SectionIntro data={ sec2 }/>
                <GridLink />
                <SectionIntro data={ sec3 }/>
                <LargeWindow />
                <SectionIntro data={ sec4 }/>					
                <Posts />
            </article>
        );
    }
}

Main.propTypes = {

};

export default Main;
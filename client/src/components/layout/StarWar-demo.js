import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/css/style.css';
import $ from 'jquery';
import Main from '../site-main/Main';
import Field from '../site-article/Field';
import Article from '../site-article/Article';
import Hobby from '../site-article/Hobby';
import StarWarHeader from '../site-main/StarWarHeader';

class StarWar extends Component {

    componentDidMount() {
        
        $('div#scrollTop').on('click', function(){
            // window.scrollTo({ 
            //     top: 0, 
            //     behavior: "smooth" 
            // });
            document.querySelector('.bird-box').scrollIntoView({
                block: "start", 
                inline: "nearest",
                behavior: "smooth"
            });
        });
        
        if (this.props.auth.isAuthenticated) {
            // this.props.history.push('/main');
        }
    }
    
    render() {
        return (
            <Fragment>
                <StarWarHeader />
                <Route path="/main/hobby" render={() => <h3>To Do, split effect</h3>} exact={ true }/>
                <section className="content">
                    <Switch>
                        <Route path="/main" component={ Main } exact={ true }/>
                        <Route path='/main/article/:id' component={ Article } exact={ true }/>
                        <Route path="/main/field/:id" component={ Field } exact={ true }/>
                        <Route path="/main/hobby" component={ Hobby }/>
                        <Route path="*" component={() => <Redirect to="/main"/>} />
                    </Switch>
                    {/* <Route path="/main/login" component={ Login } exact={ true } /> */}
			    </section>
                <div className="scroll" id="scrollTop">
                    <img className="arrow" src="/images/starWar/arrow.svg" alt=""/>
                </div>
            </Fragment>
        );
    }
}

StarWar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

// where should I put this?
// since we have multiple effects need to listen to scroll event.
// it's better to separate the function into different eventlisteners
/**
 *  1. starwar bg
 *  2. large window
 *  3. blog post
 *  4. arrow
 */

$(window).scroll(function(event) {
    if ($('article#main-article').length === 0) return;
    const wScroll = $(this).scrollTop();
    // console.log(wScroll, $('.clothes-pics').offset().top);
    // triggered when scroll to the middle of the borwser window.
    let wHeight = $(window).height();
        
    let pos = wScroll - $('.large-window').offset().top;
    let _h = wHeight - 640;

    if (pos > -wHeight) {
        // tricky
        // $('.large-window').css({ 'background-position': `center ${pos}px` });
        // opacity
        // -wHeight + 640 -> 0 map to 0 -> 1
        // toFixed and toPercision
        $('.large-window > .window-tint').css({
            'opacity': ((_h + pos)/_h).toFixed(2)
        });
    }

    let blogPos = wScroll - $('.blog-posts').offset().top;
    let arrow = $('div#scrollTop');
    if (blogPos > -wHeight) {
        let offset = blogPos + wHeight/2; // + wHeight - wHeight/2
        // scroll half window height, slide in should be done
        if (offset > 0) {
            offset = 0;
        }        
        $('.post-1').css({'transform': `translate(${offset}px, ${Math.abs(offset*0.3)}px)`});
        $('.post-3').css({'transform': `translate(${-offset}px, ${Math.abs(offset*0.3)}px)`});
        // $('.post-1').css({'transform': `translate(${offset}px, 20px)`});
        // $('.post-3').css({'transform': `translate(${-offset}px, 20px)`});
        if (!arrow.hasClass('arrow-showing')) {
            arrow.show(500);
            arrow.addClass('arrow-showing');
        }
    } else {
        if (arrow.hasClass('arrow-showing')) {
            arrow.hide(500);
            arrow.removeClass('arrow-showing');
        }
    }
});

// 过早的优化是万恶之源

export default connect(mapStateToProps)(StarWar);
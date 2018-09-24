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
        const sec1 = { title: '爱好', content: '于老师喜欢抽烟喝酒烫头， 我没这么高雅， 几个小爱好， 聊以卒岁。 如果早15年， 我肯定得为了作文得分写自己特别喜欢做好人好事， 拾金不昧， 扶老奶奶过马路那都是基本操作。 好在今天不用说屁话， 喜欢什么写什么。' };
        return (
            <article id="" className="site-hobby">
                <Link to='/main'>Back to Main</Link>
                <SectionIntro data={ sec1 }/>
                <MainIntro />
                <Route path="/main/hobby/:type" component={ HobbyType } exact={ true }/>
                <Link to='/main'>Back to Main</Link>            
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
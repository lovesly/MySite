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
        console.log('loaded');
        document.querySelector('#my-btn').addEventListener('click', function(e) {
            e.preventDefault();
            $('.triBlock').each(function(index) {
                const self = this;
                $(self).css({ 'background-image': `url('../../images/starWar/tri${index}.svg')`});
                setTimeout(function() {
                    // this refers to window.
                    $(self).addClass('is-showing');
                }, 300 * (index + 1));
            });
            $(this).hide('slow').remove();
        });
    }

    render() {
        const core = [`飞机降落的时候， 我戴着耳机睡着了， 咣当一下第一反应是：大胆， 何人撞我爱车。 眯着眼睛看向窗外， 太阳将要落山， 时间刚好6点半。 该怎样形容我的心情呢， 这种时候脸皮薄是不行的， 我又得偷李敖大师几句诗。 漂洋过海， 乃怀陆根， 我虽不往， 一往情深。 虽然我是坐飞机来的， 不过彼时我的几大箱行李的确漂在海上。 离家5年，一落地心里就特别踏实， 满脸含笑， 可不是含笑九泉， 就是十分开心， 浑然忘记键盘电脑耳机塞满行李箱， 一会儿过海关说不得要被税， 结果小哥态度敷衍机器都待机着， 要不是我强烈要求就直接放我走了。 又见到老爸， 瘦了， 还是挺精神， 老妈出差过几天才回来。 一路上看见的一切都让我倍感喜悦， 美中不足的是回来的时间不对， 没有雾霾。 好在5环上的尾气稍稍安抚了我的心情。`, `变化`, `为什么要写这些`];
        // should load them from db, but I just don't want to make too much request, 
        // since the server is located in US. 
        const sec1 = { title: '引子', content: core };
        const sec2 = { title: '来龙去脉', content: '从各个角度描述一下入行前后的日子' };
        const sec3 = { title: '闲暇', content: '不抽烟不喝酒不烫头， 一台电脑一根网线， 我可以撑到世界末日' };
        const sec4 = { title: '凑数', content: '讲道理的话我应该另建一个路由放文章，但是我实在想把这个效果放在首页' };
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
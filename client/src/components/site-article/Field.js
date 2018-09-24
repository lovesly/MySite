import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionIntro from '../site-main/SectionIntro';
// should use dynamic import
import QuickQuestions from '../site-field/QuickQuestions';
// import NormalField from '../site-field/NormalField';
import { getArticleByTitle } from '../../actions/articleActions';
import FileLoader from '../layout/FileLoader';

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shortQuestion: false,
            p5: false,
            module: null,
        }
    }

    componentDidMount() {        
        // load different content based on param type
        const mode = this.props.match.params.id; 
        if (mode === "question") {
            this.setState({
                shortQuestion: true
            });
        } else {
            this.props.getArticleByTitle(mode);
        }
        if (mode === "Story") {
            this.setState({ p5: true });
            // console.log('load module');
            import('../layout/TestIframe')
                .then(module => this.setState({ module: module.default }))
                .catch(err => {
                    console.log(err);
                });
        }
        // scroll to start position
        window.scrollTo(0, 300);
    }
    
    render() {
        // should add those in the article, maybe.
        const sec = {
            Career: { title: '职业', content: '关爱生命， 远离IE' },
            Story: { title: '经历', content: '我用了5年时间， 终于知道自己想要什么' },
            Future: { title: '规划', content: '应该叫什么， 一五发展计划？' },
            question: { title: '常见问题', content: '快速了解生活习性' },
        }
        const mode = this.props.match.params.id;
        const { article, loading } = this.props.articles;
        let fieldItem, P5, lastParagraph;
        if (this.state.shortQuestion) {
            fieldItem = <Fragment>
                            <QuickQuestions />
                        </Fragment>
        } else if (article === null || loading) {
            fieldItem = <FileLoader />;
        } else {
            if (!article.msg) {
                // console.log(article.content.split('\n\n'));
                // customize api??
                fieldItem = article.content.split('\n\n').map(function(el, index) {
                    if (el === "[IMG]") {
                        return ( 
                            <p key={ index } className="article-img-box">
                                <img src="/images/starWar/WOW.jpeg" className="article-img" alt="Not Found"/>
                            </p>
                        );
                    } else {
                        return <p key={ index }>{ el }</p>;
                    }
                });
            } else {
                fieldItem = <h4>No profiles found</h4>;
            }
        }

        if (this.state.p5 && this.state.module) {
            P5 = this.state.module; 
            // hardCoded for now
            const content = "就像在另一篇里说的，无数巧合推动着人生轨迹，所以我特别喜欢这个以柏林噪声为基础的随机图像，一度想要将其作为网站背景。不过想在更大的图像区域达到相同视觉效果，我的宝贝1080都有些吃不消，测试的时候一度让 chrome 卡死。万一有 HR 因为不小心点开这个页面死机了，那岂不是万事皆休， 所以在这里放个小号的， 800 * 600， 2000个点， 每秒24帧。如果还死机了， 请加我微信， 我愿意赞助1个红包聊表歉意。";
            lastParagraph = <p>{ content }</p>
        }

        return (
            <article className="site-field">
                <Link to='/main'>Back to Main</Link>
                <SectionIntro data={ sec[mode] }/>
                <div className="paragraph">
                    { fieldItem }  
                </div>    
                { P5 && <P5 /> }
                { P5 &&  <div className="paragraph last-paragraph" >{ lastParagraph }</div>}
                <Link to='/main'>Back to Main</Link>
            </article>
        );
    }
}

Field.propTypes = {
    getArticleByTitle: PropTypes.func.isRequired,
    article: PropTypes.object,
};

const mapStateToProps = (state) => ({
    articles: state.articles
});
// 过早的优化是万恶之源

export default connect(mapStateToProps, { getArticleByTitle })(Field);
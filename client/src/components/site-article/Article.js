import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionIntro from '../site-main/SectionIntro';
import { getArticleById } from '../../actions/articleActions';
// import Spinner from '../common/Spinner';
import FileLoader from '../layout/FileLoader';

class Article extends Component {

    componentDidMount() {        
        this.props.getArticleById(this.props.match.params.id);
        window.scrollTo(0, 300);
    }
    
    render() {
        const sec = {
            cheat: { title: 'Youtube', content: '关爱生命， 远离IE' },
            Youtube: { title: '油管观察员', content: '潜伏在 Youtube, Quora 评论区，定点清除有价值目标' },
            Lenovo: { title: 'Lenovo', content: '事不过三， 联想已经坑了哥们儿两次， 我是不会再上当的' },
        };
        const { article, loading } = this.props.articles;
        let articleItem, mode;
        if (article === null || loading) {
            articleItem = <FileLoader />;
        } else {
            if (!article.msg) {
                // console.log(article.content.split('\n\n'));
                articleItem = article.content.split('\n\n').map(function(el, index) {
                    return <p key={ index }>{ el }</p>;
                });
                mode = article.title;
            } else {
                articleItem = <h4>No profiles found</h4>;
            }
        }
        return (
            <article id="" className="site-article">
                <Link to='/main'>Back to Main</Link>
                <SectionIntro data={ sec[mode] }/>
                <div className="paragraph">
                    { articleItem }
                </div>
                <Link to='/main'>Back to Main</Link>
            </article>
        );
    }
}

Article.propTypes = {
    getArticleById: PropTypes.func.isRequired,
    article: PropTypes.object,
};

const mapStateToProps = (state) => ({
    articles: state.articles
});
// 过早的优化是万恶之源

export default connect(mapStateToProps, { getArticleById })(Article);
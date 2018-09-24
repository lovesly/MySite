import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Basketball from './Basketball';
// import Book from './Book';
// import Game from './Game';
import { getArticleByTitle } from '../../actions/articleActions';
import FileLoader from '../layout/FileLoader';

class HobbyType extends Component {    

    componentDidMount() {
        // load
        const { type } = this.props.match.params;
        this.props.getArticleByTitle(type);
    }

    componentDidUpdate(prevProps, prevState) {
        // also triggered multiple times
        const { type } = this.props.match.params;
        if (type !== prevProps.match.params.type) {
            this.props.getArticleByTitle(type);
            window.scroll(0, 500);
        }
    }
    
    render() {
        const { article, loading } = this.props.articles;
        let fieldItem;
        if (article === null || loading) {
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
        return (
            <div className="paragraph">
                { fieldItem }  
            </div>    
        );
    }
}

HobbyType.propTypes = {
    getArticleByTitle: PropTypes.func.isRequired,
    article: PropTypes.object,
};

const mapStateToProps = (state) => ({
    articles: state.articles
});

export default connect(mapStateToProps, { getArticleByTitle })(HobbyType);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Basketball from './Basketball';
import Book from './Book';
import Game from './Game';

class HobbyType extends Component {    
    componentDidMount() {

    }
    render() {
        const { type } = this.props.match.params;
        console.log(type);
        let item, Type;
        const components = {
            game: Game,
            basketball: Basketball,
            book: Book
        }
        if (!components[type]) {
            // not a valid route
            item = <h1>Not a valid route</h1>
        } else {
            // weird.
            Type = components[type];
            console.log(Type);
            console.log(typeof Type);
            item = <Type />;
        }
        return (
            item
        );
    }
}

HobbyType.propTypes = {

};

export default HobbyType;
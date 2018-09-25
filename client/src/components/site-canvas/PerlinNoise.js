import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sketch from './sketch';
import p5 from 'p5';
/**
 *  Since I don't want to upgrade the plan to get ssl service. 
 *  And I didn't find any good way to solve the mixed content issue. 
 *  gg iframe, I'm going to import p5.js and create a canvas component.
 */

class PerlinNoise extends Component {
    componentDidMount() {
        this.canvas = new p5(sketch, "app-p5_container");
        // this.canvas.setOnReady(this.props.onReady);
    }

    componentWillUnmount() {
        this.canvas.remove();
    }
    
    render() {
        return (
            <div
                id="app-p5_container"
                style={{ width: "100%", textAlign: "center", borderRadius: "20px" }}
            />
        );
    }
}

PerlinNoise.propTypes = {

};

export default PerlinNoise;
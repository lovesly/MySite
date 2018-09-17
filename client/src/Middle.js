import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from './components/layout/Loader';
import App from './App';
import './loader.css';


class TestMiddle extends Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
        // this._init = this._init.bind(this);
    }

    _init() {
        setTimeout(() => {
            this.setState({
                show: true
            });
        }, 500);
    }

    componentDidMount() {
        if (document.readyState === 4) {
            console.log("already triggered!");
            this._init();
        } else {
            document.addEventListener("DOMContentLoaded", () => {
                this._init();
            });
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                { this.state.show ? <App key={ 'main-app' }/> : <Loader key={ 'app-loader' } /> }
            </ReactCSSTransitionGroup>
        );
    }
}

export default TestMiddle;

    

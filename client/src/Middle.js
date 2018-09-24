import React, { Component, Fragment } from 'react';
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
        // ok, stupid, stupid, stupid
        // when this window.onload is triggered(only once), it's actually working on 
        // Loader component. Not the <App />
        if (document.readyState === 4) {
            console.log("already triggered!");
            this._init();
        } else {
            window.onload = () => {
                this._init();
            };
        }
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                { !this.state.show && <Loader key={ 'app-loader' } />
                }
                <App key={ 'main-app' }/>
            </ReactCSSTransitionGroup>
        );
    }
}

export default TestMiddle;

    

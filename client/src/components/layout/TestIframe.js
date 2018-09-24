import React from 'react';
import Iframe from 'react-iframe';

export default () => {
    return (
            <div id="my-canvas" style={{ width: '100%', height:'600px' }}>
                <iframe 
                    // src="/perlintest/indexTest.html/"
                    src="http://my-site-zz.herokuapp.com/perlintest/indexTest.html"
                    // src="https://www.youtube.com/embed/xDMP3i36naA/"
                    width="100%" 
                    height="100%" 
                    scrolling="no" 
                    className="canvas-bg"
                    position="relative"
                    frameBorder="0"
                    allowtransparency="true"
                />
            </div> 
    );
}
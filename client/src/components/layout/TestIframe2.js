import React from 'react';

export default () => {
    return (
            <div id="my-canvas" style={{ width: '100%', height:'600px' }}>
                <iframe 
                    src="/indexTest.html" 
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
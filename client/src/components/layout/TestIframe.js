import React from 'react';
import Iframe from 'react-iframe';

export default () => {
    return (
            <div style={{ width: '100%', height:'100vh' }}>
                <iframe 
                    src="./PerlinNoise/index.html" 
                    width="100%" 
                    height="100%" 
                    scrolling="no" 
                    className="canvas-bg"
                    position="relative"
                />
            </div> 
    );
}
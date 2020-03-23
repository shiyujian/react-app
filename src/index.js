import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.getElementById('root');
if (__env__ == 'tree') {
    let render = () => {
        // const TREE = require('./App/tree/app').default;
        ReactDOM.render(<div>123</div>, MOUNT_NODE);
    }
    render();
}

import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, ConfigProvider, Pagination } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
const MOUNT_NODE = document.getElementById('root');
if (__env__ == 'tree') {
    let render = () => {
        const TREE = require('./App/tree/app').default;
        ReactDOM.render(<div>
           <ConfigProvider locale={zhCN}>
                <TREE />
           </ConfigProvider> 
        </div>, MOUNT_NODE);
    }
    render();
}

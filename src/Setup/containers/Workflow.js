import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Main,
    Aside,
    Body,
    Sidebar,
    Content,
    DynamicTitle
} from '_platform/components/layout';
import { FlowContainer } from '_platform/modules/FlowDesign';
import { actions as platformActions } from '_platform/store/global';

const Flow = FlowContainer.Flow;

@connect(
    state => {
        const { setup: platform } = state;
        return platform;
    },
    dispatch => ({
        actions: bindActionCreators({ ...platformActions }, dispatch)
    })
)
export default class Workflow extends Component {
    static propTypes = {};

    render () {
        return (
            <div>
                <DynamicTitle title='流程设置' {...this.props} />
                <Content>
                    <Flow />
                </Content>
            </div>
        );
    }
}

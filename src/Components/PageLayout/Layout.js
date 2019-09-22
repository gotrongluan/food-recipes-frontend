import React, { Component } from 'react';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import styles from './styles.module.scss';

class LayoutWithScrollbar extends Component {
    render() {
        const { children, handleUpdate, handleScroll } = this.props;
        return (
            <Layout className={styles.layout}>
                <Scrollbars style={{ height: '100vh', width: '100%' }}
                    onScroll={handleScroll}
                    onUpdate={handleUpdate}
                >
                    {children}
                </Scrollbars>
            </Layout>
        )
    }
}

export default LayoutWithScrollbar;
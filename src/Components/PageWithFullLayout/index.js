import React from 'react';
import { Layout } from 'antd';
import LayoutWithScrollbar from 'Components/PageLayout/Layout';
import Footer from 'Components/PageLayout/Footer';
import Header from 'Components/PageLayout/Header';
import Sider from 'Components/PageLayout/Sider';

const { Content } = Layout;

class PageWithFullLayout extends React.PureComponent {
    render() {
        const { handleScroll, handleUpdate } = this.props;
        return (
            <Layout>
                <Sider />
                <LayoutWithScrollbar handleScroll={handleScroll} handleUpdate={handleUpdate}>
                    <Header />
                    <Content style={{ backgroundColor: 'white', minHeight: 'calc(100vh - 61px)' }}>
                        {this.props.children}
                    </Content>
                    <Footer />
                </LayoutWithScrollbar>
            </Layout>
        );
    }
}

export default PageWithFullLayout;
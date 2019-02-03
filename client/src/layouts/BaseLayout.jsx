import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserTable from '../pages/UserTable.jsx';
import Home from '../pages/Home.jsx';

const {
    Header, Content, Footer, Sider,
} = Layout;

class BaseLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Layout style={{height: "100vh"}}>
                    <Header className="header" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">About</Menu.Item>
                            <Menu.Item key="3">Contact</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Layout style={{ padding: '24px 0', background: '#fff', height: "80vh"}}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['side']}
                                    style={{ height: '100%' }}>
                                    <Menu.Item key="1"><Icon type="plus-circle" />
                                        <Link to="/Create/">Create User</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2"><Icon type="ordered-list" />
                                        <Link to="/UserList/">User Table</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3"><Icon type="redo" /> Update User</Menu.Item>
                                    <Menu.Item key="4"><Icon type="delete" /> Delete User</Menu.Item>
                                </Menu>
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                {this.props.children}
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Practice
                    </Footer>
                    <Route exact path="/" component={Home} />
                    <Route path="/Create/" component={Home} />
                    <Route path="/UserList/" component={UserTable} />
                </Layout>
            </Router>
        )
    }
}

export default BaseLayout;
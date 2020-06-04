import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link } from "react-router-dom";
import Main from "./Main";
const { Header, Content, Footer } = Layout;

export default function MenuComponent() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" style={{ color: "white" }} />
              Trang chủ
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/form">
              <Icon type="form" style={{ color: "white" }} />
              Form Hồ Sơ
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Developer CTUET</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Main />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        CTUET ©2020 Created by Asta
      </Footer>
    </Layout>
  );
}

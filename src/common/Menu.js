import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import Main from "./Main";
import { HomeOutlined, FormOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
export default function MenuComponent() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {/* <Menu.Item>
              <div style= {{ width: "30px" }}>
              <img style={{width:"100%"}} src="/undraw_wall_post_83ul.png" />
              </div>
            </Menu.Item> */}
            <Menu.Item key="1">
              <Link to="/">
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/form">
                <FormOutlined />
                Form
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
      ,
    </div>
  );
}

import React from "react";
import css from "./style.module.css";
import { Layout, theme, Descriptions, Breadcrumb } from "antd";
import Logo from "../../components/Logo";
const { Header, Content } = Layout;
const Failed = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const headerStyle = {
    paddingLeft: 20,
    background: colorBgContainer,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div>
      <Header style={headerStyle}>
        <Logo />
      </Header>

      <Breadcrumb style={{ paddingLeft: "200px", backgroundColor: "#D8D8D7" }}>
        <Breadcrumb.Item>
          {" "}
          <a href="/">Home</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="localhost:3000">Payment</Breadcrumb.Item>
        <Breadcrumb.Item>Responce</Breadcrumb.Item>
      </Breadcrumb>

      <Layout style={{ heigh: "100%", alignItems: "center" }}>
        <Content className={css.container}>
          <div className={css.flex}>
            <div className={css.box}></div>
            <h1 style={{ color: " #D74242" }}>
              Төлбөр төлөлт амжилтгүй боллоо !!
            </h1>
          </div>
          <Descriptions title="Дэлгэрэнгүй">
            <Descriptions.Item label="Төлөв">Амжилтгүй</Descriptions.Item>
            <Descriptions.Item label="Тайлбар">
              Картын үлдэгдэл хүрэлцэхгүй !
            </Descriptions.Item>
            <Descriptions.Item label="Утасны дугаар">
              80802303
            </Descriptions.Item>
            <Descriptions.Item label="Гэрээний дугаар">
              TV55553210
            </Descriptions.Item>

            <Descriptions.Item label="Дүн">0₮</Descriptions.Item>
            <Descriptions.Item label="Үлдэгдэл">7000₮</Descriptions.Item>

            <Descriptions.Item label="Огноо">
              2023-03-27 17:00
            </Descriptions.Item>
          </Descriptions>
        </Content>
      </Layout>
    </div>
  );
};
export default Failed;

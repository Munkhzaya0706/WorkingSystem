import React from "react";
import { Layout, theme, Row, Typography } from "antd";
import Logo from "../../components/Logo";
import css from "./style.module.css";
import FormNumber from "../../components/FormPhone";
import PayChance from "../../components/Cards/Cards";
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const PaymentTentech = () => {
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
      <Layout style={{ heigh: "100%" }}>
        <Header style={headerStyle}>
          <Logo />
        </Header>
        <Content className={css.contentheigh}>
          <div className={css.contentStyle}>
            <Title
              level={3}
              style={{ fontFamily: "inherit", margin: "20px 0px" }}
            >
              <span style={{ color: "#61B74C" }}>Tentech</span> төлбөр төлөх
              хэсэг
            </Title>
            <FormNumber />
          </div>
          <div>
            <PayChance />
          </div>
          <div className={css.contentStyle}>
            <h3>Төлбөр шалгах зааварчилгаа</h3>
          </div>
        </Content>
        <Footer className={css.footer}>
          <Row style={{ alignItems: "center" }}>
            <a href="https://www.kewiko.mn/бидний-тухай-2/">Бидний тухай</a>|
            <a href="https://www.kewiko.mn/?s=байршил">Салбарын байршил</a>|
            <a href="https://www.kewiko.mn/нээлттэй-ажлын-байр/">Хүний нөөц</a>|
            <a href="https://www.kewiko.mn/portfolio/tentech/">
              Tentech багцын мэдээлэл
            </a>
            <p
              style={{
                fontStyle: "italic",
                fontSize: "15px",
                color: "#61B74C",
                textShadow: "2px 3px 1px #338747",
              }}
            >
              {" "}
              ©KEWIKO LLC
            </p>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
};
export default PaymentTentech;

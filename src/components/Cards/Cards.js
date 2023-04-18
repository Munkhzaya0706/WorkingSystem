import React from "react";
import { Col, Row, Drawer } from "antd";
import { useState } from "react";
import { BankOutlined } from "@ant-design/icons";
import css from "./style.module.css";
const PayChance = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    position: "relative",
    height: 350,
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <section className={css.section}>
        <h2>Төлбөр төлөх боломжууд</h2>
        <Row className={css.row} align={"middle"} justify={"space-between"}>
          <Col span={6} className={css.col}>
            <h3 style={{ textAlign: "center" }}>Most Money</h3>
            <div className={css.box}>
              <div className={css.mostMoney}></div>
            </div>
          </Col>
          <Col span={6}>
            <h3 style={{ textAlign: "center" }}>Банкны карт</h3>
            <div className={css.box}>
              <div className={css.bankcard}></div>
            </div>
          </Col>
          <Col span={6}>
            <h3 style={{ textAlign: "center" }}>SocialPay</h3>
            <div className={css.box}>
              <div className={css.socialPay}></div>
            </div>
          </Col>
          <Col span={6}>
            <h3 style={{ textAlign: "center" }}>Банкны данс</h3>
            <div className={css.box} onClick={() => showDrawer()}>
              <div className={css.khanbank}></div>
            </div>
          </Col>
        </Row>
        <Drawer
          title="Дансаар шилжүүлэг хийх"
          placement="right"
          closable={false}
          onClose={onClose}
          open={open}
          getContainer={false}
          bodyStyle={{ maxWidth: "100%" }}
          height={350}
        >
          <Row align={"middle"} justify={"start"}>
            <BankOutlined
              style={{ fontSize: "32px", color: "#61B74C", marginRight: "5px" }}
            />{" "}
            <h2>ХААН БАНК</h2>{" "}
          </Row>
          <h3>Дансны дугаар:</h3>
          <p>
            5022726666, <span style={{ color: "#4C863D" }}>KEWIKO</span>
          </p>
          <h3>Гүйлгээний утга:</h3>
          <p>(Гэрээний дугаар Утасны дугаар)</p>
        </Drawer>
      </section>
    </div>
  );
};
export default PayChance;

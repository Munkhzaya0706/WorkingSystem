import React, { useState, useContext } from "react";
import $ from "jquery";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Space,
  Modal,
  Input,
  InputNumber,
  Switch,
  Col,
} from "antd";
import { WarningOutlined } from "@ant-design/icons";
import PayValueContext from "../context/PayFormContext";
const FormNumber = () => {
  const navigate = useNavigate();
  const PaymentValues = useContext(PayValueContext);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [phoneSelect, setPhoneSelect] = useState(true);
  const [amount, setAmount] = useState(null);
  const [value, setValue] = useState(null);
  const validPhone = value < 99999999 && value > 60000000 ? true : false;
  const PayValues = {
    userValue: value,
    amount: amount,
  };

  const getUser = () => {
    // var reqData = {
    //   contractNumber: "TV11005024",
    // };
    // //var reqData = "username=ganesh&password=123456&grant_type=password";

    // const config = {
    //   headers: {
    //     Authorization: "Basic aWRrZXdpa286djRUeGpULFZTKS09",
    //     "Content-Type": "application/json",
    //   },
    //   method: "get",
    //   url: "https://api.kewiko.mn/v1/mostmoney/getUser/",
    //   responseType: "json",
    //   params: { data: "contractNumber=TT03333" },
    // };

    axios
      .get("https://api.kewiko.mn/v1/mostmoney/getUser/", {
        params: {
          data: "contractNumber=TV11005024",
        },
        headers: {
          Authorization: "Basic aWRrZXdpa286djRUeGpULFZTKS09",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(function (response) {
        console.log("Heade With Authentication :" + response);
      })
      .catch(function (error) {
        console.log("Post Error : " + error);
      });
    //   var settings = {
    //     url: "https://kwapi.kewiko.mn/Include/auth.json",
    //   };

    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    PaymentValues.setValue(PayValues);
    setIsModalOpen(false);
    navigate("/payment");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggle = () => {
    setPhoneSelect(!phoneSelect);
  };
  console.log(userInfo);

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        name="PhoneForm"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Space>
          <Row>
            <Col span={8}>
              <Switch
                defaultChecked="true"
                checkedChildren="Утасны дугаар"
                unCheckedChildren="Гэрээний дугаар"
                onChange={() => toggle()}
                style={
                  phoneSelect
                    ? { minHeight: "0px" }
                    : { backgroundColor: "#61B74C" }
                }
              />
            </Col>
            <Col span={8}>
              <Form.Item style={{ minWidth: 150 }}>
                <Input
                  type={phoneSelect === false ? "text-area" : "number"}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                  maxLength={9}
                  placeholder={
                    phoneSelect === false ? "Жишээ нь: TT05169" : "80569875"
                  }
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Button
                onClick={() => {
                  getUser();
                }}
                type="primary"
                style={{ margin: "0px 10px" }}
                disabled={
                  validPhone === true || phoneSelect === false ? false : true
                }
              >
                Төлбөр шалгах
              </Button>
            </Col>
          </Row>
        </Space>

        <Row style={{ alignItems: "center" }}>
          <Form.Item label="Төлөх дүн" name="bill">
            <InputNumber min={1000} onChange={(value) => setAmount(value)} />
          </Form.Item>
          <Button
            style={{ margin: "0px 10px", backgroundColor: "#61B74C" }}
            disabled={amount > 1000 && value !== null ? false : true}
            onClick={() => showModal()}
          >
            Төлбөр төлөх
          </Button>
        </Row>
      </Form>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="ҮГҮЙ"
        okText="ТИЙМ"
      >
        <Row>
          <WarningOutlined
            style={{ fontSize: "50px", color: "green", margin: "0px 10px" }}
          />
          <h2>ТӨЛБӨР ТӨЛӨЛТ</h2>
        </Row>
        <p
          style={{
            fontSize: "18px",
          }}
        >
          Та{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "green",
              fontSize: "20px",
            }}
          >
            {value}
          </span>{" "}
          бүртгэлтэй утасны гэрээний дугаартай хэрэглэгчийн{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "green",
              fontSize: "20px",
            }}
          >
            {amount}
          </span>{" "}
          төлбөр төлөхдөө итгэлтэй байна уу?
        </p>
        <p
          style={{
            fontStyle: "italic",
            color: "red",
            fontSize: "15px",
          }}
        >
          Та гэрээний дугаар болон төлбөрийн дүнг сайтар нягтална уу!!!
        </p>
      </Modal>
    </div>
  );
};
export default FormNumber;

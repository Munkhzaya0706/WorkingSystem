import React, { useContext, useState } from "react";
import css from "./style.module.css";
import {
  Checkbox,
  Layout,
  theme,
  Descriptions,
  Select,
  Breadcrumb,
  Row,
  Col,
  Input,
  Form,
  Button,
  Typography,
  Card,
} from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

import Logo from "../../components/Logo";
import PayValueContext from "../../context/PayFormContext";
const { Header, Content } = Layout;
const { Paragraph, Text } = Typography;
const validateMessages = {
  required: `email is required!`,
  types: {
    email: `email is not a valid email!`,
  },
};
const PayForm = () => {
  const PaymentValues = useContext(PayValueContext);
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
  const [payType, setPayType] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBank, setBank] = useState("");
  const [ellipsis, setEllipsis] = useState(true);
  const onChange = (e) => {
    setCheckbox(e.target.checked);
  };
  const cardSelected = payType === "bankcard";

  const submit = () => {
    payType === ""
      ? setError("Төлбөрийн хэлбэрээ сонгоно уу!!!")
      : email === ""
      ? setError("И-Мейл хаягаа хийнэ үү!!!")
      : payType === "bankcard" && selectedBank === ""
      ? setError("Банкаа сонгоно уу!!!")
      : success();
  };
  const success = () => {
    setError("");
    alert("amjilttai");
    console.log(values);
  };
  const values = {
    email,
    payType,
    bank: selectedBank,
    amount: PaymentValues.payValue.PayValues.amount,
    phoneNumber: PaymentValues.payValue.userPhone,
    contactId: PaymentValues.payValue.contractId,
    desc: `${PaymentValues.payValue.contractId} ${PaymentValues.payValue.userPhone}`,
  };
  console.log(ellipsis);

  // console.log(payType);
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
        <Breadcrumb.Item>Pay Form</Breadcrumb.Item>
      </Breadcrumb>

      <Layout style={{ heigh: "100%", alignItems: "center" }}>
        <Content className={css.container}>
          <Descriptions title="Гүйлгээний мэдээлэл" layout="vertical" bordered>
            <Descriptions.Item label="Тайлбар">Төлбөр</Descriptions.Item>
            <Descriptions.Item label="Утга">
              {PaymentValues.payValue.contractId}{" "}
              {PaymentValues.payValue.userPhone}
            </Descriptions.Item>
            <Descriptions.Item label="Дүн">
              {PaymentValues.payValue.PayValues.amount}
            </Descriptions.Item>
          </Descriptions>
          <Row>
            <Col span={12} className={css.select}>
              <h3>НӨАТ баримтын төрөл</h3>
              <Select
                defaultValue="Хувь хүн"
                style={{
                  width: " 100%",
                }}
                placeholder="Баримтын төрлөө сонгоно уу.."
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Хувь хүн",
                  },
                  {
                    value: "disabled",
                    label: "Албан байгууллага",
                    disabled: true,
                  },
                ]}
              />
            </Col>
            <Col span={12} className={css.select}>
              <h3>
                И-мейл хаяг{" "}
                <span style={{ fontSize: "10px" }}>
                  НӨАТ-ийн баримт илгээх болно
                </span>
              </h3>
              <Form name="nest-messages" validateMessages={validateMessages}>
                <Form.Item
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <div
                className={css.box}
                onClick={() => setPayType("bankcard")}
                style={
                  payType === "bankcard"
                    ? { boxShadow: "2px 3px 5px #5162AF" }
                    : { boxShadow: "none" }
                }
              >
                <Row className={css.boxTitle}>
                  <div className={css.bank}></div>
                  <div className={css.title} style={{ color: "#5162AF" }}>
                    BANK CARD
                  </div>
                </Row>
              </div>
            </Col>
            <Col span={8}>
              <div
                className={css.box}
                onClick={() => setPayType("mostmoney")}
                style={
                  payType === "mostmoney"
                    ? { boxShadow: "2px 3px 5px #338747" }
                    : { boxShadow: "none" }
                }
              >
                <Row className={css.boxTitle}>
                  <div className={css.mostMoney}></div>
                  <div className={css.title}>MOST MONEY</div>
                </Row>
              </div>
            </Col>
            <Col span={8}>
              <div
                className={css.box}
                onClick={() => setPayType("socialpay")}
                style={
                  payType === "socialpay"
                    ? { boxShadow: "2px 3px 5px #5998D4" }
                    : { boxShadow: "none" }
                }
              >
                <Row className={css.boxTitle}>
                  <div className={css.social}></div>
                  <div className={css.title} style={{ color: "#5998D4" }}>
                    SOCIAL PAY
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          {cardSelected ? (
            <Select
              expandIcon={CreditCardOutlined}
              status="warning"
              style={{
                width: " 60%",
                marginTop: "20px",
              }}
              placeholder="Банкаа сонгоно уу.."
              onSelect={(value) => setBank(value)}
              optionFilterProp="children"
              rules={[{ required: true }]}
              options={[
                {
                  value: "khanbank",
                  label: "Хаан банк",
                },
                {
                  value: "statebank",
                  label: "Төрийн банк",
                },
                {
                  value: "golomtbank",
                  label: "Голомт банк",
                },
                {
                  value: "tdbbank",
                  label: "Худалдаа хөгжлийн банк",
                },

                {
                  value: "khasbank",
                  label: "Хас банк",
                },

                {
                  value: "capitalbank",
                  label: "Капитал банк",
                },
                {
                  value: "capitronbank",
                  label: "Капитрон банк",
                },
                {
                  value: "arigbank",
                  label: "Ариг банк",
                },
                {
                  value: "ulaanbaatar",
                  label: "Улаанбаатар банк",
                },
                {
                  value: "nbi bank",
                  label: "NBI банк",
                },
                {
                  value: "chingiskhan",
                  label: "Чингис хаан банк",
                },
              ]}
            />
          ) : (
            ""
          )}

          <Card className={css.criteria} title="Үйлчилгээний нөхцөл">
            <Paragraph>
              <p>
                Кевико интернет үйлчилгээнд wireless.kewiko.mn вебсайтаар
                бүртгүүлэх, интернетээр дамжуулан үйлчилгээний эрх худалдан
                авахад доорх нөхцлийг хүлээн зөвшөөрч баталгаажуулсан байх
                хэрэгтэй. Кевико компани вэбсайтын мэдээлэлийн үнэн зөв эсэх,
                үнэ тариф, урамшуулал болон шинэ үйлчилгээний мэдээлэл зэргийг
                бүрэн хариуцна. Вебсайт 24 цагийн турш байнгын ажиллагаатай байх
                ба бүх үйлчилгээ автоматаар хийгдэнэ.
              </p>
              <h4>Бүртгүүлэх</h4>
              Хэрэглэгч wireless.kewiko.mn-д бүртгүүлснээр Кевико интернет
              ашиглах өөрийн Хэрэглэгчийн нэр, нууц үгтэй бүртгэлтэй хэрэглэгч
              болно. Хэрэглэгч шинээр бүртгүүлэхийн тулд интернетэд нэвтрэх
            </Paragraph>

            <Paragraph
              ellipsis={
                ellipsis
                  ? {
                      rows: 2,
                      expandable: true,
                      symbol: "more",
                    }
                  : false
              }
            >
              Хэрэглэгчийн нэр, нууц үгээс гадна овог нэр, е-майл хаяг, утасны
              дугаар зэрэг хувийн мэдээллийг заавал оруулна. Хэрэглэгчийн хувийн
              мэдээллийн үнэн зөв, бодит байдал, Хэрэглэгчийн нэр, нууц үгийн
              хадгалалт, хамгаалалтын асуудлыг хэрэглэгч бүрэн хариуцна.
              Амжилттай бүртгүүлмэгц тухайн хэрэглэгчид данс үүснэ. Дансанд
              худалдан авалтын түүх, хувийн мэдээлэл, интернет ашигласан түүх
              зэрэг мэдээлэл хадгалагдах бөгөөд картын холбогдолтой ямар ч
              мэдээлэл хадгалагдахгүй.
              <h4>Интернэт худалдаа</h4> wireless.kewiko.mn сайтаас интернэтээр
              дамжуулан Кевико интернет үйлчилгээний эрхийг худалдана. Хэрэглэгч
              буруу Хэрэглэгчийн нэр оруулж худалдан авалт хийхээс сэргиийлж
              өөрийн бүртгэлтэй Хэрэглэгчийн нэр, нууц үгээ оруулан нэвтэрсний
              дараа бүтээгдэхүүний жагсаалтаас хүссэн бүтээгдэхүүнийг сонгон
              үнийн дүнг банкинд төлнө. Хэрэглэгч банкны картын дугаар болон
              бусад мэдээлэлийг хэрэглэгчийн сонгосон банкны нууцлал
              хамгаалалттай вэб сайтадад оруулж худалдан авалт хийнэ. Төлбөр
              амжилттай төлөгдсөн даруй хэрэглэгчийн үйлчилгээний эрх сунгагдах
              бөгөөд тухайн Хэрэглэгчийн эрхээр интернет ашиглаж эхэлсэн цаг
              минутаас үйлчилгээний эрхийн хугацаа тоологдоно. Хэрэв урьд нь
              хэрэглэж байсан эрхээ дуусаагүй байхад дахин эрх худалдан авбал
              түрүүчийн үлдэгдэл хугацаа хүчингүй болно.
              <h4>Нууцлал ба аюулгүй байдал</h4>
              <p>
                Вэбсайтын найдвартай ажиллагаа, түүний аюулгүй байдал,
                хэрэглэгчдийн хувийн мэдээллийн бүрэн бүтэн байдал, нууцлалыг
                Кевико компани хариуцна. Кевико компани нийтээр зөвшөөрөгдсөн
                сертификат ашиглан Хэрэглэгчийн нэр, нууц үгийг шифрлэн дамжуулж
                бусдад алдагдахаас хамгаална. Хэрэглэгчийн банкны картын дугаар
                бусад мэдээлэлийн нууцлалыг Кевико ХХК хариуцахгүй.
              </p>
              <h4>Зохиогчийн эрх</h4>
              <p>
                Кевико худалдааны тэмдэгт болон боловсруулсан програм хангамж,
                мэдээ материал, дизайн зэрэг нь Кевико ХХК-ний албан ёсны өмч
                бөгөөд үүнтэй холбогдон гарах аливаа асуудлыг Монгол Улсын хууль
                дүрмийн дагуу шийдвэрлэнэ.
              </p>
              <h4>Холбоо барих</h4>
              <p>
                Хэрэглэгч үйлчилгээний талаар санал хүсэлт, гомдлоо доорх
                хаягаар илгээнэ үү.
              </p>
              <p>
                Манай хаяг: 7777-7778, 2125-2518 Лавлах Утас: 7777-7778,
                2125-2518
              </p>
              <p>
                Цахим Хуудас: <a href="https://www.kewiko.mn">www.kewiko.mn</a>
              </p>
              <p>
                Имэйл Хаяг: <a href=" info@kewiko.mn">info@kewiko.mn</a>
              </p>
              {/* <DoubleLeftOutlined
                style={{ marginLeft: "20px", color: "blue" }}
                onClick={() => {
                  setEllipsis(false);
                }}
              /> */}
            </Paragraph>
          </Card>

          <Checkbox style={{ marginLeft: "30px" }} onChange={onChange}>
            Checkbox
          </Checkbox>
          <br></br>
        </Content>
        <Button
          disabled={!checkbox}
          type="primary"
          size="large"
          onClick={() => submit()}
          style={{
            padding: "0 50px",
            textAlign: "center",
            color: "#ffff",
          }}
        >
          Төлөх
        </Button>
        <br></br>
        <Text type="danger" style={{ paddingBottom: "20px" }}>
          {error}
        </Text>
      </Layout>
    </div>
  );
};
export default PayForm;

// import React from "react";
import { Space, Layout, Row, Input, Button, Flex, Typography } from "antd";

import misisLogo from "../assets/MISIS_logoblock_main_1color_rus_RGB-01.svg";
// import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const { Header, Footer, Content } = Layout;

// const MisisLogo = () => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 1122.95 555"
//     >
//       <rect />
//       <path d="M277.5,236.5a41,41,0,1,0,41,41A41,41,0,0,0,277.5,236.5Zm-146,41a146,146,0,0,1,146-146V90C174,90,90,174,90,277.5S174,465,277.5,465V423.5A146,146,0,0,1,131.5,277.5Zm146,52a52,52,0,1,1,52-52H371A93.5,93.5,0,1,0,277.5,371Zm0-198h0V173h0a104.5,104.5,0,0,1,0,209h0v41.5h0a146,146,0,0,0,0-292ZM510.05,345.43h-.14L494.84,317.5h-8.71l19.92,36.29-.28.5c-1.93,3.92-4.29,6.57-9.07,6.57a16.56,16.56,0,0,1-4.15-.57v6.85a12.92,12.92,0,0,0,5.15.93c7,0,11.78-4.07,15.21-11.64l17.5-38.93h-8.07Zm62.41-6.86H547.81V317.5H540v50h7.85V345.71h24.65V367.5h7.85v-50h-7.85Zm30.47,16.07h-.21V317.5h-7.86v50H602l27.35-37.14h.15V367.5h7.85v-50h-7.14Zm77.77-14a10.79,10.79,0,0,0,6.21-9.93c0-7.14-6.07-13.21-15-13.21h-20v50H673c9.65,0,16.43-6.79,16.43-14.64C689.41,346.29,684.34,342,680.7,340.64Zm-20.93-16.35h12.14c4.29,0,7.14,2.85,7.14,6.78s-2.85,6.79-7.14,6.79H659.77ZM673,360.71H659.77V344.29H673c5,0,8.57,3.57,8.57,8.21S678,360.71,673,360.71Zm36-15.57h21.79V338H708.94V324.64h27.5V317.5H701.09v50h36.07v-7.14H708.94Zm58.89-27.64h-20v50h7.85V349.64h12.15c9.64,0,16.78-7.14,16.78-16.07S777.47,317.5,767.83,317.5Zm0,25H755.68V324.64h12.15a8.93,8.93,0,0,1,0,17.86Zm51.6,18.57a18.57,18.57,0,1,1,0-37.14,18.88,18.88,0,0,1,14.86,6.93l5.5-4.5a26.2,26.2,0,0,0-20.36-9.57c-15,0-26.43,11.42-26.43,25.71s11.43,25.71,26.43,25.71a26.79,26.79,0,0,0,20.71-9.78l-5.5-4.5C831.72,357.21,827.14,361.07,819.43,361.07Zm38.86-6.43h-.22V317.5h-7.86v50h7.15l27.35-37.14h.15V367.5h7.85v-50h-7.14Zm44.13-30h15V367.5h7.86V324.64h15V317.5H902.42Zm55.38,20.5h21.79V338H957.8V324.64h27.5V317.5H949.94v50H986v-7.14H957.8Zm35.92-27.64v7.14h15V367.5h7.86V324.64h15V317.5Zm-450-89-48.59-52.23H487.5V277.5h21.31v-57L540.74,254h6l31.93-33.52v57h21.31V176.31H592.3Zm97.2,9.08V177.5h-21.3V278.69h8.24L690,217.39V277.5h21.3V176.31h-8.24Zm136.13-41.88c11.07,0,20.94,6,27.42,15.84l15-14.5a52.49,52.49,0,0,0-42.42-21.79c-28.78,0-53,22.7-53,52.21s24.27,52.21,53,52.21a52.49,52.49,0,0,0,42.42-21.79l-15-14.5c-6.48,9.84-16.35,15.84-27.42,15.84-17.19,0-31.19-13.18-31.19-31.76S759.86,195.74,777.05,195.74Zm77.35,41.88V177.5H833.09V278.69h8.25l62.16-61.3V277.5h21.31V176.31h-8.25Zm136.13,21.64c-17.2,0-31.19-13.18-31.19-31.76s14-31.76,31.19-31.76c11.07,0,20.94,6,27.41,15.84l15-14.5a52.51,52.51,0,0,0-42.42-21.79c-28.79,0-53.06,22.7-53.06,52.21s24.27,52.21,53.06,52.21A52.51,52.51,0,0,0,1033,257.92l-15-14.5C1011.47,253.26,1001.6,259.26,990.53,259.26Z" />
//     </svg>
//   );
// };

const { Title } = Typography;

export default function LogIn() {
  // const [passwordVisible, setPasswordVisible] = React.useState(false);


  return (
    <>
      <Layout>
        <Header style={{ background: "#fff", paddingInline: "16" }}>
          <Row>
            <img src={misisLogo} style={{ width: 120 }} />
          </Row>
        </Header>
        <Content style={{ height: "calc(100vh - 55px)" }}>
          <Flex align="center" justify="center">
            <Space direction="vertical" style={{ maxWidth: "280px" }}>
              <Title level={3}>Зайти в электронную библиотеку</Title>
              <Input size={"middle"} placeholder="login" />
              <Input.Password size={"middle"} placeholder="password" />
              <Button style={{ minWidth: "280px" }} type="primary" size={"middle"}>
                Войти
              </Button>
            </Space>
          </Flex>
        </Content>

        {/* <br/>
        <Col>
          <Row justify={'center'}>
          <Content style={{alignContent: 'start'}}>
                <Col>
                <h2 style={{marginLeft: '16px'}}>Электронная библиотека МИСИС</h2>
                  <br/>
                  <Row justify={"center"}>
                    <Col span={12}>
                      <Input
                        placeholder="login"
                        style={{maxWidth: '280px'}}
                      />
                    </Col>
                  </Row>
                  <Row justify={'center'}>
                    <Col span={12}>
                      <Input.Password
                        placeholder="password"
                        style={{maxWidth: '280px'}}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Col>
                  </Row>
                  <br/>
                  <Row justify={'center'}>
                    <Button type="primary" >Войти</Button>
                  </Row>
                </Col>
            </Content>
            </Row>
        </Col> */}

        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

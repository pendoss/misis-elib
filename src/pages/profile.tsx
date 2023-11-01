
import { Layout, Row, Button, Col } from "antd";

import misisLogo from "../assets/MISIS_logoblock_main_1color_rus_RGB-01.svg";
import { Content, Footer, Header } from "antd/es/layout/layout";


// const onChange = (key: string) => {
//     console.log(key);
// };

export default function Profile() {


    return (
        <>
            <Layout>
                <Header style={{ background: "#fff", paddingInline: "16" }}>
                    <Row justify={"space-between"}>
                        <Col span={8}>
                            <img src={misisLogo} style={{ width: 120 }} />
                        </Col>
                        <Col>
                            <Button >Profile</Button>
                        </Col>
                    </Row>
                </Header>
                <Content style={{ height: "100%", marginTop: "25px", marginLeft: "16px", marginRight: "16px" }}>
                    
                </Content>
                <Footer style={{ textAlign: 'center' }}>prod by ТVEV</Footer>
            </Layout>
        </>
    );
}

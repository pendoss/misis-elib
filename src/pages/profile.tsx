
import { Layout, Row, Button, Col, Card, List, Flex, Space } from "antd";

import misisLogo from "../assets/MISIS_logoblock_main_1color_rus_RGB-01.svg";
import { Content, Footer, Header } from "antd/es/layout/layout";
// import { useState } from "react";


// const onChange = (key: string) => {
//     console.log(key);
// };

const data = Array.from({ length: 3 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `book title ${i}`,
    author: `Автор ${i}`,
    bookId: `${i}`,
    bookStartYear: `Год издания: ${1990 + i}`,
    numOfPages: `Количество страниц: ${100 + i}`,
}));

// let favoritedBooks;

// function AddToFavorites({bookId?: number}){
//     const onAdd = (id: number)=> {favoritedBooks.push(id)}
    
//     // [bookId, setBookId] = useState<string>()
//     return(
//         onAdd(bookId)
//     )
// }
function CardView() {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 5,
                xxl: 6,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <Card title={item.title} style={{ minWidth: "250px" }} bodyStyle={{ justifyContent: 'space-between', boxShadow: "none" }}>
                        <Flex justify="space-between" align="flex-start">
                            <Space direction="vertical" size={"middle"}>
                                {item.author}
                                {item.bookStartYear}
                                {item.numOfPages}
                            </Space>
                            <img
                                alt="preview"
                                src="src\assets\cover.jpg"
                                style={{ borderRadius: "10px", width: "calc(100% - 0px)", minWidth: "75px", maxWidth: "320px" }}
                            />
                        </Flex>
                    </Card>
                </List.Item>
            )}
        />
    );

}

const userInfo: [string, string, string] = ["Иван", "Иванович", "Иванов"];
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
                    <Card title={userInfo[2] + ' ' + userInfo[0] + ' ' + userInfo[1]} >

                        <CardView />
                    </Card>
                </Content>
                <Footer style={{ textAlign: 'center' }}>prod by ТVEV</Footer>
            </Layout>
        </>
    );
}

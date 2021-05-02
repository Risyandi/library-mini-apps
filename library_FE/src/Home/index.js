import React, {useState, useEffect} from 'react';
import {getCookie, xhr} from '../utils';
import {Container, Footer, Content, Navbar, Table, Section} from 'react-bulma-components';

const Homepage = (props) => {
    // const csrfTokenValue = getCookie('csrftoken');;

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const bukuRes = await xhr.get('/buku');
        console.log(bukuRes, "response buku api");
    }

    return(
    <Container fullhd breakpoint={'fluid'}>
        {/* navbar */}
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item href="#">
                <img
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    height="28"
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
            <Navbar.Container>
                <Navbar.Item href="#">
                    Pelanggan
                </Navbar.Item>
                <Navbar.Item href="#">
                    Buku
                </Navbar.Item>
                <Navbar.Item href="#">
                    Transaksi
                </Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>
        </Navbar>
        
        {/* table pelanggan */}
        <Section>
            <Container>
            <h1><strong>Data Pelanggan</strong></h1>
            <Table
            size={'fullwidth'}
            striped bordered hoverable 
            >
                <thead>
                    <tr>
                        <th>No </th>
                        <th>kolom </th>
                        <th>kolom </th>
                        <th>kolom </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>field</td>
                        <td>field</td>
                        <td>field</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        </Section>

        {/* table buku */}
        <Section>
            <Container>
            <h1><strong>Data Buku</strong></h1>
            <Table
            size={'fullwidth'}
            striped bordered hoverable 
            >
                <thead>
                    <tr>
                        <th>No </th>
                        <th>kolom </th>
                        <th>kolom </th>
                        <th>kolom </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>field</td>
                        <td>field</td>
                        <td>field</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        </Section>

        {/* table transaksi */}
        <Section>
            <Container>
                <h1><strong>Data Transaksi</strong></h1>
                <Table
                size={'fullwidth'}
                striped bordered hoverable 
                >
                    <thead>
                        <tr>
                            <th>No </th>
                            <th>kolom </th>
                            <th>kolom </th>
                            <th>kolom </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>field</td>
                            <td>field</td>
                            <td>field</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Section>
     
        {/* footer */}
        <Footer>
            <Container>
                <Content style={{ textAlign: 'center' }}>
                <p>
                    <strong>Bulma</strong> by{' '}
                    <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
                    is licensed under
                    <a href="http://opensource.org/licenses/mit-license.php">
                    {' '}
                    MIT
                    </a>
                    . The website content is licensed{' '}
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                    </a>
                    .
                </p>
                </Content>
            </Container>
        </Footer>
    </Container>
    )
}

export default Homepage;
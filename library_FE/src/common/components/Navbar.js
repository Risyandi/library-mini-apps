import React from 'react';
import {Navbar} from 'react-bulma-components';
import {img} from '../../assets/img';

const NavbarTop = (props) => {
    return (
    // Navbar component
    <Navbar>
        <Navbar.Brand>
                <Navbar.Item href="/">
                <img
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    height="28"
                    src={img.logoBulma}
                    width="112"
                />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Container>
                <Navbar.Item href="#pelanggan">
                    Pelanggan
                </Navbar.Item>
                <Navbar.Item href="#buku">
                    Buku
                </Navbar.Item>
                <Navbar.Item href="#transaksi">
                    Transaksi
                </Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>
    </Navbar>
    )
}

export default NavbarTop;
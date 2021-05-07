import React from 'react';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditTransaksi from './EditTransaksi';
import CreateTransaksi from './CreateTransaksi';

const TransaksiPage = (props) => {
    const idTransaksi = props.match.params.id;
    const urlCreate = props.match.url;

    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>

            {
            urlCreate === "/create/transaksi" ? 
                // Create Form Transaksi
                <CreateTransaksi/>
            :
                // Edit Form Transaksi
                <EditTransaksi idTransaksi={idTransaksi}/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default TransaksiPage;
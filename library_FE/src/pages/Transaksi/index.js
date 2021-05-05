import React, {useEffect, useState} from 'react';
import {xhr} from '../../utils';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditTransaksi from './EditTransaksi';
import CreateTransaksi from './CreateTransaksi';

const TransaksiPage = (props) => {
    const idTransaksi = props.match.params.id;
    const typeCreate = props.location.state.createType;

    const [transaksi, setTransaksi] = useState([]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idTransaksi !== undefined) {
            const transaksiRes = await xhr.get(`/transaksi/${idTransaksi}`);
            const dataTransaksi = transaksiRes;
            setTransaksi(dataTransaksi);
        }
    }

    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>

            {
            typeCreate !== false ? 
                // Create Form Transaksi
                <CreateTransaksi/>
            :
                // Edit Form Transaksi
                <EditTransaksi data={transaksi !== undefined ? transaksi : transaksi}/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default TransaksiPage;
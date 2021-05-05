import React, {useEffect, useState} from 'react';
import {xhr} from '../../utils';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditPelanggan from './EditPelanggan';
import CreatePelanggan from './CreatePelanggan';

const PelangganPage = (props) => {
    const idPelanggan = props.match.params.id;
    const typeCreate = props.location.state.createType;

    const [pelanggan, setPelanggan] = useState([]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idPelanggan !== undefined) {
            const pelangganRes = await xhr.get(`/pelanggan/${idPelanggan}`);
            const dataPelanggan = pelangganRes;
            setPelanggan(dataPelanggan);
        }
    }

    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>

            {
            typeCreate !== false ? 
                // Create Form Pelanggan
                <CreatePelanggan />
            :
                // Edit Form Pelanggan
                <EditPelanggan data={pelanggan !== undefined ? pelanggan : pelanggan }/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default PelangganPage;
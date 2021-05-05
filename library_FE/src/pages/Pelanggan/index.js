import React from 'react';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditPelanggan from './EditPelanggan';
import CreatePelanggan from './CreatePelanggan';

const PelangganPage = (props) => {
    const idPelanggan = props.match.params.id;
    const typeCreate = props.location.state.createType;

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
                <EditPelanggan idPelanggan={idPelanggan}/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default PelangganPage;
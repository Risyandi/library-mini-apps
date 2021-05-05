import React, {useEffect} from 'react';
// import {getCookie, xhr} from '../../utils';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';
import EditPelanggan from './EditPelanggan';

const PelangganPage = (props) => {

    useEffect(() => {

    }, []);

    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>

            {/* Edit Form Pelanggan */}
            <EditPelanggan/>

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default PelangganPage;
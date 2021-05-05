import React from 'react';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditBuku from './EditBuku';
import CreateBuku from './CreateBuku';

const BukuPage = (props) => {
    const idBuku = props.match.params.id;
    const typeCreate = props.location.state.createType;

    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>
            
            {
            typeCreate !== false ? 
                // Create form buku
                <CreateBuku/>
            :
                // Edit form buku
                <EditBuku idBuku={idBuku}/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default BukuPage;
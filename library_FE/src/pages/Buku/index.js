import React from 'react';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditBuku from './EditBuku';
import CreateBuku from './CreateBuku';

const BukuPage = (props) => {
    const idBuku = props.match.params.id;
    const urlCreate = props.match.url;
    
    return (
        <Container fullhd breakpoint={'fluid'}>
            {/* navbar */}
            <NavbarTop/>
            
            {
            urlCreate === "/create/buku" ? 
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
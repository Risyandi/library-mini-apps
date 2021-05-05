import React, {useEffect, useState} from 'react';
import {xhr} from '../../utils';
import {Container} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

import EditBuku from './EditBuku';
import CreateBuku from './CreateBuku';

const BukuPage = (props) => {
    const idBuku = props.match.params.id;
    const typeCreate = props.location.state.createType;

    const [buku, setBuku] = useState([]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idBuku !== undefined) {
            const bukuRes = await xhr.get(`/buku/${idBuku}`);
            const dataBuku = bukuRes;
            setBuku(dataBuku);
        }
    }

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
                <EditBuku data={buku !== undefined ? buku : buku}/>
            }

            {/* footer */}
            <FooterBottom/>
        </Container>
    )
}

export default BukuPage;
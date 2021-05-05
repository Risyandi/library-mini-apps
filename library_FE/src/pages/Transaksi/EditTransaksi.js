import React, {useEffect} from 'react';
// import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditTransaksi = (props) => {

    useEffect(() => {
        
    }, []);

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Edit Transaksi
        </Heading>
            <Form.Field>
                <Form.Label>
                Tanggal Mulai Peminjaman
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="2 May 20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Tanggal Akhir Peminjaman
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="2 May 20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Tanggal Pengembalian
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="2 May 20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Button.Group align="right">
                <Button color="success">Save</Button>
            </Button.Group>
        </Box>
    </Container>
    )
}

export default EditTransaksi;
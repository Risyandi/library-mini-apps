import React, {useEffect} from 'react';
// import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditPelanggan = (props) => {

    useEffect(() => {
        
    }, []);

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Pelanggan
        </Heading>
            <Form.Field>
                <Form.Label>
                Nama Lengkap
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="John doe"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                No. Handphone
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="+628xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Email
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="john.doe@example.com"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Alamat
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="jln. adress example No 120."
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Tanggal Bergabung
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="1 May 20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Kadaluarsa Member
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="2 May 20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Button.Group align="right">
                <Button color="success">Create</Button>
            </Button.Group>
        </Box>
    </Container>
    )
}

export default EditPelanggan;
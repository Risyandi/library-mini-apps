import React, {useEffect} from 'react';
// import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditBuku = (props) => {

    useEffect(() => {
        
    }, []);

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Buku
        </Heading>
            <Form.Field>
                <Form.Label>
                Judul
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="Harry Potters Edition II"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Penerbit
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="animaso"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                ISBN Kode
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="ISBN-090xxxxx-20xx"
                    type="text"
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Pengarang
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
                Tahun Terbit
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="20xx"
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

export default EditBuku;
import React, {useEffect, useState} from 'react';
// import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditPelanggan = (props) => {
    // let dataPelanggan = props.data;
    const initPelanggan = {
        address: 'hello',
        email: 'hello',
        end_date:  'hello',
        first_name: 'hello',
        handphone: 'hello', 
        id: 'hello',
        join_date: 'hello', 
        last_name: 'hello',
    }
    const [inputs, setInputs] = useState(initPelanggan);
    console.log(inputs.address, 'value inputs');

    useEffect(() => {
        
    }, []);

    const onChangeField = fieldName => ({
        target
    }) =>
    setInputs(state => ({
        ...state,
        [fieldName]: target.value
    })); 

    const onUpdateField = async () => {
        console.log('update data pelanggan');
    }

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Edit Pelanggan
        </Heading>
            <Form.Field>
                <Form.Label>
                Nama Depan
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="John doe"
                    type="text"
                    key="first_name"
                    name="first_name"
                    onChange={onChangeField('first_name')}
                    value={inputs.first_name}
                />
                </Form.Control>
            </Form.Field>
            <Form.Field>
                <Form.Label>
                Nama Belakang
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="John doe"
                    type="text"
                    key="last_name"
                    name="last_name"
                    onChange={onChangeField('last_name')}
                    value={inputs.last_name}
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
                    key="handphone"
                    name="handphone"
                    onChange={onChangeField('handphone')}
                    value={inputs.handphone}
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
                    key="email"
                    name="email"
                    onChange={onChangeField('email')}
                    value={inputs.email}
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
                    key="address"
                    name="address"
                    onChange={onChangeField('address')}
                    value={inputs.address}
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
                    key="join_date"
                    name="join_date"
                    onChange={onChangeField('join_date')}
                    value={inputs.join_date}
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
                    key="end_date"
                    name="end_date"
                    onChange={onChangeField('end_date')}
                    value={inputs.end_date}
                />
                </Form.Control>
            </Form.Field>
            <Button.Group 
            align="right"
            onClick={onUpdateField}>
                <Button color="success">Save</Button>
            </Button.Group>
        </Box>
    </Container>
    )
}

export default EditPelanggan;
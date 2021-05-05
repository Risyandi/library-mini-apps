import React, {useState} from 'react';
import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const CreatePelanggan = (props) => {
    const initPelanggan = {
        address: '',
        email: '',
        end_date:  '',
        first_name: '',
        handphone: '', 
        join_date: '', 
        last_name: '',
    }

    const csrfTokenValue = getCookie('csrftoken');
    const [inputs, setInputs] = useState(initPelanggan);

    const onCreateField = async () => {
        let formdata = new FormData();
        formdata.append("address", `${inputs.address}`);
        formdata.append("email", `${inputs.email}`);
        formdata.append("end_date", `${inputs.end_date}`);
        formdata.append("first_name", `${inputs.first_name}`);
        formdata.append("handphone", `${inputs.handphone}`);
        formdata.append("join_date", `${inputs.join_date}`);
        formdata.append("last_name", `${inputs.last_name}`);

        // Display the key/value pairs formdata
        // for(var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        try {
            const postDataPelanggan = await xhr.post('/pelanggan/', formdata, { 'X-CSRFTOKEN': csrfTokenValue });
            window.location.href = "/";
            return postDataPelanggan;
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeField = fieldName => ({
        target
    }) =>
    setInputs(state => ({
        ...state,
        [fieldName]: target.value
    })); 

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Create Pelanggan
        </Heading>
            <Form.Field>
                <Form.Label>
                Nama Depan
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="John doe"
                    type="text"
                    key="firstname"
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
                    key="lastname"
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
                    key="alamat"
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
                    key="joindate"
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
                    key="expiremember"
                    name="end_date"
                    onChange={onChangeField('end_date')}
                    value={inputs.end_date}
                />
                </Form.Control>
            </Form.Field>
            <Button.Group 
            align="right"
            onClick={onCreateField}>
                <Button color="success">Create</Button>
            </Button.Group>
        </Box>
    </Container>
    )
}

export default CreatePelanggan;
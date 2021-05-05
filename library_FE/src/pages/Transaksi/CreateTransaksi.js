import React, {useState} from 'react';
import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const CreateTransaksi = (props) => {
    const initTransaksi = {
        start_date_borrow: '',
        end_date_borrow: '',
        date_return: ''
    }

    const csrfTokenValue = getCookie('csrftoken');
    const [inputs, setInputs] = useState(initTransaksi);

    const onCreateField = async () => {
        let formdata = new FormData();
        formdata.append("start_date_borrow", `${inputs.start_date_borrow}`);
        formdata.append("end_date_borrow", `${inputs.end_date_borrow}`);
        formdata.append("date_return", `${inputs.date_return}`);

        // Display the key/value pairs formdata
        // for(var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        try {
            const postDataTransaksi = await xhr.post('/transaksi/', formdata, { 'X-CSRFTOKEN': csrfTokenValue });
            return postDataTransaksi;
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
            Form Create Transaksi
        </Heading>
            <Form.Field>
                <Form.Label>
                Tanggal Mulai Peminjaman
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="2 May 20xx"
                    type="text"
                    key="tanggal mulai peminjaman"
                    name="start_date_borrow"
                    onChange={onChangeField('start_date_borrow')}
                    value={inputs.start_date_borrow}
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
                    key="tanggal akhir peminjaman"
                    name="end_date_borrow"
                    onChange={onChangeField('end_date_borrow')}
                    value={inputs.end_date_borrow}
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
                    key="tanggal pengambilan"
                    name="date_return"
                    onChange={onChangeField('date_return')}
                    value={inputs.date_return}
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

export default CreateTransaksi;
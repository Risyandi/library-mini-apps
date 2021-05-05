import React, {useEffect, useState} from 'react';
import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditTransaksi = (props) => {
    let idTransaksi = props.idTransaksi;
    const initTransaksi = {
        start_date_borrow: '',
        end_date_borrow: '',
        date_return: '',
    }

    const csrfTokenValue = getCookie('csrftoken');
    const [inputs, setInputs] = useState(initTransaksi);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idTransaksi !== undefined) {
            const transaksiRes = await xhr.get(`/transaksi/${idTransaksi}`);
            const dataTransaksi = transaksiRes;
            setInputs(dataTransaksi);
        }
    }

    const onChangeField = fieldName => ({
        target
    }) =>
    setInputs(state => ({
        ...state,
        [fieldName]: target.value
    })); 

    const onUpdateField = async () => {
        let formdata = new FormData();
        formdata.append("start_date_borrow", `${inputs.start_date_borrow}`);
        formdata.append("end_date_borrow", `${inputs.end_date_borrow}`);
        formdata.append("date_return", `${inputs.date_return}`);

        // Display the key/value pairs formdata
        // for(var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        try {
            const putDataTransaksi = await xhr.put(`/transaksi/${idTransaksi}/`, formdata, { 'X-CSRFTOKEN': csrfTokenValue });
            return putDataTransaksi;
        } catch (error) {
            console.log(error);
        }
    }
    
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
                    key="tanggal pengembalian"
                    name="date_return"
                    onChange={onChangeField('date_return')}
                    value={inputs.date_return}
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

export default EditTransaksi;
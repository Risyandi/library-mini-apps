import React, {useEffect, useState} from 'react';
import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading, Icon} from 'react-bulma-components';

const EditTransaksi = (props) => {

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idTransaksi !== undefined) {
            const transaksiRes = await xhr.get(`/transaksi/${idTransaksi}`);
            const dataTransaksi = transaksiRes;
            setInputs(dataTransaksi);

            const bukuRes = await xhr.get(`/buku/`);
            const dataBuku = bukuRes;
            setBuku(dataBuku);
            
            const pelangganRes = await xhr.get(`/pelanggan/`);
            const dataPelanggan = pelangganRes;
            setPelanggan(dataPelanggan);
        
        }
    }

    
    let idTransaksi = props.idTransaksi;
    const initTransaksi = {
        start_date_borrow: '',
        end_date_borrow: '',
        date_return: '',
        buku: null,
        peminjam: null,
    }

    const csrfTokenValue = getCookie('csrftoken');
    const [inputs, setInputs] = useState(initTransaksi);
    const [buku, setBuku] = useState([]);
    const [pelanggan, setPelanggan] = useState([]);

    
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
        formdata.append("buku", parseInt(inputs.buku));
        formdata.append("peminjam", parseInt(inputs.peminjam));

        // Display the key/value pairs formdata
        // for(var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        try {
            const putDataTransaksi = await xhr.put(`/transaksi/${idTransaksi}/`, formdata, { 'X-CSRFTOKEN': csrfTokenValue });
            window.location.href = "/";
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
            <Form.Field>
            <Form.Label>Buku</Form.Label>
                <Form.Control>
                    <Form.Select
                    options
                    key="nama buku"
                    name="buku"
                    onChange={onChangeField('buku')}
                    value={inputs.buku}
                    >
                    {
                        buku.map((data, idx) => {
                            return (
                                <option key={idx} value={data.id}>{data.title}</option>
                            )
                        })
                    }
                    </Form.Select>
                    <Icon align="left">
                        <i className="fas fa-user" />
                    </Icon>
                </Form.Control>
            </Form.Field>
            <Form.Field>
            <Form.Label>Peminjam</Form.Label>
                <Form.Control>
                    <Form.Select
                    options
                    key="nama peminjam"
                    name="peminjam"
                    onChange={onChangeField('peminjam')}
                    value={inputs.peminjam}
                    >
                    {
                        pelanggan.map((data, idx) => {
                            return (
                                <>
                                <option key={idx} value={data.id}>{data.first_name +' '+ data.last_name}</option>
                                </>
                            )
                        })
                    }
                    </Form.Select>
                    <Icon align="left">
                        <i className="fas fa-user" />
                    </Icon>
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
import React, {useEffect, useState} from 'react';
import {getCookie, xhr} from '../../utils';
import {Box, Form, Container, Button, Heading} from 'react-bulma-components';

const EditBuku = (props) => {
    let idBuku = props.idBuku;

    const initBuku = {
        title: '',
        isbn_code: '',
        author: '',
        publisher: '',
        year_publish: '',
    }
    const csrfTokenValue = getCookie('csrftoken');
    const [inputs, setInputs] = useState(initBuku);
    
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        if (idBuku !== undefined) {
            const bukuRes = await xhr.get(`/buku/${idBuku}`);
            const dataBuku = bukuRes;
            setInputs(dataBuku);
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
        formdata.append("title", `${inputs.title}`);
        formdata.append("isbn_code", `${inputs.isbn_code}`);
        formdata.append("author", `${inputs.author}`);
        formdata.append("publisher", `${inputs.publisher}`);
        formdata.append("year_publish", `${inputs.year_publish}`);

        // Display the key/value pairs formdata
        // for(var pair of formdata.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        // }

        try {
            const putDataBuku = await xhr.put(`/buku/${idBuku}/`, formdata, { 'X-CSRFTOKEN': csrfTokenValue });
            window.location.href = "/";
            return putDataBuku;
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <Container fullhd breakpoint={'fluid'}>
        <Box style={{margin: 'auto'}}>
        <Heading subtitle>
            Form Edit Buku
        </Heading>
            <Form.Field>
                <Form.Label>
                Judul
                </Form.Label>
                <Form.Control>
                <Form.Input
                    placeholder="Harry Potters Edition II"
                    type="text"
                    key="judul"
                    name="title"
                    onChange={onChangeField('title')}
                    value={inputs.title}
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
                    key="penerbit"
                    name="publisher"
                    onChange={onChangeField('publisher')}
                    value={inputs.publisher}
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
                    key="isbn"
                    name="isbn_code"
                    onChange={onChangeField('isbn_code')}
                    value={inputs.isbn_code}
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
                    key="pengarang"
                    name="author"
                    onChange={onChangeField('author')}
                    value={inputs.author}
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
                    key="tahun terbit"
                    name="year_publish"
                    onChange={onChangeField('year_publish')}
                    value={inputs.year_publish}
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

export default EditBuku;
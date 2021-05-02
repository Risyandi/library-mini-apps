import React, {useState, useEffect} from 'react';
import {getCookie, xhr} from '../utils';
import {Container, Footer, Content, Navbar, Table, Section, Button} from 'react-bulma-components';
import {img} from '../assets/img';

const Homepage = (props) => {
    const csrfTokenValue = getCookie('csrftoken');
    const [pelanggan, setPelanggan] = useState([]);
    const [buku, setBuku] = useState([]);
    const [transaksi, setTransaksi] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const pelangganRes = await xhr.get('/pelanggan');
        const dataPelanggan = pelangganRes;
        setPelanggan(dataPelanggan);

        const bukuRes = await xhr.get('/buku');
        const dataBuku = bukuRes;
        setBuku(dataBuku);
        
        const transaksiRes = await xhr.get('/transaksi');
        const dataTransaksi = transaksiRes;
        setTransaksi(dataTransaksi);
    }

    const onDeleteItems = async (nameApi, idElement) => {
        try {
            let confirm = window.confirm("Apakah anda yakin akan menghapus data ini?");
            if (confirm !== false) {
                await xhr.delete(`/${nameApi}/${idElement}/`, { 'X-CSRFTOKEN': csrfTokenValue })
                alert('Data berhasil dihapus');
                fetchData();
            } else {
                alert('Menghapus data dibatalkan');
                fetchData();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
    <Container fullhd breakpoint={'fluid'}>
        {/* navbar */}
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item href="#">
                <img
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    height="28"
                    src={img.logoBulma}
                    width="112"
                />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
            <Navbar.Container>
                <Navbar.Item href="#">
                    Pelanggan
                </Navbar.Item>
                <Navbar.Item href="#">
                    Buku
                </Navbar.Item>
                <Navbar.Item href="#">
                    Transaksi
                </Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>
        </Navbar>
        
        {/* table pelanggan */}
        <Section className>
            <Container>
            <Table
            size={'fullwidth'}
            striped bordered hoverable 
            >
                <thead>
                    <tr>
                        <th colSpan={8} style={{textAlign: 'center'}}>Data Pelanggan</th>
                    </tr>
                    <tr>
                        <th>No</th>
                        <th>Nama Lengkap</th>
                        <th>No Handphone</th>
                        <th>Email</th>
                        <th>Alamat</th>
                        <th>Tanggal Bergabung</th>
                        <th>Kadaluarsa Member</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pelanggan !== undefined && pelanggan.length !== 0 ?
                    pelanggan.map((data, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{data.first_name +` `+ data.last_name}</td>
                            <td>{data.handphone}</td>
                            <td>{data.email}</td>
                            <td>{data.address}</td>
                            <td>{data.join_date}</td>
                            <td>{data.end_date}</td>
                            <td>
                                <Button.Group>
                                    <Button
                                    color={'primary'}>
                                        Edit
                                    </Button>
                                    <Button
                                    color={'danger'}
                                    onClick = {
                                        (e) => {
                                            onDeleteItems('pelanggan', data.id)
                                        }
                                    }>
                                        Hapus
                                    </Button>
                                </Button.Group>
                            </td>
                        </tr>
                        )
                    })
                    :
                    <tr>
                        <td colSpan={8} style={{textAlign: 'center'}}>Data Belum Tersedia</td>
                    </tr>
                }
                </tbody>
            </Table>
        </Container>
        </Section>

        {/* table buku */}
        <Section>
            <Container>
            <Table
            size={'fullwidth'}
            striped bordered hoverable 
            >
                <thead>
                    <tr>
                        <th colSpan={7} style={{textAlign: 'center'}}>Data Buku</th>
                    </tr>
                    <tr>
                        <th>No </th>
                        <th>Judul Buku </th>
                        <th>Penerbit</th>
                        <th>ISBN Kode</th>
                        <th>Pengarang</th>
                        <th>Tahun Terbit</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                {
                    buku !== undefined && buku.length !== 0 ? 
                    buku.map((data, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{data.title}</td>
                            <td>{data.publisher}</td>
                            <td>{data.isbn_code}</td>
                            <td>{data.author}</td>
                            <td>{data.year_publish}</td>
                            <td>
                                <Button.Group>
                                    <Button
                                    color={'primary'}>
                                        Edit
                                    </Button>
                                    <Button
                                    color={'danger'}
                                    onClick = {
                                        (e) => {
                                            onDeleteItems('buku', data.id)
                                        }
                                    }>
                                        Hapus
                                    </Button>
                                </Button.Group>
                            </td>
                        </tr>
                        )
                    })
                    :
                        <tr>
                            <td colSpan={7} style={{textAlign: 'center'}}>Data Belum Tersedia</td>
                        </tr>
                }
                </tbody>
            </Table>
        </Container>
        </Section>

        {/* table transaksi */}
        <Section>
            <Container>
                <Table
                size={'fullwidth'}
                striped bordered hoverable 
                >
                    <thead>
                        <tr>
                            <th colSpan={5} style={{textAlign: 'center'}}>Data Transaksi</th>
                        </tr>
                        <tr>
                            <th>No </th>
                            <th>Tanggal Mulai Peminjaman</th>
                            <th>Tanggal Akhir Peminjaman</th>
                            <th>Tanggal Pengembalian </th>
                            <th>Aksi </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        transaksi !== undefined && transaksi.length !== 0 ?
                        transaksi.map((data, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{data.start_date_borrow}</td>
                                    <td>{data.end_date_borrow}</td>
                                    <td>{data.date_return}</td>
                                    <td>
                                        <Button.Group>
                                            <Button
                                            color={'primary'}>
                                                Edit
                                            </Button>
                                            <Button
                                            color={'danger'}
                                            onClick = {
                                                (e) => {
                                                    onDeleteItems('transaksi', data.id)
                                                }
                                            }>
                                                Hapus
                                            </Button>
                                        </Button.Group>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td colSpan={5} style={{textAlign: 'center'}}>Data Belum Tersedia</td>
                        </tr>
                    }
                    </tbody>
                </Table>
            </Container>
        </Section>
     
        {/* footer */}
        <Footer>
            <Container>
                <Content style={{ textAlign: 'center' }}>
                <p>
                    <strong>Bulma</strong> by{' '}
                    <a href="http://jgthms.com">Jeremy Thomas</a>. The source code
                    is licensed under
                    <a href="http://opensource.org/licenses/mit-license.php">
                    {' '}
                    MIT
                    </a>
                    . The website content is licensed{' '}
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                    </a>
                    .
                </p>
                </Content>
            </Container>
        </Footer>
    </Container>
    )
}

export default Homepage;
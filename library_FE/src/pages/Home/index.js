import React, {useState, useEffect} from 'react';
import {getCookie, xhr} from '../../utils';
import {Link} from 'react-router-dom';
import {Container, Table, Section, Button} from 'react-bulma-components';

import NavbarTop from '../../common/components/Navbar';
import FooterBottom from '../../common/components/Footer';

const Homepage = (props) => {
    const csrfTokenValue = getCookie('csrftoken');
    const [pelanggan, setPelanggan] = useState([]);
    const [buku, setBuku] = useState([]);
    const [transaksi, setTransaksi] = useState([]);
    const [loadmorePelanggan, setLoadMorePelanggan] = useState(3);
    const [loadmoreBuku, setLoadMoreBuku] = useState(3);
    const [loadmoreTransaksi, setLoadMoreTransaksi] = useState(3);

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
        <NavbarTop/>
        
        {/* table pelanggan */}
        <Section id="pelanggan">
        <Container>
            <Table.Container>
                <Table
                size={'fullwidth'}
                striped bordered hoverable 
                >
                <thead>
                    <tr>
                        <th colSpan={7} style={{textAlign: 'center'}}>Data Pelanggan</th>
                        <th colSpan={1} style={{textAlign: 'center'}}>
                            <Link to={{
                                pathname:'/create/pelanggan',
                            }}>
                                <Button
                                color={'success'}>
                                    Create
                                </Button>
                            </Link>
                        </th>
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
                    pelanggan.slice(0, loadmorePelanggan).map((data, idx) => {
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
                                    <Link 
                                    to={{
                                        pathname:`/edit/pelanggan/${data.id}`,
                                    }}>
                                        <Button
                                        color={'primary'}>
                                            Edit
                                        </Button>
                                    </Link>

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
                {
                    pelanggan !== undefined && pelanggan.length !== 0 ?
                    <tr 
                    onClick={() => {
                        setLoadMorePelanggan(loadmorePelanggan + 2);
                    }}>
                        <td colSpan={8} style={{textAlign: 'center'}}>Lihat Data Lainnya</td>
                    </tr>
                    :
                    '' 
                }
                </tbody>
            </Table>
            </Table.Container>
        </Container>
        </Section>

        {/* table buku */}
        <Section id="buku">
            <Container>
            <Table.Container>
                <Table
                size={'fullwidth'}
                striped bordered hoverable 
                >
                <thead>
                    <tr>
                        <th colSpan={6} style={{textAlign: 'center'}}>Data Buku</th>
                        <th colSpan={1} style={{textAlign: 'center'}}>
                            <Link to={{
                                pathname:'/create/buku',
                            }}>
                                <Button
                                color={'success'}>
                                    Create
                                </Button>
                            </Link>
                        </th>
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
                    buku.slice(0, loadmoreBuku).map((data, idx) => {
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
                                <Link to={{
                                    pathname:`/edit/buku/${data.id}`,
                                }}>
                                    <Button
                                    color={'primary'}>
                                        Edit
                                    </Button>
                                </Link>

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
                 {
                    buku !== undefined && buku.length !== 0 ?
                    <tr 
                    onClick={() => {
                        setLoadMoreBuku(loadmoreBuku + 2);
                    }}>
                        <td colSpan={7} style={{textAlign: 'center'}}>Lihat Data Lainnya</td>
                    </tr>
                    :
                    '' 
                }
                </tbody>
            </Table>
            </Table.Container>
        </Container>
        </Section>

        {/* table transaksi */}
        <Section id="transaksi">
            <Container>
            <Table.Container>
                <Table
                size={'fullwidth'}
                striped bordered hoverable 
                >
                    <thead>
                        <tr>
                            <th colSpan={7} style={{textAlign: 'center'}}>Data Transaksi</th>
                            <th colSpan={1} style={{textAlign: 'center'}}>
                                <Link to={{
                                    pathname:'/create/transaksi',
                                }}>
                                    <Button
                                    color={'success'}>
                                        Create
                                    </Button>
                                </Link>
                            </th>
                        </tr>
                        <tr>
                            <th>No </th>
                            <th>Nama Buku </th>
                            <th>ISBN Kode </th>
                            <th>Nama Peminjam</th>
                            <th>Tanggal Mulai Peminjaman</th>
                            <th>Tanggal Akhir Peminjaman</th>
                            <th>Tanggal Pengembalian </th>
                            <th>Aksi </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        transaksi !== undefined && transaksi.length !== 0 ?
                        transaksi.slice(0, loadmoreTransaksi).map((data, idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{data.detailBuku[0]?.title}</td>
                                    <td>{data.detailBuku[0]?.isbn_code}</td>
                                    <td>{data.detailPeminjam[0]?.first_name + ' ' + data.detailPeminjam[0]?.last_name}</td>
                                    <td>{data.start_date_borrow}</td>
                                    <td>{data.end_date_borrow}</td>
                                    <td>{data.date_return}</td>
                                    <td>
                                        <Button.Group>
                                        <Link to={{
                                            pathname:`/edit/transaksi/${data.id}`,
                                        }}>
                                            <Button
                                            color={'primary'}>
                                                Edit
                                            </Button>
                                        </Link>
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
                            <td colSpan={8} style={{textAlign: 'center'}}>Data Belum Tersedia</td>
                        </tr>
                    }
                    {
                        transaksi !== undefined && transaksi.length !== 0 ?
                        <tr 
                        onClick={() => {
                            setLoadMoreTransaksi(loadmoreTransaksi + 2);
                        }}>
                            <td colSpan={8} style={{textAlign: 'center'}}>Lihat Data Lainnya</td>
                        </tr>
                        :
                        '' 
                    }
                    </tbody>
                </Table>
            </Table.Container>
            </Container>
        </Section>
     
        {/* footer */}
        <FooterBottom/>
    </Container>
    )
}

export default Homepage;
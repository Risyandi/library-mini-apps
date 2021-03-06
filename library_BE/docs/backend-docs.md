## Dokumentasi Back End
Ini adalah dokumentasi yang dikhususkan perihal bagaimana menjalankan Back End.
1. Pastikan anda sudah menginstall tools Python, Django Framework.
2. Pastikan juga anda sudah membuat database MySQL dengan nama `library-db`.  
3. Jika tools yang diperlukan diatas sudah terinstall selanjutnya menginstall library rest API yang dibutuhkan *library_BE* dan menambahkan CORS untuk mengizinkan sumber API bisa di akses beda domain:
    - `$ pip install djangorestframework`
    - `$ pip install django-cors-headers`
4. Migrate schema models ke database MySQL dengan mengetikan perintah.
    - `$ python manage.py migrate`
5. (optional) Lalu import data yang sudah ada ke database `library-db` file terletak di (Link Tautan) 
6. Setelah library yang dibutuhkan telah terinstall dan model sudah di migrate ke database anda bisa mulai Menjalankan *library_BE* dengan mengetikan perintah.  
    - `$ python manage.py runserver`
7. Endpoint API adalah `http://localhost:8000/api/v1`
8. Detail endpoint yang akan di pakai adalah sebagai berikut :  
    ```json
    {
        "users": "http://localhost:8000/api/v1/users/",
        "buku": "http://localhost:8000/api/v1/buku/",
        "kategori": "http://localhost:8000/api/v1/kategori/",
        "pelanggan": "http://localhost:8000/api/v1/pelanggan/",
        "transaksi": "http://localhost:8000/api/v1/transaksi/"
    }
    ```
9. Penjelasan API :
    ```json
    GET, POST List
    {
        "users": "http://localhost:8000/api/v1/users/",
        "buku": "http://localhost:8000/api/v1/buku/",
        "kategori": "http://localhost:8000/api/v1/kategori/",
        "pelanggan": "http://localhost:8000/api/v1/pelanggan/",
        "transaksi": "http://localhost:8000/api/v1/transaksi/"
    }

    GET, POST, DELETE, UPDATE by id
     {
        "users": "http://localhost:8000/api/v1/users/:id/",
        "buku": "http://localhost:8000/api/v1/buku/:id/",
        "kategori": "http://localhost:8000/api/v1/kategori/:id/",
        "pelanggan": "http://localhost:8000/api/v1/pelanggan/:id/",
        "transaksi": "http://localhost:8000/api/v1/transaksi/:id/"
    }
    ```

### Akses admin django
>   Link : `http://localhost:8000/admin/login`  
    Username : admin  
    password : admin

### Membuat akun superadmin
untuk membuat akun superadmin anda bisa menggunakan cara dengan mengetikan perintah berikut ini:  
>`$ python manage.py createsuperuser`

### Cek versi django
untuk memeriksa versi dari framework django anda bisa menggunakan cara dengan mengetikan perintah berikut ini:
>`$ django-admin --version` or `$ python -m django --version`

### Mengubah port 
untuk mengubah port dimana server anda dijalankan anda bisa menggunakan cara dengan mengetikan perintah berikut ini:
>`$ python manage.py runserver 8080` angka port bisa disesuaikan  

### Membuat Project dan Apps
Apa perbedaan project dan apps, sebuah apps adalah sebuah web aplikasi yang melakukan sesuatu seperti webblog system, sebuah database record, atau aplikasi polling. sedangkan project adalah sebuah koleksi konfigurasi dan apps untuk sebuah apps. project bisa mempunyai isi beberapa apps dan apps bisa mempunyai beberapa project.

>`$ python manage.py startproject website-project`  
>`$ python manage.py startapp polls`
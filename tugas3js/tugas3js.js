// Data awal (State)
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// 1. Fungsi Utama untuk Merender Tabel (Real-Time Update)
function tampilkanProduk() {
    const tableBody = document.getElementById("live-table-body");
    const noDataLabel = document.getElementById("no-data");
    
    // Kosongkan isi tabel saat ini
    tableBody.innerHTML = "";

    // Cek jika data kosong
    if (produkToko.length === 0) {
        noDataLabel.style.display = "block";
    } else {
        noDataLabel.style.display = "none";
        
        // Looping data dan masukkan ke dalam baris tabel
        produkToko.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>#${item.id}</td>
                <td><strong>${item.nama}</strong></td>
                <td>Rp ${item.harga.toLocaleString()}</td>
                <td>${item.stok} Unit</td>
                <td>
                    <button class="btn-delete" onclick="hapusProduk(${item.id})">Hapus</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

// 2. Fungsi Tambah Produk
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    const objekBaru = {
        id: idBaru,
        nama: nama,
        harga: parseInt(harga),
        stok: parseInt(stok)
    };

    produkToko.push(objekBaru);
    
    // TRICK: Panggil kembali fungsi tampilkan agar tabel terupdate langsung
    tampilkanProduk();
}

// 3. Fungsi Hapus Produk
function hapusProduk(id) {
    // Filter array untuk membuang ID yang dipilih
    produkToko = produkToko.filter(p => p.id !== id);
    
    // Update tampilan tabel seketika
    tampilkanProduk();
}

// 4. Handler Input (Mengambil data dari form)
function inputData() {
    const inputNama = document.getElementById("nama");
    const inputHarga = document.getElementById("harga");
    const inputStok = document.getElementById("stok");

    if (inputNama.value && inputHarga.value && inputStok.value) {
        tambahProduk(inputNama.value, inputHarga.value, inputStok.value);
        
        // Reset form setelah input
        inputNama.value = "";
        inputHarga.value = "";
        inputStok.value = "";
    } else {
        alert("Harap isi semua kolom!");
    }
}

// Jalankan tampilan pertama kali saat file dimuat
tampilkanProduk();
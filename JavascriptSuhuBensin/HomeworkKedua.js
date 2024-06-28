let jenisKendaraan = prompt(" Apakah kendaraan anda berplat kuning atau anda mungkin membawa motor ? (Y/T): " );
if (jenisKendaraan === "Y") 
{
console.log("BBM yang anda bakal pakai adalah BBM Bersubsidi");
}
else if (jenisKendaraan === "T")
{
    let jenisBensin = prompt(" Mohon Masukkan Nomor CC Mobil Anda : ");
    if (jenisBensin < 1500 )
    {
        console.log("Anda berhak mengisi BBM dengan PERTAMAX ! ");
    }
    else if (jenisBensin > 1500 || jenisBensin == 1500 )
    {
        console.log("Anda berhak mengisi BBM dengan PERTAMAX TURBO ! ");
    }
}
else {
    console.log(" MOHON JALANKAN ULANG PROGRAMNYA !!! " );
}
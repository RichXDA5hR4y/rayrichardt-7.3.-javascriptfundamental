let nilaiSuhu = prompt(" Masukkan nilai suhu : " );
if (nilaiSuhu >= -100 && nilaiSuhu <= 0) 
{
console.log(nilaiSuhu + " adalah Suhu Beku ");
}
else if (nilaiSuhu >= 1 && nilaiSuhu <= 100)
{
console.log(nilaiSuhu + " adalah Suhu Cair ");    
}
else if (nilaiSuhu >= 101 && nilaiSuhu <= 500)
{
console.log(nilaiSuhu + " adalah Suhu Uap ");    
}
else{
    console.log("Suhu Tidak Bisa Ditentukan ");
}
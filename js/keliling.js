// Fungsi untuk menghitung keliling
function hitungKeliling(e) {
  e.preventDefault();
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  if (a > 0 && b > 0 && c > 0) {
    const hasil = a + b + c;
    tampilkanPopup(`K = ${a} + ${b} + ${c} = <strong>${hasil.toFixed()}</strong>`);
  } else {
    tampilkanPopup("Masukkan semua sisi dengan angka yang valid!");
  }

  // Reset form setelah submit
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
}

// Fungsi untuk menampilkan popup dan suara
function tampilkanPopup(teks) {
  const audio = new Audio("assets/success.mp3");
  audio.play();

  Swal.fire({
    title: 'Hasil Perhitungan Luas',
    html: teks,
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

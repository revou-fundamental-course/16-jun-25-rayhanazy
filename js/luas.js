// Fungsi untuk menghitung luas
function hitungLuas(e) {
  e.preventDefault();
  const a = parseFloat(document.getElementById("alas").value);
  const t = parseFloat(document.getElementById("tinggi").value);

  if (a > 0 && t > 0) {
    const luas = 0.5 * a * t;
    tampilkanPopup(`L = 1/2 × ${a} × ${t} = <strong>${luas.toFixed()}</strong>`);
  } else {
    tampilkanPopup("Masukkan angka yang valid!");
  }

  // Reset form setelah submit
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
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


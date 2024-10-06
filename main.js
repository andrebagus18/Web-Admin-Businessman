const resetTable = document.querySelector("#resetTable");

if (resetTable) {
  resetTable.addEventListener("click", () => {
    // hapus semua data dari localStorage
    localStorage.removeItem("tableData");

    // hapus semua baris dari table
    const tbody = dataTables.getElementsByTagName("tbody")[0];
    while (tbody.firstChild) {
      //loop anak pertama dari tbody
      tbody.removeChild(tbody.firstChild); //remove/hapus anak pertama dan ulangi sampai loop selesai
    }
  });
}

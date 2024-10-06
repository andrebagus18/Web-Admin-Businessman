document.addEventListener("DOMContentLoaded", () => {
  const dataForm = document.querySelector("#dataForm");
  const modal = document.querySelector(".modal");
  const closeModalButton = document.querySelector("#closeModalButton");
  const dataTables = document.getElementById("dataTables");

  if (dataForm) {
    dataForm.addEventListener("submit", (event) => {
      event.preventDefault();

      //ambil data table
      const customer = document.querySelector("#customer").value;
      //console.log(customer);
      const idOrder = document.querySelector("#idOrder").value;
      const dp = document.querySelector("#dp").value;
      const desc = document.querySelector("#desc").value;
      const dateIn = document.querySelector("#dateIn").value;
      const dateOut = document.querySelector("#dateOut").value;
      const status = document.querySelector("#status").value;
      // const customer = $("#customer").val();
      // const idOrder = $("#idOrder").val();
      // const dp = $("#dp").val();
      // const desc = $("#desc").val();
      // const dateIn = $("#dateIn").val();
      // const dateOut = $("#dateOut").val();
      // const status = $("#status").val();

      // Simpan data ke localStorage
      const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
      tableData.push({
        customer: customer,
        idOrder: idOrder,
        dp: dp,
        desc: desc,
        dateIn: dateIn,
        dateOut: dateOut,
        status: status,
      });
      localStorage.setItem("tableData", JSON.stringify(tableData));
      console.log(tableData);

      // Tampilkan modal success
      modal.classList.toggle("active");
      // $("#successModal").modal("show");

      // Redirect ke halaman tabel setelah modal ditutup
      closeModalButton.addEventListener("click", () => {
        window.location.href = "../index.html";
      });
      // Bersihkan form input setelah submit
      dataForm.reset();
    });
  }

  if (dataTables) {
    // Muat data dari localStorage saat halaman dimuat
    const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    const tbody = dataTables.getElementsByTagName("tbody")[0];
    // storedData.forEach((item, index) => {
    tableData.forEach((item, index) => {
      const newRow = tbody.insertRow(0);
      //console.log(newRow);
      newRow.insertCell(0).textContent = index + 1;
      newRow.insertCell(1).textContent = item.customer;
      newRow.insertCell(2).textContent = item.idOrder;
      newRow.insertCell(3).textContent = item.dp;
      newRow.insertCell(4).textContent = item.desc;
      newRow.insertCell(5).textContent = item.dateIn;
      newRow.insertCell(6).textContent = item.dateOut;
      newRow.insertCell(7).textContent = item.status;

      const actionsCell = newRow.insertCell(8);
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.target = "_blank";
      editButton.setAttribute("type", "button");
      editButton.setAttribute("id", "buttonEdit");
      editButton.className = "btn btn-primary btn-sm me-2";
      editButton.addEventListener("click", () => {
        // Aksi edit
        // window.location.href = "../form-edit/form-edit.html?id=" + index;
        // alert("Edit row " + (index + 1));
        const url = `../form-edit/form-edit.html?id=${index}`;
        console.log("Redirecting to:", url); // Log URL
        window.open(url, "_blank");
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.addEventListener("click", () => {
        // Aksi hapus
        tableData.splice(index, 1);
        localStorage.setItem("tableData", JSON.stringify(tableData));
        newRow.remove();
      });

      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);
    });
  }
});

// const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
// PENJELASAN DETAIL:
// localStorage.getItem('tableData'):

// localStorage adalah penyimpanan di browser yang memungkinkan Anda menyimpan data secara lokal dalam bentuk key-value. Data ini tetap ada meskipun halaman di-refresh atau browser ditutup.
// getItem('tableData') digunakan untuk mengambil data yang disimpan di localStorage dengan key 'tableData'.
// Jika tidak ada data yang disimpan di localStorage dengan key 'tableData', ini akan mengembalikan null.
// JSON.parse(localStorage.getItem('tableData')):

// Data yang disimpan di localStorage biasanya dalam bentuk string. Untuk mengubahnya kembali menjadi objek JavaScript atau array, kita menggunakan fungsi JSON.parse().
// Jika 'tableData' berisi data berbentuk array atau objek (misalnya: [{column1: 'A', column2: 'B'}, {...}]), JSON.parse() akan mengubahnya menjadi array JavaScript yang bisa kita manipulasi.
// || []:

// Ini adalah operator OR (atau), yang berarti jika localStorage.getItem('tableData') mengembalikan null (data belum pernah disimpan), maka kita akan mendapatkan array kosong [] sebagai default value.
// Jadi, jika tidak ada data yang tersimpan di localStorage, variabel tableData akan diinisialisasi sebagai array kosong.

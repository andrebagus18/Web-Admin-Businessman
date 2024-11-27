document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  // Ambil parameter dari URL
  const customer = params.get("customer") || "Data tidak ditemukan";
  const idOrder = params.get("idOrder") || "Data tidak ditemukan";
  const dp = params.get("dp") || "Data tidak ditemukan";
  const desc = params.get("desc") || "Data tidak ditemukan";
  const dateIn = params.get("dateIn") || "Data tidak ditemukan";
  const dateOut = params.get("dateOut") || "Data tidak ditemukan";
  const status = params.get("status") || "Data tidak ditemukan";

  // Masukkan ke dalam form
  document.querySelector("#editCustomer").value = customer;
  document.querySelector("#editIdOrder").value = idOrder;
  document.querySelector("#editDp").value = dp;
  document.querySelector("#editDesc").value = desc;
  document.querySelector("#editDateIn").value = dateIn;
  document.querySelector("#editDateOut").value = dateOut;
  document.querySelector("#editStatus").value = status;
});

const editForm = document.querySelector("#editForm");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector("#closeModalButton");

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const editCustomer = document.querySelector("#editCustomer").value;
  //console.log(customer);
  const editIdOrder = document.querySelector("#editIdOrder").value;
  const editDp = document.querySelector("#editDp").value;
  const editDesc = document.querySelector("#editDesc").value;
  const editDateIn = document.querySelector("#editDateIn").value;
  const editDateOut = document.querySelector("#editDateOut").value;
  const editStatus = document.querySelector("#editStatus").value;
  const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
  tableData.push({
    editCustomer: editCustomer,
    editIdOrder: editIdOrder,
    editDp: editDp,
    editDesc: editDesc,
    editDateIn: editDateIn,
    editDateOut: editDateOut,
    editStatus: editStatus,
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
  editForm.reset();
});

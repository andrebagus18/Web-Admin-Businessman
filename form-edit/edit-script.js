
 
 
 document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    // Ambil parameter dari URL
    const customer = params.get("customer") || "Data tidak ditemukan";
    const idOrder = params.get("idOrder") || "Data tidak ditemukan";
    const dp = params.get("dp") || "Data tidak ditemukan";

    // Masukkan ke dalam form
    document.querySelector("#editCustomer").value = customer;
    document.querySelector("#editIdOrder").value = idOrder;
    document.querySelector("#editDp").value = dp;

    console.log("Customer:", customer);
    console.log("ID Order:", idOrder);
    console.log("DP:", dp);
});

 
//  // Ambil query string dari URL
//  const params = new URLSearchParams(window.location.search);
//  console.log(window.location.search);

//  // Ambil data dari parameter
//  const customer = params.get("customer") || "customer not found";
//  const editIdOrder = params.get("editIdOrder");
//  console.log(customer);

//  // Masukkan data ke form
//  document.getElementById("editCustomer").value = customer || "";
//  document.getElementById("editIdOrder").value = editIdOrder || " ";
//  console.log("customer:", customer);
//  console.log(editIdOrder);

//  document.getElementById("age").value = age || "";
// const editForm = document.querySelector("#editForm");
// const modal = document.querySelector(".modal");
// const closeModalButton = document.querySelector("#closeModalButton");

// if (editForm) {
//   editForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const editCustomer = document.querySelector("#editCustomer").value;
//     //console.log(customer);
//     const editIdOrder = document.querySelector("#idOrder").value;
//     const editDp = document.querySelector("#editDp").value;
//     const editDesc = document.querySelector("#editDesc").value;
//     const editDateIn = document.querySelector("#editDateIn").value;
//     const editDateOut = document.querySelector("#editDateOut").value;
//     const editStatus = document.querySelector("#editStatus").value;
//     const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
//     tableData.push({
//       editCustomer: editCustomer,
//       editIdOrder: editIdOrder,
//       editDp: editDp,
//       editDesc: editDesc,
//       editDateIn: editDateIn,
//       editDateOut: editDateOut,
//       editStatus: editStatus,
//     });
//     localStorage.setItem("tableData", JSON.stringify(tableData));

//     // Tampilkan modal success
//     modal.classList.toggle("active");
//     // $("#successModal").modal("show");

//     // Redirect ke halaman tabel setelah modal ditutup
//     closeModalButton.addEventListener("click", () => {
//       window.location.href = "../index.html";
//     });
//     // Bersihkan form input setelah submit
//     editForm.reset();
//   });
// }

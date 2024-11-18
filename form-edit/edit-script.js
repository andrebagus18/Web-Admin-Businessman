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

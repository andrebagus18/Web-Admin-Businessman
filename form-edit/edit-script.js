const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const tableData = JSON.parse(localStorage.getItem("tableData")) || [];
const item = tableData[id];

if (editForm) {
  document.getElementById("editCustomer").value = item.customer;
  document.getElementById("editIdOrder").value = item.idOrder;
  document.getElementById("editDp").value = item.dp;
  document.getElementById("editDesc").value = item.desc;
  document.getElementById("editDateIn").value = item.dateIn;
  document.getElementById("editDateOut").value = item.dateOut;
  document.getElementById("editStatus").value = item.status;

  const editForm = document.getElementById("editForm");
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    item.customer = document.querySelector("#customer").value;
    //console.log(customer);
    item.idOrder = document.querySelector("#idOrder").value;
    item.dp = document.querySelector("#dp").value;
    item.desc = document.querySelector("#desc").value;
    item.dateIn = document.querySelector("#dateIn").value;
    item.dateOut = document.querySelector("#dateOut").value;
    item.status = document.querySelector("#status").value;

    tableData[id] = item;
    localStorage.setItem("tableData", JSON.stringify(tableData));

    // // Tampilkan modal success
    // modal.classList.toggle("active");
    // // $("#successModal").modal("show");

    window.location.href = "../index.html";
  });
}

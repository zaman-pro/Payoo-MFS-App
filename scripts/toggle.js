// initial all cards function window hidden
document.getElementById("add-money").style.display = "none";
document.getElementById("cash-out").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transactions").style.display = "none";

function clearRecent(params) {
  document.getElementById("add-money").style.display = "none";
  document.getElementById("cash-out").style.display = "none";
  document.getElementById("transfer-money").style.display = "none";
  document.getElementById("get-bonus").style.display = "none";
  document.getElementById("pay-bill").style.display = "none";
  document.getElementById("transactions").style.display = "none";
}

document
  .getElementById("addMoney-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("add-money").style.display = "block";
  });

document
  .getElementById("cashOut-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("cash-out").style.display = "block";
  });

document
  .getElementById("transfer-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("transfer-money").style.display = "block";
  });

document
  .getElementById("getBonus-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("get-bonus").style.display = "block";
  });

document
  .getElementById("payBill-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("pay-bill").style.display = "block";
  });

document
  .getElementById("transactions-card")
  .addEventListener("click", function (event) {
    clearRecent();
    document.getElementById("transactions").style.display = "block";
  });

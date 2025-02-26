document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value;
    const pin = parseInt(document.getElementById("pin").value);

    if (accountNumber.length === 11) {
      if (pin === 1234) {
        window.location.href = "./main.html";
      } else {
        alert("Incorrect PIN.");
      }
    } else {
      alert("Invalid Account");
    }
  });

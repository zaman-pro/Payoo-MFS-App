document
  .getElementById("pay-bill-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("pay-bill-amount").value);
    const pin = parseInt(document.getElementById("pay-bill-pin").value);
    const accountNumber = document.getElementById(
      "pay-bill-account-number"
    ).value;
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );

    if (amount && pin && accountNumber) {
      if (accountNumber.length === 11) {
        if (pin === 1234) {
          newBalance = mainBalance - amount;

          document.getElementById("main-balance").innerText = newBalance;
        } else {
          alert("Incorrect PIN");
        }
      } else {
        alert("Invalid Account");
      }
    } else {
      alert("Enter Amount");
    }
  });

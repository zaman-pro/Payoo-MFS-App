document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseFloat(
      document.getElementById("transfer-money-amount").value
    );
    const pin = parseFloat(document.getElementById("transfer-money-pin").value);
    const accountNumber = document.getElementById(
      "transfer-money-account-number"
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

document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const coupon = document.getElementById("get-bonus-coupon").value;
    const mainBalance = parseFloat(
      document.getElementById("main-balance").innerText
    );

    if (coupon) {
      if (coupon.length === 5) {
        newBalance = mainBalance + 500;
        document.getElementById("main-balance").innerText = newBalance;
      } else {
        alert("Invalid coupon");
      }
    } else {
      alert("Enter your coupon");
    }
  });

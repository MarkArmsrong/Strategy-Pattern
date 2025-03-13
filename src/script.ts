
  

document.getElementById("calculateDiscountBtn")?.addEventListener("click", async () => {
    try {
      alert("Button clicked!");  // This will fire when the button is clicked

      // Make a request to the server to calculate the discount
      const response = await fetch("/calculate-discount", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to calculate discount");
      }
  
      const discount = await response.json(); // assuming the server sends a JSON response
      document.getElementById("result")!.textContent = `Discount: $${discount.amount}`;
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("result")!.textContent = "Error calculating discount.";
    }
  });
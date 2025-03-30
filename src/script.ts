import { MOCK_ORDER, PRODUCT_QUANTITIES } from './constants';

document.getElementById("calculateDiscountBtn")?.addEventListener("click", async () => {
    try {
      const mockOrder = {
        ...MOCK_ORDER,
        items: [
          { 
            ...MOCK_ORDER.items[0],
            quantity: PRODUCT_QUANTITIES.PRODUCT_A 
          },
          { 
            ...MOCK_ORDER.items[1],
            quantity: PRODUCT_QUANTITIES.PRODUCT_B 
          }
        ]
      };

      // Show loading state
      const resultElement = document.getElementById("result");
      if (resultElement) {
        resultElement.textContent = "Calculating discount...";
      }

      // Make a request to the server to calculate the discount
      const response = await fetch("/calculate-discount", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: mockOrder })
      });
  
      if (!response.ok) {
        throw new Error(`Failed to calculate discount: ${response.statusText}`);
      }
  
      const discountResponse = await response.json();
      if (resultElement) {
        resultElement.textContent = `Discount: $${discountResponse.discount.toFixed(2)}`;
      }
    } catch (error) {
      console.error("Error:", error);
      const resultElement = document.getElementById("result");
      if (resultElement) {
        resultElement.textContent = `Error calculating discount: ${error instanceof Error ? error.message : 'Unknown error'}`;
      }
    }
  });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document.getElementById("calculateDiscountBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
    try {
        // Make a request to the server to calculate the discount
        const response = yield fetch("/calculate-discount", {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error("Failed to calculate discount");
        }
        const discount = yield response.json(); // assuming the server sends a JSON response
        document.getElementById("result").textContent = `Discount: $${discount.amount}`;
    }
    catch (error) {
        console.error("Error:", error);
        document.getElementById("result").textContent = "Error calculating discount.";
    }
}));

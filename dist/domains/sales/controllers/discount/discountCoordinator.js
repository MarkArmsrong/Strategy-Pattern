"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCoordinator = void 0;
require("reflect-metadata"); // Import Reflect Metadata API
const featureFlags_1 = require("../../types/order/featureFlags"); // Adjust the path if needed
const discountStrategies_1 = require("../../types/order/discountStrategies");
const discountStrategies_2 = require("../../types/order/discountStrategies");
class DiscountCoordinator {
    constructor() {
        this.discountStrategies = [];
        // Get all classes that implement IDiscountStrategy
        const allStrategies = [discountStrategies_1.LoyaltyDiscountStrategy, discountStrategies_2.SeasonalPromoDiscountStrategy];
        // Dynamically register the enabled strategies based on feature flags
        allStrategies.forEach((StrategyClass) => {
            const featureFlag = Reflect.getMetadata("featureFlag", StrategyClass);
            if (featureFlags_1.featureFlags[featureFlag]) {
                this.discountStrategies.push(new StrategyClass());
            }
        });
    }
    calculateDiscount(order) {
        const totalDiscount = this.discountStrategies
            .map(strategy => strategy.applyDiscount(order))
            .reduce((total, discount) => total + discount, 0);
        console.log("Total Discount:");
        return totalDiscount;
    }
}
exports.DiscountCoordinator = DiscountCoordinator;
//# sourceMappingURL=discountCoordinator.js.map
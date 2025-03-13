"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCoordinator = void 0;
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
require("reflect-metadata"); // Import Reflect Metadata API
const featureFlags_1 = require("../../types/order/featureFlags"); // Adjust the path if needed
const discountStrategies_1 = require("../../types/order/discountStrategies");
const discountStrategies_2 = require("../../types/order/discountStrategies");
const app = (0, express_1.default)();
const port = 3000;
// Serve static files from the "public" folder
app.use(express_1.default.static(node_path_1.default.join(__dirname, 'public')));
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
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
//# sourceMappingURL=coordinator.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCoordinator = void 0;
//Enables metadata usage, which is key to dynamically handling feature flags.
require("reflect-metadata");
//An object or list containing feature flags from a mock source or database.
const featureFlags_1 = require("../types/order/featureFlags");
//Retrieves all registered discount strategies that have been decorated.
const featureFlagDecorator_1 = require("../types/order/featureFlagDecorator");
//Needed to initialize the discount strategies due to their dynamic nature.
const discountStrategies_1 = require("../types/order/discountStrategies");
//This triggers the decorators (@FeatureFlag and @DiscountStrategy) to run.
//The DiscountStrategy decorator registers strategies in registeredStrategies.
//The FeatureFlag decorator associates strategies with specific flags.
new discountStrategies_1.InitStrategies();
class DiscountCoordinator {
    constructor() {
        // Get all classes that implement IDiscountStrategy
        this.discountStrategies = [];
        //Hold onto this for posterity even though it is not used.
        //const allStrategies = [LoyaltyDiscountStrategy, SeasonalPromoDiscountStrategy];
        //Dynamically register the enabled strategies based on feature flags
        const allStrategies = (0, featureFlagDecorator_1.getRegisteredStrategies)();
        /*
        allStrategiesOld.forEach((StrategyClass) => {
        const featureFlag = Reflect.getMetadata("featureFlag", StrategyClass);
        if (featureFlags[featureFlag as keyof typeof featureFlags]) {
          this.discountStrategies.push(new StrategyClass());
        }
        });
        */
        allStrategies.forEach((StrategyClass) => {
            const featureFlag = Reflect.getMetadata("featureFlag", StrategyClass);
            if (featureFlags_1.featureFlags[featureFlag]) {
                // Now TypeScript knows that StrategyClass is a constructor and can be instantiated
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
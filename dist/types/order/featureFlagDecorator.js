"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlag = FeatureFlag;
exports.DiscountStrategy = DiscountStrategy;
exports.getRegisteredStrategies = getRegisteredStrategies;
//Purpose: This decorator is used to associate a feature flag 
// (a string identifier) with a class.
function FeatureFlag(flag) {
    return function (target) {
        Reflect.defineMetadata("featureFlag", flag, target); // This associates the flag with the class
    };
}
//Purpose: This decorator marks a class as a "discount strategy" 
// and automatically registers it.
const registeredStrategies = [];
function DiscountStrategy() {
    return function (target) {
        Reflect.defineMetadata("discountStrategy", true, target);
        registeredStrategies.push(target); // Automatically register the class
    };
}
//This function returns the list of all classes decorated 
// with @DiscountStrategy().
function getRegisteredStrategies() {
    return registeredStrategies;
}
//# sourceMappingURL=featureFlagDecorator.js.map
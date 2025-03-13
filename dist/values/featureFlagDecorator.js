"use strict";
//import 'reflect-metadata'; // Ensure that reflect-metadata is imported
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegisteredStrategies = getRegisteredStrategies;
exports.FeatureFlag = FeatureFlag;
exports.DiscountStrategy = DiscountStrategy;
/* function FeatureFlag(flag: string) {
  return function(target: Function) {
    Reflect.defineMetadata("featureFlag", flag, target); // This associates the flag with the class
  };
}

export { FeatureFlag }; // Export the decorator to use elsewhere
 */
const registeredStrategies = []; // Store registered strategies
function FeatureFlag(flag) {
    return function (target) {
        Reflect.defineMetadata("featureFlag", flag, target);
    };
}
function DiscountStrategy() {
    return function (target) {
        Reflect.defineMetadata("discountStrategy", true, target);
        registeredStrategies.push(target); // Automatically register the class
    };
}
// Function to retrieve all registered discount strategies
function getRegisteredStrategies() {
    return registeredStrategies;
}
//# sourceMappingURL=featureFlagDecorator.js.map
//Purpose: This decorator is used to associate a feature flag 
// (a string identifier) with a class.
function FeatureFlag(flag: string) {
  return function(target: Function) {
    Reflect.defineMetadata("featureFlag", flag, target); // This associates the flag with the class
  };
}

//Purpose: This decorator marks a class as a "discount strategy" 
// and automatically registers it.
const registeredStrategies: Function[] = [];

function DiscountStrategy() {
  return function (target: Function) {
    Reflect.defineMetadata("discountStrategy", true, target);
    registeredStrategies.push(target); // Automatically register the class
  };
}

export { FeatureFlag, DiscountStrategy };

//This function returns the list of all classes decorated 
// with @DiscountStrategy().
export function getRegisteredStrategies() {
  return registeredStrategies;
}
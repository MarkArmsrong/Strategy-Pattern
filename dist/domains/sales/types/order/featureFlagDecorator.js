"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureFlag = FeatureFlag;
require("reflect-metadata"); // Ensure that reflect-metadata is imported
function FeatureFlag(flag) {
    return function (target) {
        Reflect.defineMetadata("featureFlag", flag, target); // This associates the flag with the class
    };
}
//# sourceMappingURL=featureFlagDecorator.js.map
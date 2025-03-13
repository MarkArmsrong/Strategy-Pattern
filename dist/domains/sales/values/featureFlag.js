"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureFlags = void 0;
exports.FeatureFlag = FeatureFlag;
// featureFlag.ts
function FeatureFlag(flagName) {
    return function (constructor) {
        // Add the feature flag name to the constructor's metadata
        Reflect.defineMetadata("featureFlag", flagName, constructor);
    };
}
exports.featureFlags = {
    loyalty: true,
    seasonalPromo: true,
};
//# sourceMappingURL=featureFlag.js.map
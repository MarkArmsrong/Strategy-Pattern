//This is a hardcoded object representing feature flags. 
//In a real-world application, these values would be retrieved 
//from a database or some other source.
//Ideally, you wouldn't need a boolean value as each occurrence
//would presume that the feature is enabled.  
// 
//However, it may be useful to know features that are available 
//that have not been enabled.  This could be useful for testing or 
//debugging as well as the possibility that the logic would need 
//to know the negative explicitly for some variant processing logic.
const mockJson = {
  "loyalty": true,
  "seasonalPromo": false
};

//This enforces type safety for objects that follow this structure.
export interface FeatureFlags {
  loyalty: boolean;
  seasonalPromo: boolean;
} 

//Directly assigns mockJson to featureFlags to simulate
//retrieving the object from an external source.
export const featureFlags: FeatureFlags = mockJson as FeatureFlags;


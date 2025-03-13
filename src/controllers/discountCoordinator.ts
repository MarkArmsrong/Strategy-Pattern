//Enables metadata usage, which is key to dynamically handling feature flags.
import 'reflect-metadata';

import { Order } from '../types/order/orderInterfaces';

//An object or list containing feature flags from a mock source or database.
import { featureFlags } from '../types/order/featureFlags';

//Retrieves all registered discount strategies that have been decorated.
import { getRegisteredStrategies } from '../types/order/featureFlagDecorator'; 

//Needed to initialize the discount strategies due to their dynamic nature.
import { InitStrategies } from '../types/order/discountStrategies'; 
//import { InitStrategies, LoyaltyDiscountStrategy, SeasonalPromoDiscountStrategy } 
  
import { IDiscountStrategy } from '../types/order/discountStrategies'; 

//OVERVIEW
//
//Feature flags are loaded from featureFlags, which could be from a database or mock JSON.
//Discount strategies are registered dynamically using decorators.
//At runtime, the DiscountCoordinator:
//Checks which feature flags are enabled.
//Instantiates only the applicable strategies.
//Applies their discount logic to an order.
//The final discount is returned as a sum of all enabled strategies.
//
//END OVERVIEW


//This triggers the decorators (@FeatureFlag and @DiscountStrategy) to run.
//The DiscountStrategy decorator registers strategies in registeredStrategies.
//The FeatureFlag decorator associates strategies with specific flags.
new InitStrategies(); 

//Ensures that discount strategy classes conform to IDiscountStrategy, 
//allowing proper instantiation.
type DiscountStrategyConstructor = new () => IDiscountStrategy;

//DiscountCoordinator Class
//The DiscountCoordinator is responsible for dynamically selecting and 
//applying feature-flagged discount strategies.
export class DiscountCoordinator {

  //discountStrategies: Holds instances of the discount 
  //strategy classes that are enabled.
  private discountStrategies: IDiscountStrategy[] = [];

  constructor() {
    // Get all classes that implement IDiscountStrategy
    
    //Hold onto this for posterity even though it is not used.
    //const allStrategies = [LoyaltyDiscountStrategy, SeasonalPromoDiscountStrategy];

    //Retrieves all discount strategies that have been registered via @DiscountStrategy.
    const allStrategies = getRegisteredStrategies();

    /*
    allStrategiesOld.forEach((StrategyClass) => {
    const featureFlag = Reflect.getMetadata("featureFlag", StrategyClass);
    if (featureFlags[featureFlag as keyof typeof featureFlags]) {
      this.discountStrategies.push(new StrategyClass());
    }
    });   
    */ 

    //Metadata Check (Reflect.getMetadata):
    //Retrieves the feature flag assigned to the strategy.
    //Checks featureFlags to see if this feature is enabled.
    //If enabled, the strategy is instantiated and stored in discountStrategies.
    allStrategies.forEach((StrategyClass) => {
      const featureFlag = Reflect.getMetadata("featureFlag", StrategyClass);
      if (featureFlags[featureFlag as keyof typeof featureFlags]) {
        // Now TypeScript knows that StrategyClass is a constructor and can be instantiated
        this.discountStrategies.push(new (StrategyClass as DiscountStrategyConstructor)());
      }
    });
  }
  
  //Iterates over all active strategies and applies their discount logic to the order.
  //Uses .reduce() to sum the total discount.
  calculateDiscount(order: Order) {
    const totalDiscount = this.discountStrategies
        .map(strategy => strategy.applyDiscount(order))
        .reduce((total, discount) => total + discount, 0);
        
    console.log("Total Discount: ", totalDiscount);
    return totalDiscount;
  }
}
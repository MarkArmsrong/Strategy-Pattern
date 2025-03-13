import { DiscountStrategy, FeatureFlag, getRegisteredStrategies } from './featureFlagDecorator'; // Import the decorator 
import { Order } from './orderInterfaces';

//Defines a contract that all discount strategies must implement.
//Forces each discount strategy to have an 
//applyDiscount(order: Order): number method.
export interface IDiscountStrategy {
      applyDiscount(order: Order): number;
    }
    
//This class initializes all discount strategies
//and registers them with the application.
//It is necessary due to the fact that     
export class InitStrategies {
}

@FeatureFlag('loyalty') // Associate this strategy with the 'loyalty' feature flag
@DiscountStrategy()
export class LoyaltyDiscountStrategy implements IDiscountStrategy {
  applyDiscount(order: Order): number {

/*      A loyalty discount program typically follows a structured logic that rewards 
        customers based on their engagement, spending habits, or tenure. 
        Here are some common approaches:

    1.  Tier-Based Discounts
          Customers are categorized into tiers (e.g., Silver, Gold, Platinum).
          Higher tiers get better discounts or perks.
          Progression depends on spending amount, number of purchases, 
          or membership duration.
    2. Point-Based System
          Customers earn points for each purchase (e.g., $1 = 10 points).
          Points can be redeemed for discounts, free items, or exclusive offers.
          Bonus points may be given for referrals, special events, or purchasing 
          specific products.
    3. Purchase Frequency-Based Discounts
          A discount is applied after a set number of purchases 
          (e.g., "Buy 10, get 1 free").
          Customers who shop more frequently within a timeframe 
          (e.g., monthly) get increasing discounts.
    4. Amount Spent-Based Discounts
          Discounts are triggered once a spending threshold is met 
          (e.g., "Spend $500 in a year, get 10% off").
          Cumulative spending resets after a period 
          (monthly, quarterly, annually).
    5.  Subscription or Membership Discounts
          Customers pay a fee to join (e.g., Amazon Prime, Costco) and receive 
          ongoing discounts.
          Discounts could include exclusive pricing, free shipping, or 
          early access to sales.
    6.  Behavioral-Based Discounts
          Rewards for engaging with the brand 
          (e.g., writing reviews, social media shares).
          Discounts for choosing specific behaviors 
          (e.g., opting for email instead of paper receipts, 
          using a store credit card).
    7.  Anniversary or Milestone Discounts
          Special discounts on birthdays or sign-up anniversaries.
          Rewards for hitting milestones (e.g., 5 years as a customer).
    8.  Limited-Time or Event-Based Loyalty Offers
          Extra discounts during holidays, store anniversaries, or 
          special promotions.
          Flash sales for loyal customers. */   

    return 10; // Example: applies a $10 discount
  }
}

@FeatureFlag('seasonalPromo') // Associate this strategy with the 'seasonalPromo' feature flag
@DiscountStrategy()
export class SeasonalPromoDiscountStrategy implements IDiscountStrategy {
  applyDiscount(order: Order): number {

/*      A seasonal promo discount follows a different logic, typically targeting 
        specific times of the year when customer demand fluctuates. 
        Here’s how it might work:

      1.  Time-Based Activation
            The discount is active only during a specific season 
            (e.g., summer, holiday shopping season, back-to-school).
            Can be set to trigger automatically based on calendar dates.
      2.  Product-Specific Discounts
            Certain products get marked down depending on seasonality 
            (e.g., winter coats in fall, grills in summer).
            Could include bundling (e.g., "Buy a swimsuit, get 20% off sunglasses").
      3.  Limited-Time Urgency
            Discounts expire within a short window to create urgency 
            (e.g., "Spring Sale! 48 Hours Only").
            May include countdown timers on websites or apps.
      4.  Customer Segmentation-Based Discounts
            Different discounts for loyalty members vs. new customers.
            VIP customers might get early access or bigger savings.
      5.  Volume-Based Discounts
            Buy more, save more (e.g., "Buy 2, Get 1 Free").
            Encourages bulk purchasing during seasonal demand spikes.
      6.  Channel-Specific Discounts
            Online-only or in-store-exclusive discounts.
            Promo codes for email subscribers or app users.
      7.  Referral or Social Engagement Discounts
            Customers get a seasonal discount for referring friends.
            Discounts for sharing seasonal promos on social media.
      8.  Early Bird vs. Last-Minute Deals
            Pre-season discounts: Encourage early purchases 
            (e.g., "Get 15% off before summer starts").
 */    
    return 5; // Example: applies a $5 discount -- test case
  }
}


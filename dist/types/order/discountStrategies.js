"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonalPromoDiscountStrategy = exports.LoyaltyDiscountStrategy = exports.InitStrategies = void 0;
const featureFlagDecorator_1 = require("./featureFlagDecorator"); // Import the decorator 
//This class initializes all discount strategies
//and registers them with the application.
//It is necessary due to the fact that     
class InitStrategies {
}
exports.InitStrategies = InitStrategies;
let LoyaltyDiscountStrategy = (() => {
    let _classDecorators = [(0, featureFlagDecorator_1.FeatureFlag)('loyalty'), (0, featureFlagDecorator_1.DiscountStrategy)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var LoyaltyDiscountStrategy = _classThis = class {
        applyDiscount(order) {
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
    };
    __setFunctionName(_classThis, "LoyaltyDiscountStrategy");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoyaltyDiscountStrategy = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoyaltyDiscountStrategy = _classThis;
})();
exports.LoyaltyDiscountStrategy = LoyaltyDiscountStrategy;
let SeasonalPromoDiscountStrategy = (() => {
    let _classDecorators = [(0, featureFlagDecorator_1.FeatureFlag)('seasonalPromo'), (0, featureFlagDecorator_1.DiscountStrategy)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SeasonalPromoDiscountStrategy = _classThis = class {
        applyDiscount(order) {
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
    };
    __setFunctionName(_classThis, "SeasonalPromoDiscountStrategy");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SeasonalPromoDiscountStrategy = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SeasonalPromoDiscountStrategy = _classThis;
})();
exports.SeasonalPromoDiscountStrategy = SeasonalPromoDiscountStrategy;
//# sourceMappingURL=discountStrategies.js.map
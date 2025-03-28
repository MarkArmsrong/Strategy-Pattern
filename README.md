# Strategy-Pattern
Conceptual Overview
Decorators and Reflection:
The system uses decorators to mark classes with specific behaviors, such as associating them with feature flags and registering them as discount strategies.

The @FeatureFlag decorator associates a feature flag (e.g., 'loyalty' or 'seasonalPromo') with a strategy class. The flag is stored as metadata using Reflect.defineMetadata().

The @DiscountStrategy decorator marks a class as a discount strategy and adds it to a globally accessible list (registeredStrategies). This list is populated dynamically at runtime based on which classes are decorated with @DiscountStrategy.

Inversion of Control (IoC):

IoC is achieved by relying on reflection to dynamically register and instantiate discount strategy classes. Instead of hardcoding or manually wiring dependencies, the system uses metadata (via decorators) to manage and inject dependencies.

The InitStrategies class initializes the system and triggers the decorators to register the strategy classes, but it doesn’t directly handle strategy instantiation. The instantiation of strategies is controlled by the DiscountCoordinator based on feature flags.

The system uses reflection to associate feature flags with specific strategies and IoC is applied when selecting and instantiating the strategies dynamically based on the current feature flags.

Dependency Injection (DI):

DI is managed by dynamically creating instances of strategy classes that are associated with enabled feature flags. The DiscountCoordinator acts as the central controller that decides which strategies should be applied.

At runtime, the DiscountCoordinator uses reflection (Reflect.getMetadata()) to check if a strategy class is associated with an active feature flag. If the feature flag is enabled (as determined from the featureFlags object), the strategy class is instantiated and added to the list of active discount strategies.

Type Safety is maintained by ensuring that all strategies implement the IDiscountStrategy interface, guaranteeing that the applyDiscount method is available.# Strategy-Pattern

# Ecommerce-mobile documentation
# Ecommerce Listing App

# Project Setup
Install React Native and required dependencies using create-react-native-app or expo-cli.
Set up your project directory structure and initialize Git.
Install Redux Toolkit and other relevant libraries.
Add the fake API to the project to help with getting data and posting actions

# Component Hierarchy

# Navigation 
StackAppNavigator: Root navigator handling navigation between screens.

# Screens.
DashboardScreen: Displays categories and product listings and cart.
DetailsScreen: Displays details of a selected product.
Cartscreen: Displays a list of select products to be bought

# State Management with Redux Toolkit
StoreConfiguration
Create a Redux store using configureStore from Redux Toolkit.

# Slices
categorySlice: Manages the list of available categories.
productSlice: Manages the list of products and their details.
cartSlice: Manages the applied filters for product listings cart.

# Services 
This is where all the action are stored, it's in this folder that the restfull apis are triggered 

# Components
create a component folder to help with the UI and feels of the application .

# Ecommerce Listing App documentation
# Project Setup
1. Install React Native and required dependencies using create-react-native-app or expo-cli.
2. Set up your project directory structure and initialize Git.
3. Install Redux Toolkit and ract redux libraries.
4. Add the fake API to the project to help with getting data and posting actions

# Component Hierarchy

# Navigation 
StackAppNavigator: Root navigator handling navigation between screens.

# Screens.
1. DashboardScreen: Displays categories and product listings and cart.
2. DetailsScreen: Displays details of a selected product.
3. Cartscreen: Displays a list of select products to be bought

# State Management with Redux Toolkit
# Store
1. Create a Redux store using configureStore from Redux Toolkit.
2. wrap the whole app around the provider react refux provides yo get the data where and when needed.
3. register the reducers.
4. useSelector and useDispatch to start your state management, its provided by reduc

# Slices
1. categorySlice: Manages the list of available categories.
2. productSlice: Manages the list of products and their details.
3. cartSlice: Manages the applied filters for product listings cart.

# Services 
This is where all the action are stored, it's in this folder that the restfull apis are triggered 

# Components
create a component folder to help with the UI and feels of the application .

# Overview.
if you are looking yo use this project, here are the steps yo follow to setit up 
1. clone the repository.
2. ensure you have node on your device , if not download nvm and use it yo add node to you system. (nb.  use version 18.17.1)
3. run npm install in the root dir.
4. run npx expo start, n.b if the device fails to connect run npx expo start --tunnel.
5. on running the first time you need to type y and the process would be successful, then rerun npx expo start --tunnel.
6. and then you can scan with your expo go app or run on your android emulator.
7. then you can navigate yhe screens, pick product, select a category, view details.

   

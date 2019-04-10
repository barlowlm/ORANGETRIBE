# SWENG-ORANGE-TRIBE

--Detailing Code--
As with most react native app the main is in the App.js file. This consists of import and initalisation that only needs to be completed once the app is launched. 
The LoginScreen lacks funcitonality other than navigation at the moment as specified by the client, the SettingsScreen enables us to change the map style and the splash screen at the beginning is designed in the SplashScreen class. All three employ the native base UI components and react navigation tools for both functionality and UI design. The QueryScreen class is set up to enable the user to check boses corresponding to the availble data, that can be displayed on the map, this is done using native-base. The results of these Queries employ react navigation to pass data to the map screen fro rendering. 
The main data visualisation is done in the Mapscreen class which makes use of the individual data classes to visualise specific data based on results from QueryScreen. Although the data is treated in accordance with it's type in it's individual classes. 
Biomass.js - 
    deals with Biomass Production data
    (this data consists of points which represent areas of high/low biomass production, it functions to filter the data into factions and display using colours)
    Red are areas with high biomass production, Pink are areas with low biomass produciton ,red-orange-yellow-green-blue-pink
    The meaning of the data is conveyed to the user via a legend
boundaries.js - 
    deals with Administrative Boundaries data (which consists of a series of polygons used to draw boundaries on the map)
    the class formats the data and plot it in correspondance with react-native-maps specification
FinancialTouchpoints.js - 
    deals with Financial Touchpoint data (which consists of points correspoing to fincancial touchpoints, these are visualised by markers(IOS)/pins(Android) on the map and this enables us to render callouts specifing the data). The class provides funcitonality to format the data to function with the react-native-maps regulations to allow for the plotting of the data and callouts based on the data
RoadsMap.js - 
    deals with infrastructure data (which consists entirely of polyline structures, to be plotted on the map representing roads)
Population.js - 
    deals with Urban/rural population distribution based on data from 2010-2015 (this is based on the file name)
    Again it functions to filter the data into factions and display using colours
    Blue - urban areas, Green - rural areas
    The meaning of the data is again conveyed to the user via a legend

--Software Package Dependancies--


-- How to install --


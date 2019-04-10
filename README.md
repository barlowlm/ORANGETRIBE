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
React- native maps
Library used to display map and map features.
If running on an IOS emmulator:Run npm install react-native-maps --save, Run react-native link react-native-maps
If running on android emmulator:https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md
Follow the above link guidelines on installation.For android a google maps API key will be needed, the current API key in the project is from a free trial of Google's API key service. A link to this can be found in the above installation page.
React-native navigation & React-native gesture handler
For running on an IOS emmulator: run npm install --save-react-navigation, run npm install --save-react-native-gesture-handler, run react-native link react-native-gesture-handler
For running on an android emmulator: For android follow the above steps of ios, and then manually add dependencies detailes in this document https://reactnavigation.org/docs/en/getting-started.html
Native base: Installation is the same for IOS and Android, run npm install native-base --save, and run react-native link. Detailed instructions can be found at https://www.npmjs.com/package/native-base
React-native-geojson: Installation is the same for IOS and Android. Run npm install react-native-geojson
React-native vector-icons:For IOS: Run npm install react-native-vector-icons, run react-native link react-native-vector-icons, there is also a manual option which can be found at this link: https://www.npmjs.com/package/react-native-vector-icons
For Android:Run npm install react-native-vector-icons,Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle", Details of installation can be found at:https://www.npmjs.com/package/react-native-vector-icons


-- How to install --
dependencies were installed from native code as directed at https://facebook.github.io/react-native/docs/getting-started.
Refer to above link for spacifics of installation.

WINDOWS INSTALLATION FOR ANDROID:

dependencies used:

-Chocolatey, a popular package manager for Windows, (includes Node and python).link: https://chocolatey.org/

-Android Studio, necessary for running andoird emulator and can be used as prefered development enviroment. Custom set up needed.  https://developer.android.com/studio/index.html


MAC INSTALLATION FOR ANDROID:

dependencies used:

-Homebrew, package manager which includes Node and recommended watchmen https://brew.sh/

-Android studio, see above

-(optional) Visual Studio code, prefered development enviroment found at https://code.visualstudio.com/download

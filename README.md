# SWENG-ORANGE-TRIBE

--Detailing Code--


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


# Welcome to React Native  Swiggy App Clone🔥!

This is swiggy app clone build with react native, Expo Cli. This App can run on both platform ( Android and IOS). 

## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open Android Emulator to run this project.

## Dependency Code:

ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-proptypes
(https://stackoverflow.com/questions/71702392/viewproptypes-will-be-removed-from-react-native-migrate-to-viewproptypes-export)

# Solution:
You can follow this link : -> (https://stackoverflow.com/posts/73166444/timeline)
1.  Install  [patch-package](https://www.npmjs.com/package/patch-package)  into your project, as per the instructions.
   
2.  Install deprecated-react-native-prop-types by running  `npm install deprecated-react-native-prop-types`  or  `yarn add deprecated-react-native-prop-types`.
    
3.  The invariant seems to be enforced in  `node_modules/react-native/index.js`, starting at line 436:

![image](https://user-images.githubusercontent.com/26887502/180035338-d1a0644a-f3bd-4485-a3da-dc5f340da86b.png)
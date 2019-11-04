import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import HomePage from './src/home';
import ProfilePage from './src/profile';
import NewsPage from './src/news';
import InboxPage from './src/inbox';
import { createStackNavigator } from 'react-navigation-stack';
import ClubsPage from './src/ButtonListHome/clubs';
import PlayersPage from './src/ButtonListHome/players';

const ClubButtonNavigator = createStackNavigator({      
  Clubs: {screen: ClubsPage, navigationOptions:{header:null}},
},{});

const PlayersButtonNavigator = createStackNavigator({
  Players: {screen: PlayersPage, navigationOptions:{header:null}},  
})

const MainNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomePage, navigationOptions: {
      tabBarLabel: 'Home',      
      tabBarIcon: ({focused}) => (
        <View>          
          <Image style={{ width: 25, height: 25 }} source={focused? require('./assets/HomeActiveSmall.png'): require('./assets/HomeInActiveSmall.png')} />
        </View>
      ),
    }
  },
  Inbox: {
    screen: InboxPage, navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({focused}) => (
        <View>   
          <Image style={{ marginTop: 5,width: 20, height: 20 }} source={focused ? require('./assets/InboxActive.png'):require('./assets/InboxInActive.png')} />
        </View>
      ),
    }
  },
  News: {
    screen: NewsPage, navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({focused}) => (
        <View>          
          <Image style={{ marginTop: -3,width: 35, height: 35 }} source={focused ?require('./assets/NewsActive.png') : require('./assets/NewsInActive.png')} />
        </View>
      ),
    }
  },
  Profile: {
    screen: ProfilePage, navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({focused}) => (
        <View>          
          <Image style={{marginTop:3, width: 25, height: 25 }} source={focused ? require('./assets/ProfileActive.png'): require('./assets/ProfileInActive.png')} />
        </View>
      ),
    }
  }  
}, {
  initialRouteName: 'Home',
  activeColor: "#15AEE8",
  barStyle: { backgroundColor: "#fff" }
});

const route= createStackNavigator({
  Main: {screen: MainNavigator, navigationOptions:{header:null}},
  ClubNavigator: {screen: ClubButtonNavigator, navigationOptions:{headerTintColor:"white",headerStyle:{backgroundColor:"#15AEE8"}, headerTitle:'Clubs'}},
  PlayersNavigator: {screen: PlayersButtonNavigator, navigationOptions:{headerTintColor:"white",headerStyle:{backgroundColor:"#15AEE8"}, headerTitle:'Players'},}
});

const App = createAppContainer(route);


export default App;
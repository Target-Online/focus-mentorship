import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../shared/components/TabBarIcon';
import { Header } from '../shared/components';
import { materialTheme } from '../shared/constants'

import { StudentsList, StudentsView } from '../screens/studentsStack';
import { ProfileView } from '../screens/profileStack';
import { CoursesList, CoursesAdd, CoursesView, AddStudent, CoursesChat } from '../screens/coursesStack';
import { Folders, AddFolder } from '../screens/foldersStack';
import { SubFolders, AddSubFolder, SubFolderDocuments } from '../screens/foldersStack/subFoldersStack';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const StudentsStack = createStackNavigator({
  Students: {
    screen: StudentsList,
    navigationOptions: ({ navigation }) => ({
      header: <Header search black title="Students" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  View: {
    screen: StudentsView,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title={navigation.state.params.student.name ? navigation.state.params.student.name : "Profile"} transparent navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: 'white', },
  config,
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileView,
    navigationOptions: ({ navigation }) => ({
      header: <Header white transparent navigation={navigation} />,
      headerTransparent: true,
    })
  },
}, {
  cardStyle: { backgroundColor: '#EEEEEE', },
  config,
});

const CoursesStack = createStackNavigator({
  Courses: {
    screen: CoursesList,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Courses" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  ViewCourse: {
    screen: CoursesView,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black title="Course" navigation={navigation} />,
      headerTransparent: true,
    })
  },
  AddCourse: {
    screen: CoursesAdd,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black title="Add Course" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  CourseChat: {
    screen: CoursesChat,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black title="Chat" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  AddStudent: {
    screen: AddStudent,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black search title="AddStudent" navigation={navigation} />,
      headerTransparent: false,
    })
  },

}, {
  cardStyle: { backgroundColor: 'white', },
  config,
});

const FoldersStack = createStackNavigator({
  Folders: {
    screen: Folders,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Folders" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  AddFolder: {
    screen: AddFolder,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black title="Add folder" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  SubFolders: {
    screen: SubFolders,
    navigationOptions: ({ navigation }) => ({
      header: <Header back title="Sub Folders" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  AddSubFolder: {
    screen: AddSubFolder,
    navigationOptions: ({ navigation }) => ({
      header: <Header back black title="Add Sub Folder" navigation={navigation} />,
      headerTransparent: false,
    })
  },
  SubFolderDocuments: {
    screen: SubFolderDocuments,
    navigationOptions: ({ navigation }) => ({
      header: <Header back search black title="Documents" navigation={navigation} />,
      headerTransparent: false,
    })
  }
}, {
  cardStyle: { backgroundColor: 'white', },
  config,
});

const tabNavigator = createBottomTabNavigator({
  Students: {
    screen: StudentsStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'graduation'} />
      ),
      tabBarOptions: { activeTintColor: materialTheme.COLORS.PRIMARY }
    }
  },
  Courses: {
    screen: CoursesStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'notebook'} />
      ),
      tabBarOptions: { activeTintColor: materialTheme.COLORS.PRIMARY }
    }
  },
  Folders: {
    screen: FoldersStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'folder'} />
      ),
      tabBarOptions: { activeTintColor: materialTheme.COLORS.PRIMARY }
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'user'} />
      ),
      tabBarOptions: { activeTintColor: materialTheme.COLORS.PRIMARY }
    }
  },
});

export default tabNavigator;

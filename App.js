// Apps ini dibuat oleh : Kadek Marta werdaya
// mohon tidak mengcopy atau menduplikat tanpa seizin dari pembuat
// etika itu penting 
import React from 'react';
// import HelloWorld from './src/00Persiapan/HelloWorld';
// import BelajarLayout from './src/01Layout/BelajarLayout';
// import TugasLayout from './src/Tugas2/TugasLayout';
// import SiakFile from './src/SIAK/SiakFile';
// import VolumeBalok from './src/Balok/VolumeBalok';
// import DataBaseBarang from './src/kasir/DataBaseBarang';

// import {StyleSheet,View, TextInput, TouchableOpacity,Text} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SistemKasir from './src/kasir/SistemKasir';
import Penjualan from './src/kasir/Penjualan';
import AboutUS from './src/kasir/AboutUS';
import DataBarang from './src/kasir/DataBarang';

// masuk ke bagian view dari aplikasi ini
export default class App extends React.Component {
  render() {
    return ( <
      AppContainer / >
    );
  }
}

// masuk ke bagian navigator
const AppStackNavigator = createStackNavigator({
  Home: SistemKasir,
  Penjualan: Penjualan,
  TentangKami: AboutUS,
  DataBarang: DataBarang,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#00cbcc'
    }
  }
});
const AppContainer = createAppContainer(AppStackNavigator);

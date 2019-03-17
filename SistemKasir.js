import React from 'react';
import {StyleSheet,View, Platform, TouchableOpacity,Text} from 'react-native';
import ImageSlider from 'react-native-image-slider';

// import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class SistemKasir extends React.Component {
  static navigationOptions={
    title: 'HOME - Penjual Laptop',
    }

  render() {
    return ( 
      <View style={styles.container}>

{/* bagian slideshow */}
        <View style={styles.slideShow}>
            < ImageSlider 
            loopBothSides
            autoPlayWithInterval = {2500}
            images = {
              [
                'https://www.jakartanotebook.com/images/products/1/252/34501/2/xiaomi-mi-gaming-laptop-intel-i5-nvidia-gtx-1050ti-8gb-128gb-15.6-inch-windows-10-black-47.jpg',
                'https://edgeup.asus.com/wp-content/uploads/2017/06/feature-1.jpg',
                'https://assets.jalantikus.com/assets/cache/500/346/userfiles/2018/12/19/harga-laptop-asus-rog-2-671c9.jpg'
              ]
            }
            />
        </View >
{/* bagian menu dari aplikasi ini */}
        < View style = {styles.menu}>
          <View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('Penjualan')}>
              <Text style={{color: "white"}}> Penjualan </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('DataBarang')}>
              <Text style={{color: "white"}}> Data Barang</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View >
            < TouchableOpacity
                style = {styles.button2}
                onPress={()=>this.props.navigation.navigate('TentangKami')}>
              <Text style={{color: "white"}}> Tentang kami</Text>
            </TouchableOpacity>
          </View>
        </View>
{/* bagian footer dari aplikasi ini */}
        < View style = {styles.footer}>
            <Text style={styles.textFooter}>{'\u00A9'} Marta Werdaya 2019</Text>
        </View>
      </View>
    );
  }
}



// bagian style dari semua yang ada di atas
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#76ffff',
  },

  header:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    backgroundColor: '#00cbcc',
    color: 'black',
    justifyContent: 'center',
    textAlign:'center',
    fontSize:30,
    paddingTop: 20,
  },

  slideShow:{
    flex: 4,
    paddingBottom: 30,
  },

  menu:{
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    color: "white",
    width: 150,
    margin:15,
    borderRadius: 10,
    
  },
  button2:{
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    color: "white",
    width: 330,
    margin: 15,
    borderRadius: 10,
  },

  footer:{
    flex:1,
    backgroundColor: '#00cbcc',
    width: "100%",
  },

  textFooter:{
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  }

});
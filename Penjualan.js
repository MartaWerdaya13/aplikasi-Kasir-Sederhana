import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DataBaseBarang from './DataBaseBarang';

export default class Penjualan extends React.Component {
static navigationOptions = {
  title: 'Penjualan',
}
// bagian state pada program ini
constructor(props) {
    super(props);
    this.state = {
      kode: 0,
      jumlah: 0,
      harga:0,
      total:0,
      bayar:0,
      kembalian:0,
    };
  }

  onPress = () => {
    totalBelanja = this.state.jumlah * this.state.harga;
    this.setState({ total:totalBelanja})
    varBayar = this.state.bayar;
    if(varBayar < totalBelanja){
      this.setState({ kembalian: 'uang anda kurang'})
    }else{
      jumKebalian = this.state.bayar-this.state.total;
      this.setState({kembalian:jumKebalian})
    }

      
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.input}>
          <Text style={styles.text}>Kode Barang :</Text>
          <TextInput
              style={styles.TextInput}
              onChangeText={(varKode) => this.setState({kode:varKode})}
              keyboardType='numeric'
              placeholder=" Input"/>
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Jumalah Beli :</Text>
          <TextInput
              style={styles.TextInput}
              onChangeText={(varJumBeli) => this.setState({jumlah:varJumBeli})}
              keyboardType='numeric'
              placeholder=" Input"/>
        </View>

        <View style={styles.input}>
          <Text style={styles.text}>Harga<Text>{'\t\t\t\t\t\t\t'}</Text>:</Text>
          <TextInput
              style={styles.TextInput}
              onChangeText={(varHarga) => this.setState({harga:varHarga})}
              keyboardType='numeric'
              placeholder=" Input"/>
        </View>
        </View>
          <View >
            < TouchableOpacity
                style = {styles.button2}
                onPress={this.onPress}>
              <Text style={{color: "white"}}> Hitung</Text>
            </TouchableOpacity>
          </View>
        <View style={styles. output} >
        <Text>{'\n'}</Text>
          <Text style={styles.text2}>Total Belanja anda adalah : {this.state.total} </Text>
            <Text>{'\n'}</Text>
            <View style={styles.input}>
            <Text style={styles.text}>Uang Bayar{'\t\t'}:</Text>
            <TextInput
                style={styles.TextInput}
                onChangeText={(varBayar) => this.setState({bayar:varBayar})}
                keyboardType='numeric'
                placeholder=" Input"/>
            </View>
          <Text>{'\n'}</Text>
          <Text style={styles.text2}>Kembalian anda adalah : {this.state.kembalian}</Text>
          <Text>{'\n'}</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76ffff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  menu:{
    flex: 1,
    marginTop: 50,
  
  },
  input:{
    flexDirection: 'row',
    justifyContent:'center',
  },
  text: {
    margin:10,
    marginTop: 16,
  },
  
  TextInput:{
    height: 45, 
    width: 180,
    marginTop: 10,
    borderColor: 'black', 
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  button2: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    color: "white",
    width: 330,
    margin: 15,
    borderRadius: 10,
  },
  output: {
    flex: 1,
    justifyContent: 'center',
  },
  text2:{
    marginLeft: 30,
  }
});
// Apps ini dibuat oleh : Kadek Marta werdaya
// mohon tidak mengcopy atau menduplikat tanpa seizin dari pembuat
// etika itu penting
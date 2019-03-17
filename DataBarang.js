import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
// import { bold } from 'ansi-colors';

export default class DataBarang extends React.Component {
static navigationOptions = {
  title: 'Data Barang',
}
  constructor(props){
  super(props);
  this.state={
    data:[
      {
        "nama": "Asus Zenbook",
        "kode": "X45",
        "harga":"7000.000",
      },
      {
        "nama": "Asus Zephyrus",
        "kode": "X46",
        "harga":"23.000.000",
      },
      {
        "nama": "Asus Vivobook",
        "kode": "X47",
        "harga":"10.000.000",
      },
      {
        "nama": "Asus ROG",
        "kode": "X48",
        "harga":"15.000.000",
      },
      {
        "nama": "Asus TUF",
        "kode": "X49",
        "harga":"7000.000",
      },
      {
        "nama": "Acer Predator",
        "kode": "X50",
        "harga":"19.000.000",
      },
    ]
  };
}

_renderItem = data => {
return(
<View style={{flex: 1, flexDirection: 'column'}}> 
  <View style={{flex: 0, flexDirection: 'row'}}>
        <Image
          style={styles.gambar}
          source={require("./img/laptop.png")}
          />
  <View style={{flex: 0, flexDirection: 'column'}}>
    <Text style={styles.row}> {data.item.nama}</Text> 
    <Text style={styles.row}> {data.item.kode}</Text> 
    <Text style={styles.row}> {data.item.harga}</Text> 
    <Text>{'\n'}</Text>
  </View>

  </View> 
  
</View>
);
};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.identitas}>
          <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(data, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76ffff',
    flexDirection: 'row',
    fontSize: 18,
    padding: 11,
    borderWidth: 1
  },

  row: {
    fontSize: 18,
    width: 170,
    padding: 5,
    borderWidth: 1
  },

  foto: {
    padding: 2,
  },

  gambar: {
    width: 150,
    height: 100,
  },
  identitas: {
    paddingTop: 4,
  },
});


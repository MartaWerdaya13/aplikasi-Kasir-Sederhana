import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
// import { bold } from 'ansi-colors';

export default class AboutUS extends React.Component {
static navigationOptions = {
  title: 'Tentang Kami',
}
constructor(props){
  super(props);
  this.state={
    data:[
      {idn: "Nama : Kadek Marta Werdaya"},
      {idn: "NIM : 1715051131"},
      {idn: "Kelas : 4A" },
    ]
  };
}

_renderItem = data => {
return(
<View> 
  <Text style={styles.row}> {data.item.idn}</Text> 
</View>
);
};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image
          style={styles.gambar}
          source={require("./img/4x6.jpg")}
          />
        </View>
        
        <View style={styles.identitas}>
          <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
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
  },

  row: {
    fontSize: 18,
    padding: 11,
    borderWidth: 1
  },

  foto:{
  padding: 2,
  },

  gambar:{
    width:100,
    height: 150,
  },
  identitas:{
    paddingTop: 4,
  },
});

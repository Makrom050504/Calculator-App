import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

import Vertical from './components/vertical'
import Horizontal from './components/horizontal'

export default function App() {
  const [orient, setOrient] = useState(true)

  ops = ["/", "*", "-", "+"]

  isPortrait = () => {
    let dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    setOrient(this.isPortrait())
    console.log(orient);
  })

  return (
    <View style={styles.container}>
      <StatusBar />
      {
        orient
        ?
        <Vertical />
        :
        <Horizontal></Horizontal>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

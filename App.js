import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ height: 100, width: 200, backgroundColor: 'red', margin:50 }}>
        <Text style={{textAlign:'center', color:'yellow'}}>Hello world</Text>
        <Text style={{textAlign:'center', color:'white'}}>My New Native app </Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

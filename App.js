import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import styles from './styles';
export default function App() {
  return (
    
    <View style={styles.container}>
          <View style={styles.box1}>
            <Text>Square1</Text>
          </View>
          <View style={styles.box2}>
            <Text>Square2</Text>
          </View>
          <View style={styles.box3}>
            <Text>Square3</Text>
          </View>
    </View>
  );
}


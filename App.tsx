import { Text, View } from "react-native";

export default function App() {
  return(
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    }}>
      <Text key="1" style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
      }}>
        Nome do evento
      </Text >
        
      <Text key="2" style={{
        color: '#6B6B6B',
        fontSize: 16,
      }}>
        Sexta1 4 de Dezembro de 2023.
      </Text>
    </View>
  ) 
}
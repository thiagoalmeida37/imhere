import { Text, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return(
    <View style={styles.container}>

      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text >
        
      <Text key="2" style={styles.eventDate}>
        Sexta1 4 de Dezembro de 2023.
      </Text>
    </View>
  ) 
}
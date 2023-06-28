import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home() {

  function handleParticipantAdd() { 
    console.log('Clicou no botão');
  }

  return(
    <View style={styles.container}>

      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text >
        
      <Text key="2" style={styles.eventDate}>
        Sexta 14 de Dezembro de 2023.
      </Text>
      <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  ) 
}
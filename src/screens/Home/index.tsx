import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {

  const participants = ['Thiago', 'João', 'Maria', 'José', 'Ana', 'Pedro', 'Paulo', 'Lucas', 'Marcos', 'Mateus', 'Luciana', 'Luiz', 'Luiza', 'Luisa', 'Luizinho'];

  function handleParticipantAdd() { 
    console.log('Clicou no botão');
  }

  function handleParticipantRemove(name: string) { 
    console.log('Clicou em remover o participante', name);
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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={()=> handleParticipantRemove("Thiago")}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum participante adicionado
          </Text>
        )}
      />
    </View>
  ) 
}
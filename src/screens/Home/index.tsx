import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState(['Joao']);

  function handleParticipantAdd() {
    if (participants.includes("Thiago")) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome");
    }

    setParticipants(prevState => [...prevState, "Thiago"]);
 
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido", `O participante ${name} foi removido com sucesso!`)
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
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
            onRemove={() => handleParticipantRemove(item)}
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
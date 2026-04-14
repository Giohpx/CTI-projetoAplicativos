import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from '/Users/ra2457088/CTI-projetoAplicativos/hooks/useTarefas';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>✨ Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          placeholderTextColor="#999"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />

        <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
          <AntDesign name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma tarefa ainda 💤</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.tarefaContainer}>
            
            <Text style={styles.tarefaTexto}>{item.texto}</Text>

            <TouchableOpacity 
              style={styles.deleteButton}
              onPress={() => removerTarefa(item.id)}
            >
              <AntDesign name="delete" size={18} color="#fff" />
            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#d9cfa8c4' 
  },

  titulo: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20,
    color: '#b8860b'
  },

  inputContainer: { 
    flexDirection: 'row', 
    marginBottom: 15 
  },

  input: { 
    flex: 1, 
    borderColor: '#e3aa25', 
    borderWidth: 2,
    padding: 12, 
    borderRadius: 12, 
    marginRight: 10,
    backgroundColor: '#fff'
  },

  addButton: {
    backgroundColor: '#e3aa25',
    padding: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tarefaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f0d9a7',
    shadowColor: '#e3aa25',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },

  tarefaTexto: { 
    fontSize: 16,
    color: '#333'
  },

  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 10,
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontStyle: 'italic'
  }
});
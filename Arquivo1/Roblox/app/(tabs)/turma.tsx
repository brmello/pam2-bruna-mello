import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Button } from 'react-native';

const Turma: React.FC = () => {
  const [nome, setNome] = useState<string>(''); // Estado para o nome do amigo
  const [data, setData] = useState<string>(''); // Estado para a data de nascimento
  const [amigos, setAmigos] = useState<{ nome: string; avatar: string; data: string }[]>([]); // Lista de amigos

  // Função para adicionar amigo
  const adicionarAmigo = () => {
    if (nome.trim() && data.trim()) {
      const novoAmigo = {
        nome,
        avatar: `https://robohash.org/${nome.replace(" ", "")}?set=set5`, // Gerando um avatar com robohash
        data,
      };
      setAmigos([...amigos, novoAmigo]);
      setNome('');
      setData('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Turma</Text>
        <Button title="🔔" onPress={() => alert("Notificações")} />
      </View>
      
      {/* Notificação */}
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>
          Vamos conferir sua idade para você poder usar o chat com segurança e é rápido.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Desbloquear chat</Text>
        </TouchableOpacity>
      </View>

      {/* Botões de ação */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Começar Turma</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Comunidades</Text>

      {/* Lista de amigos */}
      <ScrollView style={styles.scrollContainer}>
        {amigos.map((amigo, index) => (
          <View key={index} style={styles.amigoItem}>
            <Image source={{ uri: amigo.avatar }} style={styles.avatar} />
            <View style={styles.amigoInfo}>
              <Text style={styles.amigoName}>{amigo.nome}</Text>
              <Text style={styles.amigoDate}>{amigo.data}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input de nome e data */}
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do amigo"
      />
      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Data de nascimento"
      />
      <TouchableOpacity style={styles.addButton} onPress={adicionarAmigo}>
        <Text style={styles.addButtonText}>Adicionar Amigo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  amigoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  amigoInfo: {
    flexDirection: 'column',
  },
  amigoName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amigoDate: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Turma;
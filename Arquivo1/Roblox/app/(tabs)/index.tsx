
import { Link } from 'expo-router';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  

const Inicio: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.username}>bmxllos</Text>
        <View style={styles.headerIcons}>
          <Button title="🔍" onPress={() => alert('Busca')} />
          <Button title="🔔" onPress={() => alert('Notificações')} />
        </View>
      </View>

      {/* Notificação */}
      <View style={styles.notification}>
        <Text style={styles.notificationText}>
          Vamos conferir sua idade para você poder usar o chat com segurança e é rápido.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Desbloquear chat</Text>
        </TouchableOpacity>
      </View>

      {/* Conexões */}
      <Text style={styles.sectionTitle}>Conexões (27)</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          
          <Image
            source={{ uri: 'https://robohash.org/Maria' }}
            style={styles.avatar}
          />
          <Image
            source={{ uri: 'https://robohash.org/Luquinhamc5' }}
            style={styles.avatar}
          />
          <Image
            source={{ uri: 'https://robohash.org/M' }}
            style={styles.avatar}
          />
          {/* Ícone para adicionar mais conexões */}
          <TouchableOpacity style={styles.addConnection}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Seção de Destaques */}
      
      <Text style={styles.sectionTitle}>Seleção de hoje</Text>
      <Text style={styles.subTitle}>Uma seleção de destaques diários</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

      <view style={styles.linha}>
          <Image
            source={require("../../assets/images/naturalDisaster.png")}
            style={{ width: 150, height: 150 }}
          />
          <text style={{fontFamily:"Cursive", marginRight:"50px"}}>
            
            Natural Disaster

          </text>
         
          <Image style={styles.imagem2}
            source={require("../../assets/images/Volleybal.png")}
            
          />
          <text style={styles.textoVolley}>Volleyball Legends</text>
      </view>
      <text style={styles.destaque}>Destaques</text>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.destaqueImage}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.destaqueImage}
        />
        
      </ScrollView>
    
      {/* Nova seção de imagens entre a Seleção de hoje e a barra de navegação */}
      <Text style={styles.sectionTitle}></Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150x100' }}
          style={styles.additionalImage}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/150x100' }}
          style={styles.additionalImage}
        />
        <Image
          source={{ uri: 'https://via.placeholder.com/150x100' }}
          style={styles.additionalImage}
        />
      </ScrollView>

      {/* Barra de Navegação Inferior */}
      <View style={styles.navBar}>
        <Link href="/" style={styles.navLink}>Início</Link>
        <Link href="/turma" style={styles.navLink}>Turma</Link>
        <Link href="/configuracoes" style={styles.navLink}>Configurações</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagem2:{
    justifyContent:"center",
    marginTop:"18%",
  },

  textoVolley:{
    
  },
  destaque:{
    fontFamily:"cursive" ,
    marginTop:"27%",
    marginLeft:"-38%",
    fontSize: 24,
  
  },

  linha:{
    flexDirection:"row",
    marginBottom:"10%",
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  addConnection: {
    width: 50,
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
    color: 'black',
  },
  destaqueImage: {
    width: 150,
    height: 100,
    
    borderRadius: 10,
  },
  additionalImage: {
    width: 150,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingVertical: 10,
  },
  navLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Inicio;
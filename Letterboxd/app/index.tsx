import { StyleSheet, Text, View, Image, ScrollView, FlatList,TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Index() {

  const favoritos = [
    { id: "1", img: require("../assets/images/chefe.jpg") },
    { id: "2", img: require("../assets/images/viagem.png") },
    { id: "3", img: require("../assets/images/carros.jpg")}
  ];

  const recentes = [
    { id: "1", img: require("../assets/images/devil.jpg")},
    { id: "2", img: require("../assets/images/now.jpg")},
    { id: "3", img: require("../assets/images/the.jpg")},
    { id: "4", img: require("../assets/images/wall.jpg")},
  ];

const abrirLink = () =>{
    router.push("/search");
};

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* BARRA SUPERIOR */}
        <View style={styles.barraSuperior}>
          <View style={styles.centro}>
            <Feather name="settings" size={24} color="#fff" />
            <Text style={styles.nome}>DavidMelki</Text>
            <Feather name="more-vertical" size={24} color="#fff" />
          </View>

          <View style={styles.opcoes}>
            <Text style={styles.opcaoProfile}>Profile</Text>
            <Text style={styles.opcao}>Diary</Text>
            <Text style={styles.opcao}>Lists</Text>
            <Text style={styles.opcao}>Watchlist</Text>
          </View>
        </View>

        {/* PERFIL */}
        <View style={styles.containerPerfil}>
          <Image
            source={ require("../assets/images/melki.jpeg")}
            style={styles.foto}
          />
          <Text style={styles.bio}>só uns filmes q eu curto (ou nao)</Text>
        </View>

        {/* FAVORITOS */}
        <Text style={styles.nomeSecao}>FAVORITES</Text>
        <FlatList
          data={favoritos}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <Image source={item.img} style={styles.capaFavoritos} />
          )}
        />

        {/* RECENTES */}
        <Text style={styles.nomeSecao}>RECENT ACTIVITY</Text>
        <FlatList
          data={recentes}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <Image source={item.img} style={styles.capa} />
          )}
        />

      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={styles.barraInferior}>
        <Feather name="book" size={24} color="#aaa" />
        <TouchableOpacity onPress={abrirLink}>
            <Feather name="search" size={24} color="#aaa" />
          </TouchableOpacity>
        <Feather name="plus-circle" size={28} color="#ffffff" />
        <Feather name="bell" size={24} color="#aaa" />
        <Feather name="user" size={24} color="#00ff88" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181B20",
  },

  barraSuperior: {
    backgroundColor: "#000",
    paddingTop: 40,
    paddingBottom: 10,
  },

  centro: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  opcoes: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  opcao: {
    color: "#aaa",
    fontSize: 14,
  },

  opcaoProfile: {
    color: "#fff",
    fontSize: 14,
    borderBottomWidth: 2,
    borderBottomColor: "#00ff88",
    paddingBottom: 5,
  },

  containerPerfil: {
    alignItems: "center",
    marginVertical: 25,
  },

  foto: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },

  bio: {
    color: "#aaa",
    fontSize: 14,
  },

  nomeSecao: {
    color: "#aaa",
    fontSize: 13,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
  },

  lista: {
    paddingHorizontal: 15,
    gap: 10,
  },

  capaFavoritos: {
    width: 120,
    height: 180,
    borderRadius: 6,
  },

  capa: {
    width: 80,
    height: 120,
    borderRadius: 6,
  },

  barraInferior: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#445565",
    paddingVertical: 10,
  },
});

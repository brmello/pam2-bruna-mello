import { View, Text, StyleSheet, TextInput, ScrollView,TouchableOpacity} from "react-native";
import { Feather } from "@expo/vector-icons";
import{ router } from "expo-router";

export default function Search() {
      const abrirLink = () =>{
      router.push("/");
  };

  return (


    <View style={styles.container}>
      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#aaa" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Browse By */}
        <Text style={styles.sectionTitle}>Browse By</Text>
        {[
          "Release date",
          "Genre, country or language",
          "Service",
          "Letterboxd Video Store",
          "Most popular",
          "Highest rated",
          "Most anticipated",
          "Top 500 narrative features",
          "Featured lists",
        ].map((item, index) => (
          <Text key={index} style={styles.option}>{item}</Text>
        ))}

        {/* Letterboxd.com */}
        <Text style={styles.sectionTitle}>Letterboxd.com</Text>
        {[
          "New here?",
          "Frequent questions",
          "About subscriptions",
          "Journal / Editorial",
          "Showdown challenges",
        ].map((item, index) => (
          <Text key={index} style={styles.option}>{item}</Text>
        ))}
      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.barraInferior}>
        <Feather name="clipboard" size={24} color="#aaa" />
        <Feather name="search" size={24} color="#00ff88" />
        <Feather name="plus-circle" size={28} color="#aaa" />
        <Feather name="zap" size={24} color="#aaa" />
        <TouchableOpacity onPress={abrirLink}>
        <Feather name="user" size={24} color="#aaa" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181B20",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  option: {
    color: "#aaa",
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  barraInferior: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
  },
});

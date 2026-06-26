import { Text, View, StyleSheet,Image} from "react-native";

export default function Index() {
  return (
    <View style={styles.navBar}>
      <Image source={require('@/assets/images/tabIcons/PapoCine.png')} style={styles.logo}></Image>
      <View style={styles.menu}>
        <Text>Home</Text>
        <Text>Categories</Text>
        <Text>About us</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    navBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    backgroundColor: "#9c1a1a",
    height: 80,
    paddingHorizontal: 16,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  menu: {
    flexDirection: "row",
    gap: 24,
    marginRight:"30%"
  },
});

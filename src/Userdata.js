import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState, useEffect } from "react";

const Userdata = () => {
  const [loaded, setloaded] = useState(true);

  const [user, setuser] = useState([]);
  const getuserdata = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realdata = await response.json();
      console.log(realdata, "reald");
      setuser(realdata);
      setloaded(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getuserdata();
  }, []);

  const showuserdata = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imagecontainer}>
          <Image style={styles.imagestyle} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.biodatacontainer}>
            <Text style={styles.biodata}>Bio-data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>
          <View style={styles.maincontain}>
            <Text style={styles.myname}>Name:{item.name}</Text>
            <Text style={styles.myname}>E-mail:{item.email}</Text>
            <Text style={styles.myname}>mobile:{item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainheader}>List of Users</Text>
      <FlatList keyExtractor={(item)=>{item.id}} data={user} renderItem={showuserdata} showsHorizontalScrollIndicator={false}  horizontal />
    </View>
  );
};
const styles = StyleSheet.create({
  imagestyle: {
    width: "100%",
    height: 180,
  },
  imagecontainer:{
    padding:10
  },
  maincontainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  biodatacontainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  idNumber:{
    fontSize:20,
    color:"rgba(255,255,255,0.5)",
    fontFamily:"JosefinSans_400Regular",
    paddingRight:5
  },
  biodata:{
    fontSize:20,
    color:"#fff",
    fontFamily:"JosefinSans_400Regular"
  },
mainheader:{
  fontSize:30,
  color:"#a18ce5",
  textAlign:"center",
  fontFamily:"JosefinSans_400Regular"
},
maincontain:{
  padding:10,
  backgroundColor:"#353535",
  borderBottomLeftRadius:5,
  borderBottomRightRadius:5
},
myname:{
  fontSize:14,
  color:"#fff",
  marginBottom:10,
  alignSelf:"flex-start",
  textTransform:"capitalize",
  fontFamily:"JosefinSans_400Regular"
}
});

export default Userdata;

import React, {useState} from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Alert
} from "react-native";
import { Picker } from "@react-native-community/picker";

const Formulario = ({busqueda, guardarbusqueda, guardarconsultar}) => {
  const {ciudad} = busqueda
  console.disableYellowBox = true;

  const [animacionboton] = useState(new Animated.Value(1))
  const consultarciudad = () => {
    if(ciudad.trim() === "") {

      return;
    }
    guardarconsultar(true)
  }
 
  const mostrarAlerta = () => [
    Alert.alert("Error", "Debe seleccionar un ciudad", [{Text: "Entendido"}])
  ]
  const animacionEntrada = () => {
    Animated.spring(animacionboton, {
      toValue: .9,
            useNativeDriver: true

    }).start()
  }
  const animacionSalida = () => {
    Animated.spring(animacionboton, {
      toValue: 1,
            useNativeDriver: true

    }).start()
  }
  const estiloAnimacion = {
    transform: [{
      scale: animacionboton
    }]
  }
  return (
    <>
      <View>
        <View>
          <Text style={styles.input}>Clima</Text>
        </View>
     
        <View>
       

          <Picker
            selectedValue={ciudad} 
            onValueChange={ciudad => guardarbusqueda({...busqueda, ciudad})}
            style={styles.itempais}
          >
            <Picker.Item label="--seleccione una ciudad--" value="" />
            <Picker.Item label="Aguilares" value="3587428" />
            <Picker.Item label="Apopa" value="3587345" />
            <Picker.Item label="Ayutuxtepeque" value="3587308" />
            <Picker.Item label="Ciudad Delgado" value="3586814" />
            <Picker.Item label="Cuscatancingo" value="3586833" />
            <Picker.Item label="El Paisnal" value="3586204" />
            <Picker.Item label="Guazapa" value="3585636" />
            <Picker.Item label="Ilopango" value="3585484" />
            <Picker.Item label="Mejicanos" value="3584399" />
            <Picker.Item label="Nejapa" value="3583127" />
            <Picker.Item label="Panchimalco" value="3584156" />
            <Picker.Item label="Rosario de Mora" value="3583937" />
            <Picker.Item label="San Marcos" value="3583480" />
            <Picker.Item label="San Martín" value="3110396" />
            <Picker.Item label="San Salvador" value="3110063" />
            <Picker.Item label="Santiago Texacuangos" value="3583194" />
            <Picker.Item label="Santo Tomás" value="3583183" />
            <Picker.Item label="Soyapango" value="3583096" />
            <Picker.Item label="Tonacatepeque" value="3582918" />
          </Picker>

        </View>
       

         
      </View>
      {consultarciudad()}
    </>
    
  );
 
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 40,
    marginTop:5,
    marginBottom:30,
    textAlign: "center",
    fontFamily:"lucida grande",
    color: "white",
  },
  itempais: {
    height: 60,
    backgroundColor: "#fff",
    fontFamily:'lucida grande',
    textAlign:'center',
    justifyContent:'center',
  
  },
  btnBuscar: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#000",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  textoBuscar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});
export default Formulario;

import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text,Image,ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';




const Ciudad = ({ resultado,temperatura,clima,viento,temperaturamin,temperaturamax,humedad,tipoclima}) => {
const [info,setinfo]=useState({});
console.disableYellowBox = true;

const [nombre,setnombre]=useState();
const [tiempo,setclima]=useState([]);
const imagen=(temperatura)=>{
  
if(temperatura>=31){
          
return <ImageBackground style={styles.imagen} source={require('../src/img/sol.png')}/> 
  
}
if(temperatura>=25){

  return <ImageBackground style={styles.imagen} source={require('../src/img/nubeconsol.jpg')}/>

}
if(temperatura>=20){

  return <ImageBackground style={styles.imagen} source={require('../src/img/nubeconrayo.jpg')}/>

}

if(temperatura>=15){

  return <ImageBackground style={styles.imagen} source={require('../src/img/nubes.jpg')}/>

}
if(temperatura>=15){

  return <ImageBackground style={styles.imagen} source={require('../src/img/nubes.jpg')}/>

}
if(temperatura>=-30){

  return <ImageBackground style={styles.imagen} source={require('../src/img/frio.jpg')}/>

}


return
};
const mostrarform=()=>{
  if(resultado!==null){
return

  }
}
useEffect(() => {
    setinfo(resultado);
   clima.length =0;

    
  
  imagen();   
      setnombre(resultado.name);

      setclima(clima);
  });

  return (
    
    <Card style={{textAlign:'center',justifyContent:'center'}} >
    <View style={{textAlign:'center',justifyContent:'center'}}>
        <Card.Title>{nombre}</Card.Title>
        <Card.Divider />
                {imagen(temperatura)}
              <View style={{flexDirection:'row'}}>
           <ImageBackground style={styles.termometro} source={require('../src/img/termometro.png')}/>   
             <Text style={{fontSize:30,textAlign:'center',fontFamily:'times new roman',flexDirection:'column',marginTop:10}}> {temperatura}°C</Text> 
             <Text style={{fontSize:15,textAlign:'center',fontFamily:'times new roman',flexDirection:'column',marginTop:60,marginLeft:10}}>{tipoclima.toString()} </Text>
           </View>
                  <View style={styles.contenido}>
          <Text style={styles.contenido}>minimo:{temperaturamin}°C   maxima:{temperaturamax}°C</Text>
         
          <Text style={styles.contenido}>humedad:{humedad}%</Text>
          <Text style={styles.contenido}>viento:{viento}</Text>
</View>
        </View>
      </Card>
  );
};
const styles = StyleSheet.create({
  imagen: {
    height:100,
    width:100,
    textAlign:'center',
    justifyContent:'center',
    marginLeft:100
 
  },
  contenido:{
    justifyContent:'center',
    textAlign:'center',
    fontSize:15,
    fontFamily:'lucida grande',
    margin:8
  },
  termometro:{
     height:100,
    width:100,
    flexDirection:'column',
    marginLeft:30
  }
});
export default Ciudad;

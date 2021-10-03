import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Formulario from './components/Formulario';
import Ciudad from './components/ciudad';

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
    ciudad: '',
  });
  console.disableYellowBox = true;

  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});
  const [temperaturamax,guardartemperaturamax]=useState();
  const [temperatura,guardartemperatura]=useState();
  const [temperaturamin,guardartemperaturamin]=useState();
  const [humedad,guardarhumedad]=useState();
  const [tipoclima,guardartipoclima]=useState([]);
  const [viento,guardarviento]=useState();
  const [clima,guardarclima]=useState([]);
  
  useEffect(() => {
  const { ciudad } = busqueda;
  const key ="3e311b145831fd59ca04f960a1432df0";
    const consultarciudad = async () => {
      if (consultar) {
         const url = `https://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=${key}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarresultado(resultado);
          clima.length=0; 
          guardartemperatura((resultado.main.temp-273.15).toFixed(0));
          guardartemperaturamax((resultado.main.temp_max-273.15).toFixed(0));
          guardartemperaturamin((resultado.main.temp_min-273.15).toFixed(0));
          guardarhumedad(resultado.main.humidity);
          guardarviento(resultado.wind.speed);
          tipoclima.length=0;
           Object.values(resultado.weather).map(l=>{
        tipoclima.push(l.description)
      })
          console.log(resultado);
          guardarconsultar(false);
        } catch (error) {
            console.log(resultado);
          mostrarAlerta();
        }
      }
    };
    consultarciudad();
  },[consultar]);

  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultado intenta con otra ciudad'),
      [{ Text: 'Ok' }];
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        
        
        <Formulario
          busqueda={busqueda}
          guardarbusqueda={guardarbusqueda}
          guardarconsultar={guardarconsultar}
        />
        <Ciudad resultado={resultado} temperaturamax={temperaturamax}
        temperatura={temperatura}
        temperaturamin={temperaturamin}
        humedad={humedad}
        tipoclima={tipoclima}
        
         clima={clima} viento={viento}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: ' rgb(60, 98, 175)',
    justifyContent: 'center',
  },
  contenido: {
    margin: '2.5%',
  },
});


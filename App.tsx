import { Component } from "react";
import {View} from "react-native";
import Calculadora from "./src/componentes/Calculadora";
import Padrao from "./src/estilos/Padrao";

export default class App extends Component{
  render (){
    return(
      <View style={Padrao.background}>
        <Calculadora></Calculadora>
      </View>
    )
  }
}
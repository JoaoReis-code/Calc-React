import { useState, } from "react";
import { StyleSheet, Text, View } from "react-native";
import Padrao from "../estilos/Padrao";
import { Button } from "./Button";


export default (props: any) => {

    let [visor, setVisor] = useState('')
    let [historico, setHistorico] = useState('')


    function b0() {
        if (visor !== "") {
            setHistorico(historico + 0)
            setVisor(visor + 0)
        }
    }

    function b1() {
        setHistorico(historico + 1)
        setVisor(visor + 1)
    }

    function b2() {
        setHistorico(historico + 2)
        setVisor(visor + 2)
    }

    function b3() {
        setHistorico(historico + 3)
        setVisor(visor + 3)
    }

    function b4() {
        setHistorico(historico + 4)
        setVisor(visor + 4)
    }

    function b5() {
        setHistorico(historico + 5)
        setVisor(visor + 5)
    }

    function b6() {
        setHistorico(historico + 6)
        setVisor(visor + 6)
    }

    function b7() {
        setHistorico(historico + 7)
        setVisor(visor + 7)
    }

    function b8() {
        setHistorico(historico + 8)
        setVisor(visor + 8)
    }
    function b9() {
        setHistorico(historico + 9)
        setVisor(visor + 9)
    }
    function ponto() {
        if (visor !== "") {
            setHistorico(historico + '.')
            setVisor(visor + '.')
        }
    }
    function clear() {
        setVisor(visor = "")
        setHistorico(historico = "")
    } function somar() {
        if (visor !== "") {
            setHistorico(historico + ' + ')
            setVisor(visor = "")
        }
    } function subtrair() {
        if (visor !== "") {
            setHistorico(historico + ' - ')
            setVisor(visor = "")
        }
    } function dividir() {
        if (visor !== "") {
            setHistorico(historico + ' / ')
            setVisor(visor = "")
        }
    } function multiplicar() {
        if (visor !== "") {
            setHistorico(historico + ' * ')
            setVisor(visor = "")
        }
    } function resto() {
        if (visor !== "") {
            setHistorico(historico + ' % ')
            setVisor(visor = "")
        }
    } function expoente() {
        if (visor !== "") {
            setHistorico(historico + ' ^ ')
            setVisor(visor = "")
        }
    } function pi() {
        if(visor===""){
            setHistorico(historico + '3.14')
            setVisor(visor + 3.14)
        }
    }

    function resultado() {
        const numeroSplit = historico.split(' ')
        const numero1 = parseFloat(numeroSplit[0])
        const numero2 = parseFloat(numeroSplit[2])
        let operador = numeroSplit[1]

        switch (operador) {
            case '+':
                setVisor(visor = (numero1 + numero2).toString())
                setHistorico(visor)
                return
            case '-':
                setVisor(visor = (numero1 - numero2).toString())
                setHistorico(visor)
                return
            case '*':
                setVisor(visor = (numero1 * numero2).toString())
                setHistorico(visor)
                return
            case '/':
                setVisor(visor = (numero1 / numero2).toString())
                setHistorico(visor)
                return
            case '%':
                setVisor(visor = (numero1 % numero2).toString())
                setHistorico(visor)
                return
            case '^':
                setVisor(visor = Math.pow(numero1, numero2).toString())
                setHistorico(visor)
                return
        }
    }

    return (
        <>
            <Text style={Padrao.historico}>{historico}</Text>
            <Text style={Padrao.visor}>{visor}</Text>

            <View style={Padrao.themeButton}>

                <Button
                    title="1"
                    onPress={b1}
                />
                <Button
                    title="2"
                    onPress={b2}
                />
                <Button
                    title="3"
                    onPress={b3}
                />
                <Button
                    title="+"
                    onPress={somar}
                />
                <Button
                    title="4"
                    onPress={b4}
                />
                <Button
                    title="5"
                    onPress={b5}
                />
                <Button
                    title="6"
                    onPress={b6}
                />
                <Button
                    title="-"
                    onPress={subtrair}
                />
                <Button
                    title="7"
                    onPress={b7}
                />
                <Button
                    title="8"
                    onPress={b8}
                />
                <Button
                    title="9"
                    onPress={b9}
                />
                <Button
                    title="*"
                    onPress={multiplicar}
                />
                <Button
                    title="0"
                    onPress={b0}
                />
                <Button
                    title="."
                    onPress={ponto}
                />
                <Button
                    title="/"
                    onPress={dividir}
                />
                <Button
                    title="="
                    onPress={resultado}
                />

                <Button
                    title="%"
                    onPress={resto}
                />
                <Button
                    title="^"
                    onPress={expoente}
                />
                <Button
                    title="π"
                    onPress={pi}
                />
                <Button
                    title="C"
                    onPress={clear}
                />

            </View>
        </>
    )
}
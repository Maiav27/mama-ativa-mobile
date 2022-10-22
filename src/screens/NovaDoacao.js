import { View, StyleSheet , Text} from "react-native"
import { TextInput } from "react-native-paper"
import {Picker} from '@react-native-picker/picker'
import Buttoncpm from "../components/Buttoncpm"


const NovaDoacao = () => {
    return(
        <View style={styles.container}>
               <View style={styles.area}>
                   <View>
                        <Text>Data</Text>
                        <TextInput mode="Outlined"  style={styles.input} right={<TextInput.Icon name='calendar'/>}/>
                   </View>
 
                   <View>
                        <Text>Quantidade</Text>
                        <TextInput  style={styles.input} right={<TextInput.Icon  />}/>
                   </View>

                   <View>
                        <Text>Banco de Leite</Text>
                        <Picker  style={styles.dropDown}></Picker>
                   </View>
                   <Buttoncpm text='Adicionar' onPress={()=> console.log('oi')}/>
               </View>
        </View>
    )
}


export default NovaDoacao

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#F1F1F1',
        alignItems : "center",
        justifyContent: "center"
    },
    area : {
      height : 340,
      width : 292,
      borderRadius : 10,
      backgroundColor : '#FFF',
      alignItems : "center",
      justifyContent : "space-around"
    }, 
    input : {
        width : 235,
        height: 35,
        borderRadius : 5,
        borderWidth: 0.8,
        backgroundColor : "#FFF"
    },
    dropDown : {
        borderWidth : 1,
        width : 200,
        borderColor : "#000"
    }
        
    
})


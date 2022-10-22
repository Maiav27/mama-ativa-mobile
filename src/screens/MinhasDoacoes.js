import { View , Text, StyleSheet} from "react-native"
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from "react-native-paper";


import ButtonVoltar from "../components/ButtonVoltar";
import Buttoncpm from "../components/Buttoncpm";

const MinhasDoacoes = ({navigation}) => {
  
    return(
      <View style={styles.container}>
          <Text style={{fontSize : 30}} >Minhas doações</Text>

             <DataTable style={styles.table}>
                <DataTable.Header>
                    <DataTable.Title>Data</DataTable.Title>
                    <DataTable.Title>Quantidade</DataTable.Title>
                    <DataTable.Title>Banco de Leite</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell >24/09/2022</DataTable.Cell>
                    <DataTable.Cell style={{textAlign : 'center'}}>1L</DataTable.Cell>
                    <DataTable.Cell>XXXXX</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell >24/09/2022</DataTable.Cell>
                    <DataTable.Cell style={{textAlign : 'center'}}>1L</DataTable.Cell>
                    <DataTable.Cell>XXXXX</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                    <DataTable.Cell >24/09/2022</DataTable.Cell>
                    <DataTable.Cell style={{textAlign : 'center'}}>1L</DataTable.Cell>
                    <DataTable.Cell>XXXXX</DataTable.Cell>
                </DataTable.Row>
             </DataTable>

           <View style={{flexDirection : 'row', alignItems : 'space-between', }}>
             <ButtonVoltar />
           
            <Buttoncpm  onPress={() => navigation.navigate('NovaDoacao')} text='Novo'/>
           </View>
      </View>
    )
}
export default MinhasDoacoes

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#F1F1F1',
        alignItems : "center",
        
        
    },
    tableText : {
        margin : 10
    },
    table : {
      marginTop : 40,
      borderWidth : 1,
      borderRadius : 5,
      borderColor : '#979497',
      width : 370, 
      
    }
  
})
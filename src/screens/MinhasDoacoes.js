import { View , Text, StyleSheet} from "react-native"
import { Table, Row, Rows } from 'react-native-table-component';
import { DataTable } from "react-native-paper";

import Icon from 'react-native-vector-icons/AntDesign';

const MinhasDoacoes = ( ) => {
    const header = ['heading 1', 'heading 2', 'heading 3']
    const data = [
        ['gfg1', 'gfg2', 'gfg3'],
        ['gfg4', 'gfg5', 'gfg6'],
        ['gfg7', 'gfg8', 'gfg9']
  
    ]
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
             <Icon name="leftcircleo" size={30} style={{marginTop : 40}}/>
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
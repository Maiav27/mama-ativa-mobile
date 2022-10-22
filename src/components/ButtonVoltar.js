
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';




const ButtonVoltar = () => {
    return(
        <Icon name="leftcircleo" size={30} style={styles.button} />
    )
    }
export default ButtonVoltar

const styles = StyleSheet.create({
    button : {
        marginTop : 40,  
        marginRight : 40  
    }
})
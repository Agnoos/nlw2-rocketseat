import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    content:{
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        fontSize: 32,
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        lineHeight: 37,
        maxWidth: 180,
    },
    description:{
        marginTop: 24,
        fontSize: 16,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        lineHeight: 26,
        maxWidth: 200
    },
    buttonsContainer:{
        alignItems: 'center',
        marginBottom: 40,
    },
    okButton:{
        marginVertical: 40,
        height: 58,
        alignItems: 'center',
        backgroundColor: '#04d361',
        borderRadius: 8,
        justifyContent: 'center'
    },
    okButtonText:{
        fontFamily : 'Archivo_700Bold',
        color : '#fff',
        fontSize: 20,
    },

});

export default styles
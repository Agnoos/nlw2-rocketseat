import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },
    teacherList: {
         marginTop: -40,
    },
    searchForm: {
        marginBottom: 30,
    },
    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular'
    },
    input: {
        backgroundColor: '#FFF',
        fontFamily: 'Archivo_400Regular',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        borderRadius: 8,
        height: 54,
        justifyContent: 'center',
        paddingHorizontal:16,
        marginTop: 4,
        marginBottom: 16,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    inputBlock: {
        width: '48%'
    },
    submitButton:{
        flexDirection: 'row',
        backgroundColor: '#25d366',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
    },
    submitButtonFilter:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
})

export default styles
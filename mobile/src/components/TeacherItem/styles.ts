import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#e6e6f0',
        borderRadius: 20,
        marginBottom: 16,
        overflow: 'hidden'
    },
    profile:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },
    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo:{
        marginLeft: 16,
    },
    name:{
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },
    bio:{
        marginHorizontal: 24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14, 
        lineHeight: 24,
        color: '#6a6180'

    },
    footer:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
    },
    price:{
        color: '#6a6180',
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        marginTop: 20,
    },
    priceValue:{
        color: '#6a6180',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold',
        
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 24,

    },
    favoriteButton:{
        backgroundColor: '#8257e5',
        borderRadius: 8,
        height: 56,
        width: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8

    },
    contactButton:{
        flexDirection: 'row',
        backgroundColor: '#25d366',
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
    },
    contactButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        marginLeft: 10,
    },
    favorites:{
        backgroundColor: '#e33d3d'
    },
    icon:{
        width: 20,
        height: 20,
    }

})

export default styles
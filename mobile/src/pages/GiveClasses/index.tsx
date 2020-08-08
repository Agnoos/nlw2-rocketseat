import React from 'react'
// image background e tipo uma imagem mas aceita filhos
import { View, ImageBackground, Text } from 'react-native'
// usando imageBackground precisa definir o tamanho que vai ocupar na tela
import { RectButton } from 'react-native-gesture-handler'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function GiveClasses() {

    const navigation = useNavigation();

    function handleNavigateBack(){
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            {/* image bacjgroiund aceita tags css aqui direto na tag dele  */}
            <ImageBackground source={giveClassesBgImage} resizeMode="contain" style={styles.content}>
                <Text style={styles.title}>Quer ser um Professor?</Text>
                <Text style={styles.description}>Para começar, voce precisa se cadastrar em nossa plataforma Web.</Text>
            </ImageBackground>
                <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                    <Text style={styles.okButtonText}>Tudo Bem!</Text>
                </RectButton>
        </View>
    )
}

export default GiveClasses
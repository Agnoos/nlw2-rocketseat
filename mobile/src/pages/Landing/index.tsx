import React, { useState, useEffect } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { RectButton } from 'react-native-gesture-handler'

// Navegação, depois de ter importado todos os pacotes de navegaçao necessários
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'


function Landing(){

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() =>{
        api.get('connections').then(res => {
            const {total} = res.data;

            setTotalConnections(total)
        })
    }, []);

    const navigation = useNavigation();

    function handleNavigateToGiveClassesPage() {
        // Mandando o cara pra pagina especifica
        navigation.navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigation.navigate('Study');
    }

    return(
        <View style={styles.container}>
	        <Image source={landingImage} style={styles.banner}/>
            <Text style={styles.title}>
                Seja Bem vindo, {'\n'}<Text style={styles.titleBold}>O Que Deseja fazer ?</Text>
            </Text>


            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}
   

export default Landing
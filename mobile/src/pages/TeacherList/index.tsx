import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import api from '../../services/api'
import styles from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import Favorites from '../Favorites'
import { useFocusEffect } from '@react-navigation/native'

function TeacherList() {

    const [favorites, setFavorites] = useState<number[]>([])
    const [teachers, setTeachers] = useState([])
    const [isfiltersVisible, setIsFiltersVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favoritesTeachers = JSON.parse(res);
                const favoritedTeachersIds = favoritesTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds)
            }
        });
    }


    useEffect(() => {

    }, []); // Se eu colocar uma variavel dentro deste array final, toda vez que ele mudar isso é chamado, se eu colocar vazio, ele starta com o componente

    function handleToogleFiltersVisible() {
        setIsFiltersVisible(!isfiltersVisible)
    }

    async function handleFilterSubmit() {

        loadFavorites();
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        if (res.data) handleToogleFiltersVisible()
        setTeachers(res.data)
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" headerRight={(
                <BorderlessButton onPress={handleToogleFiltersVisible}>
                    <Feather name='filter' size={40} color="#FFF" />
                </BorderlessButton>
            )}
            >
                {isfiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    //On change text pega diretamente o texto digitado, não necessitando do e.target
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual Dia?"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual Horário?"
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonFilter}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader >
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorite={favorites.includes(teacher.id)}
                        />
                    )
                })}


            </ScrollView>
        </View>

    )
}
export default TeacherList
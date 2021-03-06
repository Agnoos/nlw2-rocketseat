import React, { useState, useEffect } from 'react'
import { View, AsyncStorage } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'




function Favorites() {
    const [favorites, setFavorites] = useState([])

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favoritesTeachers = JSON.parse(res);

                setFavorites(favoritesTeachers)
            }
        });
    }
    useFocusEffect(() => {
        loadFavorites();
    });


    return (


        <View style={styles.container}>
            <PageHeader title="Proffys Favoritos"></PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorite
                        />
                    )
                })}

            </ScrollView>
        </View>
    )
}
export default Favorites
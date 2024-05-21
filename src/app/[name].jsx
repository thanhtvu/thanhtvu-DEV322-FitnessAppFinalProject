import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // navigation package of the ReactNative app
import exercises from '../../assets/data/exercises.json';
import { Stack } from 'expo-router';

export default function ExerciseDetailsScreen() {
    const params = useLocalSearchParams();
    
    const exercise = exercises.find((item) => item.name === params.name);

    if (!exercise) { // if it cannot find the exercise due to diff URL
        return <Text>Exercise NOT found!!!</Text>
    }


    return (
        <ScrollView contentContainerStyle={ styles.container }>
            
            <Stack.Screen options={{ title: exercise.name}} />

            <View style={ styles.panel }>
                <Text style={styles.exerciseName}>{exercise.name}</Text> 

                <Text style={ styles.exerciseSubtitle }> 
                    <Text style={styles.subValue}>{exercise.muscle}</Text> | {' '}
                    <Text style={styles.subValue}>{exercise.equipment}</Text>
                </Text>
            </View>

            <View style={ styles.panel }> 
                <Text style={ styles.instruction } >
                    {exercise.instructions}
                </Text>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        gap: 10,
    },

    panel: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },

    exerciseName: {
        fontSize: 20, 
        fontWeight: '500',
      },
    
      exerciseSubtitle: {
        color: 'dimgray',
      },
  
      subValue: {
          textTransform: 'capitalize',
      },

      instructions: { //
        fontSize: 16,
        lineHeight: 22, // to make the text more readerable
        
      },
})
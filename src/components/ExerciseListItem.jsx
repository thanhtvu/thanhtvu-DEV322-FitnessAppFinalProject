//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import exercises from './assets/data/exercises.json'; // we need to import/link those exercises from the exercise.json


export default function ExerciseListItem({ item }) {
    return (
      <View style={styles.exerciseContainer}> 
        <Text style={styles.exerciseName}>{item.name}</Text> 
        <Text style={styles.exerciseSubtitle}> 
          {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()} 
        </Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
    },
  
    exerciseName: {
      fontSize: 20, 
      fontWeight: '500',
    },
  
    exerciseSubtitle: {
      color: 'dimgray',
    }
});
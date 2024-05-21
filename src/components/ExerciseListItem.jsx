//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
//import exercises from './assets/data/exercises.json'; // we need to import/link those exercises from the exercise.json
import { Link } from 'expo-router'; // to navigate after click on one exercise

export default function ExerciseListItem({ item }) {
    return (
      <Link href={`/${item.name}`} asChild>
        <Pressable style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text> 

            <Text style={styles.exerciseSubtitle}> 
                <Text style={styles.subValue}>{item.muscle}</Text> | {' '}
                <Text style={styles.subValue}>{item.equipment}</Text>
            </Text>
        </Pressable>
      </Link>
    );
  }


const styles = StyleSheet.create({
    exerciseContainer: {
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginHorizontal: 2,
    },

    // shadow 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  
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
});
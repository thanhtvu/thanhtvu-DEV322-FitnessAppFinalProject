import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json'; // we need to import/link those exercises from the exercise.json


export default function App() {

  // instantiate object for thr 1st exercise position 0
  const exercise =exercises[0]; 
  
  return ( 
    <View style={styles.container}>

      {/* each view represent a exercise */}
      <View style={styles.exerciseContainer}>
        {/* use " { }" called the portal to access JS syntax/texts */}
        <Text style={styles.exerciseName}>{exercise.name}</Text> 
        <Text style={styles.exerciseSubtitle}> 
          {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()} 
        </Text>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    //alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

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

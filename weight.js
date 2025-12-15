import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import PickupRequestForm from './PickupRequestForm'; 
const WeightOptions = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (selectedOption) {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedOption, fadeAnimation]);

  const options = [
    { label: '10-20 kg', value: '10-20 kg' },
    { label: '30-40 kg', value: '30-40 kg' },
    { label: '50-60 kg', value: '50-60 kg' },
    { label: 'More than 50 kg', value: 'More than 50 kg' },
  ];

  const handleOptionPress = (value) => {
    setSelectedOption(value);
    fadeAnimation.setValue(0); // Reset animation value for re-runs
  };

  const handleNextPress = () => {
    // You can navigate to the next screen or perform any other action here
    
    if (selectedOption) {
      console.log('Selected Option:', selectedOption);
      navigation.navigate('PickupRequestForm');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Approximate Weight of Scrap</Text>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => handleOptionPress(option.value)}
          style={[
            styles.option,
            selectedOption === option.value && styles.selectedOption,
          ]}
        >
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
      {/* {selectedOption && (
        <Animated.View
          style={[
            styles.selectedOptionView,
            {
              opacity: fadeAnimation,
            },
          ]}
        >
          <Text style={styles.selectedOptionText}>{selectedOption}</Text>
        </Animated.View>
      )} */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 40,
  },
  selectedOption: {
    backgroundColor: '#4CAF50',
  },
  optionText: {
    textAlign: 'center',
    color: '#333',
  },
  selectedOptionView: {
    marginTop: 20,
  },
  selectedOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 8,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeightOptions;

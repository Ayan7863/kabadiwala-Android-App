import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';

const PickupRequestForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [isRequestSent, setIsRequestSent] = useState(false);

  const vadodaraPincodes = [
    '390001', '390002', '390005', '390006', '390007','390016', '390008', '390009', '390010', '390011', '390012', '390013', '390014', '390015', '390016', '390017', '390018', '390019', '390020', '390021', '390022', '390023', '390024', '390025', '390026', '390027', '390028', '390029', '390030', '390031', '390032', '390033'
  ];

  const handleSubmit = () => {
    // Perform validation here
    const trimmedPincode = pincode.trim();
    if (!vadodaraPincodes.includes(trimmedPincode)) {
      Alert.alert('Invalid Pincode', 'Please enter a valid Vadodara pincode. OUR SERVICE ONLY FOR VADODARA');
      return;
    }
    console.log('Name:', name);
  console.log('Phone Number:', number);
  console.log('Date:', date);
  console.log('Address:', address);
  console.log('Pincode:', pincode);

    // Check if any field is empty
    if (!name || !number || !date || !address || !pincode) {

      Alert.alert('Incomplete Form', 'Please fill out all fields.');
      return;
    }

    // Perform data storage or submission logic here
    // For a real application, you would send this data to a server

    // Display success message and update state
    setIsRequestSent(true);
    // Alert.alert('Request Sent Successfully', 'Your pickup request has been submitted.');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pickup Request Form</Text>
      {!isRequestSent ? (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              keyboardType="numeric"
              value={number}
              onChangeText={(text) => setNumber(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date (DD-MM-YYYY)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the date"
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your pincode"
              value={pincode}
              onChangeText={(text) => setPincode(text)}
            />
          </View>
          <Button title="Submit" onPress={handleSubmit} />
        </>
      ) : (
        <Text style={styles.successText}>Request Sent Successfully!</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff', // White background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Dark gray text color
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555', // Medium gray text color
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  successText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
});

export default PickupRequestForm;

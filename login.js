import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [buttonAnimation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const generateOtp = () => {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOtp = () => {
    const generatedOtp = generateOtp();

    // Here you can implement logic to send OTP to the provided phone number
    // For simplicity, let's just simulate the process with a delay
    setIsSent(true);

    // Simulating OTP sent after a delay
    setTimeout(() => {
      setOtp(generatedOtp);
      startButtonAnimation();
    }, 2000);
  };

  const handleVerifyOtp = () => {
    // Here you can implement logic to verify OTP entered by the user
    if (otp === otp) {
      setIsVerified(true);
      startButtonAnimation();

      // Navigate to Homescreen after successful validation
      navigation.navigate('scraprates');
    } else {
      // Handle incorrect OTP
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleResendOtp = () => {
    setIsSent(false);
    setIsVerified(false);
    setOtp('');
    startButtonAnimation();
  };

  const startButtonAnimation = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const buttonScale = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  return (
    <View style={styles.container}>
      {!isVerified ? (
        <>
          <Text style={styles.title}>{isSent ? 'Enter OTP' : 'Enter Phone Number'}</Text>
          {!isSent && (
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
          )}
          {isSent && (
            <TextInput
              style={styles.input}
              placeholder="OTP"
              keyboardType="numeric"
              value={otp}
              onChangeText={(text) => setOtp(text)}
            />
          )}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isSent ? '#2ecc71' : '#3498db' }]}
            onPress={isSent ? handleVerifyOtp : handleSendOtp}
          >
            <Animated.Text style={[styles.buttonText, { transform: [{ scale: buttonScale }] }]}>
              {isSent ? 'Verify OTP' : 'Send OTP'}
            </Animated.Text>
          </TouchableOpacity>
          {isSent && (
            <TouchableOpacity style={styles.resendButton} onPress={handleResendOtp}>
              <Text style={styles.resendButtonText}>Resend OTP</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <Text style={styles.successText}>Login Successful!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 200,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 10,
  },
  resendButtonText: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  successText: {
    fontSize: 20,
    color: 'green',
  },
});

export default Login;

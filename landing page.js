import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LandingPage = ({ navigation, setShowLogin }) => {
  const text =
    "Welcome to THE DIGITAL KABADI WALA.COM - Your one-stop solution for online scrap selling. We help you turn your scrap into cash easily with our innovative app.";

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const typingEffect = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    typingEffect();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: 'https://i.ibb.co/bXLP4BH/landinglogo.png' }}
        style={styles.logo}
      />

      {/* Content with typing animation */}
      <Text style={styles.contentText}>{displayedText}</Text>

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2c3e50',
  },
  logo: {
    width: hp('50%'),
    height: hp('50%'),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  contentText: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
    color: '#fff',
  },
  nextButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LandingPage;

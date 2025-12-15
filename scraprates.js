import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const items = [
  { name: 'Cotton Clothes', price: 3, image: 'https://scrapbazar.in/public/uploads/backend/product/595f440fea76492e49c61b1b213e58c7IMG_20230806_013905.jpg' },
  { name: 'Newspaper', price: 10, image: 'https://scrapbazar.in/public/uploads/backend/product/325934afb08df2497f94cfcc9d46199dNewspaper.jpeg'},
  { name: 'Plastic', price: 12, image: 'https://scrapbazar.in/public/uploads/backend/product/37c4a66673694379d78977313f788d2eimages%20(2).jpeg'},
  { name: 'Box(carton)', price: 15, image: 'https://scrapbazar.in/public/uploads/backend/product/048e6896ad96d50626cdf0b7397c702eBox.jpeg'},
  { name: 'Oil daba', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/d007c81632dc0f106dc1c99c3b9f4261Oil%20Daba.jpg'},
  { name: 'Books', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/85e6db669e112fda0667d4c95f4ae19bBooks.jpeg'},
  { name: 'Office Paper', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/4ad8f07b1547a85eeb7485bc1ef37a2eOffice%20Paper%20Scrap.jpg'},
  {name: 'Magzin', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/e8feebe384179e572edd47267030a060Magazine.jpeg'},
  {name: 'Iron Metal', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/c17e708111119c38d63fa8e90507fe4bHeavy%20Iron.jpeg'},
  {name: 'Light Iron Metal', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/90e0beb5c4f5d26a0f6d2a621b58756dLight%20Iron.jpeg'},
  {name: 'Vehicle Scrap', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/10827fa371dd903d51cea1e0346760f2Vehicle_2.jpeg'},
  {name: 'Mix Plastic', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/6ca24d223b7167db94b578d998ecc7dcMix%20Plastic.jpeg'},
  {name: 'RO Scrap', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/6cda72e08c9a6fc08c22a087d45bf187RO%20(Water%20Purifier).jpg'},
  {name: 'Plastic Bottles', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/b2a3330578da92d1a57b983569bba92fPet%20Bottles.jpeg'},
  {name: 'Milk Pauch', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/2f59dc9c324f01b45172bd7d716f8512Milk%20Bags.jpeg'},
  {name: 'Steel', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/7c39d3475cb8ff9296bd8008e4152768SS.jpeg'},
  {name: 'Aluminium', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/9b68cd7684eeaa54e383fb151c83349cAluminium.jpeg'},
  {name: 'Copper', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/4c05421ae3320e3527ea49e9099931f2Copper%20Utensils.jpeg'},
  {name: 'Copper Cabel', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/99f4f8ad1c41856c64ef7cb1787c112fCopper%20Cable%20Non.jpeg'},
  {name: 'Brass', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/15775ac3175a344b4cd383aa3fb258c1Utensils.jpg'},
  {name: 'front washing machine', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/b10554649b05e257e7822adce2ae5a89Washing%20Machine%20Front.jpeg'},
  {name: 'Top Load washing machine', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/cad581a5042184831851ad8de96553dbWashing%20Machine%20Top.jpeg'},
  {name: 'Refridgerator', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/e4411188e9648d84a739e8ba0a33f431Refridgerator.jpeg'},
  {name: 'PC Monitor', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/a6480eb011c1b5ef99997e4583e49ce2Computer%20LED.jpeg'},
  {name: 'Computer', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/b2a6c6e796d0a328e22d08f52c89da17Computer%20CRT.jpeg'},
  {name: 'Scanner Printer', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/829f2f39449eb2829405fee6a2ea95bdPrinter%20Scanner.jpeg'},
  {name: 'Micro Wave', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/6d44ae52da07379086181a24a61b3e85OTG-MWave.jpeg'},
  {name: 'Plastic Bag', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/bf7a79de23d35df6d69453bd40735888Plastic%20Bags.jpeg'},
  {name: 'PVC Pipe', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/78c0db0205d57856c16cc18e27b88629PVC%20Pipe.jpeg'},
  {name: 'A.C.', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/5276950a3c2a6af721285c62b765dae6AC.jpeg'},
  {name: 'T.V.', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/d265f85fa60e070137b4994e9da93ebbTV.jpeg'},
  {name: 'PVC Copper Wire', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/5dc0616b84041084819ccb13d1736c92Copper%20Cable%20Insu.jpeg'},
  {name: 'PVC Aluminium Wire', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/9d5623b692a5067f5520cb48bb8e6642PVC%20Insulated%20Aluminum%20wire.jpg'},
  {name: 'Common Wire', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/ead82f228bd752f053c47c23ae42cc28WIre%20nana.jpg'},
  {name: 'Tyer', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/507b105b7df026eb25592882c308ce9bScreenshot_1.jpg'},
  {name: 'Chapple/shoes', price: 11, image: 'https://scrapbazar.in/public/uploads/backend/product/52079d479aa65f9931f2b180be581e9d0f0debc6-4e6b-4f5b-b30c-f4a07ffe246c.jpg'},
  
];

const Homescreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const blinkAnimation = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const blink = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnimation, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(blinkAnimation, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ])
    );

    blink.start();

    return () => blink.stop();
  }, [blinkAnimation]);

  const onPressItem = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.name === item.name);

    if (isSelected) {
      setSelectedItems((prevItems) => prevItems.filter((prevItem) => prevItem.name !== item.name));
    } else {
      setSelectedItems((prevItems) => [...prevItems, { name: item.name, price: item.price }]);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Animated.Text
          style={[
            styles.searchIcon,
            {
              opacity: blinkAnimation,
            },
          ]}
        >
          🔍
        </Animated.Text>
        <TextInput
          style={styles.input}
          placeholder="  Search item..."
          onChangeText={setSearchText}
          value={searchText}
          
        />
        
      </View>
      <ScrollView style={styles.itemContainer}>
        <View style={styles.rowContainer}>
          {filteredItems.map((item, index) => (
            <TouchableOpacity
              key={item.name}
              style={[
                styles.itemBox,
                selectedItems.some((selectedItem) => selectedItem.name === item.name)
                  ? styles.selectedItem
                  : null,
              ]}
              onPress={() => onPressItem(item)}
            >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price} KG</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => {
            console.log('Selected Items:', selectedItems);
            navigation.navigate('WeightOptions'); // Navigate to WeightOptions screen
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    marginTop: 40,
  },
  searchIcon: {
    fontSize: 25,
    // marginLeft: 10,
    marginTop: 15,
    marginRight: 10
  },
  itemContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemBox: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
  itemName: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  itemPrice: {
    textAlign: 'center',
    marginTop: 5,
    color: 'green',
  },
  itemImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Homescreen;

import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CircleCard, BoxCard} from '../../common';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Footer,
  FooterTab,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Header from './header';
// import FooterComponent from './footer';
import styles from './DashboardStyle.js';

const AllCategories = [
  {
    name: 'Coffee',
    icon: 'coffee',
  },
  {
    name: 'Creamery',
    icon: 'ice-cream',
  },
  {
    name: 'Snaks',
    icon: 'hotdog',
  },
  {
    name: 'Dishes',
    icon: 'utensil-spoon',
  },
  {
    name: 'Coffe',
    icon: 'coffe',
  },
  {
    name: 'Creamery',
    icon: 'ice-cream',
  },
];

const HotDeal = [
  {
    image: require('../../../images/2.png'),
    like: true,
    tag: '-10.0%',
    name: 'Akara',
    price: '$25',
  },
  {
    image: require('../../../images/3.png'),
    like: false,
    tag: '-7.0%',
    name: 'Hamburger',
    price: '$100',
  },
  {
    image: require('../../../images/1.png'),
    like: true,
    tag: '-5.0%',
    name: 'Strawberry',
    price: '$50',
  },
  {
    image: require('../../../images/5.png'),
    like: false,
    tag: '-8.0%',
    name: 'Pasta',
    price: '$50',
  },
];

const DrinksParol = [
  {
    image: require('../../../images/6.png'),
    like: true,
    tag: '-5.0%',
    name: 'Cocacola',
    price: '$100',
  },
  {
    image: require('../../../images/7.png'),
    like: false,
    tag: '-10.0%',
    name: 'Lemonade',
    price: '$1000',
  },
  {
    image: require('../../../images/8.png'),
    like: true,
    tag: '-5.0%',
    name: 'Voldka',
    price: '$450',
  },
  {
    image: require('../../../images/9.png'),
    like: false,
    tag: '-7.0%',
    name: 'Tuquila',
    price: '$500',
  },
];

const Dashboard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* <Header style={{backgroundColor: '#4793d6', height: 70}}>
        <Left>
          <Button transparent>
            <Ionicons name="md-menu" style={styles.icon} />
          </Button>
        </Left>
        <Body style={{alignItems: 'space-around'}}>
          <Text style={styles.headerText}>Fryo</Text>
        </Body>

        <Right>
          <Button transparent>
            <Ionicons name="ios-search" style={styles.icon} />
          </Button>
          <Button transparent>
            <EvilIcons name="bell" style={styles.icon} />
          </Button>
        </Right>
      </Header> */}
      <ScrollView>
        {/* All Categories */}
        <View style={{margin: 20}}>
          <View>
            <View style={styles.title}>
              <Text style={styles.leftTitle}>All Categories</Text>
              <Text style={styles.rightTitle}>View all</Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {AllCategories &&
              AllCategories.map((item, index) => {
                return (
                  <View style={styles.circleCardView} key={index}>
                    <CircleCard>
                      <FontAwesome5
                        style={{color: '#2e242c'}}
                        name={item.icon}
                        size={30}
                      />
                    </CircleCard>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: '#878787',
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>

        {/* Hot Deals */}
        <View style={{margin: 20, marginTop: 20}}>
          <View>
            <View style={styles.title}>
              <Text style={styles.leftTitle}>Hot Deals</Text>
              <Text style={styles.rightTitle}>View all</Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{padding: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {HotDeal &&
              HotDeal.map((item, index) => {
                return (
                  <View key={index} style={{marginRight: 20}}>
                    <BoxCard>
                      <View style={styles.count}>
                        <Text style={{color: '#fff', fontSize: 12}}>
                          {item.tag}
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Product', {
                            image: item.image,
                            name: item.name,
                            tag: item.tag,
                            price: item.price,
                            index: index,
                          })
                        }
                        style={styles.imageContainer}>
                        <Image style={styles.logo} source={item.image} />
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: 5,
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <AntDesign
                          name={item.like ? 'heart' : 'hearto'}
                          size={25}
                          color={item.like ? 'red' : '#878787'}
                        />
                      </View>
                    </BoxCard>

                    <View style={{marginTop: 20}}>
                      <Text style={{fontSize: 15}}>{item.name}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>

        {/* Drinks Parol */}
        <View style={{margin: 20, marginTop: 20}}>
          <View>
            <View style={styles.title}>
              <Text style={styles.leftTitle}>Drinks Parol</Text>
              <Text style={styles.rightTitle}>View all</Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{padding: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {DrinksParol &&
              DrinksParol.map((item, index) => {
                return (
                  <View key={index} style={{marginRight: 20}}>
                    <BoxCard>
                      <View style={styles.count}>
                        <Text style={{color: '#fff', fontSize: 12}}>
                          {item.tag}
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Product', {
                            image: item.image,
                            name: item.name,
                            tag: item.tag,
                            price: item.price,
                            index: index,
                          })
                        }
                        style={styles.imageContainer}>
                        <Image style={styles.logo} source={item.image} />
                      </TouchableOpacity>
                      <View
                        style={{
                          marginTop: 5,
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <AntDesign
                          name={item.like ? 'heart' : 'hearto'}
                          size={25}
                          color={item.like ? 'red' : '#878787'}
                        />
                      </View>
                    </BoxCard>

                    <View style={{marginTop: 20}}>
                      <Text style={{fontSize: 15}}>{item.name}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </ScrollView>

      {/* <Footer>
        <FooterTab style={styles.footerContainer}>
          <Button>
            <MaterialCommunityIcons
              size={22}
              name="truck-delivery"
              color="#4793d6"
            />
            <Text style={{fontSize: 10, color: '#4793d6'}}>Delivery</Text>
          </Button>
          <Button>
            <FontAwesome5 size={22} name="shopping-cart" color="grey" />
            <Text style={{fontSize: 10, color: 'grey'}}>Shopping Cart</Text>
          </Button>
          <Button>
            <FontAwesome5 size={22} name="heart-o" color="grey" />
            <Text style={{fontSize: 10, color: 'grey'}}>Favorites</Text>
          </Button>
          <Button>
            <Ionicons size={22} name="md-person" color="grey" />
            <Text style={{fontSize: 10, color: 'grey'}}>Profile</Text>
          </Button>
          <Button>
            <Ionicons size={22} name="md-settings" color="grey" />
            <Text style={{fontSize: 10, color: 'grey'}}>Settings</Text>
          </Button>
        </FooterTab>
      </Footer> */}
      {/* <FooterComponent /> */}
    </View>
  );
};

export default Dashboard;

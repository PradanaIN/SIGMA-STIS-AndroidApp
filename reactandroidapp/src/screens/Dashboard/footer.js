import React from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DashboardStyle';

export const FooterComponent = () => {
  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        <Button>
          <MaterialCommunityIcons
            size={22}
            name="truck-delivery"
            color="#4793d6"
          />
          <Text style={{fontSize: 10, color: '#4793d6'}}>Delivery</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterComponent;

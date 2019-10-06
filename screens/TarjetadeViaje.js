import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform,ScrollView } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

export default class TarjetadeViajes extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
        <Block flex style={styles.container}>
        <ScrollView>
        
        <Block>
            
                  <Text color="white" size={50}>Buenos Aires</Text>
         </Block>
         <Block>
                  <Text color="white" size={40}>To</Text>
         </Block>
         <Block>
                  <Text color="white" size={50}>Entre Rios</Text>
         </Block>
        <Block>
              <Text size={16} color='rgba(255,255,255,0.6)' style={{ marginTop: 100 }}>
                Descripcion de viaje.Descripcion de viaje.  

                Llevo Drogas papa 
                El auto lleva putas
                No perros
              </Text>
         </Block>
         <Block>
         <Button
                shadowless
                style={styles.button}
                color={argonTheme.COLORS.INFO}
                onPress={() => navigation.navigate('Home')}>
                <Text bold color={theme.COLORS.WHITE}>Reservar</Text>
        </Button>
        </Block>
        <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
      </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
  avatarContainer: {
    position: "absolute",
    /* marginTop: -80 */
  },
  avatar: {
    /* width: ,
    height: , */
    borderRadius: 15,
    borderWidth: 0
  },
});

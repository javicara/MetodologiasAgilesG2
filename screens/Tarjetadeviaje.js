import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform ,Linking} from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

export default class Tarjetadeviaje extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
        <Block>
                <Image source={Images.Mapa}
                style={{ height:230,width:400,zIndex:2 }}/>
              </Block>
          <ImageBackground
            source={Images.fondotarjeta}
            style={{ flex: 3, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              {/* <Block>
                <Image source={Images.ProfilePicture}
                  style={{ marginBottom: theme.SIZES.BASE * 2.5 }}/>
              </Block> */}
              <Block >

                {/* <Block row>
                  <Text color="white" size={1}>Duracion Estimada: "3" Hs</Text>
                  
                </Block> */}
                <Block>
                  <Text color="black" size={15}>Nombre del Conductor : "Santiago Esmoris"</Text>
                </Block>
                <Block row>
                  <Text color="black" size={15}>"Precio Estimado": $1500</Text>

                </Block>
                <Block row>
                  <Text color="black" size={15}>"Fecha": 1/1/1999</Text>

                </Block>
                <Block row>
                  <Text color="black" size={15}>"Duracion Estimada":3 Hs</Text>

                </Block>
              </Block>
              <Text size={16} color='black' style={{ marginTop: 35 }}>
                Santiago es un pibe bueno , que viajo por todo el mundo, ultimo viaje , al Riachuelo.
              </Text>
              {/* <Block row style={{ marginTop: theme.SIZES.BASE * 1.5, marginBottom: theme.SIZES.BASE * 4 }}>
                <Image
                  source={Images.iOSLogo}
                  style={{ height: 38, width: 82, marginRight: theme.SIZES.BASE * 1.5 }} />
                <Image
                  source={Images.androidLogo}
                  style={{ height: 38, width: 140 }} />
              </Block>*/ }

                

              <Block style="margin-top: 30%;" flex style={styles.group} space="between">
                <Button
                
                  shadowless
                  style={{ marginTop: 25 }}
                  color="success"
                  onPress={() => Linking.openURL('whatsapp://send?text=Hola quiero reservar un lugar&phone=+542216283618')}>
                  <Text bold color={theme.COLORS.BLACK}>Reservar</Text>
                </Button>

              </Block >
              <Block>
                <Button

                 style={{ marginTop: 15 }}
                  color={argonTheme.COLORS.INFO}
                  onPress={() => navigation.navigate('Home')}>
                  <Text bold color={theme.COLORS.WHITE}>Volver</Text>
                </Button>

              </Block >

            </Block>
          </Block>
        </Block>
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
});

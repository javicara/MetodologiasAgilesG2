import React from "react";
import { AsyncStorage, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports (1)';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';
Amplify.configure(awsconfig);
const viajes = require('../constants/articles.json')



const { width } = Dimensions.get("screen");



class CrearViaje extends React.Component {
  state = {
    origen: '',
    destino: '',
    precio: '',
    duracion: '',
    espacios: '',
    dia: '',
    mes: '',
    anio: '',
    "switch-1": true,
    "switch-2": false,
  };

  crearviaje = (newViaje) => {
    API.graphql(graphqlOperation(mutations.createGuriviajes, { input: newViaje })).then(res => {
      console.log(res);
    });
  }





  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  toggleSwitch = switchId =>
    this.setState({ [switchId]: !this.state[switchId] });


  renderCrearViaje = () => {

    const { show, date, mode } = this.state;


    const { navigation } = this.props;


    return (
      <Block flex style={styles.group}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Origen" iconContent={<Block />} onChangeText={(origen) => this.setState({ origen })} value={this.state.origen} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Destino" iconContent={<Block />} onChangeText={(destino) => this.setState({ destino })} value={this.state.destino} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }} >
          <Input right placeholder="Precio" iconContent={<Block />} onChangeText={(precio) => this.setState({ precio })} value={this.state.precio} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Duracion" iconContent={<Block />} onChangeText={(duracion) => this.setState({ duracion })} value={this.state.duracion} />
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Espacios Disponibles" iconContent={<Block />} onChangeText={(espacios) => this.setState({ espacios })} value={this.state.espacios} />
        </Block>

        {/*         <Block space="evenly">
          <Block flex top>
            <Text
              p
              style={{ marginBottom: theme.SIZES.BASE / 2 }}
              color={argonTheme.COLORS.DEFAULT}
            >
              Espacios Disponibles:
            </Text>
          </Block>
          <Block flex left>
            <Select
              defaultIndex={1}
              options={["01", "02", "03", "04", "05"]}
            />
          </Block>

        </Block> */}


        <Block row space="around">
          <Block flex left>
            <Input right placeholder="Dia" iconContent={<Block />} onChangeText={(dia) => this.setState({ dia })} value={this.state.dia} />
          </Block>
          <Block flex center>
            <Input right placeholder="Mes" iconContent={<Block />} onChangeText={(mes) => this.setState({ mes })} value={this.state.mes} />
          </Block>
          <Block flex right>
            <Input right placeholder="Año" iconContent={<Block />} onChangeText={(anio) => this.setState({ anio })} value={this.state.anio} />
          </Block>
        </Block>

        <Block center>
          <Button color="error" style={styles.button} onPress={() => navigation.goBack()}>
            Cancelar
            </Button>
        </Block>

        <Block center>

          <Button color="success" style={styles.button} onPress={this.onSave}>
            Guardar Viaje
            </Button>
        </Block>




      </Block>
    );
  };


  onCancel = () => {
    () => navigation.goBack();
  }


  onSave = (navigation) => {
    if ((this.state.dia !== '') && (this.state.mes !== '') && (this.state.anio !== '') && (this.state.destino !== '') && (this.state.origen !== '') && (this.state.duracion !== '') && (this.state.precio !== '') && (this.state.espacios)) {

      var viaje = {
        email: Math.random(),
        autos: "nop",
        name: "Santiago Esmoris",
        image: "https://www.buenosaires.gob.ar/sites/gcaba/files/field/image/catedral_a_parque_patricios.jpg",



        viajes: JSON.stringify([{
          dia: this.state.dia,
          mes: this.state.mes,
          anio: this.state.anio,
          espacios: this.state.espacios,
          precio: this.state.precio,
          origen: this.state.origen,
          destino: this.state.destino,
          duracion: this.state.duracion,
          fecha: "13/12/2019"
        }])

        // viajes:JSON.stringify([{ dia:"12",
        //   mes: "2",
        //   anio: "1997",
        //   espacios:"2",
        //   precio: "800", 
        //   origen: "el palomar",
        //   destino: "a tu casa",
        //   duracion: "infiinita"}])
      };

      var viajeJson = viaje;




      // console.log(viajeJson);

      this.crearviaje(viajeJson);
      this.props.navigation.goBack();



    }
    else {
      Alert.alert('Faltan campos para crear viaje');
    }



  }



  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
          {this.renderCrearViaje()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10
  },
  input: {
    borderBottomWidth: 1
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center"
  },
});

export default CrearViaje;

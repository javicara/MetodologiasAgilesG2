import React from "react";
import { AsyncStorage, Alert, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

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

  renderButtons = () => {
    return (
      <Block flex>
        <Text bold size={16} style={styles.title}>
          Buttons
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block center>
            <Button color="default" style={styles.button}>
              DEFAULT
            </Button>
          </Block>
          <Block center>
            <Button
              color="secondary"
              textStyle={{ color: "black", fontSize: 12, fontWeight: "700" }}
              style={styles.button}
            >
              SECONDARY
            </Button>
          </Block>
          <Block center>
            <Button style={styles.button}>PRIMARY</Button>
          </Block>
          <Block center>
            <Button color="info" style={styles.button}>
              INFO
            </Button>
          </Block>
          <Block center>
            <Button color="success" style={styles.button}>
              SUCCESS
            </Button>
          </Block>
          <Block center>
            <Button color="warning" style={styles.button}>
              WARNING
            </Button>
          </Block>
          <Block center>
            <Button color="error" style={styles.button}>
              ERROR
            </Button>
          </Block>
          <Block row space="evenly">
            <Block flex left>
              <Select
                defaultIndex={1}
                options={["01", "02", "03", "04", "05"]}
              />
            </Block>
            <Block flex center>
              <Button small center color="default" style={styles.optionsButton}>
                DELETE
              </Button>
            </Block>
            <Block flex={1.25} right>
              <Button center color="default" style={styles.optionsButton}>
                SAVE FOR LATER
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderText = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Typography
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Heading 1
          </Text>
          <Text
            h2
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Heading 2
          </Text>
          <Text
            h3
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Heading 3
          </Text>
          <Text
            h4
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Heading 4
          </Text>
          <Text
            h5
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Heading 5
          </Text>
          <Text
            p
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.DEFAULT}
          >
            Paragraph
          </Text>
          <Text muted>This is a muted paragraph.</Text>
        </Block>
      </Block>
    );
  };

  renderInputs = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Inputs
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Regular" iconContent={<Block />} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Regular Custom"
            style={{
              borderColor: argonTheme.COLORS.INFO,
              borderRadius: 4,
              backgroundColor: "#fff"
            }}
            iconContent={<Block />}
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            placeholder="Icon left"
            iconContent={
              <Icon
                size={11}
                style={{ marginRight: 10 }}
                color={argonTheme.COLORS.ICON}
                name="search-zoom-in"
                family="ArgonExtra"
              />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            placeholder="Icon Right"
            iconContent={
              <Icon
                size={11}
                color={argonTheme.COLORS.ICON}
                name="search-zoom-in"
                family="ArgonExtra"
              />
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            success
            right
            placeholder="Success"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: argonTheme.COLORS.INPUT_SUCCESS
                }}
              >
                <Icon
                  size={11}
                  color={argonTheme.COLORS.ICON}
                  name="g-check"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            error
            right
            placeholder="Error Input"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: argonTheme.COLORS.INPUT_ERROR
                }}
              >
                <Icon
                  size={11}
                  color={argonTheme.COLORS.ICON}
                  name="support"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        </Block>
      </Block>
    );
  };

  renderSwitches = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Switches
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block
            row
            middle
            space="between"
            style={{ marginBottom: theme.SIZES.BASE }}
          >
            <Text size={14}>Switch is ON</Text>
            <Switch
              value={this.state["switch-1"]}
              onValueChange={() => this.toggleSwitch("switch-1")}
            />
          </Block>
          <Block row middle space="between">
            <Text size={14}>Switch is OFF</Text>
            <Switch
              value={this.state["switch-2"]}
              onValueChange={() => this.toggleSwitch("switch-2")}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  renderTableCell = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Table Cell
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block style={styles.rows}>
            <TouchableOpacity onPress={() => navigation.navigate("Pro")}>
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text size={14}>Manage Options</Text>
                <Icon
                  name="chevron-right"
                  family="entypo"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    );
  };

  renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Social
        </Text>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.FACEBOOK}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle center>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.TWITTER}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="dribbble"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.DRIBBBLE}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderNavigation = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Navigation
        </Text>
        <Block>
          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header back title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header white back title="Title" navigation={this.props.navigation} bgColor={argonTheme.COLORS.ACTIVE} titleColor="white" iconColor="white" />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header search title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header tabs={tabs.categories} search title="Title" navigation={this.props.navigation} />
          </Block>

          <Block style={{ marginBottom: theme.SIZES.BASE }}>
            <Header
              options
              search
              title="Title"
              optionLeft="Option 1"
              optionRight="Option 2"
              navigation={this.props.navigation}
            />
          </Block>
        </Block>
      </Block>
    );
  };

  renderCrearViaje = () => {

    const { show, date, mode } = this.state;
    
    
    const { navigation } = this.props;


    return (
      <Block flex style={styles.group}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Origen"  iconContent={<Block />} onChangeText={(origen) => this.setState({origen})}  value={this.state.origen} />
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Destino" iconContent={<Block />}  onChangeText={(destino) => this.setState({destino})}  value={this.state.destino}/>
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }} >
          <Input right placeholder="Precio" iconContent={<Block />} onChangeText={(precio) => this.setState({precio})}  value={this.state.precio}/>
        </Block>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Duracion" iconContent={<Block />} onChangeText={(duracion) => this.setState({duracion})}  value={this.state.duracion}/>
        </Block>

        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input right placeholder="Espacios Disponibles" iconContent={<Block />} onChangeText={(espacios) => this.setState({espacios})}  value={this.state.espacios}/>
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
            <Input right placeholder="Dia" iconContent={<Block />} onChangeText={(dia) => this.setState({dia})}  value={this.state.dia} />
          </Block>
          <Block flex center>
            <Input right placeholder="Mes" iconContent={<Block />} onChangeText={(mes) => this.setState({mes})}  value={this.state.mes}/>
          </Block>
          <Block flex right>
            <Input right placeholder="Año" iconContent={<Block />} onChangeText={(anio) => this.setState({anio})}  value={this.state.anio}/>
          </Block>
        </Block>

        <Block center>
            <Button color="error" style={styles.button} onPress={() => navigation.navigate('Home')}>
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

  onSave = () => {
    if ((this.state.dia !== '') || (this.state.mes !== '') || (this.state.anio !== '') || (this.state.destino !== '') || (this.state.origen !== '') || (this.state.duracion !== '') || (this.state.precio !== '') || (this.state.espacios)){

      var viaje = { dia: this.state.dia,
        mes: this.state.mes,
        anio: this.state.anio,
        espacios:this.state.espacios,
        precio: this.state.precio,
        origen: this.state.origen,
        destino: this.state.destino,
        duracion: this.state.duracion
      }; 
  
      var viajeJson = JSON.stringify(viaje);
  
      console.log(viajeJson);

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
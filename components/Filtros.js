import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Alert
} from 'react-native';

const SECTIONS = [
  {
    title: 'Busqueda avanzada...',
  },
];

const setFechaDesde = (fecha) => {
  console.log(this.state.fechaDesde);
}

class Filtros extends Component {
  state = {
    activeSections: [],
    fechaDesde: '',
    fechaHasta: '',
    conductor: '',
    precio: '',
    origen: '',
    destino: '',
  };

  setFechaDesde = function (fechaDesde) {
    if (fechaDesde.length == 4) {
      fechaDesde += '-';
    } else if (fechaDesde.length == 7) {
      fechaDesde += '-';
    }
    this.setState({ fechaDesde });
  }

  //   _renderSectionTitle = section => {
  //     return (
  //       <View style={styles.content}>
  //         <Text>{section.content}</Text>
  //       </View>
  //     );
  //   };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Origen"
          onChangeText={(origen) => this.setState({ origen })}
          value={this.state.origen}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Destino"
          onChangeText={(destino) => this.setState({ destino })}
          value={this.state.destino}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Conductor"
          onChangeText={(conductor) => this.setState({ conductor })}
          value={this.state.conductor}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Fecha"
          onChangeText={(fechaDesde) => this.setState({ fechaDesde })}
          value={this.state.fechaDesde}
          maxLength={10}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Precio"
          onChangeText={(precio) => this.setState({ precio })}
          value={this.state.precio}
          keyboardType={'numeric'}
        />
        <Button
          title="Buscar"
          //onPress={() => Alert.alert('Simple Button pressed')}
          onPress={this.props.onSearch.bind(this, this.state.conductor, this.state.fechaDesde, this.state.precio, this.state.origen, this.state.destino)}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.accordion}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          //renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  accordion: {    
    borderColor: 'blue',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    //paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});

export default withNavigation(Filtros);
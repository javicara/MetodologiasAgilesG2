import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';

const articles = require('../constants/articles.json')
//import articles from '../constants/articles';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports (1)';
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';

Amplify.configure(awsconfig);

function viajesconductor(email){
  API.graphql(graphqlOperation(queries.getGuriviajes,{email:email})).then(res => {
    //console.log(res);
    //console.log('holas');
    let viajes = JSON.parse(res.data.getGuriviajes.viajes);
    //
    
      viajes.forEach(element => {
        console.log("origen >", element.origen)
        console.log("destino >", element.destino )    
      });
      console.log('total de viajes',viajes.length, 'de ',res.data.getGuriviajes.name);
    });
  
  }

  viajesconductor('javicara@gmail.com');  
const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderArticles = () => {
    console.log('caca');
  
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
         <Block flex>
          <FlatList
            data={articles}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
            <Block flex row>
              <Card item={item}  horizontal />
            </Block>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </Block>

      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;

import React from 'react';
import { StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports (1)';
import * as queries from '../src/graphql/queries';
import * as subscriptions from '../src/graphql/subscriptions';
import moment from 'moment';

Amplify.configure(awsconfig);



  const viajes = (setState)=> {
    API.graphql(graphqlOperation(queries.listGuriviajes)).then(res => {
      //console.log(res);
      let array = res.data.listGuriviajes.items
  
//      console.log(JSON.stringify(array))
    const caca=array.map(x => (
      JSON.parse(x.viajes).map(data =>({
        email:x.email,
        nombre:x.name,
        image:x.image,
        origen:data.origen,
        destino:data.destino,
        fecha:data.fecha,
        precio:data.precio,
        celular:2213142511
        
      }))
  
    ))
  
    var merge = [].concat.apply([],caca)
    
    //console.log(merge);
    console.log(articles)
    setState({viajes:merge});
     
    });
  
  }
  //viajesconductor('javicara@gmail.com');  




const { width } = Dimensions.get('screen');

class Home extends React.Component {
  state= { 
    viajes:[]
  } 
  
  componentDidMount(){
    (function(){
      if (typeof Object.defineProperty === 'function'){
        try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
      }
      if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;
    
      function sb(f){
        for (var i=this.length;i;){
          var o = this[--i];
          this[i] = [].concat(f.call(o,o,i),o);
        }
        this.sort(function(a,b){
          for (var i=0,len=a.length;i<len;++i){
            if (a[i]!=b[i]) return a[i]<b[i]?-1:1;
          }
          return 0;
        });
        for (var i=this.length;i;){
          this[--i]=this[i][this[i].length-1];
        }
        return this;
      }
    })();
    //console.log(subscriptions.onCreateGuriviajes);
    API.graphql(graphqlOperation(subscriptions.onCreateGuriviajes)
  ).subscribe({
      next: (todoData) => {
        var lista=this.state.viajes;
        // lista.push(todoData.value.data.onCreateGuriviajes)
        const x=todoData.value.data.onCreateGuriviajes;
        lista.push(JSON.parse(todoData.value.data.onCreateGuriviajes.viajes).map(data =>({
          email:x.email,
          nombre:x.name,
          image:x.image,
          origen:data.origen,
          destino:data.destino,
          fecha:data.fecha,
          precio:data.precio
          
        }))) 
        var merge = [].concat.apply([],lista)
        this.setState({viajes:merge.sortBy(x=>moment(x.fecha).unix()*-1)});

      }
  });
  
  // Stop receiving data updates from the subscription 

    // viajes(this.setState)
    API.graphql(graphqlOperation(queries.listGuriviajes)).then(res => {
      //console.log(res);
      let array = res.data.listGuriviajes.items
  
//      console.log(JSON.stringify(array))
    const caca=array.map(x => (
      JSON.parse(x.viajes).map(data =>({
        email:x.email,
        nombre:x.name,
        image:x.image,
        origen:data.origen,
        destino:data.destino,
        fecha:data.fecha,
        precio:data.precio
        
      }))
   
    ))
      
    var merge = [].concat.apply([],caca)

    this.setState({viajes:merge.sortBy(x=>moment(x.fecha).unix()*-1)});
  }
    )}


  renderArticles = () => {
    
  
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
         <Block flex>
          <FlatList
            data={this.state.viajes}
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
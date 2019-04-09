import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, 
        Title, Item, Input, ListItem, CheckBox, Content} from 'native-base';
        
let boxes = [false,false,false,false,false,false,false,false,false];

export default class QueryScreen extends Component{
   
    state={
        //data types
        one: false, 
        two: false,
        three: false, 
        four: false,
        five: false, 

        //location
        six: true,
        seven: false, 
        eight: false,
        nine: false, 
    }

    static navigationOptions = {
      title: 'Query',
    };

    //data types
    oneCheck(){
        this.setState({one:!this.state.one})
        boxes[0]=!this.state.one;
    }
    twoCheck(){
      this.setState({two:!this.state.two})
      boxes[1]=!this.state.two; 
    }
    threeCheck(){
        this.setState({three:!this.state.three})
        boxes[2]=!this.state.three;
    }
    fourCheck(){
        this.setState({four:!this.state.four})  
        boxes[3]=!this.state.four;
    }
    fiveCheck(){
        this.setState({five:!this.state.five})
        boxes[4]=!this.state.five;
    }

    //location
    sixCheck(){
        this.setState({six:true, seven:false, eight:false, nine:false})    
    }
    sevenCheck(){
        this.setState({six:false, seven:true, eight:false, nine:false})
    }
    eightCheck(){
        this.setState({six:false, seven:false, eight:true, nine:false})    
    }
    nineCheck(){
        this.setState({six:false, seven:false, eight:false, nine:true})
    }

  render () {
    const { navigate } = this.props.navigation;
      return(
        <Container>
            <Header style ={{backgroundColor: '#cc6600'}} 
              androidStatusBarColor = '#994d00'>
                <Left>
                  <Button transparent onPress={() => this.props.navigation.navigate('MapScreen', {boolean: boxes})}>
                      <Icon name='md-arrow-back'/>
                  </Button>
                </Left>
                <Body>
                  <Title>GeoFind</Title>
                </Body>
                <Right/>
            </Header>

              <ListItem itemHeader first>
                <Text>first select desired data type(s)</Text>
              </ListItem>
              <ListItem onPress={() => this.oneCheck()}>
                <CheckBox checked={this.state.one} />
                <Body>
                <Text>Biomass</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.twoCheck()}>
                <CheckBox checked={this.state.two}  />
                <Body>
                <Text>Poplation Density</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.threeCheck()}>
                <CheckBox checked={this.state.three}  />
                <Body>
                <Text>Administrative Boundaries</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.fourCheck()}>
                <CheckBox checked={this.state.four}  />
                <Body>
                <Text>Financial Touchpoints</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.fiveCheck()}>
                <CheckBox checked={this.state.five}  />
                <Body>
                <Text>Infrastructure</Text>
                </Body>
              </ListItem>

              {/* location */}
              <ListItem itemHeader>
                <Text> </Text>
              </ListItem>
              <ListItem itemHeader>
                <Text>then location..</Text>
              </ListItem>
              <ListItem onPress={() => this.sixCheck()}>
                <CheckBox checked={this.state.six} />
                <Body>
                <Text>Undefined..</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.sevenCheck()}>
                <CheckBox checked={this.state.seven}  />
                <Body>
                <Text>Kenya</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.eightCheck()}>
                <CheckBox checked={this.state.eight}  />
                <Body>
                <Text>Ghana</Text>
                </Body>
              </ListItem>
              <ListItem onPress={() => this.nineCheck()}>
                <CheckBox checked={this.state.nine}  />
                <Body>
                <Text>Egypt</Text>
                </Body>
              </ListItem>
              <ListItem itemHeader first>
                <Text> </Text>
              </ListItem>
              <Button iconRight block warning rounded >
                  <Icon name = 'ios-search'/>
                  <Text>SEARCH</Text>
              </Button>
              
      </Container>
      )
      
    }
}

export {boxes};
        
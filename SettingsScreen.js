
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input, Picker, Form} from 'native-base';

export default class SettingsScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          map1: "satellite"
        };
      }
      static navigationOptions = {
        //Setting the header of the screen
        title: 'SettingsScreen',
      };
     onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
      
    render (){
      const { navigate } = this.props.navigation;
        return(
            <Container>
                <Header style ={{backgroundColor: '#cc6600'}} 
                androidStatusBarColor = '#994d00'>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu'/>
                    </Button>
                    </Left>
                    <Body>
                    <Title>GeoFind</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Text>Choose your map type</Text>
                    <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.map}
           onValueChange={this.onValueChange.bind(this)}
          onValueChange={(itemValue, itemIndex) =>
           this.setState({map1: itemValue})
         }
        onValueChange={() =>
          navigate('MapScreen', {
            userMap: Picker.itemValue
          })
        }
            
            >
              <Picker.Item label="Satellite" value="satellite" />
              <Picker.Item label="Standard" value="standard" />
              <Picker.Item label="Terrain" value="terrain" />
              <Picker.Item label="Hyprid" value="hybrid" />
            </Picker>
          </Form>
                </Content>
        </Container>
        )
    }
}
        
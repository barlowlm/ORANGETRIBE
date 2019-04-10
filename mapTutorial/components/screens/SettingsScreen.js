
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input, Picker, Form} from 'native-base';

export default class SettingsScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected: "satellite"
        };
      }
     onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
      
    render (){
       
        return(
            <Container>
                <Header style ={{backgroundColor: '#cc6600'}} 
                androidStatusBarColor = '#994d00'>
                    <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name='md-arrow-back'/>
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
              selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
            
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
        
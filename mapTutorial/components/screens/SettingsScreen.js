
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Content, Item, Input, Picker, Form} from 'native-base';


/*
  Dearbhla and Michael 
  Dearbhla designed the picker and the navigation 
  Michael handeled screen design
*/
export default class SettingsScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          map1: "satellite"
        };
      }
      static navigationoptions = {
        title: 'Settings'
    };

      /*
     onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
      */
     mapChange = (value) => {
       this.setState({
         map1:value
       });
     }
      
    render (){
       const {navigate} = this.props.navigation;
        return(
            <Container navigation={this.props.navigation}>
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
              navigation={this.props.navigation}
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={this.state.selected}
              onValueChange={() => 
                navigate('MapScreen', {
                  userMap: Picker.itemValue,
                })
              }
            >
              <Picker.Item label="Satellite" value="satellite" />
              <Picker.Item label="Standard" value="standard" />
            </Picker>
          </Form>
          <Image style={styles.logo}
                  source={require('../images/settings_icon_grey.png')}>
          </Image>
                </Content>
        </Container>
        )
    }
}
    
const styles = StyleSheet.create({
  logo: {
    opacity: .1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 400,
},
})
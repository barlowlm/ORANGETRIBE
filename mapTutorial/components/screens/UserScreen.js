import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Content, Header, Left, Body, Right, Button, Icon, Title, Item, Input} from 'native-base';

export default class UserScreen extends Component{
    render (){
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
                    <Text>this is the user screen</Text>
                </Content>
                
        </Container>
        )
    }
}
        
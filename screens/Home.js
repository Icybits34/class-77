import React, { Component } from 'react';
import { Text, View, ImageBackground,TouchableOpacity,Image,Platform,StatusBar,SafeAreaView } from 'react-native';

export default class HomeScreen extends Component {
    render() {

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                   <SafeAreaView style={styles.droidSafeArea}/>
                   <ImageBackground style={styles.backgroundImage} source={require("./assets/bg_image.png")}>
                <View style={styles.titleBar} >
        
                <Text>ISS Tracker!</Text>
                </View>
                <TouchableOpacity style={styles.rootCard} 
                onPress={()=>this.props.navigation.navigate("IssLocation")}
                >
                    <Text style={styles.rootText}>IssLocation</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.digit}>1</Text>
                    <Image style={styles.ImageIcon} source={require("./assets/iss_icon.png")}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rootCard} 
                onPress={()=>this.props.navigation.navigate("Meteors")}
                >
                    <Text style={styles.rootText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.digit}>2</Text>
                    <Image style={styles.ImageIcon} source={require("./assets/meteor_icon.png")}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rootCard} 
                onPress={()=>this.props.navigation.navigate("Updates")}
                >
                    <Text style={styles.rootText}>Updates</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                    <Text style={styles.digit}>3</Text>
                    <Image style={styles.ImageIcon} source={require("./assets/rocket_icon.png")}></Image>
                </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}
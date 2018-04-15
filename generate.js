import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

var countries = ["USA", "Canada"];
var products = [
  ["burgers", "cars"],
  ["maple syrup", "timber"]
];

export default class GenerateScreen extends React.Component {
  constructor(props) {
    super(props)
    const { state, navigation } = this.props.navigation;
    this.state = { country: 'Liberia', product1: 'oranges', product2: 'plastic', chosenProduct: '', chosenProductIndex: 0}
    this.randomCountry = this.randomCountry.bind(this);

    this.state = state.params;
  }

  componentDidMount() {
    this.randomCountry()
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.text}`,
    }
  };

  randomCountry() {
    var index = Math.floor(Math.random() * countries.length);
    console.log(index);
    console.log(countries[index]);
    var productRandom = Math.floor(Math.random() * 2);
    this.setState({country: countries[index], product1: products[index][0],
                  product2: products[index][1], chosenProduct: products[index][productRandom], chosenProductIndex: productRandom+1},
                  () => {console.log(this.state.country)});
  }

  render() {
    return (
      <View>
      <Text>Click the map to generate a country</Text>
        <Button
          onPress={() => {
              this.props.navigation.navigate("Start", {text: "Start Screen",
                      country: this.state.country, product1: this.state.product1,
                      product2: this.state.product2, gameType: this.state.gameType, chosenProduct: this.state.chosenProduct, chosenProductIndex: this.state.chosenProductIndex});
              }
          }
          title="Generate Country"
        />
      </View>
    );
  }
}

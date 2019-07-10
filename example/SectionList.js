// @flow
import React, { Component } from 'react';
import { Animated, View, Text, SectionList, Dimensions } from 'react-native';
import ScrollableNavigationBar, {
  SectionContainer
} from 'react-native-scrollable-navigation-bar';

const deviceWidth = Dimensions.get('window').width;

type Props = {};

export default class App extends Component<Props> {
  animatedValue = new Animated.Value(0);

  state = {
    dragging: false
  };

  render() {
    const {
      onSnap = index => {
        console.log(index);
      },
      itemWidth = 250,
      spacing = 20
    } = this.props;
    const data = [
      'item1',
      'item2',
      'item1',
      'item2',
      'item1',
      'item2',
      'item1',
      'item2',
      'item1',
      'item2',
      'item2',
      'item2',
      'item1',
      'item2',
      'item2',
      'item2',
      'item1',
      'item2'
    ];
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollableNavigationBar
          ContainerComponent={SectionContainer}
          headerBackgroundColor="white"
          title="SectionList"
          ScrollComponent={Animated.SectionList}
          data={data}
          renderItem={({ item, index, section }) => (
            <View style={{ height: 40, backgroundColor: 'lightgrey' }}>
              <Text key={index}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={{ backgroundColor: title, height: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>
                {title}
              </Text>
            </View>
          )}
          renderSectionFooter={({ section: { title } }) => (
            <View style={{ backgroundColor: title, height: 20 }} />
          )}
          transitionPoint={200}
          sections={[
            {
              title: 'green',
              data
            },
            {
              title: 'blue',
              data
            },
            {
              title: 'red',
              data
            }
          ]}
          stickySectionHeadersEnabled
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import Appearer from '../Appearer';

export interface NavigationBarProps {
  backgroundColor?: string;
  height?: number;
  title?: string;
  titleStyle?: TextStyle;
  leftIcons?: React.ReactElement[];
  rightIcons?: React.ReactElement[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  backgroundColor = 'transparent',
  height = 60,
  title,
  titleStyle,
  leftIcons,
  rightIcons,
}) => {
  const backgroundStyle = useMemo(() => {
    return [
      styles.container,
      {
        height,
        backgroundColor,
      },
    ];
  }, [backgroundColor, height]);

  const iconWrapper = useMemo(() => {
    return (icon: React.ReactElement, index: number) => {
      return (
        <View style={styles.iconContainer} key={index.toString()}>
          {icon}
        </View>
      );
    };
  }, []);

  return (
    <View style={backgroundStyle}>
      {leftIcons?.map(iconWrapper)}
      {rightIcons?.map(iconWrapper)}
      <Appearer style={styles.titleContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Appearer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  titleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  iconContainer: {
    marginHorizontal: 10,
  },
});

export default NavigationBar;

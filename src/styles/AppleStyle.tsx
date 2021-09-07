import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import Container, { ContainerProps } from '../Container';
import HeaderTitle from '../components/HeaderTitle';
import NavigationBar from '../components/NavigationBar';
import StatusBar from '../components/StatusBar';
import Border from '../components/Border';
import { NAVIGATION_BAR_HEIGHT, STATUS_BAR_HEIGHT } from '../constants';

interface AppleStyleProps extends ContainerProps {
  title?: string;
  headerTitle?: string;
  navigationBarBackgroundColor?: string;
  headerBackgroundColor?: string;
  borderColor?: string;
  navigationBarBorderColor?: string;
  headerBorderColor?: string;
  transition?: boolean;
  titleColor?: string;
  headerTitleColor?: string;
  backgroundColor?: string;
  leftIcons?: React.ReactElement[];
  rightIcons?: React.ReactElement[];
  headerLeftIcons?: React.ReactElement[];
  headerRightIcons?: React.ReactElement[];
  children?: React.ReactNode;
}

const AppleStyle = React.forwardRef<Container, AppleStyleProps>(
  (props, ref) => {
    const {
      children,
      title,
      headerTitle = title,
      navigationBarBackgroundColor = '#f5f5f5',
      headerBackgroundColor = navigationBarBackgroundColor,
      borderColor = 'lightgrey',
      navigationBarBorderColor = borderColor,
      headerBorderColor = borderColor,
      transition = false,
      titleColor = 'black',
      headerTitleColor = titleColor,
      backgroundColor = 'white',
      leftIcons,
      rightIcons,
      headerLeftIcons = leftIcons,
      headerRightIcons = rightIcons,
      headerHeight = NAVIGATION_BAR_HEIGHT,
      navigationBarHeight = NAVIGATION_BAR_HEIGHT,
      statusBarHeight = STATUS_BAR_HEIGHT,
      borderHeight = 1,
    } = props;

    const NavigationBarComponent = useMemo(
      () => () => {
        return (
          <NavigationBar
            backgroundColor={navigationBarBackgroundColor}
            title={title}
            titleStyle={{ color: titleColor }}
            leftIcons={leftIcons}
            rightIcons={rightIcons}
          />
        );
      },
      [title, navigationBarBackgroundColor, titleColor, leftIcons, rightIcons]
    );

    const HeaderNavigationBarComponent = useMemo(() => {
      if (transition) {
        return () => (
          <NavigationBar
            backgroundColor={headerBackgroundColor}
            leftIcons={headerLeftIcons}
            rightIcons={headerRightIcons}
          />
        );
      }
      return undefined;
    }, [headerLeftIcons, headerRightIcons, transition, headerBackgroundColor]);

    const headerBackgroundComponentStyle = useMemo(() => {
      return {
        backgroundColor: headerBackgroundColor,
        flex: 1,
      };
    }, [headerBackgroundColor]);

    const HeaderBackgroundComponent = useMemo(() => {
      return () => {
        return <Animated.View style={headerBackgroundComponentStyle} />;
      };
    }, [headerBackgroundComponentStyle]);

    const HeaderForegroundComponent = useMemo(() => {
      return () => (
        <HeaderTitle
          title={headerTitle}
          titleStyle={{ color: headerTitleColor }}
        />
      );
    }, [headerTitle, headerTitleColor]);

    const BorderComponent = useMemo(() => {
      return () => (
        <Border
          backgroundColor={navigationBarBorderColor}
          height={borderHeight}
        />
      );
    }, [navigationBarBorderColor, borderHeight]);

    const HeaderBorderComponent = useMemo(() => {
      return () => (
        <Border backgroundColor={headerBorderColor} height={borderHeight} />
      );
    }, [headerBorderColor, borderHeight]);

    const StatusBarComponent = useMemo(() => {
      return () => <StatusBar backgroundColor={navigationBarBackgroundColor} />;
    }, [navigationBarBackgroundColor]);

    const HeaderStatusBarComponent = useMemo(() => {
      return () => <StatusBar backgroundColor={headerBackgroundColor} />;
    }, [headerBackgroundColor]);

    const contentContainerStyle = useMemo(() => {
      return { backgroundColor };
    }, [backgroundColor]);

    return (
      <Container
        HeaderBackgroundComponent={HeaderBackgroundComponent}
        HeaderForegroundComponent={HeaderForegroundComponent}
        NavigationBarComponent={NavigationBarComponent}
        HeaderNavigationBarComponent={HeaderNavigationBarComponent}
        StatusBarComponent={StatusBarComponent}
        HeaderStatusBarComponent={HeaderStatusBarComponent}
        HeaderBorderComponent={HeaderBorderComponent}
        BorderComponent={BorderComponent}
        borderHeight={borderHeight}
        contentContainerStyle={contentContainerStyle}
        transitionPoint={
          headerHeight - navigationBarHeight - statusBarHeight - 30
        }
        overScrollMode={'never'}
        {...props}
        ref={ref}
      >
        {children}
      </Container>
    );
  }
);

export default AppleStyle;

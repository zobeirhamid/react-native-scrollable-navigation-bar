import * as React from 'react';
import {
  Animated,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProperties,
} from 'react-native';
import Context, {ReachedTransitionPointContext} from './Context';
import EventHandler from '../EventHandler';

export type CustomScrollViewProps = {
  children?: React.ReactNode;
  StatusBar?: React.FC;
  beforeTransitionPoint?: () => void;
  afterTransitionPoint?: () => void;
  style?: object;
  snapHeight?: number;
  contentContainerStyle?: object;
  containerStyle?: object;
  backgroundColor?: string;
  Header?: React.FC<{style?: object}>;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
} & ScrollViewProperties;

const CustomScrollView: React.FC<CustomScrollViewProps> = React.forwardRef(
  (props, ref?: React.Ref<ScrollView>) => {
    const {
      children,
      Header,
      StatusBar,
      contentContainerStyle,
      containerStyle,
      backgroundColor,
      afterTransitionPoint,
      beforeTransitionPoint,
      style,
    } = props;

    const {
      animatedValue,
      transitionPoint,
      headerHeight,
      navigationBarHeight,
      componentHeight,
    } = React.useContext(Context);

    const [
      hasReachedTransitionPoint,
      setHasReachedTransitionPoint,
    ] = React.useState(false);

    const eventHandler = React.useRef(EventHandler<boolean>()).current;

    const scrollListener = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {y} = event.nativeEvent.contentOffset;
      const reachedTransitionPoint =
        y + 1 >= transitionPoint - navigationBarHeight;

      if (reachedTransitionPoint) {
        setHasReachedTransitionPoint(true);
      }
      if (!reachedTransitionPoint) {
        setHasReachedTransitionPoint(false);
      }
    };

    React.useEffect(() => {
      if (hasReachedTransitionPoint === false) {
        if (beforeTransitionPoint !== undefined) beforeTransitionPoint();
      }
      if (hasReachedTransitionPoint === true) {
        if (afterTransitionPoint !== undefined) afterTransitionPoint();
      }
    });

    const onScroll = React.useMemo(
      () =>
        Animated.event([{nativeEvent: {contentOffset: {y: animatedValue}}}], {
          listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            scrollListener(event);
            if (props.onScroll !== undefined) props.onScroll(event);
          },
          useNativeDriver: true,
        }),
      [animatedValue, hasReachedTransitionPoint],
    );

    return (
      <ReachedTransitionPointContext.Provider
        value={{hasReachedTransitionPoint, containerEvents: eventHandler}}>
        {StatusBar !== undefined && <StatusBar />}
        <Animated.View style={containerStyle}>
          {Header !== undefined && <Header />}
          <Animated.ScrollView
            contentInsetAdjustmentBehavior="never"
            nestedScrollEnabled
            scrollEventThrottle={1}
            style={style}
            {...props}
            contentContainerStyle={undefined}
            onScroll={onScroll}
            // @ts-ignore
            ref={ref}>
            <Animated.View style={contentContainerStyle}>
              <View style={{height: componentHeight}} />
              <View style={{backgroundColor, overflow: 'visible'}}>
                {children}
              </View>
            </Animated.View>
          </Animated.ScrollView>
        </Animated.View>
      </ReachedTransitionPointContext.Provider>
    );
  },
);

export default CustomScrollView;

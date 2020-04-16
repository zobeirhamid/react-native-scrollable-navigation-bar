import * as React from "react";
import {
  Animated,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProperties,
} from "react-native";
import Context, { ReachedTransitionPointContext } from "./Context";
import EventHandler from "../EventHandler";

export type CustomScrollViewProps = {
  children?: React.ReactNode;
  StatusBar?: React.FC;
  beforeTransitionPoint?: () => void;
  afterTransitionPoint?: () => void;
  style?: object;
  snapHeight?: number;
  contentContainerStyle?: object;
  backgroundColor?: string;
  Header?: React.FC;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
} & ScrollViewProperties;

const CustomScrollView: React.FC<CustomScrollViewProps> = React.forwardRef(
  (props, ref?: React.Ref<ScrollView>) => {
    const {
      children,
      Header,
      StatusBar,
      contentContainerStyle,
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
    } = React.useContext(Context);

    const [
      hasReachedTransitionPoint,
      setHasReachedTransitionPoint,
    ] = React.useState(false);

    const eventHandler = React.useRef(EventHandler<boolean>()).current;

    const scrollListener = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = event.nativeEvent.contentOffset;
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
        Animated.event(
          [{ nativeEvent: { contentOffset: { y: animatedValue } } }],
          {
            listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
              scrollListener(event);
              if (props.onScroll !== undefined) props.onScroll(event);
            },
            useNativeDriver: true,
          }
        ),
      [animatedValue, hasReachedTransitionPoint]
    );

    return (
      <Context.Provider
        value={{
          transitionPoint,
          navigationBarHeight,
          headerHeight,
          animatedValue,
        }}
      >
        <ReachedTransitionPointContext.Provider
          value={{ hasReachedTransitionPoint, containerEvents: eventHandler }}
        >
          {StatusBar !== undefined && <StatusBar />}
          <Animated.ScrollView
            contentInsetAdjustmentBehavior="never"
            nestedScrollEnabled
            scrollEventThrottle={1}
            style={style}
            {...props}
            onScroll={onScroll}
            contentContainerStyle={undefined}
            // @ts-ignore
            ref={ref}
          >
            <Animated.View style={contentContainerStyle}>
              {Header !== undefined && <Header />}
              <View style={{ backgroundColor }}>{children}</View>
            </Animated.View>
          </Animated.ScrollView>
        </ReachedTransitionPointContext.Provider>
      </Context.Provider>
    );
  }
);

export default CustomScrollView;

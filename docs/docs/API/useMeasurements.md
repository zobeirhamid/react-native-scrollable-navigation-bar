---
sidebar_position: 10
---

# useMeasurements()

Hook to get all measurements.

```tsx
import { useMeasurements } from 'react-native-scrollable-navigation-bar';
const {
  statusBarHeight,
  navigationBarHeight,
  headerHeight,
  snapHeight,
  stickyHeight,
  borderHeight,
  transitionPoint,
}: {
  statusBarHeight: number;
  navigationBarHeight: number;
  headerHeight: number;
  snapHeight: number;
  stickyHeight: number;
  borderHeight: number;
  transitionPoint: number;
} = useMeasurements();
```

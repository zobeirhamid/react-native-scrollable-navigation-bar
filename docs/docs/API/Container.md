---
sidebar_position: 2
---

# Container

## Props

Inherits all ScrollView props.

### `animatedValue`

| type             | default                 | required |
| ---------------- | ----------------------- | -------- |
| `Animated.Value` | `new Animated.Value(0)` | NO       |

### `statusBarHeight`

| type     | default                       | required |
| -------- | ----------------------------- | -------- |
| `number` | `constants.STATUS_BAR_HEIGHT` | NO       |

### `navigationBarHeight`

| type     | default                           | required |
| -------- | --------------------------------- | -------- |
| `number` | `constants.NAVIGATION_BAR_HEIGHT` | NO       |

### `headerHeight`

| type     | default                           | required |
| -------- | --------------------------------- | -------- |
| `number` | `constants.NAVIGATION_BAR_HEIGHT` | NO       |

### `transitionPoint`

| type     | default                                                                  | required |
| -------- | ------------------------------------------------------------------------ | -------- |
| `number` | `props.headerHeight - props.navigationBarHeight - props.statusBarHeight` | NO       |

### `stickyHeight`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `0`     | NO       |

### `snapHeight`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `0`     | NO       |

### `borderHeight`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `0`     | NO       |

### `collapsible`

| type      | default | required |
| --------- | ------- | -------- |
| `boolean` | `false` | NO       |

### `stayCollapsible`

| type      | default | required |
| --------- | ------- | -------- |
| `boolean` | `false` | NO       |

### `stickyCollapsible`

| type      | default | required |
| --------- | ------- | -------- |
| `boolean` | `false` | NO       |

### `stickyStayCollapsible`

| type      | default | required |
| --------- | ------- | -------- |
| `boolean` | `false` | NO       |

### `StatusBarComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `HeaderStatusBarComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `NavigationBarComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `HeaderNavigationBarComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `StickyComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `SnapComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `BorderComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `HeaderBorderComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `HeaderForegroundComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `HeaderBackgroundComponent`

| type                       | default      | required |
| -------------------------- | ------------ | -------- |
| `React.ComponentType<any>` | `() => null` | NO       |

### `scale`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `1.1`   | NO       |

### `parallax`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `0`     | NO       |

### `fadeOut`

| type      | default | required |
| --------- | ------- | -------- |
| `boolean` | `false` | NO       |

### `onBlur`

| type       | default      | required |
| ---------- | ------------ | -------- |
| `Function` | `() => void` | NO       |

### `onFocus`

| type       | default      | required |
| ---------- | ------------ | -------- |
| `Function` | `() => void` | NO       |

### `beforeTransitionPoint`

| type       | default      | required |
| ---------- | ------------ | -------- |
| `Function` | `() => void` | NO       |

### `afterTransitionPoint`

| type       | default      | required |
| ---------- | ------------ | -------- |
| `Function` | `() => void` | NO       |

## Methods

### `focus()`

### `blur()`

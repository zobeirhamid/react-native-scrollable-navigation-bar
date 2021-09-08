---
sidebar_position: 9
---

# Transitioner

When the scroll position has reached the `transitionPoint` then `Transitioner` will render. The component is similar to `Appearer` except that its `fade` animation is based on its props.

## Props

### `style`

| type        | default | required |
| ----------- | ------- | -------- |
| `ViewStyle` | `{}`    | NO       |

### `distance`

| type     | default                                 | required |
| -------- | --------------------------------------- | -------- |
| `number` | `useMeasurements().navigationBarHeight` | NO       |

### `offset`

| type     | default          | required |
| -------- | ---------------- | -------- |
| `number` | `props.distance` | NO       |

---
sidebar_position: 3
---

# AppleStyle

## Props

Inherits all Container props.

### `title`

| type     | default | required |
| -------- | ------- | -------- |
| `string` | `''`    | NO       |

### `headerTitle`

| type     | default       | required |
| -------- | ------------- | -------- |
| `string` | `props.title` | NO       |

### `backgroundColor`

| type     | default   | required |
| -------- | --------- | -------- |
| `string` | `'white'` | NO       |

### `titleColor`

| type     | default   | required |
| -------- | --------- | -------- |
| `string` | `'black'` | NO       |

### `headerTitleColor`

| type     | default            | required |
| -------- | ------------------ | -------- |
| `string` | `props.titleColor` | NO       |

### `navigationBarBackgroundColor`

| type     | default     | required |
| -------- | ----------- | -------- |
| `string` | `'#f5f5f5'` | NO       |

### `headerBackgroundColor`

| type     | default                              | required |
| -------- | ------------------------------------ | -------- |
| `string` | `props.navigationBarBackgroundColor` | NO       |

### `borderColor`

| type     | default       | required |
| -------- | ------------- | -------- |
| `string` | `'lightgrey'` | NO       |

### `navigationBarBorderColor`

| type     | default             | required |
| -------- | ------------------- | -------- |
| `string` | `props.borderColor` | NO       |

### `headerBorderColor`

| type     | default             | required |
| -------- | ------------------- | -------- |
| `string` | `props.borderColor` | NO       |

### `borderHeight`

| type     | default | required |
| -------- | ------- | -------- |
| `number` | `1`     | NO       |

### `leftIcons`

| type                   | default | required |
| ---------------------- | ------- | -------- |
| `React.ReactElement[]` | `[]`    | NO       |

### `rightIcons`

| type                   | default | required |
| ---------------------- | ------- | -------- |
| `React.ReactElement[]` | `[]`    | NO       |

### `headerLeftIcons`

| type                   | default           | required |
| ---------------------- | ----------------- | -------- |
| `React.ReactElement[]` | `props.leftIcons` | NO       |

### `headerRightIcons`

| type                   | default            | required |
| ---------------------- | ------------------ | -------- |
| `React.ReactElement[]` | `props.rightIcons` | NO       |

## Methods

Inherits all Container methods.

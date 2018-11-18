# @react-element/suspend-till-window-onload

> 降低优先级, 等到 window.onload 后再 mount

[![NPM](https://img.shields.io/npm/v/@react-element/suspend-till-window-onload.svg)](https://www.npmjs.com/package/@react-element/suspend-till-window-onload) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-element/suspend-till-window-onload
```

## Usage

```tsx
import * as React from 'react'

import SuspendTillWindowOnload from '@react-element/suspend-till-window-onload'

class Example extends React.Component {
  render () {
    return (
      <SuspendTillWindowOnload>
        <img src="path/to/img.png" />
      </SuspendTillWindowOnload>
    )
  }
}
```

## Props

```ts
type Props = {
  children: React.ReactNode;
  delay?: number;
  resolve?: boolean;
  disable?: boolean;
}
```

- children - 待渲染组件, 该组件必须为 React.Children.only
- resolve - 是否已经加载, 当当前组件 resolve 后, 不再重复 delay
- disable - 是否禁用直接返回 children

## License

MIT © [jf3096](https://github.com/jf3096)

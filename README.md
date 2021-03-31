# react-circle-layout

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-circle-layout.svg)](https://www.npmjs.com/package/react-circle-layout)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-circle-layout

yarn add react-circle-layout
```

## Usage

```tsx
import { CircleLayout, Radian } from "react-circle-layout";

function App() {
  return (
    <CircleLayout radius={24}>
      <Radian radian={1 * Math.PI}>
        <img
          style={{
            width: "8rem",
            height: "8rem",
          }}
        />
      </Radian>
    </CircleLayout>
  );
}
```

## License

MIT © [kayac-chang](https://github.com/kayac-chang)

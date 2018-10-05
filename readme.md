# BOB Status

Status codes for the [BOB](https://github.com/Fishrock123/bob) streaming protocol.

```js
const { error, end, continue } = require('bob-status')
```

## Usage

- Send `status.continue` as the first argument to a BOB sink's `next()` method in most cases.
- Send `status.end` as the first argument to a BOB sink's `next()` to end the stream.
- Send `status.error` as the first argument to a BOB sink's `next()` if there is an error.

## License

[MIT Licensed](license) — _[Contributions via DCO 1.1](contributing.md#developers-certificate-of-origin)_

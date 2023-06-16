# TypeScript Jest boilerplate

This boilerplate uses TypeScript and Jest as testing framework.
Test files should are picked based on their name, here's a few examples that will get picked up by Jest:

- `MyClass.test.ts`
- `MyJavaScriptModule.test.js`
- `MyComponent.test.tsx`
- `SubFolder/MyClass.test.ts`

You can customize the regexp and jest configuration by editing the `package.json` file.

## Installing dependencies

```bash
# Install dependencies
yarn|npm install
```

## Running tests

```bash
# Run tests once
yarn|npm test

# Run tests for a specific file
yarn|npm test MyFile.test.ts
```

A few other NPM scripts are provided for convenience, they all support custom arguments as described above.

```
# Run tests once with coverage
# Coverage report available in ./coverage/index.html
yarn|npm test:cover

# Run all tests in watch mode without coverage
yarn|npm test:watch
```
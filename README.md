# unpkg-bundler

> A client-side transpiler, bundler as well as dynamic npm package fetch and load from [unpkg](https://unpkg.com/).

<p align="center">
  <a href="https://badge.fury.io/js/unpkg-bundler">
    <img src="https://badge.fury.io/js/unpkg-bundler.svg" alt="npm version" height="18">
  </a>
  <a href="https://packagephobia.com/result?p=unpkg-bundler">
    <img src="https://packagephobia.com/badge?p=unpkg-bundler" alt="install size" >
  </a>
  <a href="https://github.com/ChristopherHButler/unpkg-bundler/blob/setup/LICENSE">
    <img src="https://img.shields.io/npm/l/unpkg-bundler.svg" alt="license">
  </a>
</p>

## Install
```
> npm install unpkg-bundler
```

## Tl;dr
> #### Features
 - unpkg-bundler is a **transpiler** and **bundler** that is made for use in the browser.
 - Under the hood, it uses [esbuild](https://esbuild.github.io/) to do the heavy lifting and actually consists of a few esbuild plugins.

 - supports both ES modules (esm) and CommonJS (cjs). The default entry point is the esm module.
   - if you want to use the cjs module require bundle from `./lib/cjs`
#### Why bother using unpkg-bundler ?
 - There are other bundlers out there that run in the browser so why use unpkg-bundler?
> The magic of unpkg-bundler is that it will automatically fetch and load npm packages from unpkg and add them to your bundle. 🤯


## Usage
 - unpkg-bundle has a single function: `bundle`
 - bundle is an async function
 - it takes a single string as an argument
 - it returns an object with a code property and an err property.

```ts

const bundle = async (input: string): { code: string; err: string; } => {...};

```

## Examples
The bundle function is called with a single string as an argument, without access to a file system. This makes it ideal for use in environments without a file system (such as a browser).

#### Calling bundle

```js
// import the bundle function
import bundle from 'unpkg-bundler';

// call the (async) bundle function.
const output = await bundle('const a = 1;');

```

#### Basic Example

```js
// import the bundle function
import bundle from 'unpkg-bundler';

// 'modules' (code strings) to bundle
const mod1 = 'const a = 1;';
const mod2 = 'console.log(a)';

// join the 'modules'
const modules = [mod1, mod2].join('\n');

// remember to mark the function async
const createBundle = async () => {
  // bundle returns an object with two properties: code and err
  const { code, err } = await bundle(modules);
};
```

#### Realistic Usage

```js
// react component to bundle
const input = 
`
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Hello jsx book!</h1>
      <h2>Start editing to create something magic!</h2>
      <p>By the way, you can import (almost) ANY npm package using our magic bundler</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
`;

// unpkg-bundler will automatically:
// 1) fetch react and react-dom from unpkg and load them into your bundle
// 2) transpile your code
// 3) bundle your code
const { code, err } = await bundle(input);
```

#### Advanced Usage
One way to use unpkg-bundler is as the engine for an online code editor.

> ###### Demo App
As a proof of concept, I made a bare bones 'code editor' in just under 90 lines of code using unpkg-bundler.
 - Github [https://github.com/ChristopherHButler/code-tar-pit](https://github.com/ChristopherHButler/code-tar-pit)
 - Demo [https://code-tar-pit.vercel.app/](https://code-tar-pit.vercel.app/)


## Motivation
Not too long ago I built an online code editor [Contrived](https://contrived.herokuapp.com/) I had to write my own bundler and transpiler from scratch.

I spoke to [Stephen Grider](https://rallycoding.com/) a fair bit during this time about code execution in the browser.

Stephen recently made a course on Udemy titled: [React and Typescript: Build a Portfolio Project](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/).

unpkg-bundler was built as part of that course and I decided to give it a life of it's own.

> **Fun Fact**: unpkg-bundler is also currently powering the app I made in that course here: [jsxbook](https://jsxbook.vercel.app/).

## Contributing
Yes. Do it. All about that.

#### How to contribute
1. Fork the project
2. Create a feature branch (`git checkout -b f/amazingFeature`)
3. Commit your changes (`git commit -m 'added awesome sauce'`)
4. Push to the remote branch (`git push origin f/amazingFeature`)
5. Open a pull request.

#### Contributors: 1

- :monkey_face: Christopher Harold Butler ([ChristopherHButler](https://github.com/ChristopherHButler))

## License
Distributed under the MIT License. See LICENSE for more information.
# State

```marksy
<Youtube url="https://www.youtube.com/embed/OIKz6iASp1A" />
```

Cerebral uses a single state tree to store all the state of your application. It is just a single object:

```js
{
}
```

That's it.

You will normally store other objects, arrays, strings, booleans and numbers in it. Forcing you to think of your state in this simple form gives us benefits.

1.  The state of the application is exposed as simple values. There are no classes or other abstractions hiding the state of your application
2.  The state can be stored on the server, local storage and passed to the debugger. It is what we call **serializable** state
3.  All the state of your application can be inspected through one object
4.  All state is related to a path. There is no need to import and/or pass around model instances into other model instances to access state

To define the initial state of any application all we need to do is to add a root module to our **Controller** in _controller.js_

```js
import { Controller, Module } from 'cerebral'

const app = Module({
  state: {
    title: 'Cerebral Tutorial'
  }
})

export default Controller(app)
```

Later you will learn more about **modules** which help you structure your application.

```marksy
<CodeSandbox url="https://codesandbox.io/embed/oqx7po71nz?view=editor" />
```

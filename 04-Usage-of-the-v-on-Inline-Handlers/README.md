# Usage of the v-on Inline Handlers

The `v-on` directive helps you to add event listeners directly on the html element. Like any other directive, everything between the double quotes gets executed as an JavaScript expression. This means you can handle a data property instantly inline. This is also called "inline handlers".

## Example

Given: We like to increase a data property `count`.

```html
<div id="app">
  <p>Count is {{ count }}</p>
  <button v-on:click="count++">Increase</button>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
}).mount("#app");
```

## Anatomie

As you can see in the example, there is no need to use something like `document.querySelector('button').addEventListener('click', () => {})` anymore. The `v-on` will do that for you much faster.

Vue supports any native javascript event. E. g. `v-on:change`, `v-on:input`, `v-on:mousemove` etc.

## Enough for now

There are much more things to learn about the `v-on` directive but for now you should be able to use the directive for some excersises cause they make much more fun with events ;)

const app = Vue.createApp({
  data() {
    return {
      personName: "John Doe",
      currentDate: new Date().toLocaleString("en-US"),
      vtextExampleText: "Hello John!",
      vhtmlExampleText: "<h1>Tolle Headline</h1><p>Some Text</p>",
    };
  },
  directives: {
    highlight: {
      mounted(el) {
        el.style.border = "1px solid red";
        el.style.backgroundColor = "hotpink";
      },
    },
  },
}).mount("#app");
console.log(app.personName);

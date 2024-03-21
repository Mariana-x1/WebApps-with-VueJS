const app = Vue.createApp({
  data() {
    return {
      personName: "John Doe",
      currentDate: new Date().toLocaleString("en-US"),
      vtextExampleText: "Hello John!",
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

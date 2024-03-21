const app = Vue.createApp({
  data() {
    return {
      personName: "John Doe",
      currentDate: new Date().toLocaleString("en-US"),
    };
  },
}).mount("#app");
console.log(app.personName);

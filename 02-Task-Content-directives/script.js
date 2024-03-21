const app = Vue.createApp({
  data() {
    return {
      version: 1,
      text: "This is <b>bold</b> text with {{ mustache }} tags",
    };
  },

  directives: {
    noIncrement: {
      // Update directive to not increment the value
      update(el, binding) {
        el.innerHTML = binding.value;
      },
    },
  },

  mounted() {
    // Increase version every two seconds
    setInterval(() => {
      this.version++;
    }, 2000);
  },
}).mount("#app");

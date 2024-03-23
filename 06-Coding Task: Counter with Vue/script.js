Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCounter() {
      if (this.count < 100) {
        this.count += 10; // Increase count by 10 on each click
      }
    },
    resetCounter() {
      this.count = 0; // Reset count to 0
    },
  },
}).mount("#app");

const app = Vue.createApp({
  data() {
    return {
      count: 0,
      bgColor: "white",
    };
  },
  methods: {
    increment() {
      if (this.count < 100) {
        this.count++;
      }
      // Change background color based on count value
      if (this.count <= 25) {
        this.bgColor = "green";
      } else if (this.count <= 50) {
        this.bgColor = "yellow";
      } else if (this.count <= 75) {
        this.bgColor = "orange";
      } else {
        this.bgColor = "red";
      }
    },
    reset() {
      this.count = 0;
      this.bgColor = "white"; // Reset background color
    },
  },
}).mount("#app");

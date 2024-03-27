Vue.createApp({
  data() {
    return {
      red: 128,
      green: 128,
      blue: 128,
    };
  },
  methods: {
    getRandomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => response.json())
        .then((data) => {
          const { r, g, b } = data.rgb;
          this.red = r;
          this.green = g;
          this.blue = b;
          this.updateColor(); // Update color after getting random color
        })
        .catch((error) => console.error("Error fetching random color:", error));
    },
    updateColor() {
      const color = `rgb(${this.red}, ${this.green}, ${this.blue})`;
      document.body.style.backgroundColor = color;
      this.saveColor(); // Save color after updating
    },
    saveColor() {
      localStorage.setItem("red", this.red);
      localStorage.setItem("green", this.green);
      localStorage.setItem("blue", this.blue);
    },
  },
  watch: {
    red() {
      this.updateColor();
    },
    green() {
      this.updateColor();
    },
    blue() {
      this.updateColor();
    },
  },
  mounted() {
    this.updateColor(); // Update color on mount
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      switchOn: false,
    };
  },
  computed: {
    switchStatus() {
      return this.switchOn ? "Switch Off" : "Switch On";
    },
  },
  methods: {
    toggleSwitch() {
      this.switchOn = !this.switchOn;
      if (this.switchOn) {
        document.title = "Light is On";
        document.body.classList.add("is-active");
      } else {
        document.title = "Light is Off";
        document.body.classList.remove("is-active");
      }
    },
  },
}).mount("#app");

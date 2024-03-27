Vue.createApp({
  data() {
    return {
      text: "Hello Title",
      onClassName: "is-active",
      isSwitchedOn: false,
    };
  },

  methods: {
    active() {
      this.isSwitchedOn = !this.isSwitchedOn;
      if (this.isSwitchedOn) {
        this.text = "Switch On";
        document.title = "Light is On";
        //document.title = this.text;
        document.body.classList.add(this.onClassName);
      } else {
        this.text = "Switch Off";
        document.title = "Light is Off";
        // document.title = this.text;
        document.body.classList.remove(this.onClassName);
      }
    },
  },
}).mount("#app");

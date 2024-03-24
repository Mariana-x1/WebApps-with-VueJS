Vue.createApp({
  data() {
    return {
      activeTab: null,
      tabs: ["Tab 1", "Tab 2", "Tab 3"],
      contents: [
        // Define your tab contents here
        { title: "Content 1", content: "This is the content of Tab 1." },
        { title: "Content 2", content: "This is the content of Tab 2." },
        { title: "Content 3", content: "This is the content of Tab 3." },
      ],
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
  },
}).mount("#app");

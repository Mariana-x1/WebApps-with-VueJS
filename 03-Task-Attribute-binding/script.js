Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      headlineId: "headline-id",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
}).mount("#app");

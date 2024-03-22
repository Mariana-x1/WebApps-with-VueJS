Vue.createApp({
  data() {
    const headline = "Attribute Binding is awesome";
    const headlineId = headline.replace(/\s+/g, "-").toLowerCase();

    return {
      headline: headline,
      headlineId: headlineId,
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
}).mount("#app");

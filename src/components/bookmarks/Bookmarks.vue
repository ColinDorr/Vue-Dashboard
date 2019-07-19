<template>
  <div class="bookmarks__outer">
    <ul class="bookmarks__list">
      <BookmarkSlider :slides="bookmarks" />
    </ul>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import BookmarkSlider from "@/components/bookmarks/BookmarkSlider.vue";

export default {
  name: "Bookmarks",
  components: {
    BookmarkSlider
  },
  data() {
    return {
      bookmarks: [
        {
          url: "https:nu.nl",
          label: "test"
        },
        {
          url: "https:nu.nl",
          label: "banaan"
        },
        {
          url: "https:nu.nl",
          label: "aardbei"
        },
        {
          url: "https:nu.nl",
          label: "citroen"
        },
        {
          url: "https:nu.nl",
          label: "Facebook"
        },
        {
          url: "https:nu.nl",
          label: "Facebook"
        },
        {
          url: "https:nu.nl",
          label: "Facebook"
        }
      ]
    };
  },
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      perView: 4,
      gap: 10,
      breakpoints: {
        360: {
          perView: 1.5
        },
        520: {
          perView: 2
        },
        768: {
          perView: 3
        },
        992: {
          perView: 4
        }
      }
    }).mount();
  }
};
</script>

<style lang="scss">
</style>

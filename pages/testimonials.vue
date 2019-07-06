<template>
  <section class="has-margin-top-50 has-padding-bottom-50" data-aos="fade-up">
    <div class="container">
      <Testimonials :data="testimonials" class="has-margin-top-50"/>

    </div>
  </section>
</template>


<script>
import Testimonials from "~/components/Testimonials.vue";
import testimonials from "~/static/data/testimonials.json";
export default {
  components: {
    Testimonials
  },
  data() {
    return {
      testimonials: testimonials
    };
  }
};
</script>

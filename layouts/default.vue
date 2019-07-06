<template>
  <div>
    <section class="">
      <Navbar/>
    </section>
    <nuxt/>

    <Footer class/>
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    this.$snackbar.open(`This template is still in development process`);
  }
};
</script>
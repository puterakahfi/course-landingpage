<template>
  <section class="accordions">
    <article class="accordion has-margin-bottom-10" :key="item.label" v-for="item in data.items">
      <div class="accordion-header toggle  has-text-weight-medium is-flex">
        <p>{{ item.title }}</p>
        <span class="toggle is-white has-margin-right-10" aria-label="toggle"></span>
      </div>
      <div class="accordion-body">
        <div class="accordion-content has-text-purple is-size-6" v-html="item.description"></div>
      </div>
    </article>
  </section>
</template>


<script>
import bulmaAccordion from "bulma-accordion/dist/js/bulma-accordion.min.js";
import "bulma-accordion/dist/css/bulma-accordion.min.css";
export default {
  props: ["data"],
  data() {
    return {
      accordions: []
    };
  },
  mounted: function() {
    this.accordions = bulmaAccordion.attach();
  }
};
</script>

<style lang="scss" scoped>
</style>


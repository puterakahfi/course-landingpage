<template>
  <section class="accordions">
    <article class="accordion has-margin-bottom-10" :key="item.label" v-for="item in data.items">
      <div class="accordion-header toggle has-background-white has-text-weight-medium">
        <p>{{ item.title }}</p>
      </div>
      <div class="accordion-body">
        <div class="accordion-content has-text-purple is-size-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
          <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </div>
    </article>
  </section>
</template>


<script>
import bulmaAccordion from "bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js";
import "bulma-extensions/bulma-accordion/dist/css/bulma-accordion.min.css";
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
.accordions {
  .accordion {
    .accordion-header {
      position: relative;
      display: block;
      padding: 1rem 0 1rem 1rem;

      border: 1px solid #dbdbdb;
      border-bottom: none;
      line-height: 1;
      color: #1f2336;
    }
    .accordion-content {
      background: #fefefe;
    }
  }
}
</style>


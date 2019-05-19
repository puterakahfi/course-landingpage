<template>
  <section class="has-margin-top-50 has-padding-bottom-50">
    <div class="container">
      <div class="titleunderline"></div>

      <h1 class="title is-4">Frequently Asked Questions (FAQ) </h1>
      <input type="search" autocomplete="on" placeholder="Search the Help Center" class="input has-margin-bottom-10">
      <div class="columns is-multiline">
        <div class="column is-6" v-for="item in faqs.items" :key="item.id">
          <div class="box has-background-light	">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <strong class="title is-6 is-family-primary has-text-black">
                    {{ item.question }}
                  </strong>

                  <p
                    class="is-size-6 has-text-grey is-family-secondary has-margin-top-10"
                  >{{ item.answer }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>

</style>


<script>
import faqs from "~/static/data/faq.json";

export default {
  data() {
    return {
      faqs: faqs
    };
  }
};
</script>

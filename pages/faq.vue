<template>
  <section class="has-margin-top-50 has-padding-bottom-50">
    <div class="container">
      <div class="is-inline-flex">
        <img class="image is-48x48" src="https://img.icons8.com/nolan/384/chat.png">

        <h1 class="title is-3 has-margin-bottom-10">{{ data.label }}</h1>
      </div>

      <input
        type="search"
        autocomplete="on"
        placeholder="Search the Help Center"
        class="input has-margin-bottom-10"
      >
      <div class="columns is-multiline">
        <div class="column is-6" v-for="item in data.items" :key="item.id">
          <div class="box has-background-light">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <strong class="title is-6 is-family-primary has-text-black">{{ item.question }}</strong>

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
      data: faqs
    };
  }
};
</script>

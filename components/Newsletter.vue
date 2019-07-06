<template>
  <section class="content is-center">
    <div class="titleunderline is-marginless is-paddingless is-small"></div>

    <h1 class="title is-marginless">{{ data.title }}</h1>

    <p class="has-text-purple is-size-6 has-margin-top-20" v-html="data.description"></p>
    <div class="field has-addons">
      <div class="control">
        <input class="input is-medium" type="text" placeholder="Your email address">
      </div>
      <div class="control">
        <a class="button is-success is-medium">Subscribe</a>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: ["data"]
};
</script>

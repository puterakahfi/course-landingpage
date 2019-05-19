<template>
  <section class="container">
    <div class="is-inline-flex">
      <img class="image is-48x48" src="https://img.icons8.com/nolan/384/chat.png" />

      <h1 class="title is-3 has-margin-bottom-10">{{ data.label }}</h1>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6" v-for="item in data.items" :key="item.id">
        <div class="box testimonial is-rounded">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-rounded">
                <img :src="item.image" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <div class="titleunderline is-small"></div>
                <br>

                <strong class="title is-4">{{ item.name }}</strong>
                <br>
                <span class="subtitle is-7">{{ item.title }} , {{ item.company }}</span>

                <p
                  class="is-size-6 has-text-grey has-margin-top-10 is-italic"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"]
};
</script>

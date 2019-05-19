<template>
  <section class="container">
    <div class="is-inline-flex">
      <img class="image is-48x48" src="https://img.icons8.com/nolan/384/chat.png">

      <h1 class="title is-3 has-margin-bottom-10">{{ data.label }}</h1>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6" v-for="item in data.items" :key="item.id">
        <div class="box testimonial is-rounded has-equal-height">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-rounded">
                <img :src="item.image" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p
                  class="is-size-6 has-text-grey has-margin-top-10 is-family-secondary is-italic"
                >" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."</p>

                <div class="titleunderline is-small is-marginless"></div>
                <br class="is-marginless is-paddingless">
                <strong class="title is-6 has-text-grey">{{ item.name }}</strong>
                <br>
                <span
                  class="subtitle is-7 has-text-grey-light"
                >{{ item.title }} , {{ item.company }}</span>
                <nav class="level is-mobile has-margin-top-10">
                  <div class="level-left">
                    <a
                      :href="link.url"
                      target="_blank"
                      class="links level-item"
                      aria-label="reply"
                      :key="link.label"
                      v-for="link in item.links"
                    >
                      <span class="icon is-small">
                        <fa :icon="[link.icon.category, link.icon.icon]" class="facebook fa-1x"/>&nbsp;
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.box {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 2px 20px 0 rgba(0, 0, 0, 0.06);
}
</style>

<script>
export default {
  props: ["data"]
};
</script>

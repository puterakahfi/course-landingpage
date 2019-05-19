<template>
  <section class id="benefits">
    <div class="titleunderline"></div>

    <h1 class="title is-3">{{ data.title }}</h1>

    <div class="columns is-multiline">
      <div class="column is-12" v-for="item in data.items" :key="item.id">
        <div class="box is-paddingless">
          <article class="media">
            <div v-if="item.image !=='' " class="media-left">
              <figure class="image is-48x48">
                <img :src="item.image" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <strong
                  class="title is-5 is-family-primary has-text-grey-dark "
                >{{ item.title }}</strong>

                <p
                  class="is-size-6 has-text-purple is-family-secondary has-margin-top-10"
                >{{ item.description }}</p>
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
}
</style>

<script>
export default {
  props: ["data"]
};
</script>

<template>
  <section class id="benefits">
    <div class="titleunderline"></div>

    <h1 class="title is-2">{{ data.title }}</h1>

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
                <strong class="title is-6 is-family-primary has-text-grey	has-padding-5	">
                  <fa :icon="['fas', 'check']" class="fa-1x"/>
                  &nbsp;
                  {{ item.title }}
                </strong>

                <p
                  class="is-size-6 has-text-purple is-family-secondary has-margin-top-10"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
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

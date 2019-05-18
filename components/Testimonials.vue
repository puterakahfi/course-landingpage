<template>
  <section class="container">
    <h1 class="title is-4 has-text-centered">what people says about this course</h1>

    <div class="columns is-multiline">
      <div class="column is-6" v-for="item in data" :key="item.id">
        <div class="box testimonial">
          <article class="media">
            <div class="media-left">
              <figure class="image is-128x128 is-rounded">
                <img src="https://img.icons8.com/clouds/384/administrator-male.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <strong class="title is-4">John doe</strong>
                <p
                  class="is-size-6 has-text-grey has-margin-top-10 is-italic"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
                <span class="title is-7">-- senior developer, bukalapang.com</span>
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

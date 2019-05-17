<template>
  <section class id="benefits">
      <div class="titleunderline is-small"></div>

      <h1 class="title is-6">what benefits if you take this course</h1>

      <div class="columns is-multiline">
        <div class="column is-12" v-for="item in data" :key="item.id">
          <div class="box">
            <article class="media">
            
              <div class="media-content">
                <div class="content">
                  <strong class="title is-5">{{ item.title }}</strong>
                  <br>

                  <p
                    class="is-size-7"
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
  props: ["data"],
  data() {
    return {
      data: []
    };
  }
};
</script>

<template>
  <section class id="benefits">
    <div class="titleunderline is-small"></div>

    <h1 class="title is-4">Meet your instructor</h1>

    <div class="columns is-multiline">
      <div class="column is-12" v-for="item in data" :key="item.id">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img
                src="https://img.icons8.com/bubbles/384/administrator-male.png"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              <a>@bulmaio</a>.
              <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>

              <nav class="level is-mobile">
                <div class="level-item has-text-left">
                  <div c>
                    <p class="title is-4">
                      <fa :icon="['fab', 'facebook']" class="fa-1x"/>
                    </p>
                  </div>
                </div>
                <div class="level-item has-text-left">
                  <div>
                    <fa :icon="['fab', 'github']" class="fa-1x"/>
                  </div>
                </div>
              </nav>
            </div>
          </div>
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

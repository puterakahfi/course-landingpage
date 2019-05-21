<template>
  <section id="head">
    <div class="columns align-items-center">
      <div class="column is-6">
        <figure class="image">
          <img :src="data.image" alt="Placeholder image">
        </figure>
      </div>
      <div class="column is-6">
        <section class="hero is-paddingless">
          <div class="hero-body is-paddingless">
            <div class="titleunderline"></div>
            <h2
              class="subtitle has-text-grey has-margin-bottom-20 is-5 is-paddingless is-family-secondary has-text-purple"
            >{{data.subtitle}}</h2>
            <h1 class="title is-1 is-family-primary">{{ data.title }}</h1>

            <p class="is-size-6 has-text-purple is-family-secondary has-text-weight-medium">
              <span v-html="data.description"></span>
              <br>
            </p>
            <br>
            <div class="cta">
              <a
                :href="link.url"
                target="_blank"
                :class="'button '+link.attr.class+' is-medium has-margin-5'"
                aria-label="reply"
                :key="link.label"
                v-for="link in data.links"
              >
                <span class="is-size-6">
                  <fa v-if="typeof link.icon !== 'undefined'" :icon="[link.icon.category, link.icon.icon]" class="fa-1x"/>
                  &nbsp; 
                  {{ link.label }}
                </span>
              </a>

          
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props: ["data"]
};
</script>


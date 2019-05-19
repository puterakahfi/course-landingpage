<template>
  <section id="head">
    <div class="columns align-items-center">
      <div class="column is-6">
        <figure class="image">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/operating_system_4lr6.svg"
            alt="Placeholder image"
          >
        </figure>
      </div>
      <div class="column is-6">
        <section class="hero is-paddingless">
          <div class="hero-body is-paddingless">
            <div class="titleunderline"></div>
            <h2
              class="subtitle has-text-grey	 has-margin-bottom-20 is-5 is-paddingless is-family-secondary  has-text-purple"
            >{{data.subtitle}}</h2>
            <h1 class="title is-1 is-family-primary">{{ data.title }}</h1>

            <p class="is-size-6 has-text-purple is-family-secondary has-text-weight-medium">
              <span v-html="data.description"></span>
              <br>
            </p>
            <br>
            <div class="cta">
              <a class="button is-primary is-medium" href="/docs/fintechOJK.xlsx" target="_blank">
                <span class="is-size-6">
                  <fa :icon="['fas', 'download']" class="fa-1x"/>&nbsp;CTA Button
                </span>
              </a>
              <a class="button is-success is-medium" href="/docs/fintechOJK.xlsx" target="_blank">
                <span class="is-size-6">
                  <fa :icon="['fas', 'pdf']" class="fa-1x"/>&nbsp;CTA Button again
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


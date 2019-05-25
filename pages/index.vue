<template>
  <div class="has-background-white has-padding-top-50">
    <section class="container">
      <Head :data="head"/>

      <hr>
    </section>
    <section class="has-margin-top-50 has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-7">
            <Benefits :data="benefits"/>
          </div>
          <div class="column is-5">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/deliveries_131a.svg"
            >
          </div>
        </div>
      </div>
    </section>

    <section class="has-padding-top-50 ">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <Instructors :data="instructors"/>
          </div>
          <div class="column is-6">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/teaching_f1cm.svg"
              alt
            >
          </div>
        </div>
      </div>
    </section>

    <section class=" has-padding-top-50 has-padding-bottom-50">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/timeline_9u4u.svg"
              alt
            >
          </div>
          <div class="column is-6-fullhd is-6-widescreen is-10-tablet">
            <h1 class="title is-4 has-text-left">{{modules.title}}</h1>
            <Modules :data="modules"/>
          </div>
        </div>
      </div>
    </section>

    <section class="has-padding-50 has-background-white">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="content">
              <div class="titleunderline is-marginless is-paddingless is-small"></div>
              <br>
              <div class="is-inline-flex">
                <img
                  class="image is-32x32 is-pulled-left"
                  src="https://img.icons8.com/nolan/384/price-tag-euro.png"
                  alt
                >
                <h1 class="title is-4 is-marginless">Price</h1>
              </div>

              <p
                class="has-text-purple"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>

              <br>
            </div>
          </div>
          <div class="column is-8">
            <Pricing/>
          </div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="container has-padding-bottom-50">
        <div class="columns">
          <div class="column">
            <Testimonials :data="limitTestimonial" class="has-padding-top-50"/>
          </div>
        </div>

        <nuxt-link to="/testimonials" class="title is-5">>> all testimonials</nuxt-link>
      </div>
    </section>

    <section class="has-padding-top-50 has-padding-bottom-50 has-background-light">
      <div class="columns is-centered">
        <div class="column is-3">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/subscriber_vabu.svg"
            alt
          >
        </div>
        <div class="column is-6 has-padding-left-50">
          <Newsletter class="container" :data="newsletter"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Benefits from "~/components/Benefits.vue";
import Pricing from "~/components/Pricing.vue";
import Newsletter from "~/components/Newsletter.vue";
import Modules from "~/components/Modules.vue";

import Instructors from "~/components/Instructors.vue";
import Head from "~/components/Head.vue";
import Testimonials from "~/components/Testimonials.vue";
import testimonials from "~/static/data/testimonials.json";
import benefits from "~/static/data/benefits.json";
import instructorsData from "~/static/data/instructors.json";
import modules from "~/static/data/modules.json";
import newsletter from "~/static/data/newsletter.json";


import head from "~/static/data/head.json";

export default {
  data() {
    return {
      testimonials: testimonials,
      benefits: benefits,
      instructors: instructorsData,
      head: head,
      modules: modules,
      newsletter:newsletter
    };
  },
  components: {
    Benefits,
    Instructors,
    Testimonials,
    Head,
    Pricing,
    Modules,
    Newsletter
  },
  computed: {
    limitTestimonial: function() {
      let testi = this.testimonials;
      testi.items = testi.items.slice(0, 4);
      return testi;
    }
  }
};
</script>


<style lang="scss" scoped>
.subtitle {
  margin-top: 23px;
  line-height: 175%;
  color: #9798a9;
}
.tags.has-addons .tag {
  font-size: 0.6em;
  margin: 2px;
}
.btn.btn-lg {
  padding: 0.55rem 1.5rem;
  font-size: 14px;
}

h1 {
  font-size: 3rem;
  font-weight: 800;
}

.btn-wa {
  background: #77cb6a;
}
.hero-mini {
  background-image: #ededed;
  padding-top: 40px;
  height: 500px;
  display: flex;
  align-items: center;
}

.box {
  &.testimonial {
    background: transparent;
  }
}
</style>

<template>
  <div class="has-background-white has-padding-top-50">
    <section class="container">
      <Head/>

      <hr>
    </section>
    <section class="has-margin-top-50 has-padding-bottom-50">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/deliveries_131a.svg"
            >
          </div>
          <div class="column is-7">
            <Benefits :data="benefits"/>
          </div>
        </div>
      </div>
    </section>

    <section class="has-padding-top-50 has-background-light">
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

    <section class=" has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <Testimonials :data="testimonials" class="has-margin-top-50"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Benefits from "~/components/Benefits.vue";
import Instructors from "~/components/Instructors.vue";
import Head from "~/components/Head.vue";
import Testimonials from "~/components/Testimonials.vue";
import testimonials from "~/static/data/testimonials.json";
import benefits from "~/static/data/benefits.json";
import instructorsData from "~/static/data/instructors.json";

export default {
  data() {
    return {
      testimonials: testimonials,
      benefits: benefits,
      instructors: instructorsData
    };
  },
  components: {
    Benefits,
    Instructors,
    Testimonials,
    Head
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

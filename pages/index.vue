<template>
  <div>
    <section class="container">
      <Head/>
    </section>
    <section class="">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <Benefits :data="benefits"/>
          </div>
          <div class="column is-7">
            <Instructors :data="instructors"/>
          </div>
        </div>
      </div>
    </section>


    <Testimonials :data="testimonials" class="has-margin-top-50"/>
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
.links a {
  color: grey;
  &:hover {
    color: black;
  }

  .fa-facebook {
    &:hover {
      color: #4267b2;
    }
  }

  .fa-youtube {
    &:hover {
      color: #cd381c;
    }
  }

  .fa-instagram {
    &:hover {
      color: #e35a39;
    }
  }

  .fa-twitter {
    &:hover {
      color: #1c9beb;
    }
  }
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

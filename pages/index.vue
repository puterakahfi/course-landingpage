<template>
  <div>
    <div class="container">
      <div class="columns align-items-center">
        <div class="column is-6">
          <section class="hero is-paddingless">
            <div class="hero-body is-paddingless">
              <div class="titleunderline"></div>

              <h1 class="title is-1">your awesome course title is here.</h1>
              <h1 class="subtitle is-5 is-paddingless">// Your awesome subtitle here</h1>

              <p class="subtitle is-size-6">
                <b>Your awesome description here</b>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                <br>
              </p>

              <div class="cta">
                <a class="button is-info is-medium" href="/docs/fintechOJK.xlsx" target="_blank">
                  <span class="is-size-6">
                    <fa :icon="['fas', 'download']" class="fa-1x"/>&nbsp;Download sample 
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div class="column is-6">
          <figure class="image">
            <img
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/insert_block_efyb.svg"
              alt="Placeholder image"
            >
          </figure>
        </div>
      </div>
    </div>
    <br>

    <section class="container">
      <div class="columns">
        <div class="column is-6">
          <Benefits :data="benefits"/>
        </div>
        <div class="column is-6">
          <Instructors :data="instructors"/>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Benefits from "~/components/Benefits.vue";
import Instructors from "~/components/Instructors.vue";
import data from "~/static/data/testimonials.json"; // Or wherever it is found

import benefits from "~/static/data/benefits.json";
import instructors from "~/static/data/instructors.json";


export default {
  data() {
    return {
      data: data,
      benefits: benefits,
      instructors: instructors
    };
  },
  components: {
    Benefits,
    Instructors
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

.box
{
  &.testimonial
  {
    background: transparent;
  }
}
</style>

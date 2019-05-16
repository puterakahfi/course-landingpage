<template>
  <div class="container">
    <div class="columns align-items-center">
      <div class="column is-6">
        <section class="hero is-marginless">
          <div class="hero-body">
            <div class="titleunderline"></div>

            <h1 class="title is-2">Your awesome course title here</h1>
            <h1 class="subtitle is-6 is-marginless">Your awesome subtitle here</h1>

            <br>
            <p class="subtitle is-6">
              <b>Your awesome description here</b>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              <br>
            </p>

            <br>
            <div class="cta">
              <a
                class="button is-success is-normal shadowless"
                href="/docs/fintechOJK.xlsx"
                target="_blank"
              >
                <fa :icon="['fas', 'download']" class="fa-1x"/>&nbsp;Download sample pdf
              </a>
            </div>
          </div>
        </section>
      </div>
      <div class="column is-5">
        <figure class="image">
          <img
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/code_review_l1q9.svg"
            alt="Placeholder image"
          >
        </figure>
      </div>
    </div>
    <div class="columns is-multiline mt-5 pt-5">
      <div class="column is-12">

       <h5  class="title is-5 has-text-centered	">Testimonial </h5>
      </div>
      <div class="column is-4" v-for="item in data" :key="item.id">
        <div class="card has-equal-height">
          <div class="card-content">
            <div class="media">
       
              <div class="media-content">
                <div class="titleunderline is-marginless"></div>

                <nuxt-link :to="'/platform/'+item.id">
                  <p class="title is-4">John Doe</p>
                </nuxt-link>

                <div class="control">
                  <b-taglist attached class="rating">
                    <b-tag type="is-dark">
                      <fa :icon="['fas', 'star']" class="has-text-warning"/>
                      <fa :icon="['fas', 'star']" class="has-text-warning"/>

                      <fa :icon="['fas', 'star']" class="has-text-warning"/>&nbsp;
                      <b>3.5</b> / 5
                    </b-tag>
                  </b-taglist>
                </div>
              </div>
            </div>
            <br>
            <div class="content">
              <p class="subtitle is-size-6">This book is very good</p>

              <section>
                <b-tag>We Developer at google </b-tag>
              </section>

              <br>

              <p class="subtitle is-5 links">
                <span v-if="typeof item.links !== 'undefined'">
                  <span :key="link.url" v-for="link in item.links">
                    <a :href="link.url" target="_blank">
                      <fa :icon="[link.icon.category, link.icon.icon]" class="fa-1x"/>&nbsp;
                    </a>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import data from "~/static/data/platforms.json"; // Or wherever it is found

export default {
  data() {
    return {
      data: data
    };
  },
  components: {
    Logo
  }
};
</script>


<style lang="scss" scoped>
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
</style>

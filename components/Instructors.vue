<template>
  <section class id="instructors">
    <div class="is-inline-flex has-margin-bottom-15">
      <img class="image is-32x32" src="https://img.icons8.com/nolan/384/training.png">

      <h1 class="title is-4 ">{{ data.label }}</h1>
    </div>

    <div class="columns is-multiline">
      <div class="column" v-for="instructor in data.items" :key="instructor.id">
        <div class="card has-margin-bottom-10">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img :src="instructor.image" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <div class="titleunderline is-small"></div>

                <p class="title is-3 has-margin-bottom-10">{{ instructor.name }}</p>
                <div class="subtitle is-6 has-margin-top-5">
                  <nav class="level is-mobile has-margin-left-10">
                    <div class="level-left">
                      <a
                        :href="link.url"
                        target="_blank"
                        class="links level-item"
                        aria-label="reply"
                        :key="link.label"
                        v-for="link in instructor.links"
                      >
                        <span class="icon is-small">
                          <fa :icon="[link.icon.category, link.icon.icon]" class="facebook fa-2x"/>&nbsp;
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <div class="content">
              <span class="" v-html="instructor.description"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>


.level a {
  color: grey;
  &:hover {
    color: black;
  }

  .facebook {
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

.card {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 2px 20px 0 rgba(0, 0, 0, 0.06);
  &:hover {
    // box-shadow: none;
    transform: none;
  }
}
</style>


<script>
export default {
  props: ["data"]
};
</script>

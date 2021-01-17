<template>
  <div :class="$style['container']">
    <header :class="$style['header']">
      <nav :class="$style['header-nav']">
        <h1 :class="$style['header-title']">
          Logo
        </h1>
        <ul :class="$style['header-list']">
          <li :class="$style['header-item']">
            nav-item-A
          </li>
          <li :class="$style['header-item']">
            nav-item-B
          </li>
          <li :class="$style['header-item']">
            nav-item-C
          </li>
        </ul>
      </nav>
      <div :class="$style['header-auth']">
        <div :class="$style['header-btn']">
          signIn
        </div>
        <div :class="[$style['header-btn'], $style['header-btn-signup']]">
          signUp
        </div>
      </div>
    </header>
    <div :class="$style['gallery']">
      <ul :class="$style['gallery-list']">
        <li
          v-for="item in 28"
          :key="`gallery[${item}]`"
          :class="$style['gallery-item']"
        >
          <figure :class="$style['gallery-content']">
            <div :class="$style['gallery-pic']">
              <img
                :src="require('@/assets/img/carousel/media1.jpg')"
                :class="$style['gallery-img']"
              >
            </div>
            <figcaption :class="$style['gallery-caption']">
              <div :class="$style['gallery-name']">
                <h3 :class="$style['gallery-title']">
                  Title
                </h3>
                <h4 :class="$style['gallery-author']">
                  Author
                </h4>
              </div>
              <div :class="$style['gallery-interactive']">
                <div :class="$style['gallery-icon']">
                  icon
                </div>
                <div :class="$style['gallery-details']">
                  123
                </div>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" module>
.container {
  width: 100%;
}

.header {
  @include flex-row;

  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 25px;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;

  &-nav {
    @include flex-row;
  }

  &-title {
    margin-right: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  &-list {
    @include flex-row;

    @include tablet {
      display: none;
    }
  }

  &-item {
    margin: 10px;
    padding: 10px 15px;
    cursor: pointer;
  }

  &-auth {
    @include flex-row;
  }

  &-btn {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 15px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    cursor: pointer;

    @include mobile {
      margin: 5px;
    }
  }

  &-btn-signup {
    margin: 0;
    border-color: #0057ff;
    color: #fff;
    background: #0057ff;
  }
}

.gallery {
  margin: 115px 25px 25px;

  &-list {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @include laptop {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &-pic {
    overflow: hidden;
    cursor: pointer;
  }

  &-img {
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  &-caption {
    @include flex-row;
  }

  &-title {
    font-size: 16px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &-author {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &-interactive {
    @include flex-row;

    font-size: 14px;
  }

  &-details {
    margin-left: 15px;
  }
}
</style>

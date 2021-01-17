<template>
  <div
    :class="$style['container']"
    :style="{ height: `${state.carouselParams.height}px` }"
  >
    <figure :class="$style['figure']">
      <img
        v-for="(item, idx) in state.mediaArr"
        :key="`mediaArr[${idx}]`"
        :src="require(`@/${item.imgSrc}`)"
        :class="$style['figure-img']"
        alt=""
      >
    </figure>
    <div :class="$style['footer']">
      <div :class="$style['pagination']">
        <ul
          v-if="state.mediaArr"
          :class="$style['pagination-list']"
        >
          <li
            v-for="item in state.mediaArr.length"
            :key="`pageItem[${item}]`"
            :class="[$style['pagination-item']]"
          />
        </ul>
      </div>
      <div :class="$style['progress']" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      mediaArr: [
        {
          imgSrc: 'assets/img/carousel/media1.jpg',
        },
        {
          imgSrc: 'assets/img/carousel/media2.jpg',
        },
        {
          imgSrc: 'assets/img/carousel/media3.jpg',
        },
        {
          imgSrc: 'assets/img/carousel/media4.jpg',
        },
      ],
      carouselParams: {
        height: 450,
      },
    });
    return {
      state,
    };
  },
};
</script>

<style lang="scss" module>
.container {
  position: relative;
  width: 100%;
}

.figure {
  @include flex-row;

  width: 100%;
  height: 100%;
  overflow: hidden;

  &-img {
    object-fit: cover;
  }
}

.footer {
  @include flex-center;

  position: absolute;
  bottom: 0;
  width: 100%;
}

.pagination {
  &-list {
    @include flex-row;
  }

  &-item {
    width: 15px;
    height: 15px;
    margin: 0 10px;
    border: 1px solid #fff;
    border-radius: 100%;
    background: transparent;
    cursor: pointer;
  }

  &-item-active {
    background: #fff;
  }
}
</style>

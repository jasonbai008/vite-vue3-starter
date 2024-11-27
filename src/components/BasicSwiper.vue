<template>
  <div class="basicSwiper-wrap">
    <!-- 上一页 -->
    <div class="swiper-button-prev-custom">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="10" height="17.5" viewBox="0 0 10 17.5">
        <g transform="matrix(0,-1,1,0,-17.5,17.5)">
          <path
            d="M7.86611,17.866116C8.35427,17.377961,9.14573,17.377961,9.63389,17.866116C9.63389,17.866116,17.1339,25.36611,17.1339,25.36611C17.622,25.85427,17.622,26.64573,17.1339,27.13389C16.6458,27.622,15.8542,27.622,15.3661,27.13389C15.3661,27.13389,8.75,20.51776,8.75,20.51776C8.75,20.51776,2.13389,27.13389,2.13389,27.13389C1.64573,27.622,0.854271,27.622,0.366116,27.13389C-0.122039,26.64573,-0.122039,25.85427,0.366116,25.36611C0.366116,25.36611,7.86611,17.866116,7.86611,17.866116C7.86611,17.866116,7.86611,17.866116,7.86611,17.866116Z"
            fill-rule="evenodd"
            fill="#1A1A1A"
            fill-opacity="1"
          />
        </g>
      </svg>
    </div>
    <!-- 主体 -->
    <swiper class="swiper-container" v-bind="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange" @reachBeginning="onBeginning" @reachEnd="onEnd">
      <swiper-slide>
        <div class="demo">Slide1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="demo">Slide2</div>
      </swiper-slide>
    </swiper>
    <!-- 左右切换箭头的类名必须不能相同，否则一个页面上多个轮播图会联动切换 -->
    <!-- 若想左右切换按钮在轮播图外部，写在swiper组件外 -->
    <!-- 下一页 -->
    <div class="swiper-button-next-custom">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="10" height="17.5" viewBox="0 0 10 17.5">
        <g transform="matrix(0,-1,-1,0,27.5,27.5)">
          <path
            d="M17.86611,17.866116C18.35427,17.377961,19.14573,17.377961,19.63389,17.866116C19.63389,17.866116,27.1339,25.36611,27.1339,25.36611C27.622,25.85427,27.622,26.64573,27.1339,27.13389C26.6458,27.622,25.8542,27.622,25.3661,27.13389C25.3661,27.13389,18.75,20.51776,18.75,20.51776C18.75,20.51776,12.133890000000001,27.13389,12.133890000000001,27.13389C11.64573,27.622,10.854271,27.622,10.366116,27.13389C9.877961,26.64573,9.877961,25.85427,10.366116,25.36611C10.366116,25.36611,17.86611,17.866116,17.86611,17.866116C17.86611,17.866116,17.86611,17.866116,17.86611,17.866116Z"
            fill-rule="evenodd"
            fill="#1A1A1A"
            fill-opacity="1"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectCoverflow, Mousewheel } from 'swiper/modules'

// Here is the list of additional modules imports from swiper/modules:

// Mousewheel - Mousewheel Control module
// Navigation - Navigation module
// Pagination - Pagination module
// Scrollbar - Scrollbar module
// FreeMode - Free Mode module
// Autoplay - Autoplay module
// EffectFade - Fade Effect module
// EffectCube - Cube Effect module
// EffectFlip - Flip Effect module
// EffectCoverflow - Coverflow Effect module
// EffectCards - Cards Effect module
// EffectCreative - Creative Effect module
// Thumbs - Thumbs module

// swiper/css - only core Swiper styles
// swiper/css/bundle - all Swiper styles including all modules styles (like Navigation, Pagination, etc.)

// 全量引入
import 'swiper/css/bundle'

export default {
  name: 'basicSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {},
  data() {
    return {
      mySwiper: null,
      swiperOptions: {
        // loop: true,
        // mousewheel: true,
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Navigation, Pagination, Autoplay, EffectCoverflow, Mousewheel],
        pagination: {
          clickable: true
        },
        navigation: {
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom'
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: true
        }
        // centeredSlides: true,
        // effect: coverflow,
        // coverflowEffect: {
        //   rotate: 30,
        //   stretch: 50,
        //   depth: 200,
        //   modifier: 1,
        //   slideShadows: true
        // }
      }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSwiper(swiper) {
      this.mySwiper = swiper
    },
    onSlideChange() {
      console.log('slide change')
    },
    onBeginning() {
      console.log('beginning')
    },
    onEnd() {
      console.log('end')
    },
    goPrev() {
      this.mySwiper.slidePrev()
    },
    goNext() {
      this.mySwiper.slideNext()
    },
    goTo(n) {
      this.mySwiper.slideTo(n)
    },
    prevSome(n) {
      this.mySwiper.slideTo(this.mySwiper.activeIndex - n)
    },
    nextSome(n) {
      this.mySwiper.slideTo(this.mySwiper.activeIndex + n)
    }
  },
  watch: {}
}
</script>

<style scoped lang="scss">
.basicSwiper-wrap {
  display: flex;
  align-items: center;
}

// 这么设置可以使底部的圆点在轮播图外面
// .swiper {
//   padding-bottom: 100px;
// }

.swiper-slide img {
  width: 100%;
}

// 自定义分页圆点样式
:deep(.swiper) {
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 10%;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #fff;
    opacity: 1;
    margin: 0 8px;
  }
  .swiper-pagination-bullet-active {
    background: #305ddf;
  }
}

// 自定义左右切换按钮位置
.swiper-button-disabled {
  opacity: 0.35;
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
  margin: 40px;
  cursor: pointer;
}

.demo {
  font-size: 20px;
  height: 400px;
  color: #fff;
  background: #34495e;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

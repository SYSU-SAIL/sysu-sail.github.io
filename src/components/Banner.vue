<template>
  <div class="banner_container_custom" ref="carouselDiv">
    <el-carousel  width="100%" height="28dvw" :autoplay="true">
      <el-carousel-item  v-for="(item, index) in Bannerimages" :key="index">
        <div id="img_text" style="display: flex; justify-content: center; align-items: center; position: relative; height: 100%;">
          <img :src="item.url" class="carousel-img" />
          <div class="text_box">
            <h3>{{ item.text }}</h3>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { Bannerimages } from "~/assets/data/home/Carouseldata";

const carouselDiv = ref<HTMLDivElement | null>(null);
const carouselHeight = ref<number>(450);

// 计算高度的函数
const calculateHeight = () => {
  if (carouselDiv.value) {
    const width = carouselDiv.value.offsetWidth;
    return width * 0.45;
  }
  return 450; // 默认高度
};

// 使用计算属性确保高度始终为数字类型
const computedHeight = computed(() => calculateHeight());

// 监听计算属性的变化并更新 carouselHeight
watch(computedHeight, (newHeight) => {
  carouselHeight.value = newHeight;
}, { immediate: true });

// 窗口大小变化时更新高度
const ResizeDivImg_text = () => {
  carouselHeight.value = computedHeight.value;
};

onMounted(() => {
  ResizeDivImg_text();
  window.addEventListener('resize', ResizeDivImg_text);
  ResizeDivImg_text();
});

onUnmounted(() => {
  window.removeEventListener('resize', ResizeDivImg_text);
});
</script>

<style scoped>
.banner_container_custom {
  position: relative;
  min-width: var(--main-min-valid-width);
  max-width: var(--main-max-width);
  width: var(--main-valid-width); /* --main-valid-width 定义在 styles/index.scss中  :root */
  margin-left: var(--main-side-left-width); /* --main-side-left-width 定义在 styles/index.scss中  :root */
}

.text_box {
  background: #4f4f4f;
  opacity: 0.8;
  width: 100%;
  height: 180px;
  position: absolute;
}

.text_box h3 {
  color: #ffffff;
  font-size: 40px;
  opacity: 1;
  line-height: 125%;
  font-weight: 900;
  font-family:Georgia, 'Times New Roman', Times, serif;
  display: flow;
}

.carousel-img {
  height: 100%;       /* 高度撑满父容器 */
  width: auto;        /* 宽度按比例自适应 */
  object-fit: contain;/* 保证完整显示，不裁剪 */
  display: block;
}
</style>

<!--<template>-->
<!--  <div class="press-center">-->
<!--    <section>-->
<!--      <el-carousel height="450px" ref="carousel" @change="carousel">-->
<!--        <el-carousel-item v-for="item in carouseData" :key="item.id">-->
<!--          <h3 class="small">-->
<!--            <img :src="item.url" alt="" />-->
<!--          </h3>-->
<!--        </el-carousel-item>-->
<!--      </el-carousel>-->
<!--    </section>-->
<!--    <div>-->
<!--      <section-->
<!--          v-for="(item, index) in selectData"-->
<!--          :key="index"-->
<!--          @click="controlSwiper(item.id, index)"-->
<!--      >-->
<!--        <p :class="{ active: active == item.id }">{{ item.title }}</p>-->
<!--      </section>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default{-->
<!--  data() {-->
<!--    return {-->
<!--      bannerheight: "",-->
<!--      active: 0,-->
<!--      selectData: [-->
<!--        {-->
<!--          url: "src/assets/home_carousel/1.jpg",-->
<!--          title: "我是标题我是标题我是标题我是标题111111111”",-->
<!--          font: "已阅读36次",-->
<!--          data: "时间：2021-04-19",-->
<!--          id: 0,-->
<!--        },-->
<!--        {-->
<!--          url: "src/assets/home_carousel/2.jpg",-->
<!--          title: "我是标题我是标题我是标题我是标题222222222",-->
<!--          font: "已阅读36次",-->
<!--          data: "时间：2021-04-19",-->
<!--          id: 1,-->
<!--        },-->
<!--      ],-->
<!--      carouseData: [-->
<!--        { url: "src/assets/home_carousel/1.jpg" },-->
<!--        { url: "src/assets/home_carousel/2.jpg" },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    controlSwiper(id, index) {-->
<!--      this.active = id;-->
<!--      this.$refs.carousel.setActiveItem(index);    // 注：这一句是方法成功的关键，别玩了在轮播图上加上ref=“carousel”-->
<!--    },-->
<!--    carousel(e) {-->
<!--      this.active = e;-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.press-center {-->
<!--  position: relative;-->
<!--  height: 580px;-->
<!--  margin-bottom: 120px;-->
<!--  h1 {-->
<!--    text-align: center;-->
<!--    margin: 80px 0;-->
<!--    color: #333;-->
<!--  }-->
<!--  .active {-->
<!--    border-bottom: 2px solid #39ae9c;-->
<!--  }-->
<!--  > section {-->
<!--    width: 45%;-->
<!--    height: 450px;-->
<!--    img {-->
<!--      width: 100%;-->
<!--      height: 100%;-->
<!--    }-->
<!--  }-->
<!--  > div {-->
<!--    height: 450px;-->
<!--    position: absolute;-->
<!--    right: 0;-->
<!--    top: 20%;-->
<!--    width: 50%;-->
<!--    section {-->
<!--      position: relative;-->
<!--      height: 25%;-->
<!--      p {-->
<!--        position: absolute;-->
<!--        font-size: 24px;-->
<!--        top: 8%;-->
<!--        left: 6%;-->
<!--      }-->
<!--      p:hover{-->
<!--        cursor: pointer;-->
<!--      }-->
<!--      span {-->
<!--        padding: 16px 3px;-->
<!--        background: #39ae9c;-->
<!--        position: absolute;-->
<!--        top: 26%;-->
<!--      }-->
<!--      font {-->
<!--        position: absolute;-->
<!--        left: 6%;-->
<!--        bottom: 16%;-->
<!--        color: #666;-->
<!--      }-->
<!--      i {-->
<!--        color: #666;-->
<!--        position: absolute;-->
<!--        right: 2%;-->
<!--        bottom: 16%;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
<script setup lang="ts">

import {ServertableData, HardwawretableData, SoftwawretableData, DatasettableData} from "~/assets/data/Resource/ResourceInfo";
import ResourceCategory from "~/components/ResourceCategory.vue";
import {computed, defineProps, ref, watch} from 'vue';

// 构建基础路径
const basePath = ref(import.meta.env.VITE_BASE_PATH);

const img_a100 = `/${basePath.value}/resources/hw_a100_resize.jpg`
const img_v100 = `/${basePath.value}/resources/hw_v100_resize.jpg`
const img_4090 = `/${basePath.value}/resources/hw_4090_resize.png`
const img_3090 = `/${basePath.value}/resources/hw_3090_resize.png`

const img_dji = `/${basePath.value}/resources/hw_DJI_M300_RTK.jpg`
const img_faro = `/${basePath.value}/resources/hw_faro.jpg`
const img_gl8 = `/${basePath.value}/resources/hw_lidarcar.jpg`
const img_riegl = `/${basePath.value}/resources/hw_RIEGL.png`

const img_robot1 = `/${basePath.value}/resources/hw_robot.jpg`
const img_robot2 = `/${basePath.value}/resources/hw_robot2.jpg`
const img_robot3 = `/${basePath.value}/resources/hw_robot3.jpg`
const img_robot4 = `/${basePath.value}/resources/hw_robot4.jpg`

const catRowDiv = ref<HTMLDivElement | null>(null);
const CardHeight = ref<number>(100);
const CardHeight2 = ref<number>(100);

// 计算高度的函数
const calculateHeight = () => {
  if (catRowDiv.value) {
    const width = catRowDiv.value.offsetWidth;
    return width * 0.1;
  }
  return CardHeight.value;
};

// 使用计算属性确保高度始终为数字类型
const computedHeight = computed(() => calculateHeight());

// 使用 watch 替代 onMounted
watch(computedHeight, (newHeight) => {
  CardHeight.value = newHeight;
}, { immediate: true }); // immediate 选项确保在挂载时立即执行

// 创建一个新的计算属性，确保CardHeight2始终是CardHeight的1.5倍
const computedDoubleHeight = computed(() => 1.5 * CardHeight.value);

// 将CardHeight2的值绑定到computedDoubleHeight
watch(computedDoubleHeight, (newDoubleHeight) => {
  CardHeight2.value = newDoubleHeight;
});

const severCategory = { title: '计算资源', data: ServertableData };
const hardwareCategory = { title: '硬件资源', data: HardwawretableData };
const softwareCategory = { title: '软件资源', data: SoftwawretableData };
const datasetCategory = { title: '数据资源', data: DatasettableData };
</script>

<template>
  <el-aside position="fixed" style="height: 100%; margin-top: 0px; ">
    <el-anchor :offset="70" style="height: 100%; text-align: left; background-color: #ffffff;">
      <el-anchor-link href="#server"><el-card class="shadow"><span class="link-text">计算资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#hardware"><el-card class="shadow"><span class="link-text">硬件资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#software"><el-card class="shadow"><span class="link-text">软件资源</span></el-card></el-anchor-link>
      <el-anchor-link href="#dataset"><el-card class="shadow"><span class="link-text">数据资源</span></el-card></el-anchor-link>
    </el-anchor>
  </el-aside>

  <el-main class="main">
    <el-row style="margin-top: 20px" :gutter="10">
      <el-card class="info_card" shadow="always">
        <div id="server" ref="catRowDiv">
          <div class="card-header">
            <div class="title_bar" />
            <span class="title_text">计算资源</span>
          </div>
          <div class="card-body">实验室拥有80G显存计算显卡、英伟达V100、TITAN RTX、4090、3090、2080Ti等系列计算显卡及服务器，可为AI模型训练提供有效算力支撑。</div>
          <el-row >
<!--            <el-col :span="6"  style="margin-bottom: 20px"><el-card class="shadow"><img :src="img_a100" width="100%" :height="CardHeight" style=" object-fit: fill; " /></el-card></el-col>-->
<!--            <el-col :span="6"  style="margin-bottom: 20px"><el-card class="shadow"><img :src="img_v100" width="100%" :height="CardHeight" style=" object-fit: fill; " /></el-card></el-col>-->
<!--            <el-col :span="6"  style="margin-bottom: 20px"><el-card class="shadow"><img :src="img_4090" width="100%" :height="CardHeight" style=" object-fit: fill; " /></el-card></el-col>-->
<!--            <el-col :span="6"  style="margin-bottom: 20px"><el-card class="shadow"><img :src="img_3090" width="100%" :height="CardHeight" style=" object-fit: fill; " /></el-card></el-col>-->
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_a100" width="100%" :height="CardHeight" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_v100" width="100%" :height="CardHeight" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_4090" width="100%" :height="CardHeight" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_3090" width="100%" :height="CardHeight" style=" object-fit: fill; " /></div></el-col>
          </el-row>
        </div>
        <div id="hardware">
          <div class="card-header">
            <div class="title_bar" />
            <span class="title_text">硬件资源</span>
          </div>
          <div class="card-body">实验室拥有RIEGL、FARO、速腾聚创、Ouster、大疆等厂家的全谱系车载与机载激光扫描设备，购置了配备高精度激光扫描系统、GPS/惯导系统、全景/单反/红外相机的车载多模态移动扫描平台，可为多模态数据获取提供有力支撑。</div>
          <el-row >
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_dji" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_gl8" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_faro" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_riegl" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
          </el-row>
          <div class="card-body">实验室拥有履带式机器人、轮式机器人、四足机器人、无人机、机械臂、灵巧手、夹爪等执行设备，可为机器人开发、测试与调试提供平台支撑。</div>
          <el-row >
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_robot1" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_robot2" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_robot3" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
            <el-col :span="6"  style="margin-bottom: 20px"><div class="shadow"><img :src="img_robot4" width="100%" :height="CardHeight2" style=" object-fit: fill; " /></div></el-col>
          </el-row>



        </div>

<!--        <div id="server"><ResourceCategory :category="severCategory" /></div>-->
<!--        <div id="hardware"><ResourceCategory :category="hardwareCategory" /></div>-->
        <div id="software"><ResourceCategory :category="softwareCategory" /></div>
        <div id="dataset"><ResourceCategory :category="datasetCategory" /></div>
      </el-card>
    </el-row>
  </el-main>
</template>

<style scoped>
.main {
  min-width: var(--main-min-valid-width);
  max-width: var(--main-max-width);
  width: var(--main-valid-width);
  margin-left: var(--main-side-left-width);
  margin-top: 0px;
}

.info_card {
  width: 100%;
  border-radius: 8px;
  border: 2px solid var(--ep-color-primary);
}

.link-text {
  font-size: 18px;
  text-align: left;
  //color: #ffffff;
  color: var(--ep-color-primary);
}

.shadow {
  width: 95%;
  box-shadow: 0.5rem 0.5rem 1rem rgba(189, 35, 46, 0.3);
}

.card-header {
  display: flex;
  //justify-content: space-between;
}

.title_bar {
  height: 38px;
  width: 8px;
  background-color: var(--ep-color-primary);
}

.title_text {
  font-size: 28px;
  margin-left: 8px;
}

.card-body {
  text-align: left;
  font-size: 20px;
  line-height: 150%;
}
</style>
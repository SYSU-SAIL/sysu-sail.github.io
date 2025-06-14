// export const Bannerimages = [
//     { url: "/src/assets/home_carousel/1.jpg", text: "中山大学深圳校区激光SLAM建图结果" },
//     { url: "/src/assets/home_carousel/2.jpg", text: "左：高灵活度桌面抓取机器人\n右：野外智能抓取机器人" },
//     { url: "/src/assets/home_carousel/3.jpg", text: "大场景高精度建图的移动激光扫描车" },
//     // 可以根据需要添加更多的图片数据
// ];

import { reactive } from 'vue';
import { computed } from 'vue';

// 定义一个接口来描述轮播图对象的结构
interface CarouselItem {
    url: string;
    text: string;
}

const base = import.meta.env.VITE_BASE_PATH;
export const Bannerimages = computed<CarouselItem[]>(() => [
    { url: `/${base}/carousel/1_resize.jpg`, text: "中山大学深圳校区激光SLAM建图结果" },
    { url: `/${base}/carousel/2_resize.jpg`, text: "左：高灵活度桌面抓取机器人\n右：野外智能抓取机器人" },
    { url: `/${base}/carousel/3_resize.jpg`, text: "大场景高精度建图的移动激光扫描车" },
    { url: `/${base}/carousel/4_resize.jpg`, text: "中山大学承办中国空间智能大会（ChinaSI）\n大会将于7.18-7.20在深圳召开，郭裕兰教授担任大会主席" },
    // 可以根据需要添加更多的图片数据
]);

// 使用 reactive 创建一个响应式的 CarouselItem 数组
// export const Bannerimages = reactive<CarouselItem[]>([
//     { url: "/${base}/carousel/1.jpg", text: "中山大学深圳校区激光SLAM建图结果" },
//     { url: "/${base}/carousel/2.jpg", text: "左：高灵活度桌面抓取机器人\n右：野外智能抓取机器人" },
//     { url: "/${base}/carousel/3.jpg", text: "大场景高精度建图的移动激光扫描车" },
//     // 可以根据需要添加更多的图片数据
// ]);
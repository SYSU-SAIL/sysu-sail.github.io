import{l as G,r as f,d as R,q as g,v as $,x as t,C as e,z as s,J as b,M as d,X as k,Y as j,W as B,w as C,t as w,K as x,L as I,a0 as D,a1 as E}from"./index-BSzegCzT.js";import{E as V,a as A}from"./anchor-link-B_o-N_Mj.js";import{E as S,_ as v}from"./_plugin-vue_export-helper-CVk_C7GX.js";import{E as M}from"./button-D0GAG2Vs.js";import"./raf-DQINWBJ-.js";const H=[{name:"A100 2卡服务器",person:"杨荣坤",img:"",url:"",num:"1台",intro:"2卡A100服务器，单卡80G显存"},{name:"V100 8卡服务器",person:"姜润青",img:"",url:"",num:"1台",intro:"8卡V100服务器，单卡32G显存"},{name:"3090 8卡服务器",person:"高平海",img:"",url:"",num:"1台",intro:"8卡3090服务器，单卡24G显存"},{name:"3090 8卡服务器",person:"宋卓",img:"",url:"",num:"1台",intro:"8卡3090服务器，单卡24G显存"},{name:"RTXTitan 4卡服务器",person:"李坤洪",img:"",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存"},{name:"RTXTitan 4卡服务器",person:"王宇坤",img:"",url:"",num:"1台",intro:"4卡titan服务器，单卡24G显存"},{name:"2080Ti 8卡服务器",person:"陈铭林",img:"",url:"",num:"1台",intro:"8卡2080Ti服务器，单卡12G显存"},{name:"2080Ti 8卡服务器",person:"张勇健",img:"",url:"",num:"1台",intro:"8卡2080Ti服务器，单卡12G显存"},{name:"GPU工作站",person:"研究生",img:"",url:"",num:"45台",intro:"单卡或双卡4090/3090/3080工作站，用于代码调试于本地验证"}],K=[{name:"大疆M300RTK无人机",person:"管玮珺",img:"/./resources/hw_DJI_M300_RTK.jpg",url:"https://www.dji.com/cn/support/product/matrice-300",num:"1台",intro:"可搭配禅思L1进行图像和点云获取，或者搭配法罗进行高精度点云获取"},{name:"别克GL8自动驾驶数据采集平台",person:"管玮珺",img:"/./resources/hw_GL8.jpg",url:"",num:"1台",intro:"配合数据采集平台，可以获取自动驾驶场景的图像、热成像、点云数据"}],L=[{name:"ContextCapture",person:"张勇健",img:"/./resources/sw_ContextCapture.jpg",url:"https://bentleybsy.wpengine.com/software/itwin-capture-modeler/",num:"1套",intro:"三维重建软件，支持导入图像序列进行稠密三维重建，可以加入GPS信息，新版本软件名为iTwin Capture"}],N=[{name:"Aachen-Day-Night",person:"李坤洪",img:"/./resources/dataset_Aachen_day_night.png",url:"https://arxiv.org/pdf/2005.05179",num:"12.5GB",intro:"室外真实场景匹配和定位数据集，提供RGB图像、相机内外参、colmap重建点云"},{name:"Appolo-stereo",person:"李坤洪",img:"/./resources/dataset_Appolo.jpg",url:"https://apolloscape.auto/stereo.html",num:"29GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB图像、相机内参、前背景mask"},{name:"Argoverse-stereo",person:"李坤洪",img:"/./resources/dataset_argoverse.jpg",url:"https://www.argoverse.org/av1.html",num:"15GB(压缩包)",intro:"自动驾驶场景双目立体匹配数据集，提供RGB图像、相机内参"},{name:"Blended-MVS",person:"李坤洪",img:"/./resources/dataset_blended_mvs.jpg",url:"https://github.com/YoYo000/BlendedMVS",num:"230GB",intro:"渲染的真实场景三维重建数据集，提供RGB图像、深度图和相机内外参"},{name:"CRE-stereo",person:"李坤洪",img:"/./resources/dataset_cre_stereo.jpg",url:"https://github.com/megvii-research/CREStereo",num:"383GB",intro:"仿真双目立体匹配数据集，提供RGB格式的双目图像对、立体匹配真值，不带相机参数"},{name:"ETH3D-stereo",person:"李坤洪",img:"/./resources/dataset_eth3d.jpg",url:"https://www.eth3d.net/",num:"106MB",intro:"室内外真实场景双目立体匹配数据集，提供RGB双目图像对、半稠密立体匹配真值"},{name:"FallingThings-stereo",person:"李坤洪",img:"/./resources/dataset_falling_things.jpg",url:"https://research.nvidia.com/publication/2018-06_falling-things-synthetic-dataset-3d-object-detection-and-pose-estimation",num:"87GB",intro:"渲染的室内外场景数据集，仅下载了对应的RGB与深度图"},{name:"HR_VS-stereo",person:"李坤洪",img:"/./resources/dataset_HR_VS.jpg",url:"https://openaccess.thecvf.com/content_CVPR_2019/html/Yang_Hierarchical_Deep_Stereo_Matching_on_High-Resolution_Images_CVPR_2019_paper.html",num:"38GB",intro:"渲染的自动驾驶场景数据集"},{name:"Hypersim",person:"李坤洪",img:"/./resources/dataset_hypersim.jpg",url:"https://github.com/apple/ml-hypersim",num:"35GB",intro:"渲染的室内场景数据集，提供了包括深度、法向量等几何数据、相机参数，仅下载了RGB图像、相机参数和深度图"},{name:"InLoc",person:"李坤洪",img:"/./resources/dataset_InLoc.jpg",url:"https://github.com/HajimeTaira/InLoc_dataset",num:"449GB(压缩包)",intro:"室内真实场景数据集，提供了点云、高分辨率RGB图像和相机位姿"},{name:"Instereo2K",person:"李坤洪",img:"/./resources/dataset_Instereo2K.jpg",url:"https://github.com/YuhuaXu/StereoDataset",num:"17GB",intro:"室内真实场景立体匹配数据集，提供RGB和视差值，不带相机参数"},{name:"KITTI2012-stereo",person:"李坤洪",img:"/./resources/dataset_kitti_12.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"},{name:"KITTI2015-stereo",person:"李坤洪",img:"/./resources/dataset_kitti_15.jpg",url:"https://www.cvlibs.net/datasets/kitti/eval_scene_flow.php?benchmark=stereo",num:"1.7GB",intro:"自动驾驶场景双目立体匹配数据集，提供RGB和灰度格式的双目图像对、相机标定参数、点云转化得到的立体匹配真值和光流真值"},{name:"MegaDepth",person:"李坤洪",img:"/./resources/dataset_megadepth.png",url:"https://www.cs.cornell.edu/projects/megadepth/",num:"915GB",intro:"真实场景数据集，提供了RGB图像、colmap重建的点云、深度图、相机内外参"},{name:"Middlebury-stereo",person:"李坤洪",img:"/./resources/dataset_middlebury.jpg",url:"https://vision.middlebury.edu/stereo/data/",num:"7.1GB",intro:"室内真实场景立体匹配数据集，提供了RGB图像、视差真值、相机内外参，下载了Eval3、2014、2021mobile三个子集"},{name:"MPISintel-stereo",person:"李坤洪",img:"/./resources/dataset_MPI_sintel.jpg",url:"http://sintel.is.tue.mpg.de/",num:"2.5GB",intro:"渲染数据集，提供了RGB图像、视差真值、光流真值，下载了视差和图像部分"},{name:"NYUDepth_v2",person:"李坤洪",img:"/./resources/dataset_nyu_depth_v2.jpg",url:"https://cs.nyu.edu/~fergus/datasets/nyu_depth_v2.html",num:"6GB",intro:"室内真实场景数据集，提供了RGB图像、深度真值和分割，下载了深度和图像部分"},{name:"ScnaNet",person:"李坤洪",img:"/./resources/dataset_scannet.jpg",url:"http://www.scan-net.org/",num:"1.2TB(压缩包)",intro:"室内真实场景数据集，提供了RGB图像、深度真值和点云分割，下载了scans1-1400"},{name:"SceneFlow",person:"李坤洪",img:"/./resources/dataset_scene_flow.jpg",url:"https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html",num:"272GB",intro:"仿真数据集，提供了RGB图像、视差真值"},{name:"Spring",person:"李坤洪",img:"/./resources/dataset_spring.jpg",url:"https://spring-benchmark.org/",num:"216GB(压缩包)",intro:"仿真数据集，提供了RGB图像、视差、光流、场景流真值和相机内外参"},{name:"TartanAir",person:"李坤洪",img:"/./resources/dataset_tartanair.jpg",url:"https://theairlab.org/tartanair-dataset/",num:"1.3TB",intro:"仿真数据集，提供了RGB图像、深度真值和相机内外参"},{name:"Unreal4K",person:"李坤洪",img:"/./resources/dataset_unreal4K.jpg",url:"https://github.com/CVLAB-Unibo/neural-disparity-refinement",num:"836GB",intro:"仿真数据集，提供了RGB图像、视差真值和相机内外参"},{name:"VirtualKITTI2",person:"李坤洪",img:"/./resources/dataset_vkitti2.jpg",url:"https://arxiv.org/pdf/2001.10773",num:"15GB",intro:"自动驾驶仿真数据集，提供了RGB图像、视差真值和相机内外参，每个场景都仿真了不同天气、相机视角变化的情况"}],P={class:"info-image"},Y=["src"],F={class:"info-content"},U={class:"info-name"},X={class:"info-person"},z={class:"info-num"},J={class:"info-intro"},W=G({__name:"ResourceItem",props:{img:String,person:String,name:String,url:String,num:String,intro:String,height:{type:Number,default:100}},setup(a){const i=a,m=u=>{window.open(u,"_blank")},c=f("."),p=R(()=>i.img?i.img:`/${c.value}/resources/no_img.jpg`);return(u,n)=>{const r=j,l=M,o=B,h=S;return g(),$(h,{style:b(`height: ${a.height}px`),class:"shadow"},{default:t(()=>[e(o,{gutter:2},{default:t(()=>[e(r,{span:8},{default:t(()=>[s("div",P,[s("img",{src:p.value,width:"100%",style:b({"max-height":`${.55*a.height}px`,"object-fit":"fill"})},null,12,Y)])]),_:1}),e(r,{span:16},{default:t(()=>[s("div",F,[s("p",U,d(a.name),1),s("p",X,d(a.person),1),s("p",z,d(a.num),1),e(l,{size:"small",class:"more-btn",type:"primary",plain:"",disabled:!a.url,onClick:n[0]||(n[0]=y=>m(a.url))},{default:t(()=>n[1]||(n[1]=[k(" 相关链接 ")])),_:1},8,["disabled"])])]),_:1})]),_:1}),e(o,null,{default:t(()=>[e(r,{span:24},{default:t(()=>[s("div",J,[s("span",null,d(a.intro),1)])]),_:1})]),_:1})]),_:1},8,["style"])}}}),q=v(W,[["__scopeId","data-v-13f7479f"]]),O={class:"resource-category"},Q={class:"card-header"},Z={class:"title_text"},ee=G({__name:"ResourceCategory",props:{category:{type:Object,default:()=>({title:"",data:[]})}},setup(a){const i=f(null),m=f(100),c=()=>i.value?i.value.offsetWidth*.125:m.value,p=R(()=>c());return C(p,u=>{m.value=u},{immediate:!0}),(u,n)=>{const r=j,l=B;return g(),w("div",O,[s("div",Q,[n[0]||(n[0]=s("div",{class:"title_bar"},null,-1)),s("span",Z,d(a.category.title),1)]),s("div",{class:"card-body",style:{"margin-top":"15px"},ref_key:"catRowDiv",ref:i},[e(l,{gutter:20},{default:t(()=>[(g(!0),w(x,null,I(a.category.data,o=>(g(),$(r,{span:6,style:{"margin-bottom":"20px"}},{default:t(()=>[e(q,{name:o.name,person:o.person,img:o.img,url:o.url,num:o.num,intro:o.intro,height:m.value},null,8,["name","person","img","url","num","intro","height"])]),_:2},1024))),256))]),_:1})],512)])}}}),_=v(ee,[["__scopeId","data-v-8ff5ef01"]]),te={id:"server"},se={id:"hardware"},ne={id:"software"},ae={id:"dataset"},re=G({__name:"resources",setup(a){const i={title:"计算资源",data:H},m={title:"硬件资源",data:K},c={title:"软件资源",data:L},p={title:"数据资源",data:N};return(u,n)=>{const r=S,l=V,o=A,h=D,y=B,T=E;return g(),w(x,null,[e(h,{position:"fixed",style:{height:"100%","margin-top":"0px"}},{default:t(()=>[e(o,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:t(()=>[e(l,{href:"#server"},{default:t(()=>[e(r,{class:"shadow"},{default:t(()=>n[0]||(n[0]=[s("span",{class:"link-text"},"计算资源",-1)])),_:1})]),_:1}),e(l,{href:"#hardware"},{default:t(()=>[e(r,{class:"shadow"},{default:t(()=>n[1]||(n[1]=[s("span",{class:"link-text"},"硬件资源",-1)])),_:1})]),_:1}),e(l,{href:"#software"},{default:t(()=>[e(r,{class:"shadow"},{default:t(()=>n[2]||(n[2]=[s("span",{class:"link-text"},"软件资源",-1)])),_:1})]),_:1}),e(l,{href:"#dataset"},{default:t(()=>[e(r,{class:"shadow"},{default:t(()=>n[3]||(n[3]=[s("span",{class:"link-text"},"数据资源",-1)])),_:1})]),_:1})]),_:1})]),_:1}),e(T,{class:"main"},{default:t(()=>[e(y,{style:{"margin-top":"20px"},gutter:10},{default:t(()=>[e(r,{class:"info_card",shadow:"always"},{default:t(()=>[s("div",te,[e(_,{category:i})]),s("div",se,[e(_,{category:m})]),s("div",ne,[e(_,{category:c})]),s("div",ae,[e(_,{category:p})])]),_:1})]),_:1})]),_:1})],64)}}}),ce=v(re,[["__scopeId","data-v-5451c99b"]]);export{ce as default};

import{l as T,q as r,t as p,z as t,M as s,C as n,x as e,X as E,K as h,Y,W as w,d as k,a0 as P,a1 as W,L as I,e as y,v as A}from"./index-BSzegCzT.js";import{a as v,E as M}from"./anchor-link-B_o-N_Mj.js";import{_ as x,E as S}from"./_plugin-vue_export-helper-CVk_C7GX.js";import{E as C,a as D}from"./table-column-u8djv2Af.js";import{E as R}from"./button-D0GAG2Vs.js";import"./raf-DQINWBJ-.js";const G={class:"card-header"},F={class:"title_text"},N={class:"card-body",style:{"margin-top":"15px"}},X=["src"],B={class:"paper-title-style"},$={class:"paper-author-style"},Z={class:"paper-book-style"},q=T({__name:"ResearchAreaInfo",props:{researcharea:{type:Object,default:()=>({area:"",img:"",intro:"",papers:[]})}},setup(l){const m=_=>{window.open(_,"_blank")};return(_,a)=>{const g=Y,u=w,c=C,d=R,f=D;return r(),p(h,null,[t("div",G,[a[0]||(a[0]=t("div",{class:"title_bar"},null,-1)),t("span",F,s(l.researcharea.area),1)]),t("div",N,[n(u,{gutter:20},{default:e(()=>[n(g,{span:6,style:{"margin-bottom":"20px"}},{default:e(()=>[t("img",{src:l.researcharea.img,width:"100%",height:"150px",style:{"object-fit":"contain"}},null,8,X)]),_:1}),n(g,{span:18,style:{"margin-bottom":"20px","text-align":"justify"}},{default:e(()=>[t("span",null,s(l.researcharea.intro),1)]),_:1})]),_:1}),n(u,null,{default:e(()=>a[1]||(a[1]=[t("span",null,"代表性成果",-1)])),_:1}),n(u,null,{default:e(()=>[n(g,{span:24},{default:e(()=>[n(f,{style:{width:"auto","margin-bottom":"30px"},data:l.researcharea.papers,"show-header":!1},{default:e(()=>[n(c,{label:"论文信息","min-width":"85"},{default:e(o=>[t("div",null,[t("span",B,s(o.row.title),1),a[2]||(a[2]=t("br",null,null,-1)),t("span",$,s(o.row.author),1),a[3]||(a[3]=t("br",null,null,-1)),t("span",Z,s(o.row.book),1)])]),_:1}),n(c,{label:"论文链接","min-width":"15"},{default:e(o=>[t("div",null,[n(d,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!o.row.url,onClick:i=>m(o.row.url)},{default:e(()=>a[4]||(a[4]=[E(" paper ")])),_:2},1032,["disabled","onClick"]),a[6]||(a[6]=t("br",null,null,-1)),n(d,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!o.row.code,onClick:i=>m(o.row.code)},{default:e(()=>a[5]||(a[5]=[E(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})])],64)}}}),J=x(q,[["__scopeId","data-v-e2bb13d3"]]),b=".",L=k(()=>[{id:"scene_receip_and_recon",area:"三维场景感知与重建",intro:"三维场景感知与重建致力于通过采集三维环境中的图像、点云、深度等数据，感知周围环境的三维物体，重建场景的三维结构，实验室在此方向主要聚焦深度估计、点云配准制图、点云语义理解等理论和方法，相关研究成果应用于某型自动抓取机器人等。",img:"/./research_area/scene_receip_and_recon.png",papers:[{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/abstract/document/9792207",code:""},{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"}]},{id:"generation_and_edition",area:"三维内容生成与编辑",intro:"三维内容生成与编辑致力于利用文本、图像等多样化的控制条件生成三维内容并对其进行灵活可控的编辑，实验室在此方向主要聚焦三维重建、文生三维、三维编辑等理论和方法，相关成果应用于场景重建与制图、无人驾驶系统等。",img:`/${b}/research_area/generation_and_edition.png`,papers:[{title:"Exploring Fine-Grained Sparsity in Neural Networks for Efficient Inference",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/9841044",code:""},{title:"Learning Spherical Radiance Field for Efficient 360° Unbounded Novel View Synthesis",book:"IEEE Transactions on Image Processing (TIP)",author:"Minglin Chen, Longguang Wang, Zilong Dong, Yinjie Lei, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/10552662",code:"https://minglin-chen.github.io/SphericalRF"},{title:"WSSIC-Net: Weakly-Supervised Semantic Instance Completion of 3D Point Cloud Scenes",book:"IEEE Transactions on Image Processing (TIP)",author:"Zhiheng Fu, Yulan Guo, Minglin Chen, Qingyong Hu, Hamid Laga, Farid Boussaid, Mohammed Bennamoun",url:"",code:""}]},{id:"visial_sigmentation",area:"视觉信息理解与分析",intro:"视觉信息理解与分析致力于对图像、视频等视觉内容进行理解与分析，获取视觉内容中物体、场景、事件等语义信息，实验室在此方向主要聚焦图像/视频目标检测、图像/视频语义分割等理论和方法，相关研究成果应用于视觉导航定位、图像解译理解等。",img:`/${b}/research_area/visial_sigmentation.png`,papers:[{title:"Beyond Appearance: Multi-Frame Spatio-Temporal Context Memory Networks for Efficient And Robust Video Object Segmentation",book:"IEEE Transactions on Image Processing (TIP)",author:"Jisheng Dang, Huicheng Zheng, Xiaohao Xu, Xu Yan, Longguang Wang, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/10659365",code:""},{title:"Efficient And Robust Video Object Segmentation through Isogenous Memory Sampling And Frame Relation Mining",book:"IEEE Transactions on Image Processing (TIP)",author:"Jisheng Dang, Huicheng Zheng, Jinming Lai, Xu Yan, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/10179254",code:""},{title:"Dense Nested Attention Network for Infrared Small Target Detection",book:"IEEE Transactions on Image Processing (TIP)",author:"Boyang Li, Miao Li, Chao Xiao, Ting Liu, Longguang Wang, Yingqian Wang, Zaiping Lin, Wei An, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/9864119",code:"https://github.com/YeRen123455/Infrared-Small-Target-Detection"}]},{id:"visual_enhancement",area:"视觉内容复原与增强",intro:"视觉内容复原与增强致力于提高图像、视频等视觉内容的清晰度，使其具有更好的感官视觉体验马桶是更易于理解分析，实验室在此方向主要聚焦图像超分辨、三维内容增强等理论和方法，相关研究成果应用于某型图像增强子系统等。",img:`/${b}/research_area/visual_enhancement.png`,papers:[{title:"Unsupervised Degradation Representation Learning for Unpaired Restoration of Images And Point Clouds",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/10738507",code:""},{title:"Disentangling Light Fields for Super-Resolution and Disparity Estimation",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Yingqian Wang, Longguang Wang, Gaochang Wu, Jungang Yang, Wei An, Jingyi Yu, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/9716806",code:"https://yingqianwang.github.io/DistgLF/"},{title:"Light Field Image Super-Resolution Using Deformable Convolution",book:"IEEE Transactions on Image Processing (TIP)",author:"Yingqian Wang, Jungang Yang, Longguang Wang, Xinyi Ying, Tianhao Wu, Wei An, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/9286855",code:"https://github.com/YingqianWang/LF-DFnet"}]}]),V={class:"link-text"},H=["id"],j=T({__name:"research_overview",setup(l){return(m,_)=>{const a=S,g=M,u=v,c=P,d=Y,f=w,o=W;return r(),p(h,null,[n(c,{position:"fixed",style:{height:"100%","margin-top":"0px","z-index":"1000"}},{default:e(()=>[n(u,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:e(()=>[(r(!0),p(h,null,I(y(L),i=>(r(),A(g,{href:`#${i.id.toLowerCase().replace(/\s+/g,"-")}`},{default:e(()=>[n(a,{class:"shadow"},{default:e(()=>[t("span",V,s(i.area),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:1})]),_:1}),n(o,{class:"main"},{default:e(()=>[n(f,{style:{"margin-top":"20px"},gutter:10},{default:e(()=>[n(a,{class:"info_card",shadow:"always"},{default:e(()=>[(r(!0),p(h,null,I(y(L),i=>(r(),A(d,{span:24},{default:e(()=>[t("div",{id:`${i.id.toLowerCase().replace(/\s+/g,"-")}`},[n(J,{researcharea:i},null,8,["researcharea"])],8,H)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})],64)}}}),ne=x(j,[["__scopeId","data-v-1b34f227"]]);export{ne as default};

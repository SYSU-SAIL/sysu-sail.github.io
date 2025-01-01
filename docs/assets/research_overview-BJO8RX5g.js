import{l as I,q as r,t as p,z as o,M as s,C as n,x as e,X as E,K as h,Y as k,W as Y,d as L,a0 as P,a1 as v,L as y,e as C,v as w}from"./index-D7MKjLXi.js";import{a as M,E as T}from"./anchor-link-BIma6lyC.js";import{_ as x,E as S}from"./_plugin-vue_export-helper-DwhIGEAf.js";import{E as W,a as G}from"./table-column-DEdlgNl-.js";import{E as D}from"./button-DhM_vht0.js";import"./raf-yHBpQ3qA.js";const R={class:"card-header"},H={class:"title_text"},F={class:"card-body",style:{"margin-top":"15px"}},V=["src"],B={class:"paper-title-style"},$={class:"paper-author-style"},Z={class:"paper-book-style"},q=I({__name:"ResearchAreaInfo",props:{researcharea:{type:Object,default:()=>({area:"",img:"",intro:"",papers:[]})}},setup(l){const _=m=>{window.open(m,"_blank")};return(m,a)=>{const u=k,c=Y,d=W,g=D,f=G;return r(),p(h,null,[o("div",R,[a[0]||(a[0]=o("div",{class:"title_bar"},null,-1)),o("span",H,s(l.researcharea.area),1)]),o("div",F,[n(c,{gutter:20},{default:e(()=>[n(u,{span:6,style:{"margin-bottom":"20px"}},{default:e(()=>[o("img",{src:l.researcharea.img,width:"100%",height:"150px",style:{"object-fit":"contain"}},null,8,V)]),_:1}),n(u,{span:18,style:{"margin-bottom":"20px","text-align":"justify"}},{default:e(()=>[o("span",null,s(l.researcharea.intro),1)]),_:1})]),_:1}),n(c,null,{default:e(()=>a[1]||(a[1]=[o("span",null,"代表性成果",-1)])),_:1}),n(c,null,{default:e(()=>[n(u,{span:24},{default:e(()=>[n(f,{style:{width:"auto","margin-bottom":"30px"},data:l.researcharea.papers,"show-header":!1},{default:e(()=>[n(d,{label:"论文信息","min-width":"85"},{default:e(t=>[o("div",null,[o("span",B,s(t.row.title),1),a[2]||(a[2]=o("br",null,null,-1)),o("span",$,s(t.row.author),1),a[3]||(a[3]=o("br",null,null,-1)),o("span",Z,s(t.row.book),1)])]),_:1}),n(d,{label:"论文链接","min-width":"15"},{default:e(t=>[o("div",null,[n(g,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!t.row.url,onClick:i=>_(t.row.url)},{default:e(()=>a[4]||(a[4]=[E(" paper ")])),_:2},1032,["disabled","onClick"]),a[6]||(a[6]=o("br",null,null,-1)),n(g,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!t.row.code,onClick:i=>_(t.row.code)},{default:e(()=>a[5]||(a[5]=[E(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})])],64)}}}),N=x(q,[["__scopeId","data-v-e2bb13d3"]]),b=".",A=L(()=>[{id:"scene_receip_and_recon",area:"三维场景建图与定位",intro:"致力于利用激光雷达、单目相机、双目相机、事件相机、光场相机等传感器，实现对三维环境的深度信息获取，并在此基础上完成对大规模场景的三维建图及对传感器自身的准确定位，相关成果应用于某型无人机与机器人。实验室在此方向主要聚焦立体匹配、深度估计、点云配准、视觉定位。",img:"/./research_area/scene_receip_and_recon.png",papers:[{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/abstract/document/9792207",code:""},{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"Soft Exemplar Highlighting for Cross-View Image-based Geo-localization",book:"IEEE Transactions on Image Processing (TIP)",author:"Yulan Guo, Michael Choi, Kunhong Li, Farid Boussaid, Mohammed Bennamoun",url:"https://ieeexplore.ieee.org/abstract/document/9720146/",code:""}]},{id:"generation_and_edition",area:"点云理解压缩与生成",intro:"致力于对三维点云数据进行理解与分析，从而获取场景中的物体、事件、关系等语义信息，在此基础上，进一步实现对点云的压缩编码，提高数据传输效率，同时实现点云内容的生成，相关成果应用于某自动驾驶产品。实验室在此方向主要聚焦点云分割、场景图预测、点云压缩、三维内容生成。",img:`/${b}/research_area/generation_and_edition.png`,papers:[{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"},{title:"Heterogeneous Graph Learning for Scene Graph Prediction in 3D Point Clouds",book:"European Conference on Computer Vision (ECCV)",author:"Yanni Ma, Hao Liu, Yun Pei, Yulan Guo",url:"https://fq.pkwyx.com/default/https/www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03785.pdf",code:""},{title:"3DAC: Learning Attribute Compression for Point Clouds",book:"IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",author:"Guangchi Fang, Qingyong Hu, Hanyun Wang, Yiling Xu, Yulan Guo",url:"https://openaccess.thecvf.com/content/CVPR2022/papers/Fang_3DAC_Learning_Attribute_Compression_for_Point_Clouds_CVPR_2022_paper.pdf",code:""}]},{id:"visual_enhancement",area:"视觉内容复原与增强",intro:"致力于提高图像、视频、点云等视觉内容的清晰度，使其具有更好的感官视觉体验，或更易于机器理解分析，相关研究成果应用于某型图像增强子系统等。实验室在此方向主要聚焦图像超分辨、点云补全与上采样、三维内容增强。",img:`/${b}/research_area/visual_enhancement.png`,papers:[{title:"Unsupervised Degradation Representation Learning for Unpaired Restoration of Images and Point Clouds",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/10738507",code:""},{title:"Disentangling Light Fields for Super-Resolution and Disparity Estimation",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Yingqian Wang, Longguang Wang, Gaochang Wu, Jungang Yang, Wei An, Jingyi Yu, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/9716806",code:"https://yingqianwang.github.io/DistgLF/"},{title:"WSSIC-Net: Weakly-Supervised Semantic Instance Completion of 3D Point Cloud Scenes",book:"IEEE Transactions on Image Processing (TIP)",author:"Zhiheng Fu, Yulan Guo, Minglin Chen, Qingyong Hu, Hamid Laga, Farid Boussaid, Mohammed Bennamoun",url:"",code:""}]},{id:"visial_sigmentation",area:"多模态融合与机器人",intro:"致力于面向国家/地方重大需求，整合实验室在机器人多模态感知、理解、交互等方面的核心技术积累，探索具身机器人仿真、数据集构建、模型训练、Sim2Real迁移等技术，开展机器人遥操作、模仿学习、模型轻量化部署等研究，实现地面履带式/轮式/四足/双足机器人、空中无人机、水下无人系统的部署与应用。",img:`/${b}/research_area/visial_sigmentation.png`,papers:[{title:"Parallel Dual-Hand Detection by Using Hand and Body Features for Robot Teleoperation",book:"IEEE Transactions on Human-Machine Systems (THMS),",author:"Qing Gao, Zhaojie Ju, Yongquan Chen, Qiwen Wang, Yinan Zhao, Shiwu Lai",url:"https://ieeexplore.ieee.org/abstract/document/10059173/",code:""},{title:"Exploring Fine-Grained Sparsity in Neural Networks for Efficient Inference",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",author:"Longguang Wang, Yulan Guo, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/9841044",code:"https://github.com/SYSU-SAIL/SMSR"},{title:"IF-ConvTransformer: A Framework for Human Activity Recognition using IMU Fusion and ConvTransformer",book:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)",author:"Ye Zhang, Yi Hou, Kewei Ouyang, Shilin Zhou, Yulan Guo",url:"https://dl.acm.org/doi/pdf/10.1145/3534584",code:""}]}]),U={class:"link-text"},Q=["id"],X=I({__name:"research_overview",setup(l){return(_,m)=>{const a=S,u=T,c=M,d=P,g=k,f=Y,t=v;return r(),p(h,null,[n(d,{position:"fixed",style:{height:"100%","margin-top":"0px","z-index":"1000"}},{default:e(()=>[n(c,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:e(()=>[(r(!0),p(h,null,y(C(A),i=>(r(),w(u,{href:`#${i.id.toLowerCase().replace(/\s+/g,"-")}`},{default:e(()=>[n(a,{class:"shadow"},{default:e(()=>[o("span",U,s(i.area),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:1})]),_:1}),n(t,{class:"main"},{default:e(()=>[n(f,{style:{"margin-top":"20px"},gutter:10},{default:e(()=>[n(a,{class:"info_card",shadow:"always"},{default:e(()=>[(r(!0),p(h,null,y(C(A),i=>(r(),w(g,{span:24},{default:e(()=>[o("div",{id:`${i.id.toLowerCase().replace(/\s+/g,"-")}`},[n(N,{researcharea:i},null,8,["researcharea"])],8,Q)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})],64)}}}),ne=x(X,[["__scopeId","data-v-1b34f227"]]);export{ne as default};
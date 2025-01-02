import{l as A,q as r,t as h,z as o,M as s,C as n,x as e,X as C,K as m,Y as w,W as Y,d as P,a0 as S,a1 as M,L as E,e as y,v as I}from"./index-C8n4uiZu.js";import{a as x,E as v}from"./anchor-link-JF-YDVkH.js";import{_ as k,E as T}from"./_plugin-vue_export-helper-DVpWz7Dh.js";import{E as R,a as W}from"./table-column-BROB1_2i.js";import{E as G}from"./button-DZD2R9Gj.js";import"./raf-B91P1Ss3.js";const D={class:"card-header"},H={class:"title_text"},V={class:"card-body",style:{"margin-top":"15px"}},F=["src"],Z={class:"paper-title-style"},B={class:"paper-author-style"},Q={class:"paper-book-style"},$=A({__name:"ResearchAreaInfo",props:{researcharea:{type:Object,default:()=>({area:"",img:"",intro:"",papers:[]})}},setup(l){const _=f=>{window.open(f,"_blank")};return(f,a)=>{const u=w,c=Y,d=R,p=G,b=W;return r(),h(m,null,[o("div",D,[a[0]||(a[0]=o("div",{class:"title_bar"},null,-1)),o("span",H,s(l.researcharea.area),1)]),o("div",V,[n(c,{gutter:20},{default:e(()=>[n(u,{span:6,style:{"margin-bottom":"20px"}},{default:e(()=>[o("img",{src:l.researcharea.img,width:"100%",height:"150px",style:{"object-fit":"contain"}},null,8,F)]),_:1}),n(u,{span:18,style:{"margin-bottom":"20px","text-align":"justify"}},{default:e(()=>[o("span",null,s(l.researcharea.intro),1)]),_:1})]),_:1}),n(c,null,{default:e(()=>a[1]||(a[1]=[o("span",null,"代表性成果",-1)])),_:1}),n(c,null,{default:e(()=>[n(u,{span:24},{default:e(()=>[n(b,{style:{width:"auto","margin-bottom":"30px"},data:l.researcharea.papers,"show-header":!1},{default:e(()=>[n(d,{label:"论文信息","min-width":"85"},{default:e(t=>[o("div",null,[o("span",Z,s(t.row.title),1),a[2]||(a[2]=o("br",null,null,-1)),o("span",B,s(t.row.author),1),a[3]||(a[3]=o("br",null,null,-1)),o("span",Q,s(t.row.book),1)])]),_:1}),n(d,{label:"论文链接","min-width":"15"},{default:e(t=>[o("div",null,[n(p,{size:"default",class:"more-btn",type:"primary",plain:"",disabled:!t.row.url,onClick:i=>_(t.row.url)},{default:e(()=>a[4]||(a[4]=[C(" paper ")])),_:2},1032,["disabled","onClick"]),a[6]||(a[6]=o("br",null,null,-1)),n(p,{size:"default",class:"more-btn",type:"info",plain:"",disabled:!t.row.code,onClick:i=>_(t.row.code)},{default:e(()=>a[5]||(a[5]=[C(" code ")])),_:2},1032,["disabled","onClick"])])]),_:1})]),_:1},8,["data"])]),_:1})]),_:1})])],64)}}}),N=k($,[["__scopeId","data-v-e2bb13d3"]]),g=".",L=P(()=>[{id:"scene_recon",area:"三维场景建图与定位",intro:"致力于利用激光雷达、单目相机、双目相机、事件相机、光场相机等传感器，实现对三维环境的深度信息获取，并在此基础上完成对大规模场景的三维建图及对传感器自身的准确定位，相关成果应用于某型无人机与机器人。实验室在此方向主要聚焦立体匹配、深度估计、点云配准、视觉定位。",img:"/./research_area/scene_recon.png",papers:[{title:"Parallax Attention for Unsupervised Stereo Correspondence Learning",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/document/9206116",code:"https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM"},{title:"You Only Train Once: Learning General and Distinctive 3D Local Descriptors",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2023",author:"Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",url:"https://ieeexplore.ieee.org/abstract/document/9792207",code:""},{title:"Soft Exemplar Highlighting for Cross-View Image-based Geo-localization",book:"IEEE Transactions on Image Processing (TIP), 2022",author:"Yulan Guo, Michael Choi, Kunhong Li, Farid Boussaid, Mohammed Bennamoun",url:"https://ieeexplore.ieee.org/abstract/document/9720146/",code:""}]},{id:"generation_and_edition",area:"点云理解压缩与生成",intro:"致力于对三维点云数据进行理解与分析，从而获取场景中的物体、事件、关系等语义信息，在此基础上，进一步实现对点云的压缩编码，提高数据传输效率，同时实现点云内容的生成，相关成果应用于某自动驾驶产品。实验室在此方向主要聚焦点云分割、场景图预测、点云压缩、三维内容生成。",img:`/${g}/research_area/generation_and_edition.png`,papers:[{title:"Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2022",author:"Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",url:"https://ieeexplore.ieee.org/document/9440696",code:"https://github.com/QingyongHu/RandLA-Net"},{title:"Heterogeneous Graph Learning for Scene Graph Prediction in 3D Point Clouds",book:"European Conference on Computer Vision (ECCV), 2024",author:"Yanni Ma, Hao Liu, Yun Pei, Yulan Guo",url:"https://fq.pkwyx.com/default/https/www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03785.pdf",code:""},{title:"3DAC: Learning Attribute Compression for Point Clouds",book:"IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR), 2022",author:"Guangchi Fang, Qingyong Hu, Hanyun Wang, Yiling Xu, Yulan Guo",url:"https://openaccess.thecvf.com/content/CVPR2022/papers/Fang_3DAC_Learning_Attribute_Compression_for_Point_Clouds_CVPR_2022_paper.pdf",code:""}]},{id:"visual_enhancement",area:"视觉内容复原与增强",intro:"致力于提高图像、视频、点云等视觉内容的清晰度，使其具有更好的感官视觉体验，或更易于机器理解分析，相关研究成果应用于某型图像增强子系统等。实验室在此方向主要聚焦图像超分辨、点云补全与上采样、三维内容增强。",img:`/${g}/research_area/visual_enhancement.png`,papers:[{title:"Unsupervised Degradation Representation Learning for Unpaired Restoration of Images and Point Clouds",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024",author:"Longguang Wang, Yulan Guo, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/10738507",code:""},{title:"Disentangling Light Fields for Super-Resolution and Disparity Estimation",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2023",author:"Yingqian Wang, Longguang Wang, Gaochang Wu, Jungang Yang, Wei An, Jingyi Yu, Yulan Guo",url:"https://ieeexplore.ieee.org/abstract/document/9716806",code:"https://yingqianwang.github.io/DistgLF/"},{title:"WSSIC-Net: Weakly-Supervised Semantic Instance Completion of 3D Point Cloud Scenes",book:"IEEE Transactions on Image Processing (TIP), 2024",author:"Zhiheng Fu, Yulan Guo, Minglin Chen, Qingyong Hu, Hamid Laga, Farid Boussaid, Mohammed Bennamoun",url:"",code:""}]},{id:"embody",area:"具身系统规划与操控",intro:"致力于整合多模态大型模型、强化学习与神经-符号计算等前沿技术，驱动具身智能体进行任务的有效分析和规划，并通过精确操控，实现智能体与环境及物体间的高效交互，最终达成既定任务目标。实验室在此方向主要聚焦于具身多模态基础模型的开发，世界模型的构建、以及基于视觉的策略学习。",img:`/${g}/research_area/scene_receip_and_recon.png`,papers:[{title:"MP5: A Multi-modal Open-ended Embodied System in Minecraft via Active Perception",book:"IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR), 2024",author:"Yiran Qin, Enshen Zhou, Qichang Liu, Zhenfei Yin, Lu Sheng, Ruimao Zhang, Yu Qiao, Jing Shao",url:"https://arxiv.org/pdf/2312.07472",code:""},{title:"Enhancing Human-AI Collaboration Through Logic-Guided Reasoning",book:"International Conference on Learning Representations (ICLR), 2024",author:"Chengzhi Cao, Yinghao Fu, Sheng Xu, Ruimao Zhang, Shuang Li",url:"https://openreview.net/pdf?id=TWC4gLoAxY",code:""},{title:"SEED-Bench-2: Benchmarking Multimodal Large Language Models",book:"IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR), 2024",author:"Bohao Li, Yuying Ge, Yixiao Ge, Guangzhi Wang, Rui Wang, Ruimao Zhang, Ying Shan",url:"https://openaccess.thecvf.com/content/CVPR2024/papers/Li_SEED-Bench_Benchmarking_Multimodal_Large_Language_Models_CVPR_2024_paper.pdf",code:""}]},{id:"human_body",area:"人体内容感知与重建",intro:"致力于使机器能够在动态场景中主动感知、分析和解释人类的状态、行为及潜在动机，并可以通过语音、文字等控制生成具有高度类人属性的虚拟形象与具身实体。实验室在此方向主要聚焦于人体关键点检测、人体行为分析、人体动作重建与生成、以及面向人形机器人的行为学习。",img:`/${g}/research_area/human_body.png`,papers:[{title:"KptLLM: Unveiling the Power of Large Language Model for Keypoint Comprehension",book:"Annual Conference on Neural Information Processing Systems (NeurIPS), 2024",author:"Jie Yang, Wang Zeng, Sheng Jin, Lumin Xu, Wentao Liu, Chen Qian, Ruimao Zhang",url:"https://arxiv.org/pdf/2411.01846",code:""},{title:"F-HOI: Toward Fine-grained Semantic-Aligned 3D Human-Object Interactions",book:"European Conference on Computer Vision (ECCV), 2024",author:"Jie Yang, Xuesong Niu, Nan Jiang, Ruimao Zhang, Siyuan Huang",url:"https://link.springer.com/chapter/10.1007/978-3-031-72913-3_6",code:""},{title:"An Efficient RGB-D Hand Gesture Detection Framework for Dexterous Robot Hand-arm Teleoperation System",book:"IEEE Transactions on Human-Machine Systems (THMS), 2022",author:"Qing Gao, Zhaojie Ju, Yongquan Chen, Qiwen Wang, Chuliang Chi",url:"https://ieeexplore.ieee.org/abstract/document/9903078/",code:""}]},{id:"robot",area:"多模态融合与机器人",intro:"致力于面向国家/地方重大需求，整合实验室在机器人多模态感知、理解、交互、规划等方面的核心技术积累，探索具身机器人仿真、数据集构建、模型训练、Sim2Real迁移等技术，开展机器人遥操作、模仿学习、模型轻量化部署等研究，实现地面履带式/轮式/四足/双足机器人、空中无人机、水下无人系统的部署与应用。",img:`/${g}/research_area/robot.jpg`,papers:[{title:"Parallel Dual-Hand Detection by Using Hand and Body Features for Robot Teleoperation",book:"IEEE Transactions on Human-Machine Systems (THMS), 2023",author:"Qing Gao, Zhaojie Ju, Yongquan Chen, Qiwen Wang, Yinan Zhao, Shiwu Lai",url:"https://ieeexplore.ieee.org/abstract/document/10059173/",code:""},{title:"Exploring Fine-Grained Sparsity in Neural Networks for Efficient Inference",book:"IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2023",author:"Longguang Wang, Yulan Guo, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An",url:"https://ieeexplore.ieee.org/abstract/document/9841044",code:"https://github.com/SYSU-SAIL/SMSR"},{title:"IF-ConvTransformer: A Framework for Human Activity Recognition using IMU Fusion and ConvTransformer",book:"Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2022",author:"Ye Zhang, Yi Hou, Kewei Ouyang, Shilin Zhou, Yulan Guo",url:"https://dl.acm.org/doi/pdf/10.1145/3534584",code:""}]}]),J={class:"link-text"},q=["id"],X=A({__name:"research_overview",setup(l){return(_,f)=>{const a=T,u=v,c=x,d=S,p=w,b=Y,t=M;return r(),h(m,null,[n(d,{position:"fixed",style:{height:"100%","margin-top":"0px","z-index":"1000"}},{default:e(()=>[n(c,{offset:70,style:{height:"100%","text-align":"left","background-color":"#ffffff"}},{default:e(()=>[(r(!0),h(m,null,E(y(L),i=>(r(),I(u,{href:`#${i.id.toLowerCase().replace(/\s+/g,"-")}`},{default:e(()=>[n(a,{class:"shadow"},{default:e(()=>[o("span",J,s(i.area),1)]),_:2},1024)]),_:2},1032,["href"]))),256))]),_:1})]),_:1}),n(t,{class:"main"},{default:e(()=>[n(b,{style:{"margin-top":"20px"},gutter:10},{default:e(()=>[n(a,{class:"info_card",shadow:"always"},{default:e(()=>[(r(!0),h(m,null,E(y(L),i=>(r(),I(p,{span:24},{default:e(()=>[o("div",{id:`${i.id.toLowerCase().replace(/\s+/g,"-")}`},[n(N,{researcharea:i},null,8,["researcharea"])],8,q)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})],64)}}}),ne=k(X,[["__scopeId","data-v-1b34f227"]]);export{ne as default};

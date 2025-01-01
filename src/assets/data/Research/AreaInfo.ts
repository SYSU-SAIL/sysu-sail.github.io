import {Paper} from "../home/PaperInfo";
import { computed } from 'vue';

interface Area {
    id: string;
    area: string
    intro: string
    img: string
    papers: Paper []
}

const base = import.meta.env.VITE_BASE_PATH;

export const AreatableData = computed<Area[]>(() => [
    {
        id: 'scene_receip_and_recon',
        area: '三维场景建图与定位',
        intro: '致力于利用激光雷达、单目相机、双目相机、事件相机、光场相机等传感器，实现对三维环境的深度信息获取，并在此基础上完成对大规模场景的三维建图及对传感器自身的准确定位，相关成果应用于某型无人机与机器人。实验室在此方向主要聚焦立体匹配、深度估计、点云配准、视觉定位。',
        img: `/${import.meta.env.VITE_BASE_PATH}/research_area/scene_receip_and_recon.png`,
        papers: [
            {
                "title": "You Only Train Once: Learning General and Distinctive 3D Local Descriptors",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Sheng Ao, Yulan Guo, Yingying Hu, Bo Yang, Andrew Markham, Zengping Chen",
                "url": "https://ieeexplore.ieee.org/abstract/document/9792207",
                "code": "",
            },
            {
                "title": "Parallax Attention for Unsupervised Stereo Correspondence Learning",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Longguang Wang, Yulan Guo, Yingqian Wang, Zhengfa Liang, Zaiping Lin, Jungang Yang, Wei An",
                "url": "https://ieeexplore.ieee.org/document/9206116",
                "code": "https://github.com/The-Learning-And-Vision-Atelier-LAVA/PAM",
            },
			{
                "title": "Soft Exemplar Highlighting for Cross-View Image-based Geo-localization",
                "book": "IEEE Transactions on Image Processing (TIP)",
                "author": "Yulan Guo, Michael Choi, Kunhong Li, Farid Boussaid, Mohammed Bennamoun",
                "url": "https://ieeexplore.ieee.org/abstract/document/9720146/",
                "code": "",
            },
            
        ]
    },
    {
        id: 'generation_and_edition',
        area: '点云理解压缩与生成',
        intro: '致力于对三维点云数据进行理解与分析，从而获取场景中的物体、事件、关系等语义信息，在此基础上，进一步实现对点云的压缩编码，提高数据传输效率，同时实现点云内容的生成，相关成果应用于某自动驾驶产品。实验室在此方向主要聚焦点云分割、场景图预测、点云压缩、三维内容生成。',
        img: `/${base}/research_area/generation_and_edition.png`,
        papers: [
			{
                "title": "Learning Semantic Segmentation of Large-Scale Point Clouds with Random Sampling",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Qingyong Hu, Bo Yang, Linhai Xie, Stefano Rosa, Yulan Guo, Zhihua Wang, Niki Trigoni, Andrew Markham",
                "url": "https://ieeexplore.ieee.org/document/9440696",
                "code": "https://github.com/QingyongHu/RandLA-Net",
            },
			{
                "title": "Heterogeneous Graph Learning for Scene Graph Prediction in 3D Point Clouds",
                "book": "European Conference on Computer Vision (ECCV)",
                "author": "Yanni Ma, Hao Liu, Yun Pei, Yulan Guo",
                "url": "https://fq.pkwyx.com/default/https/www.ecva.net/papers/eccv_2024/papers_ECCV/papers/03785.pdf",
                "code": "",
            },
			{
                "title": "3DAC: Learning Attribute Compression for Point Clouds",
                "book": "IEEE/CVF International Conference on Computer Vision and Pattern Recognition (CVPR)",
                "author": "Guangchi Fang, Qingyong Hu, Hanyun Wang, Yiling Xu, Yulan Guo",
                "url": "https://openaccess.thecvf.com/content/CVPR2022/papers/Fang_3DAC_Learning_Attribute_Compression_for_Point_Clouds_CVPR_2022_paper.pdf",
                "code": "",
            },            
        ]
    },  
    {
        id: 'visual_enhancement',
        area: '视觉内容复原与增强',
        intro: '致力于提高图像、视频、点云等视觉内容的清晰度，使其具有更好的感官视觉体验，或更易于机器理解分析，相关研究成果应用于某型图像增强子系统等。实验室在此方向主要聚焦图像超分辨、点云补全与上采样、三维内容增强。',
        img: `/${base}/research_area/visual_enhancement.png`,
        papers: [
            {
                "title": "Unsupervised Degradation Representation Learning for Unpaired Restoration of Images and Point Clouds",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Longguang Wang, Yulan Guo, Yingqian Wang, Xiaoyu Dong, Qingyu Xu, Jungang Yang, Wei An",
                "url": "https://ieeexplore.ieee.org/abstract/document/10738507",
                "code": "",
            },
            {
                "title": "Disentangling Light Fields for Super-Resolution and Disparity Estimation",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Yingqian Wang, Longguang Wang, Gaochang Wu, Jungang Yang, Wei An, Jingyi Yu, Yulan Guo",
                "url": "https://ieeexplore.ieee.org/abstract/document/9716806",
                "code": "https://yingqianwang.github.io/DistgLF/",
            },
			{
                "title": "WSSIC-Net: Weakly-Supervised Semantic Instance Completion of 3D Point Cloud Scenes",
                "book": "IEEE Transactions on Image Processing (TIP)",
                "author": "Zhiheng Fu, Yulan Guo, Minglin Chen, Qingyong Hu, Hamid Laga, Farid Boussaid, Mohammed Bennamoun",
                "url": "",
                "code": "",
            },
        ]
    },
	{
        id: 'visial_sigmentation',
        area: '多模态融合与机器人',
        intro: '致力于面向国家/地方重大需求，整合实验室在机器人多模态感知、理解、交互等方面的核心技术积累，探索具身机器人仿真、数据集构建、模型训练、Sim2Real迁移等技术，开展机器人遥操作、模仿学习、模型轻量化部署等研究，实现地面履带式/轮式/四足/双足机器人、空中无人机、水下无人系统的部署与应用。',
        img: `/${base}/research_area/visial_sigmentation.png`,
        papers: [       
            {
                "title": "Parallel Dual-Hand Detection by Using Hand and Body Features for Robot Teleoperation",
                "book": "IEEE Transactions on Human-Machine Systems (THMS),",
                "author": "Qing Gao, Zhaojie Ju, Yongquan Chen, Qiwen Wang, Yinan Zhao, Shiwu Lai",
                "url": "https://ieeexplore.ieee.org/abstract/document/10059173/",
                "code": "",
            },
			{
                "title": "Exploring Fine-Grained Sparsity in Neural Networks for Efficient Inference",
                "book": "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
                "author": "Longguang Wang, Yulan Guo, Xiaoyu Dong, Yingqian Wang, Xinyi Ying, Zaiping Lin, Wei An",
                "url": "https://ieeexplore.ieee.org/abstract/document/9841044",
                "code": "https://github.com/SYSU-SAIL/SMSR",
            },
            {
                "title": "IF-ConvTransformer: A Framework for Human Activity Recognition using IMU Fusion and ConvTransformer",
                "book": "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT)",
                "author": "Ye Zhang, Yi Hou, Kewei Ouyang, Shilin Zhou, Yulan Guo",
                "url": "https://dl.acm.org/doi/pdf/10.1145/3534584",
                "code": "",
            },
        ]
    },
]);


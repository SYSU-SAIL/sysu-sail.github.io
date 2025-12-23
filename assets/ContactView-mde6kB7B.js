import{P as w}from"./PageAnchor-3nDWlbMw.js";import{d as h,c as l,a as _,w as r,b as c,r as p,i as y,t as x,k as C,o as n,_ as f,e as u,h as b,u as k,F as m,f as z,g as M,n as v}from"./index-B9gWcN0C.js";const V=h({__name:"Contact",props:{mode:{},title:{},description:{}},setup(t){const s=t,o={pc:{width:"976px"},tablet:{width:"662px"},mobile:{width:"100%"}},a=l(()=>({width:o[s.mode].width})),i=l(()=>{let e=s.description;return e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/(https?:\/\/[^\s]+)/g,'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'),e});return(e,T)=>{const d=p("el-text"),g=p("el-card");return n(),_(g,{style:C(a.value)},{header:r(()=>[c(d,{class:"head"},{default:r(()=>[y(x(t.title),1)]),_:1})]),default:r(()=>[c(d,{class:"content-text",size:"large",innerHTML:i.value},null,8,["innerHTML"])]),_:1},8,["style"])}}}),B=f(V,[["__scopeId","data-v-1421abf8"]]),I=["id"],N=h({__name:"ContactView",props:{screenMode:{}},setup(t){const s=[{id:"master",title:"研究生招生",description:`实验室每年有一定的学硕、专硕及博士生招生名额。我们聚焦于三维视觉与具身智能，致力于实现机器对三维世界的智能感知、理解与交互，欢迎对此方向有研究兴趣的同学加入我们。申请时请在邮件中附上个人简历、本科以来的成绩单、主要成果（论文、竞赛奖励）。

实验室不招收任何以混文凭或混经历为目的的成员。鼓励硕士生毕业后读本组博士或读海内外一流研究组的博士，鼓励博士生毕业后在国内外一流高校或IT头部企业继续从事科研工作，鼓励学生参与国内外学术交流，并尽可能提供一切便利。

希望你符合以下几点：
1. **较强的自我驱动力**：有明确的人生目标，了解自己内心的渴望，明白自己想成为一个什么样的人，懂得自律，并具备为了梦想持续刻苦努力的勇气和毅力。
2. **浓厚的研究兴趣**：希望通过做研究的过程，持续提升自己的逻辑思维能力、理性思考能力、前沿判断能力、算法设计能力及工程实践能力。
3. **良好的学习基础**：本科基础好（主要看重数学类、物理类和专业基础类课程），英语和专业类课程是额外加分项。

希望你在实验室内能够收获以下几点：
1. **扎实的算法功底**：学会如何找到学术前沿，如何发现科学问题并寻找解决方案，如何设计算法并编程实现，如何开展算法评估测试与迭代改进。
2. **良好的表达能力**：学会如何写一篇逻辑严密、论证充分、表达清晰的学术论文；学会如何做一个优雅得体、引人入胜的学术报告。
3. **开放的个人胸怀**：学会与团队的良好协作，与全球智力精英的思维碰撞与交流，与企业和学术界的交流与合作，掌握持续自我学习的能力。`},{id:"phd",title:"博士生招聘",description:`实验室长期招聘博士后，可申报中山大学逸仙博士后项目，同时可享受广东及深圳相关博后补贴，待遇优厚。欢迎在人工智能、计算机、电子信息等相关学科取得博士学位，致力于从事三维视觉、具身智能等相关研究，有良好的理论和实践基础，有刻苦钻研的精神和强烈的事业心，有良好的身体心理素质和团队合作精神的博士与我们联系。

相关招聘信息： https://rcb.sysu.edu.cn/article/547
相关政策信息： https://rsc.sysu.edu.cn/postdoctor/article/128`},{id:"undergrad",title:"本科生科研培训",description:"欢迎有余力、愿意提前进入科研的本校本科生加入实验室开展科研培训，可通过竞赛指导、大创设计、本科毕设等形式参与实验室科研项目。同时，欢迎外校保研学生通过本科毕设的形式提前进入实验室参与科研项目。"},{id:"policy",title:"相关政策参考",description:`相关政策请关注中山大学研究生招生网： https://graduate.sysu.edu.cn/zsw/
中山大学博士研究生招生公告： https://graduate.sysu.edu.cn/zsw/doctor
中山大学硕士研究生招生公告： https://graduate.sysu.edu.cn/zsw/postgraduate`}],o=s.map(a=>({id:a.id,cn:a.title,en:""}));return(a,i)=>(n(),u(m,null,[t.screenMode!=="mobile"?(n(),_(w,{key:0,items:k(o),"cn-width":130},null,8,["items"])):b("",!0),(n(),u(m,null,z(s,e=>M("div",{key:e.id,id:e.id,class:v(["research-block",{"with-anchor":t.screenMode!=="mobile"}])},[c(B,{mode:t.screenMode,title:e.title,description:e.description},null,8,["mode","title","description"])],10,I)),64))],64))}}),S=f(N,[["__scopeId","data-v-757f1f72"]]);export{S as default};

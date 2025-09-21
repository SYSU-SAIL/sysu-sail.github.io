# 代码结构
## 主页 

src/pages/index.vue

ts文件目录 src/assets/data

### 走马灯     

ts文件 src/assets/data/home/Carouseldata.ts

走马灯建议提前resize好图片，900\*2000

### 会议信息    

ts文件 src/assets/data/home/ConfInfo.ts

## 团队成员

ts文件 src/assets/data/Team/TeamInfo.ts

头像文件 public/avatars

白底，可以自己跑分割，resize成4:3

## 研究方向

### 研究领域 

ts文件 src/assets/data/Research/AreaInfo.ts

### 研究成果 

ts文件 src/assets/data/Research/PublicationsInfo.ts
        
图片  public/publications

## 平台资源

ts文件  src/assets/data/Resource/ResourceInfo.ts

图片    public/resources

## 团队动态

ts文件  src/assets/data/home/EventsInfo.ts


# element-plus-vite-starter

> A starter kit for Element Plus with Vite

- Preview: <https://vite-starter.element-plus.org>

This is an example of on-demand element-plus with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

> If you want to import all, it may be so simple that no examples are needed. Just follow [quickstart | Docs](https://element-plus.org/zh-CN/guide/quickstart.html) and import them.

If you just want an on-demand import example `manually`, you can check [unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus/tree/main/examples/vite).

If you want to a nuxt starter, see [element-plus-nuxt-starter](https://github.com/element-plus/element-plus-nuxt-starter/).

## Project setup

```bash
pnpm install

# npm install
# yarn install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.


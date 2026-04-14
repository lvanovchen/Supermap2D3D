# SuperMap 2D/3D Vue 项目

基于 Vue 2.x + SuperMap iClient 的地理信息系统项目，支持2D和3D地图可视化。

## 功能特性

- 2D地图（Leaflet + SuperMap iClient）
- 3D地图（Cesium + SuperMap）
- 地图图层管理
- 空间查询与分析
- 测量工具
- 地图打印导出

## 技术栈

- **框架**: Vue 2.6
- **状态管理**: Vuex 3
- **路由**: Vue Router 3
- **UI组件库**: Element UI 2.13
- **CSS预处理器**: Less / Sass
- **HTTP客户端**: Axios
- **GIS引擎**: SuperMap iClient (Classic/Leaflet/MapboxGL), Cesium

## 环境要求

- Node.js >= 10.0.0
- npm >= 6.0.0

## 安装与运行

```bash
# 安装依赖（请勿使用cnpm，会导致热更新失效）
npm install

# 启动开发服务器
npm run serve

# 构建生产环境
npm run build

# 代码检查
npm run lint

# 自动修复代码风格
npm run lint:fix
```

## 环境配置

复制 `.env.example` 为 `.env.local` 进行本地开发配置：

```bash
cp .env.example .env.local
```

修改 `.env.local` 中的 `VUE_APP_API_URL` 为你的API地址。

## 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 公共组件
│   └── SvgIcon/     # SVG图标组件
├── http/            # Axios配置和请求封装
├── icons/           # SVG图标资源
├── router/          # 路由配置
├── store/           # Vuex状态管理
├── styles/          # 全局样式
├── utils/           # 工具函数
├── views/           # 页面组件
│   ├── onemap/      # 地图相关组件
│   ├── index.vue    # 首页
│   ├── Supermap2D.vue   # 2D地图入口
│   └── Supermap3D.vue   # 3D地图入口
├── App.vue
└── main.js

public/
├── Build/           # SuperMap库文件
├── js/              # 第三方脚本
├── config.js        # 全局配置
├── layerConfig.js   # 图层配置
└── index.html
```

## 开发规范

1. **组件命名**: 使用 PascalCase (如 `BaseToc.vue`)
2. **文件引用**: 使用 `@` 别名指向 `src` 目录
3. **API请求**: 统一使用 `src/http/api.js` 中的方法
4. **环境变量**: 以 `VUE_APP_` 开头的变量可在代码中访问

## 注意事项

1. 请勿使用 `cnpm` 安装依赖，会导致热更新失效
2. SuperMap相关库通过 `<script>` 标签全局加载
3. 地图配置文件位于 `public/` 目录下

## 浏览器兼容

- Chrome 最新版
- Firefox 最新版
- Edge 最新版
- IE 11 (有限支持)

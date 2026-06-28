# ✨ 手势控制3D立体抽取塔罗牌

这是一个创新的交互式应用，结合了**手势识别**、**3D渲染**和**塔罗占卜**，让你可以通过自然的手势动作来抽取虚拟塔罗牌。

## 🎮 功能特性

- **实时手势识别** - 基于MediaPipe的精准手部追踪
- **3D立体渲染** - 使用Three.js创建沉浸式3D环境
- **塔罗牌库** - 完整的78张塔罗牌（22张大阿卡那 + 56张小阿卡那）
- **交互式动画** - 卡牌翻转、浮动、发光等视觉效果
- **实时反馈** - FPS监控和手势状态显示

## 🚀 快速开始

### 前置要求

- Node.js 14+
- npm 或 yarn
- 支持WebRTC的现代浏览器
- 已授权的摄像头权限

### 安装

```bash
# 克隆仓库
git clone https://github.com/Seeeveeen/gesture-tarot-3d.git
cd gesture-tarot-3d

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用会自动在 `http://localhost:3000` 打开。

## 📖 使用说明

### 操作方式

1. **打开摄像头** - 允许浏览器访问你的摄像头
2. **展示手掌** - 将你的手掌对准摄像头，应用会实时追踪你的手部动作
3. **掌心向上** - 展开手指，掌心朝向摄像头，触发卡牌准备状态
4. **向上挥手** - 快速向上挥动手掌，抽取一张塔罗牌
5. **查看结果** - 卡牌会翻转展示，显示牌名和寓意

### 手势识别

- **PALM_UP（掌心朝上）** - 展示手掌，手指伸展
- **SWIPE_UP（向上挥手）** - 快速向上移动手掌，抽取卡牌
- **GRAB（握拳）** - 手指紧握，表示抓取

## 🏗️ 项目结构

```
gesture-tarot-3d/
├── index.html              # 主HTML文件
├── package.json            # 项目配置
├── webpack.config.js       # Webpack配置
├── src/
│   ├── main.js            # 应用入口
│   ├── scene.js           # 3D场景管理
│   ├── gesture.js         # 手势检测
│   └── tarot.js           # 塔罗牌库
└── dist/                  # 构建输出目录
```

## 🔧 技术栈

| 技术 | 用途 |
|------|------|
| Three.js | 3D渲染引擎 |
| MediaPipe | 手部追踪和识别 |
| WebGL | 图形渲染 |
| Webpack | 模块打包工具 |
| Babel | JavaScript转译 |

## 📝 核心模块

### `Scene3D` (scene.js)
- 管理3D场景、相机和渲染器
- 创建卡牌和手部模型
- 处理卡牌动画效果

### `GestureDetector` (gesture.js)
- 初始化MediaPipe手部检测
- 处理视频输入和手部追踪
- 触发手势回调事件

### `TarotDeck` (tarot.js)
- 存储完整的塔罗牌库
- 实现随机抽取逻辑
- 提供牌名和寓意查询

### `TarotApp` (main.js)
- 整合所有模块
- 处理用户交互
- 管理应用生命周期

## 🎨 自定义

### 修改卡牌外观

在 `scene.js` 中的 `initCards()` 方法：

```javascript
const cardMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b00ff,        // 修改颜色
    metalness: 0.3,         // 金属感
    roughness: 0.4,         // 粗糙度
    emissive: 0x4a0080      // 自发光颜色
});
```

### 调整手势灵敏度

在 `main.js` 中的 `analyzeGesture()` 方法：

```javascript
const fingersExtended = fingers.filter(f => 
    Math.sqrt(Math.pow(f.x - wrist.x, 2) + Math.pow(f.y - wrist.y, 2)) > 0.1  // 调整阈值
).length;
```

## 🐛 故障排除

### 摄像头无法启动
- 检查浏览器权限设置
- 确保使用HTTPS或localhost
- 尝试刷新页面

### 手势无法识别
- 确保光线充足
- 将手放在摄像头中央
- 等待一秒让系统初始化

### 卡牌动画卡顿
- 检查GPU加速是否启用
- 降低场景复杂度
- 检查浏览器控制台的性能警告

## 📦 构建生产版本

```bash
npm run build
```

构建输出将保存在 `dist/` 目录。

## 📜 许可证

MIT License

## 🤝 贡献

欢迎提交问题报告和改进建议！

## 🌟 致谢

- MediaPipe 团队 - 出色的手部检测库
- Three.js 社区 - 强大的3D渲染框架
- 塔罗牌传统 - 古老而神秘的智慧

---

**Created with ✨ and magic by Seeeveeen**

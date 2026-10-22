# xiaoma-opus3D

用 three.js **纯代码**搭一整片建筑场景（古镇、寺庙、园林、街区、景区……），交付一个**可以嵌进任何网页、能拖动旋转和缩放的 3D 模型**。不用任何 3D 模型、贴图或照片：几何、材质、纹理全部由代码生成。

这是一个 [Claude Code](https://claude.com/claude-code) skill。它把“多个 AI Agent 合力搭大场景”的流程固定下来：先出平面图、用脚本查碰撞，再派多个子 Agent 并行各建一块、各自截图对比，最后打包成可嵌入的交互模型并自动测试。

[![乌镇西栅 · 点击打开可交互的在线模型](docs/preview.gif)](https://crawfordxx.github.io/xiaoma-opus3D/)

**在线演示：** <https://crawfordxx.github.io/xiaoma-opus3D/>（点上面的动图也能进。乌镇西栅，日落后灯笼刚亮的一刻。左键拖动旋转、滚轮缩放、右键平移）

> *English: a Claude Code skill that builds a whole procedural architectural scene in three.js — no models, textures or photos — by laying out a checked floor plan, dispatching parallel sub-agents per zone with screenshot reviews, and shipping an embeddable, orbit/zoomable interactive model (single self-contained HTML + a script-mount bundle). See the live Wuzhen demo above.*

## 在 README 里直接拖一拖

GitHub 的 README 不能运行 WebGL，所以完整模型只能在上面的在线演示里看。下面是从同一份平面图（`layout.js`）导出的**白模**：只有体块，没有颜色、灯光和水面，但可以直接拖动旋转、滚轮缩放。可以看到两条河十字相交、成排的民居、西北角的白莲塔（白模里挪到了区块内）、河口的两座拱桥。

```stl
solid wuzhen
facet normal 0.00 0.00 1.00
outer loop
vertex -120 80 0
vertex -120 6 0
vertex -4 6 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -120 80 0
vertex -4 6 0
vertex -4 80 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -120 6 -2.7
vertex -4 6 -2.7
vertex -4 6 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -120 6 -2.7
vertex -4 6 0
vertex -120 6 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -4 80 -2.7
vertex -120 80 -2.7
vertex -120 80 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -4 80 -2.7
vertex -120 80 0
vertex -4 80 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -4 6 -2.7
vertex -4 80 -2.7
vertex -4 80 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -4 6 -2.7
vertex -4 80 0
vertex -4 6 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -120 80 -2.7
vertex -120 6 -2.7
vertex -120 6 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -120 80 -2.7
vertex -120 6 0
vertex -120 80 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -120 -6 0
vertex -120 -80 0
vertex -4 -80 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -120 -6 0
vertex -4 -80 0
vertex -4 -6 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -120 -80 -2.7
vertex -4 -80 -2.7
vertex -4 -80 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -120 -80 -2.7
vertex -4 -80 0
vertex -120 -80 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -4 -6 -2.7
vertex -120 -6 -2.7
vertex -120 -6 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -4 -6 -2.7
vertex -120 -6 0
vertex -4 -6 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -4 -80 -2.7
vertex -4 -6 -2.7
vertex -4 -6 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -4 -80 -2.7
vertex -4 -6 0
vertex -4 -80 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -120 -6 -2.7
vertex -120 -80 -2.7
vertex -120 -80 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -120 -6 -2.7
vertex -120 -80 0
vertex -120 -6 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 4 80 0
vertex 4 6 0
vertex 120 6 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 4 80 0
vertex 120 6 0
vertex 120 80 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 4 6 -2.7
vertex 120 6 -2.7
vertex 120 6 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 4 6 -2.7
vertex 120 6 0
vertex 4 6 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 120 80 -2.7
vertex 4 80 -2.7
vertex 4 80 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 120 80 -2.7
vertex 4 80 0
vertex 120 80 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 120 6 -2.7
vertex 120 80 -2.7
vertex 120 80 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 120 6 -2.7
vertex 120 80 0
vertex 120 6 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 4 80 -2.7
vertex 4 6 -2.7
vertex 4 6 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 4 80 -2.7
vertex 4 6 0
vertex 4 80 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 4 -6 0
vertex 4 -80 0
vertex 120 -80 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 4 -6 0
vertex 120 -80 0
vertex 120 -6 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 4 -80 -2.7
vertex 120 -80 -2.7
vertex 120 -80 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 4 -80 -2.7
vertex 120 -80 0
vertex 4 -80 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 120 -6 -2.7
vertex 4 -6 -2.7
vertex 4 -6 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 120 -6 -2.7
vertex 4 -6 0
vertex 120 -6 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 120 -80 -2.7
vertex 120 -6 -2.7
vertex 120 -6 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 120 -80 -2.7
vertex 120 -6 0
vertex 120 -80 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 4 -6 -2.7
vertex 4 -80 -2.7
vertex 4 -80 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 4 -6 -2.7
vertex 4 -80 0
vertex 4 -6 0
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -120 6 -1.2
vertex -120 -6 -1.2
vertex 120 -6 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -120 6 -1.2
vertex 120 -6 -1.2
vertex 120 6 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -4 80 -1.2
vertex -4 6 -1.2
vertex 4 6 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -4 80 -1.2
vertex 4 6 -1.2
vertex 4 80 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -4 -6 -1.2
vertex -4 -80 -1.2
vertex 4 -80 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -4 -6 -1.2
vertex 4 -80 -1.2
vertex 4 -6 -1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 16 6.6
vertex -118 6 6.6
vertex -107.2 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 16 6.6
vertex -107.2 6 6.6
vertex -107.2 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 6 0
vertex -107.2 6 0
vertex -107.2 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 6 0
vertex -107.2 6 6.6
vertex -118 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -107.2 16 0
vertex -118 16 0
vertex -118 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -107.2 16 0
vertex -118 16 6.6
vertex -107.2 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -107.2 6 0
vertex -107.2 16 0
vertex -107.2 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -107.2 6 0
vertex -107.2 16 6.6
vertex -107.2 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 16 0
vertex -118 6 0
vertex -118 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 16 0
vertex -118 6 6.6
vertex -118 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 6 6.6
vertex -107.2 6 6.6
vertex -107.2 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 6 6.6
vertex -107.2 11 9.1
vertex -118 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -107.2 16 6.6
vertex -118 16 6.6
vertex -118 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -107.2 16 6.6
vertex -118 11 9.1
vertex -107.2 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 16 6.6
vertex -118 6 6.6
vertex -118 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -107.2 6 6.6
vertex -107.2 16 6.6
vertex -107.2 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -107.2 16 6.2
vertex -107.2 6 6.2
vertex -96.4 6 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -107.2 16 6.2
vertex -96.4 6 6.2
vertex -96.4 16 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -107.2 6 0
vertex -96.4 6 0
vertex -96.4 6 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -107.2 6 0
vertex -96.4 6 6.2
vertex -107.2 6 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -96.4 16 0
vertex -107.2 16 0
vertex -107.2 16 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -96.4 16 0
vertex -107.2 16 6.2
vertex -96.4 16 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -96.4 6 0
vertex -96.4 16 0
vertex -96.4 16 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -96.4 6 0
vertex -96.4 16 6.2
vertex -96.4 6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -107.2 16 0
vertex -107.2 6 0
vertex -107.2 6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -107.2 16 0
vertex -107.2 6 6.2
vertex -107.2 16 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -107.2 6 6.2
vertex -96.4 6 6.2
vertex -96.4 11 8.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -107.2 6 6.2
vertex -96.4 11 8.7
vertex -107.2 11 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -96.4 16 6.2
vertex -107.2 16 6.2
vertex -107.2 11 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -96.4 16 6.2
vertex -107.2 11 8.7
vertex -96.4 11 8.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -107.2 16 6.2
vertex -107.2 6 6.2
vertex -107.2 11 8.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -96.4 6 6.2
vertex -96.4 16 6.2
vertex -96.4 11 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -96.4 16 6.6
vertex -96.4 6 6.6
vertex -85.6 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -96.4 16 6.6
vertex -85.6 6 6.6
vertex -85.6 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -96.4 6 0
vertex -85.6 6 0
vertex -85.6 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -96.4 6 0
vertex -85.6 6 6.6
vertex -96.4 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -85.6 16 0
vertex -96.4 16 0
vertex -96.4 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -85.6 16 0
vertex -96.4 16 6.6
vertex -85.6 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -85.6 6 0
vertex -85.6 16 0
vertex -85.6 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -85.6 6 0
vertex -85.6 16 6.6
vertex -85.6 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -96.4 16 0
vertex -96.4 6 0
vertex -96.4 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -96.4 16 0
vertex -96.4 6 6.6
vertex -96.4 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -96.4 6 6.6
vertex -85.6 6 6.6
vertex -85.6 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -96.4 6 6.6
vertex -85.6 11 9.1
vertex -96.4 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -85.6 16 6.6
vertex -96.4 16 6.6
vertex -96.4 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -85.6 16 6.6
vertex -96.4 11 9.1
vertex -85.6 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -96.4 16 6.6
vertex -96.4 6 6.6
vertex -96.4 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -85.6 6 6.6
vertex -85.6 16 6.6
vertex -85.6 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -96.4 6 2.8
vertex -96.4 3.8 2.8
vertex -85.6 3.8 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -96.4 6 2.8
vertex -85.6 3.8 2.8
vertex -85.6 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -96.4 3.8 -1.2
vertex -85.6 3.8 -1.2
vertex -85.6 3.8 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -96.4 3.8 -1.2
vertex -85.6 3.8 2.8
vertex -96.4 3.8 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -85.6 6 -1.2
vertex -96.4 6 -1.2
vertex -96.4 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -85.6 6 -1.2
vertex -96.4 6 2.8
vertex -85.6 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -85.6 3.8 -1.2
vertex -85.6 6 -1.2
vertex -85.6 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -85.6 3.8 -1.2
vertex -85.6 6 2.8
vertex -85.6 3.8 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -96.4 6 -1.2
vertex -96.4 3.8 -1.2
vertex -96.4 3.8 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -96.4 6 -1.2
vertex -96.4 3.8 2.8
vertex -96.4 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -85.6 16 4.1
vertex -85.6 6 4.1
vertex -71.2 6 4.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -85.6 16 4.1
vertex -71.2 6 4.1
vertex -71.2 16 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -85.6 6 0
vertex -71.2 6 0
vertex -71.2 6 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -85.6 6 0
vertex -71.2 6 4.1
vertex -85.6 6 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -71.2 16 0
vertex -85.6 16 0
vertex -85.6 16 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -71.2 16 0
vertex -85.6 16 4.1
vertex -71.2 16 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -71.2 6 0
vertex -71.2 16 0
vertex -71.2 16 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -71.2 6 0
vertex -71.2 16 4.1
vertex -71.2 6 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -85.6 16 0
vertex -85.6 6 0
vertex -85.6 6 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -85.6 16 0
vertex -85.6 6 4.1
vertex -85.6 16 4.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -85.6 6 4.1
vertex -71.2 6 4.1
vertex -71.2 11 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -85.6 6 4.1
vertex -71.2 11 6.6
vertex -85.6 11 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -71.2 16 4.1
vertex -85.6 16 4.1
vertex -85.6 11 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -71.2 16 4.1
vertex -85.6 11 6.6
vertex -71.2 11 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -85.6 16 4.1
vertex -85.6 6 4.1
vertex -85.6 11 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -71.2 6 4.1
vertex -71.2 16 4.1
vertex -71.2 11 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -85.6 6 2.8
vertex -85.6 3.9 2.8
vertex -71.2 3.9 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -85.6 6 2.8
vertex -71.2 3.9 2.8
vertex -71.2 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -85.6 3.9 -1.2
vertex -71.2 3.9 -1.2
vertex -71.2 3.9 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -85.6 3.9 -1.2
vertex -71.2 3.9 2.8
vertex -85.6 3.9 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -71.2 6 -1.2
vertex -85.6 6 -1.2
vertex -85.6 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -71.2 6 -1.2
vertex -85.6 6 2.8
vertex -71.2 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -71.2 3.9 -1.2
vertex -71.2 6 -1.2
vertex -71.2 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -71.2 3.9 -1.2
vertex -71.2 6 2.8
vertex -71.2 3.9 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -85.6 6 -1.2
vertex -85.6 3.9 -1.2
vertex -85.6 3.9 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -85.6 6 -1.2
vertex -85.6 3.9 2.8
vertex -85.6 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -71.2 16 6.6
vertex -71.2 6 6.6
vertex -56.8 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -71.2 16 6.6
vertex -56.8 6 6.6
vertex -56.8 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -71.2 6 0
vertex -56.8 6 0
vertex -56.8 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -71.2 6 0
vertex -56.8 6 6.6
vertex -71.2 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 16 0
vertex -71.2 16 0
vertex -71.2 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 16 0
vertex -71.2 16 6.6
vertex -56.8 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 6 0
vertex -56.8 16 0
vertex -56.8 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 6 0
vertex -56.8 16 6.6
vertex -56.8 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -71.2 16 0
vertex -71.2 6 0
vertex -71.2 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -71.2 16 0
vertex -71.2 6 6.6
vertex -71.2 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -71.2 6 6.6
vertex -56.8 6 6.6
vertex -56.8 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -71.2 6 6.6
vertex -56.8 11 9.1
vertex -71.2 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -56.8 16 6.6
vertex -71.2 16 6.6
vertex -71.2 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -56.8 16 6.6
vertex -71.2 11 9.1
vertex -56.8 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -71.2 16 6.6
vertex -71.2 6 6.6
vertex -71.2 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 6 6.6
vertex -56.8 16 6.6
vertex -56.8 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -71.2 6 2.8
vertex -71.2 4.1 2.8
vertex -56.8 4.1 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -71.2 6 2.8
vertex -56.8 4.1 2.8
vertex -56.8 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -71.2 4.1 -1.2
vertex -56.8 4.1 -1.2
vertex -56.8 4.1 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -71.2 4.1 -1.2
vertex -56.8 4.1 2.8
vertex -71.2 4.1 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 6 -1.2
vertex -71.2 6 -1.2
vertex -71.2 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 6 -1.2
vertex -71.2 6 2.8
vertex -56.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 4.1 -1.2
vertex -56.8 6 -1.2
vertex -56.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 4.1 -1.2
vertex -56.8 6 2.8
vertex -56.8 4.1 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -71.2 6 -1.2
vertex -71.2 4.1 -1.2
vertex -71.2 4.1 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -71.2 6 -1.2
vertex -71.2 4.1 2.8
vertex -71.2 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -55.6 16 6.5
vertex -55.6 6 6.5
vertex -41.2 6 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -55.6 16 6.5
vertex -41.2 6 6.5
vertex -41.2 16 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -55.6 6 0
vertex -41.2 6 0
vertex -41.2 6 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -55.6 6 0
vertex -41.2 6 6.5
vertex -55.6 6 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -41.2 16 0
vertex -55.6 16 0
vertex -55.6 16 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -41.2 16 0
vertex -55.6 16 6.5
vertex -41.2 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -41.2 6 0
vertex -41.2 16 0
vertex -41.2 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -41.2 6 0
vertex -41.2 16 6.5
vertex -41.2 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -55.6 16 0
vertex -55.6 6 0
vertex -55.6 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -55.6 16 0
vertex -55.6 6 6.5
vertex -55.6 16 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -55.6 6 6.5
vertex -41.2 6 6.5
vertex -41.2 11 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -55.6 6 6.5
vertex -41.2 11 9
vertex -55.6 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -41.2 16 6.5
vertex -55.6 16 6.5
vertex -55.6 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -41.2 16 6.5
vertex -55.6 11 9
vertex -41.2 11 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -55.6 16 6.5
vertex -55.6 6 6.5
vertex -55.6 11 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -41.2 6 6.5
vertex -41.2 16 6.5
vertex -41.2 11 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -41.2 16 6.2
vertex -41.2 6 6.2
vertex -26.8 6 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -41.2 16 6.2
vertex -26.8 6 6.2
vertex -26.8 16 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -41.2 6 0
vertex -26.8 6 0
vertex -26.8 6 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -41.2 6 0
vertex -26.8 6 6.2
vertex -41.2 6 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -26.8 16 0
vertex -41.2 16 0
vertex -41.2 16 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -26.8 16 0
vertex -41.2 16 6.2
vertex -26.8 16 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -26.8 6 0
vertex -26.8 16 0
vertex -26.8 16 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -26.8 6 0
vertex -26.8 16 6.2
vertex -26.8 6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -41.2 16 0
vertex -41.2 6 0
vertex -41.2 6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -41.2 16 0
vertex -41.2 6 6.2
vertex -41.2 16 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -41.2 6 6.2
vertex -26.8 6 6.2
vertex -26.8 11 8.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -41.2 6 6.2
vertex -26.8 11 8.7
vertex -41.2 11 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -26.8 16 6.2
vertex -41.2 16 6.2
vertex -41.2 11 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -26.8 16 6.2
vertex -41.2 11 8.7
vertex -26.8 11 8.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -41.2 16 6.2
vertex -41.2 6 6.2
vertex -41.2 11 8.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -26.8 6 6.2
vertex -26.8 16 6.2
vertex -26.8 11 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -41.2 6 2.8
vertex -41.2 4.1 2.8
vertex -26.8 4.1 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -41.2 6 2.8
vertex -26.8 4.1 2.8
vertex -26.8 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -41.2 4.1 -1.2
vertex -26.8 4.1 -1.2
vertex -26.8 4.1 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -41.2 4.1 -1.2
vertex -26.8 4.1 2.8
vertex -41.2 4.1 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -26.8 6 -1.2
vertex -41.2 6 -1.2
vertex -41.2 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -26.8 6 -1.2
vertex -41.2 6 2.8
vertex -26.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -26.8 4.1 -1.2
vertex -26.8 6 -1.2
vertex -26.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -26.8 4.1 -1.2
vertex -26.8 6 2.8
vertex -26.8 4.1 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -41.2 6 -1.2
vertex -41.2 4.1 -1.2
vertex -41.2 4.1 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -41.2 6 -1.2
vertex -41.2 4.1 2.8
vertex -41.2 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -25.6 16 6.5
vertex -25.6 6 6.5
vertex -18.4 6 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -25.6 16 6.5
vertex -18.4 6 6.5
vertex -18.4 16 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -25.6 6 0
vertex -18.4 6 0
vertex -18.4 6 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -25.6 6 0
vertex -18.4 6 6.5
vertex -25.6 6 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -18.4 16 0
vertex -25.6 16 0
vertex -25.6 16 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -18.4 16 0
vertex -25.6 16 6.5
vertex -18.4 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 6 0
vertex -18.4 16 0
vertex -18.4 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 6 0
vertex -18.4 16 6.5
vertex -18.4 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -25.6 16 0
vertex -25.6 6 0
vertex -25.6 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -25.6 16 0
vertex -25.6 6 6.5
vertex -25.6 16 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -25.6 6 6.5
vertex -18.4 6 6.5
vertex -18.4 11 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -25.6 6 6.5
vertex -18.4 11 9
vertex -25.6 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -18.4 16 6.5
vertex -25.6 16 6.5
vertex -25.6 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -18.4 16 6.5
vertex -25.6 11 9
vertex -18.4 11 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -25.6 16 6.5
vertex -25.6 6 6.5
vertex -25.6 11 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 6 6.5
vertex -18.4 16 6.5
vertex -18.4 11 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 11.5 16 6.9
vertex 11.5 6 6.9
vertex 22.3 6 6.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 11.5 16 6.9
vertex 22.3 6 6.9
vertex 22.3 16 6.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 11.5 6 0
vertex 22.3 6 0
vertex 22.3 6 6.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 11.5 6 0
vertex 22.3 6 6.9
vertex 11.5 6 6.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 22.3 16 0
vertex 11.5 16 0
vertex 11.5 16 6.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 22.3 16 0
vertex 11.5 16 6.9
vertex 22.3 16 6.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 22.3 6 0
vertex 22.3 16 0
vertex 22.3 16 6.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 22.3 6 0
vertex 22.3 16 6.9
vertex 22.3 6 6.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 11.5 16 0
vertex 11.5 6 0
vertex 11.5 6 6.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 11.5 16 0
vertex 11.5 6 6.9
vertex 11.5 16 6.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 11.5 6 6.9
vertex 22.3 6 6.9
vertex 22.3 11 9.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 11.5 6 6.9
vertex 22.3 11 9.4
vertex 11.5 11 9.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 22.3 16 6.9
vertex 11.5 16 6.9
vertex 11.5 11 9.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 22.3 16 6.9
vertex 11.5 11 9.4
vertex 22.3 11 9.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 11.5 16 6.9
vertex 11.5 6 6.9
vertex 11.5 11 9.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 22.3 6 6.9
vertex 22.3 16 6.9
vertex 22.3 11 9.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 11.5 6 2.8
vertex 11.5 3.6 2.8
vertex 22.3 3.6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 11.5 6 2.8
vertex 22.3 3.6 2.8
vertex 22.3 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 11.5 3.6 -1.2
vertex 22.3 3.6 -1.2
vertex 22.3 3.6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 11.5 3.6 -1.2
vertex 22.3 3.6 2.8
vertex 11.5 3.6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 22.3 6 -1.2
vertex 11.5 6 -1.2
vertex 11.5 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 22.3 6 -1.2
vertex 11.5 6 2.8
vertex 22.3 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 22.3 3.6 -1.2
vertex 22.3 6 -1.2
vertex 22.3 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 22.3 3.6 -1.2
vertex 22.3 6 2.8
vertex 22.3 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 11.5 6 -1.2
vertex 11.5 3.6 -1.2
vertex 11.5 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 11.5 6 -1.2
vertex 11.5 3.6 2.8
vertex 11.5 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 23.5 16 6.6
vertex 23.5 6 6.6
vertex 34.3 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 23.5 16 6.6
vertex 34.3 6 6.6
vertex 34.3 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 23.5 6 0
vertex 34.3 6 0
vertex 34.3 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 23.5 6 0
vertex 34.3 6 6.6
vertex 23.5 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 34.3 16 0
vertex 23.5 16 0
vertex 23.5 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 34.3 16 0
vertex 23.5 16 6.6
vertex 34.3 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 34.3 6 0
vertex 34.3 16 0
vertex 34.3 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 34.3 6 0
vertex 34.3 16 6.6
vertex 34.3 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 23.5 16 0
vertex 23.5 6 0
vertex 23.5 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 23.5 16 0
vertex 23.5 6 6.6
vertex 23.5 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 23.5 6 6.6
vertex 34.3 6 6.6
vertex 34.3 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 23.5 6 6.6
vertex 34.3 11 9.1
vertex 23.5 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 34.3 16 6.6
vertex 23.5 16 6.6
vertex 23.5 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 34.3 16 6.6
vertex 23.5 11 9.1
vertex 34.3 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 23.5 16 6.6
vertex 23.5 6 6.6
vertex 23.5 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 34.3 6 6.6
vertex 34.3 16 6.6
vertex 34.3 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 23.5 6 2.8
vertex 23.5 3.6 2.8
vertex 34.3 3.6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 23.5 6 2.8
vertex 34.3 3.6 2.8
vertex 34.3 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 23.5 3.6 -1.2
vertex 34.3 3.6 -1.2
vertex 34.3 3.6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 23.5 3.6 -1.2
vertex 34.3 3.6 2.8
vertex 23.5 3.6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 34.3 6 -1.2
vertex 23.5 6 -1.2
vertex 23.5 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 34.3 6 -1.2
vertex 23.5 6 2.8
vertex 34.3 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 34.3 3.6 -1.2
vertex 34.3 6 -1.2
vertex 34.3 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 34.3 3.6 -1.2
vertex 34.3 6 2.8
vertex 34.3 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 23.5 6 -1.2
vertex 23.5 3.6 -1.2
vertex 23.5 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 23.5 6 -1.2
vertex 23.5 3.6 2.8
vertex 23.5 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 34.3 16 6.6
vertex 34.3 6 6.6
vertex 45.1 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 34.3 16 6.6
vertex 45.1 6 6.6
vertex 45.1 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 34.3 6 0
vertex 45.1 6 0
vertex 45.1 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 34.3 6 0
vertex 45.1 6 6.6
vertex 34.3 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 45.1 16 0
vertex 34.3 16 0
vertex 34.3 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 45.1 16 0
vertex 34.3 16 6.6
vertex 45.1 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 45.1 6 0
vertex 45.1 16 0
vertex 45.1 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 45.1 6 0
vertex 45.1 16 6.6
vertex 45.1 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 34.3 16 0
vertex 34.3 6 0
vertex 34.3 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 34.3 16 0
vertex 34.3 6 6.6
vertex 34.3 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 34.3 6 6.6
vertex 45.1 6 6.6
vertex 45.1 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 34.3 6 6.6
vertex 45.1 11 9.1
vertex 34.3 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 45.1 16 6.6
vertex 34.3 16 6.6
vertex 34.3 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 45.1 16 6.6
vertex 34.3 11 9.1
vertex 45.1 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 34.3 16 6.6
vertex 34.3 6 6.6
vertex 34.3 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 45.1 6 6.6
vertex 45.1 16 6.6
vertex 45.1 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 34.3 6 2.8
vertex 34.3 4.2 2.8
vertex 45.1 4.2 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 34.3 6 2.8
vertex 45.1 4.2 2.8
vertex 45.1 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 34.3 4.2 -1.2
vertex 45.1 4.2 -1.2
vertex 45.1 4.2 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 34.3 4.2 -1.2
vertex 45.1 4.2 2.8
vertex 34.3 4.2 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 45.1 6 -1.2
vertex 34.3 6 -1.2
vertex 34.3 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 45.1 6 -1.2
vertex 34.3 6 2.8
vertex 45.1 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 45.1 4.2 -1.2
vertex 45.1 6 -1.2
vertex 45.1 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 45.1 4.2 -1.2
vertex 45.1 6 2.8
vertex 45.1 4.2 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 34.3 6 -1.2
vertex 34.3 4.2 -1.2
vertex 34.3 4.2 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 34.3 6 -1.2
vertex 34.3 4.2 2.8
vertex 34.3 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 45.1 16 6.7
vertex 45.1 6 6.7
vertex 55.9 6 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 45.1 16 6.7
vertex 55.9 6 6.7
vertex 55.9 16 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 45.1 6 0
vertex 55.9 6 0
vertex 55.9 6 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 45.1 6 0
vertex 55.9 6 6.7
vertex 45.1 6 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 55.9 16 0
vertex 45.1 16 0
vertex 45.1 16 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 55.9 16 0
vertex 45.1 16 6.7
vertex 55.9 16 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 55.9 6 0
vertex 55.9 16 0
vertex 55.9 16 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 55.9 6 0
vertex 55.9 16 6.7
vertex 55.9 6 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 45.1 16 0
vertex 45.1 6 0
vertex 45.1 6 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 45.1 16 0
vertex 45.1 6 6.7
vertex 45.1 16 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 45.1 6 6.7
vertex 55.9 6 6.7
vertex 55.9 11 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 45.1 6 6.7
vertex 55.9 11 9.2
vertex 45.1 11 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 55.9 16 6.7
vertex 45.1 16 6.7
vertex 45.1 11 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 55.9 16 6.7
vertex 45.1 11 9.2
vertex 55.9 11 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 45.1 16 6.7
vertex 45.1 6 6.7
vertex 45.1 11 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 55.9 6 6.7
vertex 55.9 16 6.7
vertex 55.9 11 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.2 16 6.3
vertex 65.2 6 6.3
vertex 72.4 6 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.2 16 6.3
vertex 72.4 6 6.3
vertex 72.4 16 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.2 6 0
vertex 72.4 6 0
vertex 72.4 6 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.2 6 0
vertex 72.4 6 6.3
vertex 65.2 6 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 72.4 16 0
vertex 65.2 16 0
vertex 65.2 16 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 72.4 16 0
vertex 65.2 16 6.3
vertex 72.4 16 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 72.4 6 0
vertex 72.4 16 0
vertex 72.4 16 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 72.4 6 0
vertex 72.4 16 6.3
vertex 72.4 6 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.2 16 0
vertex 65.2 6 0
vertex 65.2 6 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.2 16 0
vertex 65.2 6 6.3
vertex 65.2 16 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 65.2 6 6.3
vertex 72.4 6 6.3
vertex 72.4 11 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 65.2 6 6.3
vertex 72.4 11 8.8
vertex 65.2 11 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 72.4 16 6.3
vertex 65.2 16 6.3
vertex 65.2 11 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 72.4 16 6.3
vertex 65.2 11 8.8
vertex 72.4 11 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.2 16 6.3
vertex 65.2 6 6.3
vertex 65.2 11 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 72.4 6 6.3
vertex 72.4 16 6.3
vertex 72.4 11 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.2 6 2.8
vertex 65.2 3.5 2.8
vertex 72.4 3.5 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.2 6 2.8
vertex 72.4 3.5 2.8
vertex 72.4 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.2 3.5 -1.2
vertex 72.4 3.5 -1.2
vertex 72.4 3.5 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.2 3.5 -1.2
vertex 72.4 3.5 2.8
vertex 65.2 3.5 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 72.4 6 -1.2
vertex 65.2 6 -1.2
vertex 65.2 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 72.4 6 -1.2
vertex 65.2 6 2.8
vertex 72.4 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 72.4 3.5 -1.2
vertex 72.4 6 -1.2
vertex 72.4 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 72.4 3.5 -1.2
vertex 72.4 6 2.8
vertex 72.4 3.5 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.2 6 -1.2
vertex 65.2 3.5 -1.2
vertex 65.2 3.5 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.2 6 -1.2
vertex 65.2 3.5 2.8
vertex 65.2 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 72.4 16 6.4
vertex 72.4 6 6.4
vertex 86.8 6 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 72.4 16 6.4
vertex 86.8 6 6.4
vertex 86.8 16 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 72.4 6 0
vertex 86.8 6 0
vertex 86.8 6 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 72.4 6 0
vertex 86.8 6 6.4
vertex 72.4 6 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 86.8 16 0
vertex 72.4 16 0
vertex 72.4 16 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 86.8 16 0
vertex 72.4 16 6.4
vertex 86.8 16 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 86.8 6 0
vertex 86.8 16 0
vertex 86.8 16 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 86.8 6 0
vertex 86.8 16 6.4
vertex 86.8 6 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 72.4 16 0
vertex 72.4 6 0
vertex 72.4 6 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 72.4 16 0
vertex 72.4 6 6.4
vertex 72.4 16 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 72.4 6 6.4
vertex 86.8 6 6.4
vertex 86.8 11 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 72.4 6 6.4
vertex 86.8 11 8.9
vertex 72.4 11 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 86.8 16 6.4
vertex 72.4 16 6.4
vertex 72.4 11 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 86.8 16 6.4
vertex 72.4 11 8.9
vertex 86.8 11 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 72.4 16 6.4
vertex 72.4 6 6.4
vertex 72.4 11 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 86.8 6 6.4
vertex 86.8 16 6.4
vertex 86.8 11 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 86.8 16 6.6
vertex 86.8 6 6.6
vertex 97.6 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 86.8 16 6.6
vertex 97.6 6 6.6
vertex 97.6 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 86.8 6 0
vertex 97.6 6 0
vertex 97.6 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 86.8 6 0
vertex 97.6 6 6.6
vertex 86.8 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 97.6 16 0
vertex 86.8 16 0
vertex 86.8 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 97.6 16 0
vertex 86.8 16 6.6
vertex 97.6 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 97.6 6 0
vertex 97.6 16 0
vertex 97.6 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 97.6 6 0
vertex 97.6 16 6.6
vertex 97.6 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 86.8 16 0
vertex 86.8 6 0
vertex 86.8 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 86.8 16 0
vertex 86.8 6 6.6
vertex 86.8 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 86.8 6 6.6
vertex 97.6 6 6.6
vertex 97.6 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 86.8 6 6.6
vertex 97.6 11 9.1
vertex 86.8 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 97.6 16 6.6
vertex 86.8 16 6.6
vertex 86.8 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 97.6 16 6.6
vertex 86.8 11 9.1
vertex 97.6 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 86.8 16 6.6
vertex 86.8 6 6.6
vertex 86.8 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 97.6 6 6.6
vertex 97.6 16 6.6
vertex 97.6 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 86.8 6 2.8
vertex 86.8 3.8 2.8
vertex 97.6 3.8 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 86.8 6 2.8
vertex 97.6 3.8 2.8
vertex 97.6 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 86.8 3.8 -1.2
vertex 97.6 3.8 -1.2
vertex 97.6 3.8 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 86.8 3.8 -1.2
vertex 97.6 3.8 2.8
vertex 86.8 3.8 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 97.6 6 -1.2
vertex 86.8 6 -1.2
vertex 86.8 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 97.6 6 -1.2
vertex 86.8 6 2.8
vertex 97.6 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 97.6 3.8 -1.2
vertex 97.6 6 -1.2
vertex 97.6 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 97.6 3.8 -1.2
vertex 97.6 6 2.8
vertex 97.6 3.8 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 86.8 6 -1.2
vertex 86.8 3.8 -1.2
vertex 86.8 3.8 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 86.8 6 -1.2
vertex 86.8 3.8 2.8
vertex 86.8 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 98.8 16 6.5
vertex 98.8 6 6.5
vertex 106 6 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 98.8 16 6.5
vertex 106 6 6.5
vertex 106 16 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 98.8 6 0
vertex 106 6 0
vertex 106 6 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 98.8 6 0
vertex 106 6 6.5
vertex 98.8 6 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 106 16 0
vertex 98.8 16 0
vertex 98.8 16 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 106 16 0
vertex 98.8 16 6.5
vertex 106 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 106 6 0
vertex 106 16 0
vertex 106 16 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 106 6 0
vertex 106 16 6.5
vertex 106 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 98.8 16 0
vertex 98.8 6 0
vertex 98.8 6 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 98.8 16 0
vertex 98.8 6 6.5
vertex 98.8 16 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 98.8 6 6.5
vertex 106 6 6.5
vertex 106 11 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 98.8 6 6.5
vertex 106 11 9
vertex 98.8 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 106 16 6.5
vertex 98.8 16 6.5
vertex 98.8 11 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 106 16 6.5
vertex 98.8 11 9
vertex 106 11 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 98.8 16 6.5
vertex 98.8 6 6.5
vertex 98.8 11 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 106 6 6.5
vertex 106 16 6.5
vertex 106 11 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 98.8 6 2.8
vertex 98.8 3.5 2.8
vertex 106 3.5 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 98.8 6 2.8
vertex 106 3.5 2.8
vertex 106 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 98.8 3.5 -1.2
vertex 106 3.5 -1.2
vertex 106 3.5 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 98.8 3.5 -1.2
vertex 106 3.5 2.8
vertex 98.8 3.5 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 106 6 -1.2
vertex 98.8 6 -1.2
vertex 98.8 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 106 6 -1.2
vertex 98.8 6 2.8
vertex 106 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 106 3.5 -1.2
vertex 106 6 -1.2
vertex 106 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 106 3.5 -1.2
vertex 106 6 2.8
vertex 106 3.5 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 98.8 6 -1.2
vertex 98.8 3.5 -1.2
vertex 98.8 3.5 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 98.8 6 -1.2
vertex 98.8 3.5 2.8
vertex 98.8 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 106 16 6.6
vertex 106 6 6.6
vertex 116.8 6 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 106 16 6.6
vertex 116.8 6 6.6
vertex 116.8 16 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 106 6 0
vertex 116.8 6 0
vertex 116.8 6 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 106 6 0
vertex 116.8 6 6.6
vertex 106 6 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.8 16 0
vertex 106 16 0
vertex 106 16 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.8 16 0
vertex 106 16 6.6
vertex 116.8 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.8 6 0
vertex 116.8 16 0
vertex 116.8 16 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.8 6 0
vertex 116.8 16 6.6
vertex 116.8 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 106 16 0
vertex 106 6 0
vertex 106 6 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 106 16 0
vertex 106 6 6.6
vertex 106 16 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 106 6 6.6
vertex 116.8 6 6.6
vertex 116.8 11 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 106 6 6.6
vertex 116.8 11 9.1
vertex 106 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 116.8 16 6.6
vertex 106 16 6.6
vertex 106 11 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 116.8 16 6.6
vertex 106 11 9.1
vertex 116.8 11 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 106 16 6.6
vertex 106 6 6.6
vertex 106 11 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.8 6 6.6
vertex 116.8 16 6.6
vertex 116.8 11 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 106 6 2.8
vertex 106 3.6 2.8
vertex 116.8 3.6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 106 6 2.8
vertex 116.8 3.6 2.8
vertex 116.8 6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 106 3.6 -1.2
vertex 116.8 3.6 -1.2
vertex 116.8 3.6 2.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 106 3.6 -1.2
vertex 116.8 3.6 2.8
vertex 106 3.6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.8 6 -1.2
vertex 106 6 -1.2
vertex 106 6 2.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.8 6 -1.2
vertex 106 6 2.8
vertex 116.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.8 3.6 -1.2
vertex 116.8 6 -1.2
vertex 116.8 6 2.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.8 3.6 -1.2
vertex 116.8 6 2.8
vertex 116.8 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 106 6 -1.2
vertex 106 3.6 -1.2
vertex 106 3.6 2.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 106 6 -1.2
vertex 106 3.6 2.8
vertex 106 6 2.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 31 6.2
vertex -118 21 6.2
vertex -103.6 21 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 31 6.2
vertex -103.6 21 6.2
vertex -103.6 31 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 21 0
vertex -103.6 21 0
vertex -103.6 21 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 21 0
vertex -103.6 21 6.2
vertex -118 21 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 31 0
vertex -118 31 0
vertex -118 31 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 31 0
vertex -118 31 6.2
vertex -103.6 31 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 21 0
vertex -103.6 31 0
vertex -103.6 31 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 21 0
vertex -103.6 31 6.2
vertex -103.6 21 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 31 0
vertex -118 21 0
vertex -118 21 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 31 0
vertex -118 21 6.2
vertex -118 31 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 21 6.2
vertex -103.6 21 6.2
vertex -103.6 26 8.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 21 6.2
vertex -103.6 26 8.7
vertex -118 26 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 31 6.2
vertex -118 31 6.2
vertex -118 26 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 31 6.2
vertex -118 26 8.7
vertex -103.6 26 8.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 31 6.2
vertex -118 21 6.2
vertex -118 26 8.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 21 6.2
vertex -103.6 31 6.2
vertex -103.6 26 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -103.6 31 6.3
vertex -103.6 21 6.3
vertex -92.8 21 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -103.6 31 6.3
vertex -92.8 21 6.3
vertex -92.8 31 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -103.6 21 0
vertex -92.8 21 0
vertex -92.8 21 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -103.6 21 0
vertex -92.8 21 6.3
vertex -103.6 21 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -92.8 31 0
vertex -103.6 31 0
vertex -103.6 31 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -92.8 31 0
vertex -103.6 31 6.3
vertex -92.8 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -92.8 21 0
vertex -92.8 31 0
vertex -92.8 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -92.8 21 0
vertex -92.8 31 6.3
vertex -92.8 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -103.6 31 0
vertex -103.6 21 0
vertex -103.6 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -103.6 31 0
vertex -103.6 21 6.3
vertex -103.6 31 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -103.6 21 6.3
vertex -92.8 21 6.3
vertex -92.8 26 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -103.6 21 6.3
vertex -92.8 26 8.8
vertex -103.6 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -92.8 31 6.3
vertex -103.6 31 6.3
vertex -103.6 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -92.8 31 6.3
vertex -103.6 26 8.8
vertex -92.8 26 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -103.6 31 6.3
vertex -103.6 21 6.3
vertex -103.6 26 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -92.8 21 6.3
vertex -92.8 31 6.3
vertex -92.8 26 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -92.8 31 6.9
vertex -92.8 21 6.9
vertex -82 21 6.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -92.8 31 6.9
vertex -82 21 6.9
vertex -82 31 6.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -92.8 21 0
vertex -82 21 0
vertex -82 21 6.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -92.8 21 0
vertex -82 21 6.9
vertex -92.8 21 6.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -82 31 0
vertex -92.8 31 0
vertex -92.8 31 6.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -82 31 0
vertex -92.8 31 6.9
vertex -82 31 6.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -82 21 0
vertex -82 31 0
vertex -82 31 6.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -82 21 0
vertex -82 31 6.9
vertex -82 21 6.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -92.8 31 0
vertex -92.8 21 0
vertex -92.8 21 6.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -92.8 31 0
vertex -92.8 21 6.9
vertex -92.8 31 6.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -92.8 21 6.9
vertex -82 21 6.9
vertex -82 26 9.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -92.8 21 6.9
vertex -82 26 9.4
vertex -92.8 26 9.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -82 31 6.9
vertex -92.8 31 6.9
vertex -92.8 26 9.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -82 31 6.9
vertex -92.8 26 9.4
vertex -82 26 9.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -92.8 31 6.9
vertex -92.8 21 6.9
vertex -92.8 26 9.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -82 21 6.9
vertex -82 31 6.9
vertex -82 26 9.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -82 31 6.6
vertex -82 21 6.6
vertex -67.6 21 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -82 31 6.6
vertex -67.6 21 6.6
vertex -67.6 31 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -82 21 0
vertex -67.6 21 0
vertex -67.6 21 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -82 21 0
vertex -67.6 21 6.6
vertex -82 21 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -67.6 31 0
vertex -82 31 0
vertex -82 31 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -67.6 31 0
vertex -82 31 6.6
vertex -67.6 31 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -67.6 21 0
vertex -67.6 31 0
vertex -67.6 31 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -67.6 21 0
vertex -67.6 31 6.6
vertex -67.6 21 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -82 31 0
vertex -82 21 0
vertex -82 21 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -82 31 0
vertex -82 21 6.6
vertex -82 31 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -82 21 6.6
vertex -67.6 21 6.6
vertex -67.6 26 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -82 21 6.6
vertex -67.6 26 9.1
vertex -82 26 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -67.6 31 6.6
vertex -82 31 6.6
vertex -82 26 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -67.6 31 6.6
vertex -82 26 9.1
vertex -67.6 26 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -82 31 6.6
vertex -82 21 6.6
vertex -82 26 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -67.6 21 6.6
vertex -67.6 31 6.6
vertex -67.6 26 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -67.6 31 6
vertex -67.6 21 6
vertex -56.8 21 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -67.6 31 6
vertex -56.8 21 6
vertex -56.8 31 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -67.6 21 0
vertex -56.8 21 0
vertex -56.8 21 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -67.6 21 0
vertex -56.8 21 6
vertex -67.6 21 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 31 0
vertex -67.6 31 0
vertex -67.6 31 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -56.8 31 0
vertex -67.6 31 6
vertex -56.8 31 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 21 0
vertex -56.8 31 0
vertex -56.8 31 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 21 0
vertex -56.8 31 6
vertex -56.8 21 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -67.6 31 0
vertex -67.6 21 0
vertex -67.6 21 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -67.6 31 0
vertex -67.6 21 6
vertex -67.6 31 6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -67.6 21 6
vertex -56.8 21 6
vertex -56.8 26 8.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -67.6 21 6
vertex -56.8 26 8.5
vertex -67.6 26 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -56.8 31 6
vertex -67.6 31 6
vertex -67.6 26 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -56.8 31 6
vertex -67.6 26 8.5
vertex -56.8 26 8.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -67.6 31 6
vertex -67.6 21 6
vertex -67.6 26 8.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -56.8 21 6
vertex -56.8 31 6
vertex -56.8 26 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -56.8 31 6.7
vertex -56.8 21 6.7
vertex -42.4 21 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -56.8 31 6.7
vertex -42.4 21 6.7
vertex -42.4 31 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -56.8 21 0
vertex -42.4 21 0
vertex -42.4 21 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -56.8 21 0
vertex -42.4 21 6.7
vertex -56.8 21 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -42.4 31 0
vertex -56.8 31 0
vertex -56.8 31 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -42.4 31 0
vertex -56.8 31 6.7
vertex -42.4 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -42.4 21 0
vertex -42.4 31 0
vertex -42.4 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -42.4 21 0
vertex -42.4 31 6.7
vertex -42.4 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -56.8 31 0
vertex -56.8 21 0
vertex -56.8 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -56.8 31 0
vertex -56.8 21 6.7
vertex -56.8 31 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -56.8 21 6.7
vertex -42.4 21 6.7
vertex -42.4 26 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -56.8 21 6.7
vertex -42.4 26 9.2
vertex -56.8 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -42.4 31 6.7
vertex -56.8 31 6.7
vertex -56.8 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -42.4 31 6.7
vertex -56.8 26 9.2
vertex -42.4 26 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -56.8 31 6.7
vertex -56.8 21 6.7
vertex -56.8 26 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -42.4 21 6.7
vertex -42.4 31 6.7
vertex -42.4 26 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -42.4 31 6.1
vertex -42.4 21 6.1
vertex -28 21 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -42.4 31 6.1
vertex -28 21 6.1
vertex -28 31 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -42.4 21 0
vertex -28 21 0
vertex -28 21 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -42.4 21 0
vertex -28 21 6.1
vertex -42.4 21 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -28 31 0
vertex -42.4 31 0
vertex -42.4 31 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -28 31 0
vertex -42.4 31 6.1
vertex -28 31 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -28 21 0
vertex -28 31 0
vertex -28 31 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -28 21 0
vertex -28 31 6.1
vertex -28 21 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 31 0
vertex -42.4 21 0
vertex -42.4 21 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 31 0
vertex -42.4 21 6.1
vertex -42.4 31 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -42.4 21 6.1
vertex -28 21 6.1
vertex -28 26 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -42.4 21 6.1
vertex -28 26 8.6
vertex -42.4 26 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -28 31 6.1
vertex -42.4 31 6.1
vertex -42.4 26 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -28 31 6.1
vertex -42.4 26 8.6
vertex -28 26 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 31 6.1
vertex -42.4 21 6.1
vertex -42.4 26 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -28 21 6.1
vertex -28 31 6.1
vertex -28 26 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -28 31 6.3
vertex -28 21 6.3
vertex -17.2 21 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -28 31 6.3
vertex -17.2 21 6.3
vertex -17.2 31 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -28 21 0
vertex -17.2 21 0
vertex -17.2 21 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -28 21 0
vertex -17.2 21 6.3
vertex -28 21 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -17.2 31 0
vertex -28 31 0
vertex -28 31 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -17.2 31 0
vertex -28 31 6.3
vertex -17.2 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -17.2 21 0
vertex -17.2 31 0
vertex -17.2 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -17.2 21 0
vertex -17.2 31 6.3
vertex -17.2 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -28 31 0
vertex -28 21 0
vertex -28 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -28 31 0
vertex -28 21 6.3
vertex -28 31 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -28 21 6.3
vertex -17.2 21 6.3
vertex -17.2 26 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -28 21 6.3
vertex -17.2 26 8.8
vertex -28 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -17.2 31 6.3
vertex -28 31 6.3
vertex -28 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -17.2 31 6.3
vertex -28 26 8.8
vertex -17.2 26 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -28 31 6.3
vertex -28 21 6.3
vertex -28 26 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -17.2 21 6.3
vertex -17.2 31 6.3
vertex -17.2 26 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -16 31 6.7
vertex -16 21 6.7
vertex -8.8 21 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -16 31 6.7
vertex -8.8 21 6.7
vertex -8.8 31 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -16 21 0
vertex -8.8 21 0
vertex -8.8 21 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -16 21 0
vertex -8.8 21 6.7
vertex -16 21 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -8.8 31 0
vertex -16 31 0
vertex -16 31 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -8.8 31 0
vertex -16 31 6.7
vertex -8.8 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 21 0
vertex -8.8 31 0
vertex -8.8 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 21 0
vertex -8.8 31 6.7
vertex -8.8 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -16 31 0
vertex -16 21 0
vertex -16 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -16 31 0
vertex -16 21 6.7
vertex -16 31 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -16 21 6.7
vertex -8.8 21 6.7
vertex -8.8 26 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -16 21 6.7
vertex -8.8 26 9.2
vertex -16 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -8.8 31 6.7
vertex -16 31 6.7
vertex -16 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -8.8 31 6.7
vertex -16 26 9.2
vertex -8.8 26 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -16 31 6.7
vertex -16 21 6.7
vertex -16 26 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 21 6.7
vertex -8.8 31 6.7
vertex -8.8 26 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 31 6.3
vertex 7.5 21 6.3
vertex 14.7 21 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 31 6.3
vertex 14.7 21 6.3
vertex 14.7 31 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 21 0
vertex 14.7 21 0
vertex 14.7 21 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 21 0
vertex 14.7 21 6.3
vertex 7.5 21 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 14.7 31 0
vertex 7.5 31 0
vertex 7.5 31 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 14.7 31 0
vertex 7.5 31 6.3
vertex 14.7 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 14.7 21 0
vertex 14.7 31 0
vertex 14.7 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 14.7 21 0
vertex 14.7 31 6.3
vertex 14.7 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 31 0
vertex 7.5 21 0
vertex 7.5 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 31 0
vertex 7.5 21 6.3
vertex 7.5 31 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 21 6.3
vertex 14.7 21 6.3
vertex 14.7 26 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 21 6.3
vertex 14.7 26 8.8
vertex 7.5 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 14.7 31 6.3
vertex 7.5 31 6.3
vertex 7.5 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 14.7 31 6.3
vertex 7.5 26 8.8
vertex 14.7 26 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 31 6.3
vertex 7.5 21 6.3
vertex 7.5 26 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 14.7 21 6.3
vertex 14.7 31 6.3
vertex 14.7 26 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 14.7 31 4.1
vertex 14.7 21 4.1
vertex 25.5 21 4.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 14.7 31 4.1
vertex 25.5 21 4.1
vertex 25.5 31 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 14.7 21 0
vertex 25.5 21 0
vertex 25.5 21 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 14.7 21 0
vertex 25.5 21 4.1
vertex 14.7 21 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 25.5 31 0
vertex 14.7 31 0
vertex 14.7 31 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 25.5 31 0
vertex 14.7 31 4.1
vertex 25.5 31 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 25.5 21 0
vertex 25.5 31 0
vertex 25.5 31 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 25.5 21 0
vertex 25.5 31 4.1
vertex 25.5 21 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 14.7 31 0
vertex 14.7 21 0
vertex 14.7 21 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 14.7 31 0
vertex 14.7 21 4.1
vertex 14.7 31 4.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 14.7 21 4.1
vertex 25.5 21 4.1
vertex 25.5 26 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 14.7 21 4.1
vertex 25.5 26 6.6
vertex 14.7 26 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 25.5 31 4.1
vertex 14.7 31 4.1
vertex 14.7 26 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 25.5 31 4.1
vertex 14.7 26 6.6
vertex 25.5 26 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 14.7 31 4.1
vertex 14.7 21 4.1
vertex 14.7 26 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 25.5 21 4.1
vertex 25.5 31 4.1
vertex 25.5 26 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 25.5 31 6.3
vertex 25.5 21 6.3
vertex 32.7 21 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 25.5 31 6.3
vertex 32.7 21 6.3
vertex 32.7 31 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 25.5 21 0
vertex 32.7 21 0
vertex 32.7 21 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 25.5 21 0
vertex 32.7 21 6.3
vertex 25.5 21 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 32.7 31 0
vertex 25.5 31 0
vertex 25.5 31 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 32.7 31 0
vertex 25.5 31 6.3
vertex 32.7 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 21 0
vertex 32.7 31 0
vertex 32.7 31 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 21 0
vertex 32.7 31 6.3
vertex 32.7 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 25.5 31 0
vertex 25.5 21 0
vertex 25.5 21 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 25.5 31 0
vertex 25.5 21 6.3
vertex 25.5 31 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 25.5 21 6.3
vertex 32.7 21 6.3
vertex 32.7 26 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 25.5 21 6.3
vertex 32.7 26 8.8
vertex 25.5 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 32.7 31 6.3
vertex 25.5 31 6.3
vertex 25.5 26 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 32.7 31 6.3
vertex 25.5 26 8.8
vertex 32.7 26 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 25.5 31 6.3
vertex 25.5 21 6.3
vertex 25.5 26 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 21 6.3
vertex 32.7 31 6.3
vertex 32.7 26 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 32.7 31 4.2
vertex 32.7 21 4.2
vertex 43.5 21 4.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 32.7 31 4.2
vertex 43.5 21 4.2
vertex 43.5 31 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 32.7 21 0
vertex 43.5 21 0
vertex 43.5 21 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 32.7 21 0
vertex 43.5 21 4.2
vertex 32.7 21 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 43.5 31 0
vertex 32.7 31 0
vertex 32.7 31 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 43.5 31 0
vertex 32.7 31 4.2
vertex 43.5 31 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 43.5 21 0
vertex 43.5 31 0
vertex 43.5 31 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 43.5 21 0
vertex 43.5 31 4.2
vertex 43.5 21 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 32.7 31 0
vertex 32.7 21 0
vertex 32.7 21 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 32.7 31 0
vertex 32.7 21 4.2
vertex 32.7 31 4.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 32.7 21 4.2
vertex 43.5 21 4.2
vertex 43.5 26 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 32.7 21 4.2
vertex 43.5 26 6.7
vertex 32.7 26 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 43.5 31 4.2
vertex 32.7 31 4.2
vertex 32.7 26 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 43.5 31 4.2
vertex 32.7 26 6.7
vertex 43.5 26 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 32.7 31 4.2
vertex 32.7 21 4.2
vertex 32.7 26 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 43.5 21 4.2
vertex 43.5 31 4.2
vertex 43.5 26 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 43.5 31 6.7
vertex 43.5 21 6.7
vertex 57.9 21 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 43.5 31 6.7
vertex 57.9 21 6.7
vertex 57.9 31 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 43.5 21 0
vertex 57.9 21 0
vertex 57.9 21 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 43.5 21 0
vertex 57.9 21 6.7
vertex 43.5 21 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 57.9 31 0
vertex 43.5 31 0
vertex 43.5 31 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 57.9 31 0
vertex 43.5 31 6.7
vertex 57.9 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 21 0
vertex 57.9 31 0
vertex 57.9 31 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 21 0
vertex 57.9 31 6.7
vertex 57.9 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 43.5 31 0
vertex 43.5 21 0
vertex 43.5 21 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 43.5 31 0
vertex 43.5 21 6.7
vertex 43.5 31 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 43.5 21 6.7
vertex 57.9 21 6.7
vertex 57.9 26 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 43.5 21 6.7
vertex 57.9 26 9.2
vertex 43.5 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 57.9 31 6.7
vertex 43.5 31 6.7
vertex 43.5 26 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 57.9 31 6.7
vertex 43.5 26 9.2
vertex 57.9 26 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 43.5 31 6.7
vertex 43.5 21 6.7
vertex 43.5 26 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 21 6.7
vertex 57.9 31 6.7
vertex 57.9 26 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 57.9 31 6.4
vertex 57.9 21 6.4
vertex 65.1 21 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 57.9 31 6.4
vertex 65.1 21 6.4
vertex 65.1 31 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 57.9 21 0
vertex 65.1 21 0
vertex 65.1 21 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 57.9 21 0
vertex 65.1 21 6.4
vertex 57.9 21 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 65.1 31 0
vertex 57.9 31 0
vertex 57.9 31 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 65.1 31 0
vertex 57.9 31 6.4
vertex 65.1 31 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 65.1 21 0
vertex 65.1 31 0
vertex 65.1 31 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 65.1 21 0
vertex 65.1 31 6.4
vertex 65.1 21 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 57.9 31 0
vertex 57.9 21 0
vertex 57.9 21 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 57.9 31 0
vertex 57.9 21 6.4
vertex 57.9 31 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 57.9 21 6.4
vertex 65.1 21 6.4
vertex 65.1 26 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 57.9 21 6.4
vertex 65.1 26 8.9
vertex 57.9 26 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 65.1 31 6.4
vertex 57.9 31 6.4
vertex 57.9 26 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 65.1 31 6.4
vertex 57.9 26 8.9
vertex 65.1 26 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 57.9 31 6.4
vertex 57.9 21 6.4
vertex 57.9 26 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 65.1 21 6.4
vertex 65.1 31 6.4
vertex 65.1 26 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.1 31 6.6
vertex 65.1 21 6.6
vertex 75.9 21 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 65.1 31 6.6
vertex 75.9 21 6.6
vertex 75.9 31 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.1 21 0
vertex 75.9 21 0
vertex 75.9 21 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 65.1 21 0
vertex 75.9 21 6.6
vertex 65.1 21 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 75.9 31 0
vertex 65.1 31 0
vertex 65.1 31 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 75.9 31 0
vertex 65.1 31 6.6
vertex 75.9 31 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 75.9 21 0
vertex 75.9 31 0
vertex 75.9 31 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 75.9 21 0
vertex 75.9 31 6.6
vertex 75.9 21 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.1 31 0
vertex 65.1 21 0
vertex 65.1 21 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.1 31 0
vertex 65.1 21 6.6
vertex 65.1 31 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 65.1 21 6.6
vertex 75.9 21 6.6
vertex 75.9 26 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 65.1 21 6.6
vertex 75.9 26 9.1
vertex 65.1 26 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 75.9 31 6.6
vertex 65.1 31 6.6
vertex 65.1 26 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 75.9 31 6.6
vertex 65.1 26 9.1
vertex 75.9 26 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 65.1 31 6.6
vertex 65.1 21 6.6
vertex 65.1 26 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 75.9 21 6.6
vertex 75.9 31 6.6
vertex 75.9 26 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 77.1 31 6.5
vertex 77.1 21 6.5
vertex 87.9 21 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 77.1 31 6.5
vertex 87.9 21 6.5
vertex 87.9 31 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 77.1 21 0
vertex 87.9 21 0
vertex 87.9 21 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 77.1 21 0
vertex 87.9 21 6.5
vertex 77.1 21 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 87.9 31 0
vertex 77.1 31 0
vertex 77.1 31 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 87.9 31 0
vertex 77.1 31 6.5
vertex 87.9 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 87.9 21 0
vertex 87.9 31 0
vertex 87.9 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 87.9 21 0
vertex 87.9 31 6.5
vertex 87.9 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 77.1 31 0
vertex 77.1 21 0
vertex 77.1 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 77.1 31 0
vertex 77.1 21 6.5
vertex 77.1 31 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 77.1 21 6.5
vertex 87.9 21 6.5
vertex 87.9 26 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 77.1 21 6.5
vertex 87.9 26 9
vertex 77.1 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 87.9 31 6.5
vertex 77.1 31 6.5
vertex 77.1 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 87.9 31 6.5
vertex 77.1 26 9
vertex 87.9 26 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 77.1 31 6.5
vertex 77.1 21 6.5
vertex 77.1 26 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 87.9 21 6.5
vertex 87.9 31 6.5
vertex 87.9 26 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 87.9 31 6.5
vertex 87.9 21 6.5
vertex 102.3 21 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 87.9 31 6.5
vertex 102.3 21 6.5
vertex 102.3 31 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 87.9 21 0
vertex 102.3 21 0
vertex 102.3 21 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 87.9 21 0
vertex 102.3 21 6.5
vertex 87.9 21 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 102.3 31 0
vertex 87.9 31 0
vertex 87.9 31 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 102.3 31 0
vertex 87.9 31 6.5
vertex 102.3 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.3 21 0
vertex 102.3 31 0
vertex 102.3 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.3 21 0
vertex 102.3 31 6.5
vertex 102.3 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 87.9 31 0
vertex 87.9 21 0
vertex 87.9 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 87.9 31 0
vertex 87.9 21 6.5
vertex 87.9 31 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 87.9 21 6.5
vertex 102.3 21 6.5
vertex 102.3 26 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 87.9 21 6.5
vertex 102.3 26 9
vertex 87.9 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 102.3 31 6.5
vertex 87.9 31 6.5
vertex 87.9 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 102.3 31 6.5
vertex 87.9 26 9
vertex 102.3 26 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 87.9 31 6.5
vertex 87.9 21 6.5
vertex 87.9 26 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.3 21 6.5
vertex 102.3 31 6.5
vertex 102.3 26 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 102.3 31 6.5
vertex 102.3 21 6.5
vertex 116.7 21 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 102.3 31 6.5
vertex 116.7 21 6.5
vertex 116.7 31 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 102.3 21 0
vertex 116.7 21 0
vertex 116.7 21 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 102.3 21 0
vertex 116.7 21 6.5
vertex 102.3 21 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.7 31 0
vertex 102.3 31 0
vertex 102.3 31 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 116.7 31 0
vertex 102.3 31 6.5
vertex 116.7 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.7 21 0
vertex 116.7 31 0
vertex 116.7 31 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.7 21 0
vertex 116.7 31 6.5
vertex 116.7 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.3 31 0
vertex 102.3 21 0
vertex 102.3 21 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.3 31 0
vertex 102.3 21 6.5
vertex 102.3 31 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 102.3 21 6.5
vertex 116.7 21 6.5
vertex 116.7 26 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 102.3 21 6.5
vertex 116.7 26 9
vertex 102.3 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 116.7 31 6.5
vertex 102.3 31 6.5
vertex 102.3 26 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 116.7 31 6.5
vertex 102.3 26 9
vertex 116.7 26 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.3 31 6.5
vertex 102.3 21 6.5
vertex 102.3 26 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 116.7 21 6.5
vertex 116.7 31 6.5
vertex 116.7 26 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 78 6.6
vertex -17 70.8 6.6
vertex -7 70.8 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 78 6.6
vertex -7 70.8 6.6
vertex -7 78 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 70.8 0
vertex -7 70.8 0
vertex -7 70.8 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 70.8 0
vertex -7 70.8 6.6
vertex -17 70.8 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 78 0
vertex -17 78 0
vertex -17 78 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 78 0
vertex -17 78 6.6
vertex -7 78 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 70.8 0
vertex -7 78 0
vertex -7 78 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 70.8 0
vertex -7 78 6.6
vertex -7 70.8 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 78 0
vertex -17 70.8 0
vertex -17 70.8 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 78 0
vertex -17 70.8 6.6
vertex -17 78 6.6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 78 6.6
vertex -7 70.8 6.6
vertex -12 70.8 9.1
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 78 6.6
vertex -12 70.8 9.1
vertex -12 78 9.1
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 70.8 6.6
vertex -17 78 6.6
vertex -12 78 9.1
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 70.8 6.6
vertex -12 78 9.1
vertex -12 70.8 9.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 78 6.6
vertex -7 78 6.6
vertex -12 78 9.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 70.8 6.6
vertex -17 70.8 6.6
vertex -12 70.8 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 70.8 6.2
vertex -17 63.6 6.2
vertex -7 63.6 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 70.8 6.2
vertex -7 63.6 6.2
vertex -7 70.8 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 63.6 0
vertex -7 63.6 0
vertex -7 63.6 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 63.6 0
vertex -7 63.6 6.2
vertex -17 63.6 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 70.8 0
vertex -17 70.8 0
vertex -17 70.8 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 70.8 0
vertex -17 70.8 6.2
vertex -7 70.8 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 63.6 0
vertex -7 70.8 0
vertex -7 70.8 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 63.6 0
vertex -7 70.8 6.2
vertex -7 63.6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 70.8 0
vertex -17 63.6 0
vertex -17 63.6 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 70.8 0
vertex -17 63.6 6.2
vertex -17 70.8 6.2
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 70.8 6.2
vertex -7 63.6 6.2
vertex -12 63.6 8.7
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 70.8 6.2
vertex -12 63.6 8.7
vertex -12 70.8 8.7
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 63.6 6.2
vertex -17 70.8 6.2
vertex -12 70.8 8.7
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 63.6 6.2
vertex -12 70.8 8.7
vertex -12 63.6 8.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 70.8 6.2
vertex -7 70.8 6.2
vertex -12 70.8 8.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 63.6 6.2
vertex -17 63.6 6.2
vertex -12 63.6 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 63.6 6.5
vertex -17 56.4 6.5
vertex -7 56.4 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 63.6 6.5
vertex -7 56.4 6.5
vertex -7 63.6 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 56.4 0
vertex -7 56.4 0
vertex -7 56.4 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 56.4 0
vertex -7 56.4 6.5
vertex -17 56.4 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 63.6 0
vertex -17 63.6 0
vertex -17 63.6 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 63.6 0
vertex -17 63.6 6.5
vertex -7 63.6 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 56.4 0
vertex -7 63.6 0
vertex -7 63.6 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 56.4 0
vertex -7 63.6 6.5
vertex -7 56.4 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 63.6 0
vertex -17 56.4 0
vertex -17 56.4 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 63.6 0
vertex -17 56.4 6.5
vertex -17 63.6 6.5
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 63.6 6.5
vertex -7 56.4 6.5
vertex -12 56.4 9
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 63.6 6.5
vertex -12 56.4 9
vertex -12 63.6 9
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 56.4 6.5
vertex -17 63.6 6.5
vertex -12 63.6 9
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 56.4 6.5
vertex -12 63.6 9
vertex -12 56.4 9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 63.6 6.5
vertex -7 63.6 6.5
vertex -12 63.6 9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 56.4 6.5
vertex -17 56.4 6.5
vertex -12 56.4 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 55.2 4
vertex -17 44.4 4
vertex -7 44.4 4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 55.2 4
vertex -7 44.4 4
vertex -7 55.2 4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 44.4 0
vertex -7 44.4 0
vertex -7 44.4 4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 44.4 0
vertex -7 44.4 4
vertex -17 44.4 4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 55.2 0
vertex -17 55.2 0
vertex -17 55.2 4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 55.2 0
vertex -17 55.2 4
vertex -7 55.2 4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 44.4 0
vertex -7 55.2 0
vertex -7 55.2 4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 44.4 0
vertex -7 55.2 4
vertex -7 44.4 4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 55.2 0
vertex -17 44.4 0
vertex -17 44.4 4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 55.2 0
vertex -17 44.4 4
vertex -17 55.2 4
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 55.2 4
vertex -7 44.4 4
vertex -12 44.4 6.5
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 55.2 4
vertex -12 44.4 6.5
vertex -12 55.2 6.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 44.4 4
vertex -17 55.2 4
vertex -12 55.2 6.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 44.4 4
vertex -12 55.2 6.5
vertex -12 44.4 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 55.2 4
vertex -7 55.2 4
vertex -12 55.2 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 44.4 4
vertex -17 44.4 4
vertex -12 44.4 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 43.2 6
vertex -17 36 6
vertex -7 36 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 43.2 6
vertex -7 36 6
vertex -7 43.2 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 36 0
vertex -7 36 0
vertex -7 36 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 36 0
vertex -7 36 6
vertex -17 36 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 43.2 0
vertex -17 43.2 0
vertex -17 43.2 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 43.2 0
vertex -17 43.2 6
vertex -7 43.2 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 36 0
vertex -7 43.2 0
vertex -7 43.2 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 36 0
vertex -7 43.2 6
vertex -7 36 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 43.2 0
vertex -17 36 0
vertex -17 36 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 43.2 0
vertex -17 36 6
vertex -17 43.2 6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 43.2 6
vertex -7 36 6
vertex -12 36 8.5
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 43.2 6
vertex -12 36 8.5
vertex -12 43.2 8.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 36 6
vertex -17 43.2 6
vertex -12 43.2 8.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 36 6
vertex -12 43.2 8.5
vertex -12 36 8.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 43.2 6
vertex -7 43.2 6
vertex -12 43.2 8.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 36 6
vertex -17 36 6
vertex -12 36 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 78 6.1
vertex 7 67.2 6.1
vertex 17 67.2 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 78 6.1
vertex 17 67.2 6.1
vertex 17 78 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 67.2 0
vertex 17 67.2 0
vertex 17 67.2 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 67.2 0
vertex 17 67.2 6.1
vertex 7 67.2 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 78 0
vertex 7 78 0
vertex 7 78 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 78 0
vertex 7 78 6.1
vertex 17 78 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 67.2 0
vertex 17 78 0
vertex 17 78 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 67.2 0
vertex 17 78 6.1
vertex 17 67.2 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 78 0
vertex 7 67.2 0
vertex 7 67.2 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 78 0
vertex 7 67.2 6.1
vertex 7 78 6.1
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 78 6.1
vertex 17 67.2 6.1
vertex 12 67.2 8.6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 78 6.1
vertex 12 67.2 8.6
vertex 12 78 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 67.2 6.1
vertex 7 78 6.1
vertex 12 78 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 67.2 6.1
vertex 12 78 8.6
vertex 12 67.2 8.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 78 6.1
vertex 17 78 6.1
vertex 12 78 8.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 67.2 6.1
vertex 7 67.2 6.1
vertex 12 67.2 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 66 6.2
vertex 7 58.8 6.2
vertex 17 58.8 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 66 6.2
vertex 17 58.8 6.2
vertex 17 66 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 58.8 0
vertex 17 58.8 0
vertex 17 58.8 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 58.8 0
vertex 17 58.8 6.2
vertex 7 58.8 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 66 0
vertex 7 66 0
vertex 7 66 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 66 0
vertex 7 66 6.2
vertex 17 66 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 58.8 0
vertex 17 66 0
vertex 17 66 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 58.8 0
vertex 17 66 6.2
vertex 17 58.8 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 66 0
vertex 7 58.8 0
vertex 7 58.8 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 66 0
vertex 7 58.8 6.2
vertex 7 66 6.2
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 66 6.2
vertex 17 58.8 6.2
vertex 12 58.8 8.7
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 66 6.2
vertex 12 58.8 8.7
vertex 12 66 8.7
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 58.8 6.2
vertex 7 66 6.2
vertex 12 66 8.7
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 58.8 6.2
vertex 12 66 8.7
vertex 12 58.8 8.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 66 6.2
vertex 17 66 6.2
vertex 12 66 8.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 58.8 6.2
vertex 7 58.8 6.2
vertex 12 58.8 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 57.6 6.5
vertex 7 50.4 6.5
vertex 17 50.4 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 57.6 6.5
vertex 17 50.4 6.5
vertex 17 57.6 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 50.4 0
vertex 17 50.4 0
vertex 17 50.4 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 50.4 0
vertex 17 50.4 6.5
vertex 7 50.4 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 57.6 0
vertex 7 57.6 0
vertex 7 57.6 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 57.6 0
vertex 7 57.6 6.5
vertex 17 57.6 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 50.4 0
vertex 17 57.6 0
vertex 17 57.6 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 50.4 0
vertex 17 57.6 6.5
vertex 17 50.4 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 57.6 0
vertex 7 50.4 0
vertex 7 50.4 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 57.6 0
vertex 7 50.4 6.5
vertex 7 57.6 6.5
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 57.6 6.5
vertex 17 50.4 6.5
vertex 12 50.4 9
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 57.6 6.5
vertex 12 50.4 9
vertex 12 57.6 9
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 50.4 6.5
vertex 7 57.6 6.5
vertex 12 57.6 9
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 50.4 6.5
vertex 12 57.6 9
vertex 12 50.4 9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 57.6 6.5
vertex 17 57.6 6.5
vertex 12 57.6 9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 50.4 6.5
vertex 7 50.4 6.5
vertex 12 50.4 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 50.4 6.1
vertex 7 36 6.1
vertex 17 36 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7 50.4 6.1
vertex 17 36 6.1
vertex 17 50.4 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 36 0
vertex 17 36 0
vertex 17 36 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 36 0
vertex 17 36 6.1
vertex 7 36 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 50.4 0
vertex 7 50.4 0
vertex 7 50.4 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 50.4 0
vertex 7 50.4 6.1
vertex 17 50.4 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 36 0
vertex 17 50.4 0
vertex 17 50.4 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 17 36 0
vertex 17 50.4 6.1
vertex 17 36 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 50.4 0
vertex 7 36 0
vertex 7 36 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7 50.4 0
vertex 7 36 6.1
vertex 7 50.4 6.1
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 50.4 6.1
vertex 17 36 6.1
vertex 12 36 8.6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex 17 50.4 6.1
vertex 12 36 8.6
vertex 12 50.4 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 36 6.1
vertex 7 50.4 6.1
vertex 12 50.4 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex 7 36 6.1
vertex 12 50.4 8.6
vertex 12 36 8.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7 50.4 6.1
vertex 17 50.4 6.1
vertex 12 50.4 8.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 17 36 6.1
vertex 7 36 6.1
vertex 12 36 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 -10 6.6
vertex -118 -20 6.6
vertex -103.6 -20 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 -10 6.6
vertex -103.6 -20 6.6
vertex -103.6 -10 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 -20 0
vertex -103.6 -20 0
vertex -103.6 -20 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 -20 0
vertex -103.6 -20 6.6
vertex -118 -20 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 -10 0
vertex -118 -10 0
vertex -118 -10 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 -10 0
vertex -118 -10 6.6
vertex -103.6 -10 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -20 0
vertex -103.6 -10 0
vertex -103.6 -10 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -20 0
vertex -103.6 -10 6.6
vertex -103.6 -20 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -10 0
vertex -118 -20 0
vertex -118 -20 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -10 0
vertex -118 -20 6.6
vertex -118 -10 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 -20 6.6
vertex -103.6 -20 6.6
vertex -103.6 -15 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 -20 6.6
vertex -103.6 -15 9.1
vertex -118 -15 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 -10 6.6
vertex -118 -10 6.6
vertex -118 -15 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 -10 6.6
vertex -118 -15 9.1
vertex -103.6 -15 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -10 6.6
vertex -118 -20 6.6
vertex -118 -15 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -20 6.6
vertex -103.6 -10 6.6
vertex -103.6 -15 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102.4 -10 6.3
vertex -102.4 -20 6.3
vertex -95.2 -20 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102.4 -10 6.3
vertex -95.2 -20 6.3
vertex -95.2 -10 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -102.4 -20 0
vertex -95.2 -20 0
vertex -95.2 -20 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -102.4 -20 0
vertex -95.2 -20 6.3
vertex -102.4 -20 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -95.2 -10 0
vertex -102.4 -10 0
vertex -102.4 -10 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -95.2 -10 0
vertex -102.4 -10 6.3
vertex -95.2 -10 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -95.2 -20 0
vertex -95.2 -10 0
vertex -95.2 -10 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -95.2 -20 0
vertex -95.2 -10 6.3
vertex -95.2 -20 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -10 0
vertex -102.4 -20 0
vertex -102.4 -20 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -10 0
vertex -102.4 -20 6.3
vertex -102.4 -10 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -102.4 -20 6.3
vertex -95.2 -20 6.3
vertex -95.2 -15 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -102.4 -20 6.3
vertex -95.2 -15 8.8
vertex -102.4 -15 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -95.2 -10 6.3
vertex -102.4 -10 6.3
vertex -102.4 -15 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -95.2 -10 6.3
vertex -102.4 -15 8.8
vertex -95.2 -15 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -10 6.3
vertex -102.4 -20 6.3
vertex -102.4 -15 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -95.2 -20 6.3
vertex -95.2 -10 6.3
vertex -95.2 -15 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -95.2 -10 6.4
vertex -95.2 -20 6.4
vertex -84.4 -20 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -95.2 -10 6.4
vertex -84.4 -20 6.4
vertex -84.4 -10 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -95.2 -20 0
vertex -84.4 -20 0
vertex -84.4 -20 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -95.2 -20 0
vertex -84.4 -20 6.4
vertex -95.2 -20 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -84.4 -10 0
vertex -95.2 -10 0
vertex -95.2 -10 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -84.4 -10 0
vertex -95.2 -10 6.4
vertex -84.4 -10 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -84.4 -20 0
vertex -84.4 -10 0
vertex -84.4 -10 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -84.4 -20 0
vertex -84.4 -10 6.4
vertex -84.4 -20 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -95.2 -10 0
vertex -95.2 -20 0
vertex -95.2 -20 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -95.2 -10 0
vertex -95.2 -20 6.4
vertex -95.2 -10 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -95.2 -20 6.4
vertex -84.4 -20 6.4
vertex -84.4 -15 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -95.2 -20 6.4
vertex -84.4 -15 8.9
vertex -95.2 -15 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -84.4 -10 6.4
vertex -95.2 -10 6.4
vertex -95.2 -15 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -84.4 -10 6.4
vertex -95.2 -15 8.9
vertex -84.4 -15 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -95.2 -10 6.4
vertex -95.2 -20 6.4
vertex -95.2 -15 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -84.4 -20 6.4
vertex -84.4 -10 6.4
vertex -84.4 -15 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -84.4 -10 4.1
vertex -84.4 -20 4.1
vertex -70 -20 4.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -84.4 -10 4.1
vertex -70 -20 4.1
vertex -70 -10 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -84.4 -20 0
vertex -70 -20 0
vertex -70 -20 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -84.4 -20 0
vertex -70 -20 4.1
vertex -84.4 -20 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -70 -10 0
vertex -84.4 -10 0
vertex -84.4 -10 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -70 -10 0
vertex -84.4 -10 4.1
vertex -70 -10 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -70 -20 0
vertex -70 -10 0
vertex -70 -10 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -70 -20 0
vertex -70 -10 4.1
vertex -70 -20 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -84.4 -10 0
vertex -84.4 -20 0
vertex -84.4 -20 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -84.4 -10 0
vertex -84.4 -20 4.1
vertex -84.4 -10 4.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -84.4 -20 4.1
vertex -70 -20 4.1
vertex -70 -15 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -84.4 -20 4.1
vertex -70 -15 6.6
vertex -84.4 -15 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -70 -10 4.1
vertex -84.4 -10 4.1
vertex -84.4 -15 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -70 -10 4.1
vertex -84.4 -15 6.6
vertex -70 -15 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -84.4 -10 4.1
vertex -84.4 -20 4.1
vertex -84.4 -15 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -70 -20 4.1
vertex -70 -10 4.1
vertex -70 -15 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -70 -10 6
vertex -70 -20 6
vertex -59.2 -20 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -70 -10 6
vertex -59.2 -20 6
vertex -59.2 -10 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -70 -20 0
vertex -59.2 -20 0
vertex -59.2 -20 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -70 -20 0
vertex -59.2 -20 6
vertex -70 -20 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -59.2 -10 0
vertex -70 -10 0
vertex -70 -10 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -59.2 -10 0
vertex -70 -10 6
vertex -59.2 -10 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -59.2 -20 0
vertex -59.2 -10 0
vertex -59.2 -10 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -59.2 -20 0
vertex -59.2 -10 6
vertex -59.2 -20 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -70 -10 0
vertex -70 -20 0
vertex -70 -20 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -70 -10 0
vertex -70 -20 6
vertex -70 -10 6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -70 -20 6
vertex -59.2 -20 6
vertex -59.2 -15 8.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -70 -20 6
vertex -59.2 -15 8.5
vertex -70 -15 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -59.2 -10 6
vertex -70 -10 6
vertex -70 -15 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -59.2 -10 6
vertex -70 -15 8.5
vertex -59.2 -15 8.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -70 -10 6
vertex -70 -20 6
vertex -70 -15 8.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -59.2 -20 6
vertex -59.2 -10 6
vertex -59.2 -15 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -59.2 -10 6.5
vertex -59.2 -20 6.5
vertex -44.8 -20 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -59.2 -10 6.5
vertex -44.8 -20 6.5
vertex -44.8 -10 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -59.2 -20 0
vertex -44.8 -20 0
vertex -44.8 -20 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -59.2 -20 0
vertex -44.8 -20 6.5
vertex -59.2 -20 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -44.8 -10 0
vertex -59.2 -10 0
vertex -59.2 -10 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -44.8 -10 0
vertex -59.2 -10 6.5
vertex -44.8 -10 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -44.8 -20 0
vertex -44.8 -10 0
vertex -44.8 -10 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -44.8 -20 0
vertex -44.8 -10 6.5
vertex -44.8 -20 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -59.2 -10 0
vertex -59.2 -20 0
vertex -59.2 -20 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -59.2 -10 0
vertex -59.2 -20 6.5
vertex -59.2 -10 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -59.2 -20 6.5
vertex -44.8 -20 6.5
vertex -44.8 -15 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -59.2 -20 6.5
vertex -44.8 -15 9
vertex -59.2 -15 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -44.8 -10 6.5
vertex -59.2 -10 6.5
vertex -59.2 -15 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -44.8 -10 6.5
vertex -59.2 -15 9
vertex -44.8 -15 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -59.2 -10 6.5
vertex -59.2 -20 6.5
vertex -59.2 -15 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -44.8 -20 6.5
vertex -44.8 -10 6.5
vertex -44.8 -15 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -43.6 -10 6.5
vertex -43.6 -20 6.5
vertex -29.2 -20 6.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -43.6 -10 6.5
vertex -29.2 -20 6.5
vertex -29.2 -10 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -43.6 -20 0
vertex -29.2 -20 0
vertex -29.2 -20 6.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -43.6 -20 0
vertex -29.2 -20 6.5
vertex -43.6 -20 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -29.2 -10 0
vertex -43.6 -10 0
vertex -43.6 -10 6.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -29.2 -10 0
vertex -43.6 -10 6.5
vertex -29.2 -10 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -29.2 -20 0
vertex -29.2 -10 0
vertex -29.2 -10 6.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -29.2 -20 0
vertex -29.2 -10 6.5
vertex -29.2 -20 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -43.6 -10 0
vertex -43.6 -20 0
vertex -43.6 -20 6.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -43.6 -10 0
vertex -43.6 -20 6.5
vertex -43.6 -10 6.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -43.6 -20 6.5
vertex -29.2 -20 6.5
vertex -29.2 -15 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -43.6 -20 6.5
vertex -29.2 -15 9
vertex -43.6 -15 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -29.2 -10 6.5
vertex -43.6 -10 6.5
vertex -43.6 -15 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -29.2 -10 6.5
vertex -43.6 -15 9
vertex -29.2 -15 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -43.6 -10 6.5
vertex -43.6 -20 6.5
vertex -43.6 -15 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -29.2 -20 6.5
vertex -29.2 -10 6.5
vertex -29.2 -15 9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -29.2 -10 6.1
vertex -29.2 -20 6.1
vertex -18.4 -20 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -29.2 -10 6.1
vertex -18.4 -20 6.1
vertex -18.4 -10 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -29.2 -20 0
vertex -18.4 -20 0
vertex -18.4 -20 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -29.2 -20 0
vertex -18.4 -20 6.1
vertex -29.2 -20 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -18.4 -10 0
vertex -29.2 -10 0
vertex -29.2 -10 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -18.4 -10 0
vertex -29.2 -10 6.1
vertex -18.4 -10 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 -20 0
vertex -18.4 -10 0
vertex -18.4 -10 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 -20 0
vertex -18.4 -10 6.1
vertex -18.4 -20 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -29.2 -10 0
vertex -29.2 -20 0
vertex -29.2 -20 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -29.2 -10 0
vertex -29.2 -20 6.1
vertex -29.2 -10 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -29.2 -20 6.1
vertex -18.4 -20 6.1
vertex -18.4 -15 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -29.2 -20 6.1
vertex -18.4 -15 8.6
vertex -29.2 -15 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -18.4 -10 6.1
vertex -29.2 -10 6.1
vertex -29.2 -15 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -18.4 -10 6.1
vertex -29.2 -15 8.6
vertex -18.4 -15 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -29.2 -10 6.1
vertex -29.2 -20 6.1
vertex -29.2 -15 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -18.4 -20 6.1
vertex -18.4 -10 6.1
vertex -18.4 -15 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 -10 6.4
vertex 7.5 -20 6.4
vertex 21.9 -20 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 -10 6.4
vertex 21.9 -20 6.4
vertex 21.9 -10 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 -20 0
vertex 21.9 -20 0
vertex 21.9 -20 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 -20 0
vertex 21.9 -20 6.4
vertex 7.5 -20 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 21.9 -10 0
vertex 7.5 -10 0
vertex 7.5 -10 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 21.9 -10 0
vertex 7.5 -10 6.4
vertex 21.9 -10 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 21.9 -20 0
vertex 21.9 -10 0
vertex 21.9 -10 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 21.9 -20 0
vertex 21.9 -10 6.4
vertex 21.9 -20 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -10 0
vertex 7.5 -20 0
vertex 7.5 -20 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -10 0
vertex 7.5 -20 6.4
vertex 7.5 -10 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 -20 6.4
vertex 21.9 -20 6.4
vertex 21.9 -15 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 -20 6.4
vertex 21.9 -15 8.9
vertex 7.5 -15 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 21.9 -10 6.4
vertex 7.5 -10 6.4
vertex 7.5 -15 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 21.9 -10 6.4
vertex 7.5 -15 8.9
vertex 21.9 -15 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -10 6.4
vertex 7.5 -20 6.4
vertex 7.5 -15 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 21.9 -20 6.4
vertex 21.9 -10 6.4
vertex 21.9 -15 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 21.9 -10 6.8
vertex 21.9 -20 6.8
vertex 36.3 -20 6.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 21.9 -10 6.8
vertex 36.3 -20 6.8
vertex 36.3 -10 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 21.9 -20 0
vertex 36.3 -20 0
vertex 36.3 -20 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 21.9 -20 0
vertex 36.3 -20 6.8
vertex 21.9 -20 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 36.3 -10 0
vertex 21.9 -10 0
vertex 21.9 -10 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 36.3 -10 0
vertex 21.9 -10 6.8
vertex 36.3 -10 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 36.3 -20 0
vertex 36.3 -10 0
vertex 36.3 -10 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 36.3 -20 0
vertex 36.3 -10 6.8
vertex 36.3 -20 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 21.9 -10 0
vertex 21.9 -20 0
vertex 21.9 -20 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 21.9 -10 0
vertex 21.9 -20 6.8
vertex 21.9 -10 6.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 21.9 -20 6.8
vertex 36.3 -20 6.8
vertex 36.3 -15 9.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 21.9 -20 6.8
vertex 36.3 -15 9.3
vertex 21.9 -15 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 36.3 -10 6.8
vertex 21.9 -10 6.8
vertex 21.9 -15 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 36.3 -10 6.8
vertex 21.9 -15 9.3
vertex 36.3 -15 9.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 21.9 -10 6.8
vertex 21.9 -20 6.8
vertex 21.9 -15 9.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 36.3 -20 6.8
vertex 36.3 -10 6.8
vertex 36.3 -15 9.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 36.3 -10 6.2
vertex 36.3 -20 6.2
vertex 47.1 -20 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 36.3 -10 6.2
vertex 47.1 -20 6.2
vertex 47.1 -10 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 36.3 -20 0
vertex 47.1 -20 0
vertex 47.1 -20 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 36.3 -20 0
vertex 47.1 -20 6.2
vertex 36.3 -20 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 47.1 -10 0
vertex 36.3 -10 0
vertex 36.3 -10 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 47.1 -10 0
vertex 36.3 -10 6.2
vertex 47.1 -10 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 47.1 -20 0
vertex 47.1 -10 0
vertex 47.1 -10 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 47.1 -20 0
vertex 47.1 -10 6.2
vertex 47.1 -20 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 36.3 -10 0
vertex 36.3 -20 0
vertex 36.3 -20 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 36.3 -10 0
vertex 36.3 -20 6.2
vertex 36.3 -10 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 36.3 -20 6.2
vertex 47.1 -20 6.2
vertex 47.1 -15 8.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 36.3 -20 6.2
vertex 47.1 -15 8.7
vertex 36.3 -15 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 47.1 -10 6.2
vertex 36.3 -10 6.2
vertex 36.3 -15 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 47.1 -10 6.2
vertex 36.3 -15 8.7
vertex 47.1 -15 8.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 36.3 -10 6.2
vertex 36.3 -20 6.2
vertex 36.3 -15 8.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 47.1 -20 6.2
vertex 47.1 -10 6.2
vertex 47.1 -15 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 47.1 -10 6.8
vertex 47.1 -20 6.8
vertex 57.9 -20 6.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 47.1 -10 6.8
vertex 57.9 -20 6.8
vertex 57.9 -10 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 47.1 -20 0
vertex 57.9 -20 0
vertex 57.9 -20 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 47.1 -20 0
vertex 57.9 -20 6.8
vertex 47.1 -20 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 57.9 -10 0
vertex 47.1 -10 0
vertex 47.1 -10 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 57.9 -10 0
vertex 47.1 -10 6.8
vertex 57.9 -10 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 -20 0
vertex 57.9 -10 0
vertex 57.9 -10 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 -20 0
vertex 57.9 -10 6.8
vertex 57.9 -20 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 47.1 -10 0
vertex 47.1 -20 0
vertex 47.1 -20 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 47.1 -10 0
vertex 47.1 -20 6.8
vertex 47.1 -10 6.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 47.1 -20 6.8
vertex 57.9 -20 6.8
vertex 57.9 -15 9.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 47.1 -20 6.8
vertex 57.9 -15 9.3
vertex 47.1 -15 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 57.9 -10 6.8
vertex 47.1 -10 6.8
vertex 47.1 -15 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 57.9 -10 6.8
vertex 47.1 -15 9.3
vertex 57.9 -15 9.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 47.1 -10 6.8
vertex 47.1 -20 6.8
vertex 47.1 -15 9.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 57.9 -20 6.8
vertex 57.9 -10 6.8
vertex 57.9 -15 9.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 59.1 -10 6.3
vertex 59.1 -20 6.3
vertex 69.9 -20 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 59.1 -10 6.3
vertex 69.9 -20 6.3
vertex 69.9 -10 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 59.1 -20 0
vertex 69.9 -20 0
vertex 69.9 -20 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 59.1 -20 0
vertex 69.9 -20 6.3
vertex 59.1 -20 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 69.9 -10 0
vertex 59.1 -10 0
vertex 59.1 -10 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 69.9 -10 0
vertex 59.1 -10 6.3
vertex 69.9 -10 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.9 -20 0
vertex 69.9 -10 0
vertex 69.9 -10 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.9 -20 0
vertex 69.9 -10 6.3
vertex 69.9 -20 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 59.1 -10 0
vertex 59.1 -20 0
vertex 59.1 -20 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 59.1 -10 0
vertex 59.1 -20 6.3
vertex 59.1 -10 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 59.1 -20 6.3
vertex 69.9 -20 6.3
vertex 69.9 -15 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 59.1 -20 6.3
vertex 69.9 -15 8.8
vertex 59.1 -15 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 69.9 -10 6.3
vertex 59.1 -10 6.3
vertex 59.1 -15 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 69.9 -10 6.3
vertex 59.1 -15 8.8
vertex 69.9 -15 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 59.1 -10 6.3
vertex 59.1 -20 6.3
vertex 59.1 -15 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.9 -20 6.3
vertex 69.9 -10 6.3
vertex 69.9 -15 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 71.1 -10 6.1
vertex 71.1 -20 6.1
vertex 85.5 -20 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 71.1 -10 6.1
vertex 85.5 -20 6.1
vertex 85.5 -10 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 71.1 -20 0
vertex 85.5 -20 0
vertex 85.5 -20 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 71.1 -20 0
vertex 85.5 -20 6.1
vertex 71.1 -20 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 85.5 -10 0
vertex 71.1 -10 0
vertex 71.1 -10 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 85.5 -10 0
vertex 71.1 -10 6.1
vertex 85.5 -10 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 85.5 -20 0
vertex 85.5 -10 0
vertex 85.5 -10 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 85.5 -20 0
vertex 85.5 -10 6.1
vertex 85.5 -20 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 71.1 -10 0
vertex 71.1 -20 0
vertex 71.1 -20 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 71.1 -10 0
vertex 71.1 -20 6.1
vertex 71.1 -10 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 71.1 -20 6.1
vertex 85.5 -20 6.1
vertex 85.5 -15 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 71.1 -20 6.1
vertex 85.5 -15 8.6
vertex 71.1 -15 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 85.5 -10 6.1
vertex 71.1 -10 6.1
vertex 71.1 -15 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 85.5 -10 6.1
vertex 71.1 -15 8.6
vertex 85.5 -15 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 71.1 -10 6.1
vertex 71.1 -20 6.1
vertex 71.1 -15 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 85.5 -20 6.1
vertex 85.5 -10 6.1
vertex 85.5 -15 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 85.5 -10 3.9
vertex 85.5 -20 3.9
vertex 99.9 -20 3.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 85.5 -10 3.9
vertex 99.9 -20 3.9
vertex 99.9 -10 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 85.5 -20 0
vertex 99.9 -20 0
vertex 99.9 -20 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 85.5 -20 0
vertex 99.9 -20 3.9
vertex 85.5 -20 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 99.9 -10 0
vertex 85.5 -10 0
vertex 85.5 -10 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 99.9 -10 0
vertex 85.5 -10 3.9
vertex 99.9 -10 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 99.9 -20 0
vertex 99.9 -10 0
vertex 99.9 -10 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 99.9 -20 0
vertex 99.9 -10 3.9
vertex 99.9 -20 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 85.5 -10 0
vertex 85.5 -20 0
vertex 85.5 -20 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 85.5 -10 0
vertex 85.5 -20 3.9
vertex 85.5 -10 3.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 85.5 -20 3.9
vertex 99.9 -20 3.9
vertex 99.9 -15 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 85.5 -20 3.9
vertex 99.9 -15 6.4
vertex 85.5 -15 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 99.9 -10 3.9
vertex 85.5 -10 3.9
vertex 85.5 -15 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 99.9 -10 3.9
vertex 85.5 -15 6.4
vertex 99.9 -15 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 85.5 -10 3.9
vertex 85.5 -20 3.9
vertex 85.5 -15 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 99.9 -20 3.9
vertex 99.9 -10 3.9
vertex 99.9 -15 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 101.1 -10 6
vertex 101.1 -20 6
vertex 115.5 -20 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 101.1 -10 6
vertex 115.5 -20 6
vertex 115.5 -10 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 101.1 -20 0
vertex 115.5 -20 0
vertex 115.5 -20 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 101.1 -20 0
vertex 115.5 -20 6
vertex 101.1 -20 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 115.5 -10 0
vertex 101.1 -10 0
vertex 101.1 -10 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 115.5 -10 0
vertex 101.1 -10 6
vertex 115.5 -10 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -20 0
vertex 115.5 -10 0
vertex 115.5 -10 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -20 0
vertex 115.5 -10 6
vertex 115.5 -20 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 101.1 -10 0
vertex 101.1 -20 0
vertex 101.1 -20 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 101.1 -10 0
vertex 101.1 -20 6
vertex 101.1 -10 6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 101.1 -20 6
vertex 115.5 -20 6
vertex 115.5 -15 8.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 101.1 -20 6
vertex 115.5 -15 8.5
vertex 101.1 -15 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 115.5 -10 6
vertex 101.1 -10 6
vertex 101.1 -15 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 115.5 -10 6
vertex 101.1 -15 8.5
vertex 115.5 -15 8.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 101.1 -10 6
vertex 101.1 -20 6
vertex 101.1 -15 8.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -20 6
vertex 115.5 -10 6
vertex 115.5 -15 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 -24 6.8
vertex -118 -34 6.8
vertex -103.6 -34 6.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -118 -24 6.8
vertex -103.6 -34 6.8
vertex -103.6 -24 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 -34 0
vertex -103.6 -34 0
vertex -103.6 -34 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -118 -34 0
vertex -103.6 -34 6.8
vertex -118 -34 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 -24 0
vertex -118 -24 0
vertex -118 -24 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -103.6 -24 0
vertex -118 -24 6.8
vertex -103.6 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -34 0
vertex -103.6 -24 0
vertex -103.6 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -34 0
vertex -103.6 -24 6.8
vertex -103.6 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -24 0
vertex -118 -34 0
vertex -118 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -24 0
vertex -118 -34 6.8
vertex -118 -24 6.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 -34 6.8
vertex -103.6 -34 6.8
vertex -103.6 -29 9.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -118 -34 6.8
vertex -103.6 -29 9.3
vertex -118 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 -24 6.8
vertex -118 -24 6.8
vertex -118 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -103.6 -24 6.8
vertex -118 -29 9.3
vertex -103.6 -29 9.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -118 -24 6.8
vertex -118 -34 6.8
vertex -118 -29 9.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -103.6 -34 6.8
vertex -103.6 -24 6.8
vertex -103.6 -29 9.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102.4 -24 6.2
vertex -102.4 -34 6.2
vertex -88 -34 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102.4 -24 6.2
vertex -88 -34 6.2
vertex -88 -24 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -102.4 -34 0
vertex -88 -34 0
vertex -88 -34 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -102.4 -34 0
vertex -88 -34 6.2
vertex -102.4 -34 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -88 -24 0
vertex -102.4 -24 0
vertex -102.4 -24 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -88 -24 0
vertex -102.4 -24 6.2
vertex -88 -24 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -88 -34 0
vertex -88 -24 0
vertex -88 -24 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -88 -34 0
vertex -88 -24 6.2
vertex -88 -34 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -24 0
vertex -102.4 -34 0
vertex -102.4 -34 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -24 0
vertex -102.4 -34 6.2
vertex -102.4 -24 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -102.4 -34 6.2
vertex -88 -34 6.2
vertex -88 -29 8.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -102.4 -34 6.2
vertex -88 -29 8.7
vertex -102.4 -29 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -88 -24 6.2
vertex -102.4 -24 6.2
vertex -102.4 -29 8.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -88 -24 6.2
vertex -102.4 -29 8.7
vertex -88 -29 8.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -102.4 -24 6.2
vertex -102.4 -34 6.2
vertex -102.4 -29 8.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -88 -34 6.2
vertex -88 -24 6.2
vertex -88 -29 8.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -88 -24 6.8
vertex -88 -34 6.8
vertex -77.2 -34 6.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -88 -24 6.8
vertex -77.2 -34 6.8
vertex -77.2 -24 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -88 -34 0
vertex -77.2 -34 0
vertex -77.2 -34 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -88 -34 0
vertex -77.2 -34 6.8
vertex -88 -34 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -77.2 -24 0
vertex -88 -24 0
vertex -88 -24 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -77.2 -24 0
vertex -88 -24 6.8
vertex -77.2 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -77.2 -34 0
vertex -77.2 -24 0
vertex -77.2 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -77.2 -34 0
vertex -77.2 -24 6.8
vertex -77.2 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -88 -24 0
vertex -88 -34 0
vertex -88 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -88 -24 0
vertex -88 -34 6.8
vertex -88 -24 6.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -88 -34 6.8
vertex -77.2 -34 6.8
vertex -77.2 -29 9.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -88 -34 6.8
vertex -77.2 -29 9.3
vertex -88 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -77.2 -24 6.8
vertex -88 -24 6.8
vertex -88 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -77.2 -24 6.8
vertex -88 -29 9.3
vertex -77.2 -29 9.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -88 -24 6.8
vertex -88 -34 6.8
vertex -88 -29 9.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -77.2 -34 6.8
vertex -77.2 -24 6.8
vertex -77.2 -29 9.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -76 -24 6
vertex -76 -34 6
vertex -65.2 -34 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -76 -24 6
vertex -65.2 -34 6
vertex -65.2 -24 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -76 -34 0
vertex -65.2 -34 0
vertex -65.2 -34 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -76 -34 0
vertex -65.2 -34 6
vertex -76 -34 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -65.2 -24 0
vertex -76 -24 0
vertex -76 -24 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -65.2 -24 0
vertex -76 -24 6
vertex -65.2 -24 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -65.2 -34 0
vertex -65.2 -24 0
vertex -65.2 -24 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -65.2 -34 0
vertex -65.2 -24 6
vertex -65.2 -34 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -76 -24 0
vertex -76 -34 0
vertex -76 -34 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -76 -24 0
vertex -76 -34 6
vertex -76 -24 6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -76 -34 6
vertex -65.2 -34 6
vertex -65.2 -29 8.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -76 -34 6
vertex -65.2 -29 8.5
vertex -76 -29 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -65.2 -24 6
vertex -76 -24 6
vertex -76 -29 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -65.2 -24 6
vertex -76 -29 8.5
vertex -65.2 -29 8.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -76 -24 6
vertex -76 -34 6
vertex -76 -29 8.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -65.2 -34 6
vertex -65.2 -24 6
vertex -65.2 -29 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -65.2 -24 6.1
vertex -65.2 -34 6.1
vertex -54.4 -34 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -65.2 -24 6.1
vertex -54.4 -34 6.1
vertex -54.4 -24 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -65.2 -34 0
vertex -54.4 -34 0
vertex -54.4 -34 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -65.2 -34 0
vertex -54.4 -34 6.1
vertex -65.2 -34 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -54.4 -24 0
vertex -65.2 -24 0
vertex -65.2 -24 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -54.4 -24 0
vertex -65.2 -24 6.1
vertex -54.4 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -54.4 -34 0
vertex -54.4 -24 0
vertex -54.4 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -54.4 -34 0
vertex -54.4 -24 6.1
vertex -54.4 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -65.2 -24 0
vertex -65.2 -34 0
vertex -65.2 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -65.2 -24 0
vertex -65.2 -34 6.1
vertex -65.2 -24 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -65.2 -34 6.1
vertex -54.4 -34 6.1
vertex -54.4 -29 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -65.2 -34 6.1
vertex -54.4 -29 8.6
vertex -65.2 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -54.4 -24 6.1
vertex -65.2 -24 6.1
vertex -65.2 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -54.4 -24 6.1
vertex -65.2 -29 8.6
vertex -54.4 -29 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -65.2 -24 6.1
vertex -65.2 -34 6.1
vertex -65.2 -29 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -54.4 -34 6.1
vertex -54.4 -24 6.1
vertex -54.4 -29 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -54.4 -24 6.1
vertex -54.4 -34 6.1
vertex -43.6 -34 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -54.4 -24 6.1
vertex -43.6 -34 6.1
vertex -43.6 -24 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -54.4 -34 0
vertex -43.6 -34 0
vertex -43.6 -34 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -54.4 -34 0
vertex -43.6 -34 6.1
vertex -54.4 -34 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -43.6 -24 0
vertex -54.4 -24 0
vertex -54.4 -24 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -43.6 -24 0
vertex -54.4 -24 6.1
vertex -43.6 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -43.6 -34 0
vertex -43.6 -24 0
vertex -43.6 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -43.6 -34 0
vertex -43.6 -24 6.1
vertex -43.6 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -54.4 -24 0
vertex -54.4 -34 0
vertex -54.4 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -54.4 -24 0
vertex -54.4 -34 6.1
vertex -54.4 -24 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -54.4 -34 6.1
vertex -43.6 -34 6.1
vertex -43.6 -29 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -54.4 -34 6.1
vertex -43.6 -29 8.6
vertex -54.4 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -43.6 -24 6.1
vertex -54.4 -24 6.1
vertex -54.4 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -43.6 -24 6.1
vertex -54.4 -29 8.6
vertex -43.6 -29 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -54.4 -24 6.1
vertex -54.4 -34 6.1
vertex -54.4 -29 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -43.6 -34 6.1
vertex -43.6 -24 6.1
vertex -43.6 -29 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -42.4 -24 6.6
vertex -42.4 -34 6.6
vertex -35.2 -34 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -42.4 -24 6.6
vertex -35.2 -34 6.6
vertex -35.2 -24 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -42.4 -34 0
vertex -35.2 -34 0
vertex -35.2 -34 6.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -42.4 -34 0
vertex -35.2 -34 6.6
vertex -42.4 -34 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -35.2 -24 0
vertex -42.4 -24 0
vertex -42.4 -24 6.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -35.2 -24 0
vertex -42.4 -24 6.6
vertex -35.2 -24 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -35.2 -34 0
vertex -35.2 -24 0
vertex -35.2 -24 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -35.2 -34 0
vertex -35.2 -24 6.6
vertex -35.2 -34 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 -24 0
vertex -42.4 -34 0
vertex -42.4 -34 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 -24 0
vertex -42.4 -34 6.6
vertex -42.4 -24 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -42.4 -34 6.6
vertex -35.2 -34 6.6
vertex -35.2 -29 9.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -42.4 -34 6.6
vertex -35.2 -29 9.1
vertex -42.4 -29 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -35.2 -24 6.6
vertex -42.4 -24 6.6
vertex -42.4 -29 9.1
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -35.2 -24 6.6
vertex -42.4 -29 9.1
vertex -35.2 -29 9.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -42.4 -24 6.6
vertex -42.4 -34 6.6
vertex -42.4 -29 9.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -35.2 -34 6.6
vertex -35.2 -24 6.6
vertex -35.2 -29 9.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -35.2 -24 3.9
vertex -35.2 -34 3.9
vertex -24.4 -34 3.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -35.2 -24 3.9
vertex -24.4 -34 3.9
vertex -24.4 -24 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -35.2 -34 0
vertex -24.4 -34 0
vertex -24.4 -34 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -35.2 -34 0
vertex -24.4 -34 3.9
vertex -35.2 -34 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -24.4 -24 0
vertex -35.2 -24 0
vertex -35.2 -24 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -24.4 -24 0
vertex -35.2 -24 3.9
vertex -24.4 -24 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -24.4 -34 0
vertex -24.4 -24 0
vertex -24.4 -24 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -24.4 -34 0
vertex -24.4 -24 3.9
vertex -24.4 -34 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -35.2 -24 0
vertex -35.2 -34 0
vertex -35.2 -34 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -35.2 -24 0
vertex -35.2 -34 3.9
vertex -35.2 -24 3.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -35.2 -34 3.9
vertex -24.4 -34 3.9
vertex -24.4 -29 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -35.2 -34 3.9
vertex -24.4 -29 6.4
vertex -35.2 -29 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -24.4 -24 3.9
vertex -35.2 -24 3.9
vertex -35.2 -29 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -24.4 -24 3.9
vertex -35.2 -29 6.4
vertex -24.4 -29 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -35.2 -24 3.9
vertex -35.2 -34 3.9
vertex -35.2 -29 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -24.4 -34 3.9
vertex -24.4 -24 3.9
vertex -24.4 -29 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -23.2 -24 6.1
vertex -23.2 -34 6.1
vertex -8.8 -34 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -23.2 -24 6.1
vertex -8.8 -34 6.1
vertex -8.8 -24 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -23.2 -34 0
vertex -8.8 -34 0
vertex -8.8 -34 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -23.2 -34 0
vertex -8.8 -34 6.1
vertex -23.2 -34 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -8.8 -24 0
vertex -23.2 -24 0
vertex -23.2 -24 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -8.8 -24 0
vertex -23.2 -24 6.1
vertex -8.8 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 -34 0
vertex -8.8 -24 0
vertex -8.8 -24 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 -34 0
vertex -8.8 -24 6.1
vertex -8.8 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -23.2 -24 0
vertex -23.2 -34 0
vertex -23.2 -34 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -23.2 -24 0
vertex -23.2 -34 6.1
vertex -23.2 -24 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -23.2 -34 6.1
vertex -8.8 -34 6.1
vertex -8.8 -29 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex -23.2 -34 6.1
vertex -8.8 -29 8.6
vertex -23.2 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -8.8 -24 6.1
vertex -23.2 -24 6.1
vertex -23.2 -29 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex -8.8 -24 6.1
vertex -23.2 -29 8.6
vertex -8.8 -29 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -23.2 -24 6.1
vertex -23.2 -34 6.1
vertex -23.2 -29 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -8.8 -34 6.1
vertex -8.8 -24 6.1
vertex -8.8 -29 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 -24 6.7
vertex 7.5 -34 6.7
vertex 18.3 -34 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 7.5 -24 6.7
vertex 18.3 -34 6.7
vertex 18.3 -24 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 -34 0
vertex 18.3 -34 0
vertex 18.3 -34 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 -34 0
vertex 18.3 -34 6.7
vertex 7.5 -34 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 18.3 -24 0
vertex 7.5 -24 0
vertex 7.5 -24 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 18.3 -24 0
vertex 7.5 -24 6.7
vertex 18.3 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 18.3 -34 0
vertex 18.3 -24 0
vertex 18.3 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 18.3 -34 0
vertex 18.3 -24 6.7
vertex 18.3 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -24 0
vertex 7.5 -34 0
vertex 7.5 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -24 0
vertex 7.5 -34 6.7
vertex 7.5 -24 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 -34 6.7
vertex 18.3 -34 6.7
vertex 18.3 -29 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 7.5 -34 6.7
vertex 18.3 -29 9.2
vertex 7.5 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 18.3 -24 6.7
vertex 7.5 -24 6.7
vertex 7.5 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 18.3 -24 6.7
vertex 7.5 -29 9.2
vertex 18.3 -29 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 7.5 -24 6.7
vertex 7.5 -34 6.7
vertex 7.5 -29 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 18.3 -34 6.7
vertex 18.3 -24 6.7
vertex 18.3 -29 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 18.3 -24 4.1
vertex 18.3 -34 4.1
vertex 32.7 -34 4.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 18.3 -24 4.1
vertex 32.7 -34 4.1
vertex 32.7 -24 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 18.3 -34 0
vertex 32.7 -34 0
vertex 32.7 -34 4.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 18.3 -34 0
vertex 32.7 -34 4.1
vertex 18.3 -34 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 32.7 -24 0
vertex 18.3 -24 0
vertex 18.3 -24 4.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 32.7 -24 0
vertex 18.3 -24 4.1
vertex 32.7 -24 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 -34 0
vertex 32.7 -24 0
vertex 32.7 -24 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 -34 0
vertex 32.7 -24 4.1
vertex 32.7 -34 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 18.3 -24 0
vertex 18.3 -34 0
vertex 18.3 -34 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 18.3 -24 0
vertex 18.3 -34 4.1
vertex 18.3 -24 4.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 18.3 -34 4.1
vertex 32.7 -34 4.1
vertex 32.7 -29 6.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 18.3 -34 4.1
vertex 32.7 -29 6.6
vertex 18.3 -29 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 32.7 -24 4.1
vertex 18.3 -24 4.1
vertex 18.3 -29 6.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 32.7 -24 4.1
vertex 18.3 -29 6.6
vertex 32.7 -29 6.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 18.3 -24 4.1
vertex 18.3 -34 4.1
vertex 18.3 -29 6.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 32.7 -34 4.1
vertex 32.7 -24 4.1
vertex 32.7 -29 6.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 33.9 -24 6
vertex 33.9 -34 6
vertex 44.7 -34 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 33.9 -24 6
vertex 44.7 -34 6
vertex 44.7 -24 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 33.9 -34 0
vertex 44.7 -34 0
vertex 44.7 -34 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 33.9 -34 0
vertex 44.7 -34 6
vertex 33.9 -34 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 44.7 -24 0
vertex 33.9 -24 0
vertex 33.9 -24 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 44.7 -24 0
vertex 33.9 -24 6
vertex 44.7 -24 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 44.7 -34 0
vertex 44.7 -24 0
vertex 44.7 -24 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 44.7 -34 0
vertex 44.7 -24 6
vertex 44.7 -34 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 33.9 -24 0
vertex 33.9 -34 0
vertex 33.9 -34 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 33.9 -24 0
vertex 33.9 -34 6
vertex 33.9 -24 6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 33.9 -34 6
vertex 44.7 -34 6
vertex 44.7 -29 8.5
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 33.9 -34 6
vertex 44.7 -29 8.5
vertex 33.9 -29 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 44.7 -24 6
vertex 33.9 -24 6
vertex 33.9 -29 8.5
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 44.7 -24 6
vertex 33.9 -29 8.5
vertex 44.7 -29 8.5
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 33.9 -24 6
vertex 33.9 -34 6
vertex 33.9 -29 8.5
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 44.7 -34 6
vertex 44.7 -24 6
vertex 44.7 -29 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 44.7 -24 6.7
vertex 44.7 -34 6.7
vertex 59.1 -34 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 44.7 -24 6.7
vertex 59.1 -34 6.7
vertex 59.1 -24 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 44.7 -34 0
vertex 59.1 -34 0
vertex 59.1 -34 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 44.7 -34 0
vertex 59.1 -34 6.7
vertex 44.7 -34 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 59.1 -24 0
vertex 44.7 -24 0
vertex 44.7 -24 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 59.1 -24 0
vertex 44.7 -24 6.7
vertex 59.1 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 59.1 -34 0
vertex 59.1 -24 0
vertex 59.1 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 59.1 -34 0
vertex 59.1 -24 6.7
vertex 59.1 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 44.7 -24 0
vertex 44.7 -34 0
vertex 44.7 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 44.7 -24 0
vertex 44.7 -34 6.7
vertex 44.7 -24 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 44.7 -34 6.7
vertex 59.1 -34 6.7
vertex 59.1 -29 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 44.7 -34 6.7
vertex 59.1 -29 9.2
vertex 44.7 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 59.1 -24 6.7
vertex 44.7 -24 6.7
vertex 44.7 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 59.1 -24 6.7
vertex 44.7 -29 9.2
vertex 59.1 -29 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 44.7 -24 6.7
vertex 44.7 -34 6.7
vertex 44.7 -29 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 59.1 -34 6.7
vertex 59.1 -24 6.7
vertex 59.1 -29 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 60.3 -24 6.3
vertex 60.3 -34 6.3
vertex 74.7 -34 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 60.3 -24 6.3
vertex 74.7 -34 6.3
vertex 74.7 -24 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 60.3 -34 0
vertex 74.7 -34 0
vertex 74.7 -34 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 60.3 -34 0
vertex 74.7 -34 6.3
vertex 60.3 -34 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 74.7 -24 0
vertex 60.3 -24 0
vertex 60.3 -24 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 74.7 -24 0
vertex 60.3 -24 6.3
vertex 74.7 -24 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 74.7 -34 0
vertex 74.7 -24 0
vertex 74.7 -24 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 74.7 -34 0
vertex 74.7 -24 6.3
vertex 74.7 -34 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 60.3 -24 0
vertex 60.3 -34 0
vertex 60.3 -34 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 60.3 -24 0
vertex 60.3 -34 6.3
vertex 60.3 -24 6.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 60.3 -34 6.3
vertex 74.7 -34 6.3
vertex 74.7 -29 8.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 60.3 -34 6.3
vertex 74.7 -29 8.8
vertex 60.3 -29 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 74.7 -24 6.3
vertex 60.3 -24 6.3
vertex 60.3 -29 8.8
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 74.7 -24 6.3
vertex 60.3 -29 8.8
vertex 74.7 -29 8.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 60.3 -24 6.3
vertex 60.3 -34 6.3
vertex 60.3 -29 8.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 74.7 -34 6.3
vertex 74.7 -24 6.3
vertex 74.7 -29 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 74.7 -24 6.7
vertex 74.7 -34 6.7
vertex 81.9 -34 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 74.7 -24 6.7
vertex 81.9 -34 6.7
vertex 81.9 -24 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 74.7 -34 0
vertex 81.9 -34 0
vertex 81.9 -34 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 74.7 -34 0
vertex 81.9 -34 6.7
vertex 74.7 -34 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 81.9 -24 0
vertex 74.7 -24 0
vertex 74.7 -24 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 81.9 -24 0
vertex 74.7 -24 6.7
vertex 81.9 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 81.9 -34 0
vertex 81.9 -24 0
vertex 81.9 -24 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 81.9 -34 0
vertex 81.9 -24 6.7
vertex 81.9 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 74.7 -24 0
vertex 74.7 -34 0
vertex 74.7 -34 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 74.7 -24 0
vertex 74.7 -34 6.7
vertex 74.7 -24 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 74.7 -34 6.7
vertex 81.9 -34 6.7
vertex 81.9 -29 9.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 74.7 -34 6.7
vertex 81.9 -29 9.2
vertex 74.7 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 81.9 -24 6.7
vertex 74.7 -24 6.7
vertex 74.7 -29 9.2
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 81.9 -24 6.7
vertex 74.7 -29 9.2
vertex 81.9 -29 9.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 74.7 -24 6.7
vertex 74.7 -34 6.7
vertex 74.7 -29 9.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 81.9 -34 6.7
vertex 81.9 -24 6.7
vertex 81.9 -29 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 81.9 -24 3.9
vertex 81.9 -34 3.9
vertex 89.1 -34 3.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 81.9 -24 3.9
vertex 89.1 -34 3.9
vertex 89.1 -24 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 81.9 -34 0
vertex 89.1 -34 0
vertex 89.1 -34 3.9
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 81.9 -34 0
vertex 89.1 -34 3.9
vertex 81.9 -34 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 89.1 -24 0
vertex 81.9 -24 0
vertex 81.9 -24 3.9
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 89.1 -24 0
vertex 81.9 -24 3.9
vertex 89.1 -24 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 89.1 -34 0
vertex 89.1 -24 0
vertex 89.1 -24 3.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 89.1 -34 0
vertex 89.1 -24 3.9
vertex 89.1 -34 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 81.9 -24 0
vertex 81.9 -34 0
vertex 81.9 -34 3.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 81.9 -24 0
vertex 81.9 -34 3.9
vertex 81.9 -24 3.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 81.9 -34 3.9
vertex 89.1 -34 3.9
vertex 89.1 -29 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 81.9 -34 3.9
vertex 89.1 -29 6.4
vertex 81.9 -29 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 89.1 -24 3.9
vertex 81.9 -24 3.9
vertex 81.9 -29 6.4
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 89.1 -24 3.9
vertex 81.9 -29 6.4
vertex 89.1 -29 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 81.9 -24 3.9
vertex 81.9 -34 3.9
vertex 81.9 -29 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 89.1 -34 3.9
vertex 89.1 -24 3.9
vertex 89.1 -29 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 89.1 -24 6.8
vertex 89.1 -34 6.8
vertex 103.5 -34 6.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 89.1 -24 6.8
vertex 103.5 -34 6.8
vertex 103.5 -24 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 89.1 -34 0
vertex 103.5 -34 0
vertex 103.5 -34 6.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 89.1 -34 0
vertex 103.5 -34 6.8
vertex 89.1 -34 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 103.5 -24 0
vertex 89.1 -24 0
vertex 89.1 -24 6.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 103.5 -24 0
vertex 89.1 -24 6.8
vertex 103.5 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 103.5 -34 0
vertex 103.5 -24 0
vertex 103.5 -24 6.8
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 103.5 -34 0
vertex 103.5 -24 6.8
vertex 103.5 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 89.1 -24 0
vertex 89.1 -34 0
vertex 89.1 -34 6.8
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 89.1 -24 0
vertex 89.1 -34 6.8
vertex 89.1 -24 6.8
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 89.1 -34 6.8
vertex 103.5 -34 6.8
vertex 103.5 -29 9.3
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 89.1 -34 6.8
vertex 103.5 -29 9.3
vertex 89.1 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 103.5 -24 6.8
vertex 89.1 -24 6.8
vertex 89.1 -29 9.3
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 103.5 -24 6.8
vertex 89.1 -29 9.3
vertex 103.5 -29 9.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 89.1 -24 6.8
vertex 89.1 -34 6.8
vertex 89.1 -29 9.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 103.5 -34 6.8
vertex 103.5 -24 6.8
vertex 103.5 -29 9.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 104.7 -24 6.4
vertex 104.7 -34 6.4
vertex 115.5 -34 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 104.7 -24 6.4
vertex 115.5 -34 6.4
vertex 115.5 -24 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 104.7 -34 0
vertex 115.5 -34 0
vertex 115.5 -34 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 104.7 -34 0
vertex 115.5 -34 6.4
vertex 104.7 -34 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 115.5 -24 0
vertex 104.7 -24 0
vertex 104.7 -24 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 115.5 -24 0
vertex 104.7 -24 6.4
vertex 115.5 -24 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -34 0
vertex 115.5 -24 0
vertex 115.5 -24 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -34 0
vertex 115.5 -24 6.4
vertex 115.5 -34 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 104.7 -24 0
vertex 104.7 -34 0
vertex 104.7 -34 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 104.7 -24 0
vertex 104.7 -34 6.4
vertex 104.7 -24 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 104.7 -34 6.4
vertex 115.5 -34 6.4
vertex 115.5 -29 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 104.7 -34 6.4
vertex 115.5 -29 8.9
vertex 104.7 -29 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 115.5 -24 6.4
vertex 104.7 -24 6.4
vertex 104.7 -29 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 115.5 -24 6.4
vertex 104.7 -29 8.9
vertex 115.5 -29 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 104.7 -24 6.4
vertex 104.7 -34 6.4
vertex 104.7 -29 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 115.5 -34 6.4
vertex 115.5 -24 6.4
vertex 115.5 -29 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -38 6.3
vertex -17 -48.8 6.3
vertex -7 -48.8 6.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -38 6.3
vertex -7 -48.8 6.3
vertex -7 -38 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -48.8 0
vertex -7 -48.8 0
vertex -7 -48.8 6.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -48.8 0
vertex -7 -48.8 6.3
vertex -17 -48.8 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -38 0
vertex -17 -38 0
vertex -17 -38 6.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -38 0
vertex -17 -38 6.3
vertex -7 -38 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -48.8 0
vertex -7 -38 0
vertex -7 -38 6.3
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -48.8 0
vertex -7 -38 6.3
vertex -7 -48.8 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -38 0
vertex -17 -48.8 0
vertex -17 -48.8 6.3
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -38 0
vertex -17 -48.8 6.3
vertex -17 -38 6.3
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -38 6.3
vertex -7 -48.8 6.3
vertex -12 -48.8 8.8
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -38 6.3
vertex -12 -48.8 8.8
vertex -12 -38 8.8
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -48.8 6.3
vertex -17 -38 6.3
vertex -12 -38 8.8
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -48.8 6.3
vertex -12 -38 8.8
vertex -12 -48.8 8.8
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -38 6.3
vertex -7 -38 6.3
vertex -12 -38 8.8
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -48.8 6.3
vertex -17 -48.8 6.3
vertex -12 -48.8 8.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -48.8 6.7
vertex -17 -56 6.7
vertex -7 -56 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -48.8 6.7
vertex -7 -56 6.7
vertex -7 -48.8 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -56 0
vertex -7 -56 0
vertex -7 -56 6.7
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -56 0
vertex -7 -56 6.7
vertex -17 -56 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -48.8 0
vertex -17 -48.8 0
vertex -17 -48.8 6.7
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -48.8 0
vertex -17 -48.8 6.7
vertex -7 -48.8 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -56 0
vertex -7 -48.8 0
vertex -7 -48.8 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -56 0
vertex -7 -48.8 6.7
vertex -7 -56 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -48.8 0
vertex -17 -56 0
vertex -17 -56 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -48.8 0
vertex -17 -56 6.7
vertex -17 -48.8 6.7
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -48.8 6.7
vertex -7 -56 6.7
vertex -12 -56 9.2
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -48.8 6.7
vertex -12 -56 9.2
vertex -12 -48.8 9.2
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -56 6.7
vertex -17 -48.8 6.7
vertex -12 -48.8 9.2
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -56 6.7
vertex -12 -48.8 9.2
vertex -12 -56 9.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -48.8 6.7
vertex -7 -48.8 6.7
vertex -12 -48.8 9.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -56 6.7
vertex -17 -56 6.7
vertex -12 -56 9.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -56 6.1
vertex -17 -66.8 6.1
vertex -7 -66.8 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -56 6.1
vertex -7 -66.8 6.1
vertex -7 -56 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -66.8 0
vertex -7 -66.8 0
vertex -7 -66.8 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -66.8 0
vertex -7 -66.8 6.1
vertex -17 -66.8 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -56 0
vertex -17 -56 0
vertex -17 -56 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -56 0
vertex -17 -56 6.1
vertex -7 -56 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -66.8 0
vertex -7 -56 0
vertex -7 -56 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -66.8 0
vertex -7 -56 6.1
vertex -7 -66.8 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -56 0
vertex -17 -66.8 0
vertex -17 -66.8 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -56 0
vertex -17 -66.8 6.1
vertex -17 -56 6.1
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -56 6.1
vertex -7 -66.8 6.1
vertex -12 -66.8 8.6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -56 6.1
vertex -12 -66.8 8.6
vertex -12 -56 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -66.8 6.1
vertex -17 -56 6.1
vertex -12 -56 8.6
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -66.8 6.1
vertex -12 -56 8.6
vertex -12 -66.8 8.6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -56 6.1
vertex -7 -56 6.1
vertex -12 -56 8.6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -66.8 6.1
vertex -17 -66.8 6.1
vertex -12 -66.8 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -68 6
vertex -17 -75.2 6
vertex -7 -75.2 6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -17 -68 6
vertex -7 -75.2 6
vertex -7 -68 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -75.2 0
vertex -7 -75.2 0
vertex -7 -75.2 6
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -75.2 0
vertex -7 -75.2 6
vertex -17 -75.2 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -68 0
vertex -17 -68 0
vertex -17 -68 6
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -68 0
vertex -17 -68 6
vertex -7 -68 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -75.2 0
vertex -7 -68 0
vertex -7 -68 6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -7 -75.2 0
vertex -7 -68 6
vertex -7 -75.2 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -68 0
vertex -17 -75.2 0
vertex -17 -75.2 6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -17 -68 0
vertex -17 -75.2 6
vertex -17 -68 6
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -68 6
vertex -7 -75.2 6
vertex -12 -75.2 8.5
endloop
endfacet
facet normal -0.45 0.00 -0.89
outer loop
vertex -7 -68 6
vertex -12 -75.2 8.5
vertex -12 -68 8.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -75.2 6
vertex -17 -68 6
vertex -12 -68 8.5
endloop
endfacet
facet normal 0.45 0.00 -0.89
outer loop
vertex -17 -75.2 6
vertex -12 -68 8.5
vertex -12 -75.2 8.5
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -17 -68 6
vertex -7 -68 6
vertex -12 -68 8.5
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7 -75.2 6
vertex -17 -75.2 6
vertex -12 -75.2 8.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 62 -38 4.2
vertex 62 -48 4.2
vertex 69.2 -48 4.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 62 -38 4.2
vertex 69.2 -48 4.2
vertex 69.2 -38 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 62 -48 0
vertex 69.2 -48 0
vertex 69.2 -48 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 62 -48 0
vertex 69.2 -48 4.2
vertex 62 -48 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 69.2 -38 0
vertex 62 -38 0
vertex 62 -38 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 69.2 -38 0
vertex 62 -38 4.2
vertex 69.2 -38 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.2 -48 0
vertex 69.2 -38 0
vertex 69.2 -38 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.2 -48 0
vertex 69.2 -38 4.2
vertex 69.2 -48 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 62 -38 0
vertex 62 -48 0
vertex 62 -48 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 62 -38 0
vertex 62 -48 4.2
vertex 62 -38 4.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 62 -48 4.2
vertex 69.2 -48 4.2
vertex 69.2 -43 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 62 -48 4.2
vertex 69.2 -43 6.7
vertex 62 -43 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 69.2 -38 4.2
vertex 62 -38 4.2
vertex 62 -43 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 69.2 -38 4.2
vertex 62 -43 6.7
vertex 69.2 -43 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 62 -38 4.2
vertex 62 -48 4.2
vertex 62 -43 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 69.2 -48 4.2
vertex 69.2 -38 4.2
vertex 69.2 -43 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 69.2 -38 4.2
vertex 69.2 -48 4.2
vertex 80 -48 4.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 69.2 -38 4.2
vertex 80 -48 4.2
vertex 80 -38 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 69.2 -48 0
vertex 80 -48 0
vertex 80 -48 4.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 69.2 -48 0
vertex 80 -48 4.2
vertex 69.2 -48 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 80 -38 0
vertex 69.2 -38 0
vertex 69.2 -38 4.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 80 -38 0
vertex 69.2 -38 4.2
vertex 80 -38 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 80 -48 0
vertex 80 -38 0
vertex 80 -38 4.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 80 -48 0
vertex 80 -38 4.2
vertex 80 -48 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 69.2 -38 0
vertex 69.2 -48 0
vertex 69.2 -48 4.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 69.2 -38 0
vertex 69.2 -48 4.2
vertex 69.2 -38 4.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 69.2 -48 4.2
vertex 80 -48 4.2
vertex 80 -43 6.7
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 69.2 -48 4.2
vertex 80 -43 6.7
vertex 69.2 -43 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 80 -38 4.2
vertex 69.2 -38 4.2
vertex 69.2 -43 6.7
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 80 -38 4.2
vertex 69.2 -43 6.7
vertex 80 -43 6.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 69.2 -38 4.2
vertex 69.2 -48 4.2
vertex 69.2 -43 6.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 80 -48 4.2
vertex 80 -38 4.2
vertex 80 -43 6.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 80 -38 6.1
vertex 80 -48 6.1
vertex 94.4 -48 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 80 -38 6.1
vertex 94.4 -48 6.1
vertex 94.4 -38 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 80 -48 0
vertex 94.4 -48 0
vertex 94.4 -48 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 80 -48 0
vertex 94.4 -48 6.1
vertex 80 -48 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 94.4 -38 0
vertex 80 -38 0
vertex 80 -38 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 94.4 -38 0
vertex 80 -38 6.1
vertex 94.4 -38 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 94.4 -48 0
vertex 94.4 -38 0
vertex 94.4 -38 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 94.4 -48 0
vertex 94.4 -38 6.1
vertex 94.4 -48 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 80 -38 0
vertex 80 -48 0
vertex 80 -48 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 80 -38 0
vertex 80 -48 6.1
vertex 80 -38 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 80 -48 6.1
vertex 94.4 -48 6.1
vertex 94.4 -43 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 80 -48 6.1
vertex 94.4 -43 8.6
vertex 80 -43 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 94.4 -38 6.1
vertex 80 -38 6.1
vertex 80 -43 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 94.4 -38 6.1
vertex 80 -43 8.6
vertex 94.4 -43 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 80 -38 6.1
vertex 80 -48 6.1
vertex 80 -43 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 94.4 -48 6.1
vertex 94.4 -38 6.1
vertex 94.4 -43 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 95.6 -38 6.4
vertex 95.6 -48 6.4
vertex 102.8 -48 6.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 95.6 -38 6.4
vertex 102.8 -48 6.4
vertex 102.8 -38 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 95.6 -48 0
vertex 102.8 -48 0
vertex 102.8 -48 6.4
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 95.6 -48 0
vertex 102.8 -48 6.4
vertex 95.6 -48 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 102.8 -38 0
vertex 95.6 -38 0
vertex 95.6 -38 6.4
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 102.8 -38 0
vertex 95.6 -38 6.4
vertex 102.8 -38 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.8 -48 0
vertex 102.8 -38 0
vertex 102.8 -38 6.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.8 -48 0
vertex 102.8 -38 6.4
vertex 102.8 -48 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 95.6 -38 0
vertex 95.6 -48 0
vertex 95.6 -48 6.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 95.6 -38 0
vertex 95.6 -48 6.4
vertex 95.6 -38 6.4
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 95.6 -48 6.4
vertex 102.8 -48 6.4
vertex 102.8 -43 8.9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 95.6 -48 6.4
vertex 102.8 -43 8.9
vertex 95.6 -43 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 102.8 -38 6.4
vertex 95.6 -38 6.4
vertex 95.6 -43 8.9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 102.8 -38 6.4
vertex 95.6 -43 8.9
vertex 102.8 -43 8.9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 95.6 -38 6.4
vertex 95.6 -48 6.4
vertex 95.6 -43 8.9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 102.8 -48 6.4
vertex 102.8 -38 6.4
vertex 102.8 -43 8.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 102.8 -38 6.1
vertex 102.8 -48 6.1
vertex 117.2 -48 6.1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 102.8 -38 6.1
vertex 117.2 -48 6.1
vertex 117.2 -38 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 102.8 -48 0
vertex 117.2 -48 0
vertex 117.2 -48 6.1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 102.8 -48 0
vertex 117.2 -48 6.1
vertex 102.8 -48 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 117.2 -38 0
vertex 102.8 -38 0
vertex 102.8 -38 6.1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 117.2 -38 0
vertex 102.8 -38 6.1
vertex 117.2 -38 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 117.2 -48 0
vertex 117.2 -38 0
vertex 117.2 -38 6.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 117.2 -48 0
vertex 117.2 -38 6.1
vertex 117.2 -48 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.8 -38 0
vertex 102.8 -48 0
vertex 102.8 -48 6.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.8 -38 0
vertex 102.8 -48 6.1
vertex 102.8 -38 6.1
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 102.8 -48 6.1
vertex 117.2 -48 6.1
vertex 117.2 -43 8.6
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 102.8 -48 6.1
vertex 117.2 -43 8.6
vertex 102.8 -43 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 117.2 -38 6.1
vertex 102.8 -38 6.1
vertex 102.8 -43 8.6
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 117.2 -38 6.1
vertex 102.8 -43 8.6
vertex 117.2 -43 8.6
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 102.8 -38 6.1
vertex 102.8 -48 6.1
vertex 102.8 -43 8.6
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 117.2 -48 6.1
vertex 117.2 -38 6.1
vertex 117.2 -43 8.6
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 10 -64 6.2
vertex 10 -75 6.2
vertex 30 -75 6.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 10 -64 6.2
vertex 30 -75 6.2
vertex 30 -64 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 10 -75 0
vertex 30 -75 0
vertex 30 -75 6.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 10 -75 0
vertex 30 -75 6.2
vertex 10 -75 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 30 -64 0
vertex 10 -64 0
vertex 10 -64 6.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 30 -64 0
vertex 10 -64 6.2
vertex 30 -64 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 30 -75 0
vertex 30 -64 0
vertex 30 -64 6.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 30 -75 0
vertex 30 -64 6.2
vertex 30 -75 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 10 -64 0
vertex 10 -75 0
vertex 10 -75 6.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 10 -64 0
vertex 10 -75 6.2
vertex 10 -64 6.2
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 10 -75 6.2
vertex 30 -75 6.2
vertex 30 -69.5 9
endloop
endfacet
facet normal 0.00 -0.45 0.89
outer loop
vertex 10 -75 6.2
vertex 30 -69.5 9
vertex 10 -69.5 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 30 -64 6.2
vertex 10 -64 6.2
vertex 10 -69.5 9
endloop
endfacet
facet normal 0.00 0.45 0.89
outer loop
vertex 30 -64 6.2
vertex 10 -69.5 9
vertex 30 -69.5 9
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 10 -64 6.2
vertex 10 -75 6.2
vertex 10 -69.5 9
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 30 -75 6.2
vertex 30 -64 6.2
vertex 30 -69.5 9
endloop
endfacet
facet normal 0.00 0.43 0.90
outer loop
vertex -15.8 14 0
vertex -15.8 10.5 1.7
vertex -12.2 10.5 1.7
endloop
endfacet
facet normal 0.00 0.43 0.90
outer loop
vertex -15.8 14 0
vertex -12.2 10.5 1.7
vertex -12.2 14 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 14 -1.2
vertex -12.2 10.5 -1.2
vertex -12.2 10.5 1.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 14 -1.2
vertex -12.2 10.5 1.7
vertex -12.2 14 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 10.5 -1.2
vertex -15.8 14 -1.2
vertex -15.8 14 0
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 10.5 -1.2
vertex -15.8 14 0
vertex -15.8 10.5 1.7
endloop
endfacet
facet normal 0.00 0.38 0.93
outer loop
vertex -15.8 10.5 1.7
vertex -15.8 7 3.1
vertex -12.2 7 3.1
endloop
endfacet
facet normal 0.00 0.38 0.93
outer loop
vertex -15.8 10.5 1.7
vertex -12.2 7 3.1
vertex -12.2 10.5 1.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 10.5 -1.2
vertex -12.2 7 -1.2
vertex -12.2 7 3.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 10.5 -1.2
vertex -12.2 7 3.1
vertex -12.2 10.5 1.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 7 -1.2
vertex -15.8 10.5 -1.2
vertex -15.8 10.5 1.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 7 -1.2
vertex -15.8 10.5 1.7
vertex -15.8 7 3.1
endloop
endfacet
facet normal 0.00 0.26 0.96
outer loop
vertex -15.8 7 3.1
vertex -15.8 3.5 4.1
vertex -12.2 3.5 4.1
endloop
endfacet
facet normal 0.00 0.26 0.96
outer loop
vertex -15.8 7 3.1
vertex -12.2 3.5 4.1
vertex -12.2 7 3.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 7 -1.2
vertex -12.2 3.5 -1.2
vertex -12.2 3.5 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 7 -1.2
vertex -12.2 3.5 4.1
vertex -12.2 7 3.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 3.5 -1.2
vertex -15.8 7 -1.2
vertex -15.8 7 3.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 3.5 -1.2
vertex -15.8 7 3.1
vertex -15.8 3.5 4.1
endloop
endfacet
facet normal 0.00 0.10 1.00
outer loop
vertex -15.8 3.5 4.1
vertex -15.8 0 4.4
vertex -12.2 0 4.4
endloop
endfacet
facet normal 0.00 0.10 1.00
outer loop
vertex -15.8 3.5 4.1
vertex -12.2 0 4.4
vertex -12.2 3.5 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 3.5 -1.2
vertex -12.2 0 -1.2
vertex -12.2 0 4.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 3.5 -1.2
vertex -12.2 0 4.4
vertex -12.2 3.5 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 0 -1.2
vertex -15.8 3.5 -1.2
vertex -15.8 3.5 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 0 -1.2
vertex -15.8 3.5 4.1
vertex -15.8 0 4.4
endloop
endfacet
facet normal 0.00 -0.10 1.00
outer loop
vertex -15.8 0 4.4
vertex -15.8 -3.5 4.1
vertex -12.2 -3.5 4.1
endloop
endfacet
facet normal 0.00 -0.10 1.00
outer loop
vertex -15.8 0 4.4
vertex -12.2 -3.5 4.1
vertex -12.2 0 4.4
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 0 -1.2
vertex -12.2 -3.5 -1.2
vertex -12.2 -3.5 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 0 -1.2
vertex -12.2 -3.5 4.1
vertex -12.2 0 4.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -3.5 -1.2
vertex -15.8 0 -1.2
vertex -15.8 0 4.4
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -3.5 -1.2
vertex -15.8 0 4.4
vertex -15.8 -3.5 4.1
endloop
endfacet
facet normal 0.00 -0.26 0.96
outer loop
vertex -15.8 -3.5 4.1
vertex -15.8 -7 3.1
vertex -12.2 -7 3.1
endloop
endfacet
facet normal 0.00 -0.26 0.96
outer loop
vertex -15.8 -3.5 4.1
vertex -12.2 -7 3.1
vertex -12.2 -3.5 4.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -3.5 -1.2
vertex -12.2 -7 -1.2
vertex -12.2 -7 3.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -3.5 -1.2
vertex -12.2 -7 3.1
vertex -12.2 -3.5 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -7 -1.2
vertex -15.8 -3.5 -1.2
vertex -15.8 -3.5 4.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -7 -1.2
vertex -15.8 -3.5 4.1
vertex -15.8 -7 3.1
endloop
endfacet
facet normal 0.00 -0.38 0.93
outer loop
vertex -15.8 -7 3.1
vertex -15.8 -10.5 1.7
vertex -12.2 -10.5 1.7
endloop
endfacet
facet normal 0.00 -0.38 0.93
outer loop
vertex -15.8 -7 3.1
vertex -12.2 -10.5 1.7
vertex -12.2 -7 3.1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -7 -1.2
vertex -12.2 -10.5 -1.2
vertex -12.2 -10.5 1.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -7 -1.2
vertex -12.2 -10.5 1.7
vertex -12.2 -7 3.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -10.5 -1.2
vertex -15.8 -7 -1.2
vertex -15.8 -7 3.1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -10.5 -1.2
vertex -15.8 -7 3.1
vertex -15.8 -10.5 1.7
endloop
endfacet
facet normal 0.00 -0.43 0.90
outer loop
vertex -15.8 -10.5 1.7
vertex -15.8 -14 0
vertex -12.2 -14 0
endloop
endfacet
facet normal 0.00 -0.43 0.90
outer loop
vertex -15.8 -10.5 1.7
vertex -12.2 -14 0
vertex -12.2 -10.5 1.7
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -10.5 -1.2
vertex -12.2 -14 -1.2
vertex -12.2 -14 0
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -12.2 -10.5 -1.2
vertex -12.2 -14 0
vertex -12.2 -10.5 1.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -14 -1.2
vertex -15.8 -10.5 -1.2
vertex -15.8 -10.5 1.7
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex -15.8 -14 -1.2
vertex -15.8 -10.5 1.7
vertex -15.8 -14 0
endloop
endfacet
facet normal 0.44 0.00 -0.90
outer loop
vertex -10 12.4 0
vertex -10 15.6 0
vertex -7.5 15.6 1.2
endloop
endfacet
facet normal 0.44 0.00 -0.90
outer loop
vertex -10 12.4 0
vertex -7.5 15.6 1.2
vertex -7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7.5 12.4 -1.2
vertex -10 12.4 -1.2
vertex -10 12.4 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -7.5 12.4 -1.2
vertex -10 12.4 0
vertex -7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -10 15.6 -1.2
vertex -7.5 15.6 -1.2
vertex -7.5 15.6 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -10 15.6 -1.2
vertex -7.5 15.6 1.2
vertex -10 15.6 0
endloop
endfacet
facet normal 0.38 0.00 -0.92
outer loop
vertex -7.5 12.4 1.2
vertex -7.5 15.6 1.2
vertex -5 15.6 2.3
endloop
endfacet
facet normal 0.38 0.00 -0.92
outer loop
vertex -7.5 12.4 1.2
vertex -5 15.6 2.3
vertex -5 12.4 2.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -5 12.4 -1.2
vertex -7.5 12.4 -1.2
vertex -7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -5 12.4 -1.2
vertex -7.5 12.4 1.2
vertex -5 12.4 2.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -7.5 15.6 -1.2
vertex -5 15.6 -1.2
vertex -5 15.6 2.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -7.5 15.6 -1.2
vertex -5 15.6 2.3
vertex -7.5 15.6 1.2
endloop
endfacet
facet normal 0.27 0.00 -0.96
outer loop
vertex -5 12.4 2.3
vertex -5 15.6 2.3
vertex -2.5 15.6 3
endloop
endfacet
facet normal 0.27 0.00 -0.96
outer loop
vertex -5 12.4 2.3
vertex -2.5 15.6 3
vertex -2.5 12.4 3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -2.5 12.4 -1.2
vertex -5 12.4 -1.2
vertex -5 12.4 2.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex -2.5 12.4 -1.2
vertex -5 12.4 2.3
vertex -2.5 12.4 3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -5 15.6 -1.2
vertex -2.5 15.6 -1.2
vertex -2.5 15.6 3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -5 15.6 -1.2
vertex -2.5 15.6 3
vertex -5 15.6 2.3
endloop
endfacet
facet normal 0.10 0.00 -1.00
outer loop
vertex -2.5 12.4 3
vertex -2.5 15.6 3
vertex 0 15.6 3.2
endloop
endfacet
facet normal 0.10 0.00 -1.00
outer loop
vertex -2.5 12.4 3
vertex 0 15.6 3.2
vertex 0 12.4 3.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 0 12.4 -1.2
vertex -2.5 12.4 -1.2
vertex -2.5 12.4 3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 0 12.4 -1.2
vertex -2.5 12.4 3
vertex 0 12.4 3.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -2.5 15.6 -1.2
vertex 0 15.6 -1.2
vertex 0 15.6 3.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -2.5 15.6 -1.2
vertex 0 15.6 3.2
vertex -2.5 15.6 3
endloop
endfacet
facet normal -0.10 0.00 -1.00
outer loop
vertex 0 12.4 3.2
vertex 0 15.6 3.2
vertex 2.5 15.6 3
endloop
endfacet
facet normal -0.10 0.00 -1.00
outer loop
vertex 0 12.4 3.2
vertex 2.5 15.6 3
vertex 2.5 12.4 3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 2.5 12.4 -1.2
vertex 0 12.4 -1.2
vertex 0 12.4 3.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 2.5 12.4 -1.2
vertex 0 12.4 3.2
vertex 2.5 12.4 3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 0 15.6 -1.2
vertex 2.5 15.6 -1.2
vertex 2.5 15.6 3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 0 15.6 -1.2
vertex 2.5 15.6 3
vertex 0 15.6 3.2
endloop
endfacet
facet normal -0.27 0.00 -0.96
outer loop
vertex 2.5 12.4 3
vertex 2.5 15.6 3
vertex 5 15.6 2.3
endloop
endfacet
facet normal -0.27 0.00 -0.96
outer loop
vertex 2.5 12.4 3
vertex 5 15.6 2.3
vertex 5 12.4 2.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 5 12.4 -1.2
vertex 2.5 12.4 -1.2
vertex 2.5 12.4 3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 5 12.4 -1.2
vertex 2.5 12.4 3
vertex 5 12.4 2.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 2.5 15.6 -1.2
vertex 5 15.6 -1.2
vertex 5 15.6 2.3
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 2.5 15.6 -1.2
vertex 5 15.6 2.3
vertex 2.5 15.6 3
endloop
endfacet
facet normal -0.38 0.00 -0.92
outer loop
vertex 5 12.4 2.3
vertex 5 15.6 2.3
vertex 7.5 15.6 1.2
endloop
endfacet
facet normal -0.38 0.00 -0.92
outer loop
vertex 5 12.4 2.3
vertex 7.5 15.6 1.2
vertex 7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 7.5 12.4 -1.2
vertex 5 12.4 -1.2
vertex 5 12.4 2.3
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 7.5 12.4 -1.2
vertex 5 12.4 2.3
vertex 7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 5 15.6 -1.2
vertex 7.5 15.6 -1.2
vertex 7.5 15.6 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 5 15.6 -1.2
vertex 7.5 15.6 1.2
vertex 5 15.6 2.3
endloop
endfacet
facet normal -0.44 0.00 -0.90
outer loop
vertex 7.5 12.4 1.2
vertex 7.5 15.6 1.2
vertex 10 15.6 0
endloop
endfacet
facet normal -0.44 0.00 -0.90
outer loop
vertex 7.5 12.4 1.2
vertex 10 15.6 0
vertex 10 12.4 0
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 10 12.4 -1.2
vertex 7.5 12.4 -1.2
vertex 7.5 12.4 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 10 12.4 -1.2
vertex 7.5 12.4 1.2
vertex 10 12.4 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 15.6 -1.2
vertex 10 15.6 -1.2
vertex 10 15.6 0
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 7.5 15.6 -1.2
vertex 10 15.6 0
vertex 7.5 15.6 1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 60.8 7 1.2
vertex 60.8 -7 1.2
vertex 63.2 -7 1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex 60.8 7 1.2
vertex 63.2 -7 1.2
vertex 63.2 7 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 60.8 -7 0.9
vertex 63.2 -7 0.9
vertex 63.2 -7 1.2
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex 60.8 -7 0.9
vertex 63.2 -7 1.2
vertex 60.8 -7 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 63.2 7 0.9
vertex 60.8 7 0.9
vertex 60.8 7 1.2
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 63.2 7 0.9
vertex 60.8 7 1.2
vertex 63.2 7 1.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 63.2 -7 0.9
vertex 63.2 7 0.9
vertex 63.2 7 1.2
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 63.2 -7 0.9
vertex 63.2 7 1.2
vertex 63.2 -7 1.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 60.8 7 0.9
vertex 60.8 -7 0.9
vertex 60.8 -7 1.2
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex 60.8 7 0.9
vertex 60.8 -7 1.2
vertex 60.8 7 1.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -5 -6.5 1
vertex -5 -9.5 1
vertex 5 -9.5 1
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -5 -6.5 1
vertex 5 -9.5 1
vertex 5 -6.5 1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -5 -9.5 0.7
vertex 5 -9.5 0.7
vertex 5 -9.5 1
endloop
endfacet
facet normal 0.00 -1.00 0.00
outer loop
vertex -5 -9.5 0.7
vertex 5 -9.5 1
vertex -5 -9.5 1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 5 -6.5 0.7
vertex -5 -6.5 0.7
vertex -5 -6.5 1
endloop
endfacet
facet normal 0.00 1.00 0.00
outer loop
vertex 5 -6.5 0.7
vertex -5 -6.5 1
vertex 5 -6.5 1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 5 -9.5 0.7
vertex 5 -6.5 0.7
vertex 5 -6.5 1
endloop
endfacet
facet normal 1.00 0.00 0.00
outer loop
vertex 5 -9.5 0.7
vertex 5 -6.5 1
vertex 5 -9.5 1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -5 -6.5 0.7
vertex -5 -9.5 0.7
vertex -5 -9.5 1
endloop
endfacet
facet normal -1.00 0.00 0.00
outer loop
vertex -5 -6.5 0.7
vertex -5 -9.5 1
vertex -5 -6.5 1
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.5 66 0
vertex -98.8 62.8 0
vertex -98.8 62.8 5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.5 66 0
vertex -98.8 62.8 5
vertex -97.5 66 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -98.8 62.8 5
vertex -97.5 66 5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.8 62.8 0
vertex -102 61.5 0
vertex -102 61.5 5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.8 62.8 0
vertex -102 61.5 5
vertex -98.8 62.8 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -102 61.5 5
vertex -98.8 62.8 5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.5 0
vertex -105.2 62.8 0
vertex -105.2 62.8 5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.5 0
vertex -105.2 62.8 5
vertex -102 61.5 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -105.2 62.8 5
vertex -102 61.5 5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.2 62.8 0
vertex -106.5 66 0
vertex -106.5 66 5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.2 62.8 0
vertex -106.5 66 5
vertex -105.2 62.8 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -106.5 66 5
vertex -105.2 62.8 5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.5 66 0
vertex -105.2 69.2 0
vertex -105.2 69.2 5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.5 66 0
vertex -105.2 69.2 5
vertex -106.5 66 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -105.2 69.2 5
vertex -106.5 66 5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.2 69.2 0
vertex -102 70.5 0
vertex -102 70.5 5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.2 69.2 0
vertex -102 70.5 5
vertex -105.2 69.2 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -102 70.5 5
vertex -105.2 69.2 5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.5 0
vertex -98.8 69.2 0
vertex -98.8 69.2 5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.5 0
vertex -98.8 69.2 5
vertex -102 70.5 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -98.8 69.2 5
vertex -102 70.5 5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.8 69.2 0
vertex -97.5 66 0
vertex -97.5 66 5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.8 69.2 0
vertex -97.5 66 5
vertex -98.8 69.2 5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5
vertex -97.5 66 5
vertex -98.8 69.2 5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -95.5 66 5
vertex -97.4 61.4 5
vertex -97.4 61.4 5.9
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -95.5 66 5
vertex -97.4 61.4 5.9
vertex -95.5 66 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -97.4 61.4 5.9
vertex -95.5 66 5.9
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -97.4 61.4 5
vertex -102 59.5 5
vertex -102 59.5 5.9
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -97.4 61.4 5
vertex -102 59.5 5.9
vertex -97.4 61.4 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -102 59.5 5.9
vertex -97.4 61.4 5.9
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 59.5 5
vertex -106.6 61.4 5
vertex -106.6 61.4 5.9
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 59.5 5
vertex -106.6 61.4 5.9
vertex -102 59.5 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -106.6 61.4 5.9
vertex -102 59.5 5.9
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106.6 61.4 5
vertex -108.5 66 5
vertex -108.5 66 5.9
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106.6 61.4 5
vertex -108.5 66 5.9
vertex -106.6 61.4 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -108.5 66 5.9
vertex -106.6 61.4 5.9
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -108.5 66 5
vertex -106.6 70.6 5
vertex -106.6 70.6 5.9
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -108.5 66 5
vertex -106.6 70.6 5.9
vertex -108.5 66 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -106.6 70.6 5.9
vertex -108.5 66 5.9
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106.6 70.6 5
vertex -102 72.5 5
vertex -102 72.5 5.9
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106.6 70.6 5
vertex -102 72.5 5.9
vertex -106.6 70.6 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -102 72.5 5.9
vertex -106.6 70.6 5.9
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 72.5 5
vertex -97.4 70.6 5
vertex -97.4 70.6 5.9
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 72.5 5
vertex -97.4 70.6 5.9
vertex -102 72.5 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -97.4 70.6 5.9
vertex -102 72.5 5.9
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -97.4 70.6 5
vertex -95.5 66 5
vertex -95.5 66 5.9
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -97.4 70.6 5
vertex -95.5 66 5.9
vertex -97.4 70.6 5.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 5.9
vertex -95.5 66 5.9
vertex -97.4 70.6 5.9
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.8 66 6.3
vertex -99 63 6.3
vertex -99 63 11.3
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.8 66 6.3
vertex -99 63 11.3
vertex -97.8 66 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -99 63 11.3
vertex -97.8 66 11.3
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99 63 6.3
vertex -102 61.8 6.3
vertex -102 61.8 11.3
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99 63 6.3
vertex -102 61.8 11.3
vertex -99 63 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -102 61.8 11.3
vertex -99 63 11.3
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.8 6.3
vertex -105 63 6.3
vertex -105 63 11.3
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.8 6.3
vertex -105 63 11.3
vertex -102 61.8 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -105 63 11.3
vertex -102 61.8 11.3
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105 63 6.3
vertex -106.2 66 6.3
vertex -106.2 66 11.3
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105 63 6.3
vertex -106.2 66 11.3
vertex -105 63 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -106.2 66 11.3
vertex -105 63 11.3
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.2 66 6.3
vertex -105 69 6.3
vertex -105 69 11.3
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.2 66 6.3
vertex -105 69 11.3
vertex -106.2 66 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -105 69 11.3
vertex -106.2 66 11.3
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105 69 6.3
vertex -102 70.2 6.3
vertex -102 70.2 11.3
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105 69 6.3
vertex -102 70.2 11.3
vertex -105 69 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -102 70.2 11.3
vertex -105 69 11.3
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.2 6.3
vertex -99 69 6.3
vertex -99 69 11.3
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.2 6.3
vertex -99 69 11.3
vertex -102 70.2 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -99 69 11.3
vertex -102 70.2 11.3
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99 69 6.3
vertex -97.8 66 6.3
vertex -97.8 66 11.3
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99 69 6.3
vertex -97.8 66 11.3
vertex -99 69 11.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 11.3
vertex -97.8 66 11.3
vertex -99 69 11.3
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -95.9 66 11.3
vertex -97.7 61.7 11.3
vertex -97.7 61.7 12.2
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -95.9 66 11.3
vertex -97.7 61.7 12.2
vertex -95.9 66 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -97.7 61.7 12.2
vertex -95.9 66 12.2
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -97.7 61.7 11.3
vertex -102 59.9 11.3
vertex -102 59.9 12.2
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -97.7 61.7 11.3
vertex -102 59.9 12.2
vertex -97.7 61.7 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -102 59.9 12.2
vertex -97.7 61.7 12.2
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 59.9 11.3
vertex -106.3 61.7 11.3
vertex -106.3 61.7 12.2
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 59.9 11.3
vertex -106.3 61.7 12.2
vertex -102 59.9 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -106.3 61.7 12.2
vertex -102 59.9 12.2
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106.3 61.7 11.3
vertex -108.1 66 11.3
vertex -108.1 66 12.2
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106.3 61.7 11.3
vertex -108.1 66 12.2
vertex -106.3 61.7 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -108.1 66 12.2
vertex -106.3 61.7 12.2
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -108.1 66 11.3
vertex -106.3 70.3 11.3
vertex -106.3 70.3 12.2
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -108.1 66 11.3
vertex -106.3 70.3 12.2
vertex -108.1 66 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -106.3 70.3 12.2
vertex -108.1 66 12.2
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106.3 70.3 11.3
vertex -102 72.1 11.3
vertex -102 72.1 12.2
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106.3 70.3 11.3
vertex -102 72.1 12.2
vertex -106.3 70.3 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -102 72.1 12.2
vertex -106.3 70.3 12.2
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 72.1 11.3
vertex -97.7 70.3 11.3
vertex -97.7 70.3 12.2
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 72.1 11.3
vertex -97.7 70.3 12.2
vertex -102 72.1 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -97.7 70.3 12.2
vertex -102 72.1 12.2
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -97.7 70.3 11.3
vertex -95.9 66 11.3
vertex -95.9 66 12.2
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -97.7 70.3 11.3
vertex -95.9 66 12.2
vertex -97.7 70.3 12.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 12.2
vertex -95.9 66 12.2
vertex -97.7 70.3 12.2
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.1 66 12.5
vertex -99.3 63.3 12.5
vertex -99.3 63.3 17.5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.1 66 12.5
vertex -99.3 63.3 17.5
vertex -98.1 66 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -99.3 63.3 17.5
vertex -98.1 66 17.5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.3 63.3 12.5
vertex -102 62.1 12.5
vertex -102 62.1 17.5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.3 63.3 12.5
vertex -102 62.1 17.5
vertex -99.3 63.3 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -102 62.1 17.5
vertex -99.3 63.3 17.5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.1 12.5
vertex -104.7 63.3 12.5
vertex -104.7 63.3 17.5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.1 12.5
vertex -104.7 63.3 17.5
vertex -102 62.1 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -104.7 63.3 17.5
vertex -102 62.1 17.5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.7 63.3 12.5
vertex -105.9 66 12.5
vertex -105.9 66 17.5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.7 63.3 12.5
vertex -105.9 66 17.5
vertex -104.7 63.3 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -105.9 66 17.5
vertex -104.7 63.3 17.5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.9 66 12.5
vertex -104.7 68.7 12.5
vertex -104.7 68.7 17.5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.9 66 12.5
vertex -104.7 68.7 17.5
vertex -105.9 66 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -104.7 68.7 17.5
vertex -105.9 66 17.5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.7 68.7 12.5
vertex -102 69.9 12.5
vertex -102 69.9 17.5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.7 68.7 12.5
vertex -102 69.9 17.5
vertex -104.7 68.7 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -102 69.9 17.5
vertex -104.7 68.7 17.5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.9 12.5
vertex -99.3 68.7 12.5
vertex -99.3 68.7 17.5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.9 12.5
vertex -99.3 68.7 17.5
vertex -102 69.9 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -99.3 68.7 17.5
vertex -102 69.9 17.5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.3 68.7 12.5
vertex -98.1 66 12.5
vertex -98.1 66 17.5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.3 68.7 12.5
vertex -98.1 66 17.5
vertex -99.3 68.7 17.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 17.5
vertex -98.1 66 17.5
vertex -99.3 68.7 17.5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -96.4 66 17.5
vertex -98 62 17.5
vertex -98 62 18.4
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -96.4 66 17.5
vertex -98 62 18.4
vertex -96.4 66 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -98 62 18.4
vertex -96.4 66 18.4
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98 62 17.5
vertex -102 60.4 17.5
vertex -102 60.4 18.4
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98 62 17.5
vertex -102 60.4 18.4
vertex -98 62 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -102 60.4 18.4
vertex -98 62 18.4
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 60.4 17.5
vertex -106 62 17.5
vertex -106 62 18.4
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 60.4 17.5
vertex -106 62 18.4
vertex -102 60.4 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -106 62 18.4
vertex -102 60.4 18.4
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106 62 17.5
vertex -107.6 66 17.5
vertex -107.6 66 18.4
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -106 62 17.5
vertex -107.6 66 18.4
vertex -106 62 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -107.6 66 18.4
vertex -106 62 18.4
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -107.6 66 17.5
vertex -106 70 17.5
vertex -106 70 18.4
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -107.6 66 17.5
vertex -106 70 18.4
vertex -107.6 66 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -106 70 18.4
vertex -107.6 66 18.4
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106 70 17.5
vertex -102 71.6 17.5
vertex -102 71.6 18.4
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -106 70 17.5
vertex -102 71.6 18.4
vertex -106 70 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -102 71.6 18.4
vertex -106 70 18.4
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 71.6 17.5
vertex -98 70 17.5
vertex -98 70 18.4
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 71.6 17.5
vertex -98 70 18.4
vertex -102 71.6 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -98 70 18.4
vertex -102 71.6 18.4
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98 70 17.5
vertex -96.4 66 17.5
vertex -96.4 66 18.4
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98 70 17.5
vertex -96.4 66 18.4
vertex -98 70 18.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 18.4
vertex -96.4 66 18.4
vertex -98 70 18.4
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.4 66 18.8
vertex -99.5 63.5 18.8
vertex -99.5 63.5 23.8
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.4 66 18.8
vertex -99.5 63.5 23.8
vertex -98.4 66 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -99.5 63.5 23.8
vertex -98.4 66 23.8
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.5 63.5 18.8
vertex -102 62.4 18.8
vertex -102 62.4 23.8
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.5 63.5 18.8
vertex -102 62.4 23.8
vertex -99.5 63.5 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -102 62.4 23.8
vertex -99.5 63.5 23.8
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.4 18.8
vertex -104.5 63.5 18.8
vertex -104.5 63.5 23.8
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.4 18.8
vertex -104.5 63.5 23.8
vertex -102 62.4 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -104.5 63.5 23.8
vertex -102 62.4 23.8
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.5 63.5 18.8
vertex -105.6 66 18.8
vertex -105.6 66 23.8
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.5 63.5 18.8
vertex -105.6 66 23.8
vertex -104.5 63.5 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -105.6 66 23.8
vertex -104.5 63.5 23.8
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.6 66 18.8
vertex -104.5 68.5 18.8
vertex -104.5 68.5 23.8
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.6 66 18.8
vertex -104.5 68.5 23.8
vertex -105.6 66 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -104.5 68.5 23.8
vertex -105.6 66 23.8
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.5 68.5 18.8
vertex -102 69.6 18.8
vertex -102 69.6 23.8
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.5 68.5 18.8
vertex -102 69.6 23.8
vertex -104.5 68.5 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -102 69.6 23.8
vertex -104.5 68.5 23.8
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.6 18.8
vertex -99.5 68.5 18.8
vertex -99.5 68.5 23.8
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.6 18.8
vertex -99.5 68.5 23.8
vertex -102 69.6 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -99.5 68.5 23.8
vertex -102 69.6 23.8
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.5 68.5 18.8
vertex -98.4 66 18.8
vertex -98.4 66 23.8
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.5 68.5 18.8
vertex -98.4 66 23.8
vertex -99.5 68.5 23.8
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 23.8
vertex -98.4 66 23.8
vertex -99.5 68.5 23.8
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -96.8 66 23.8
vertex -98.4 62.4 23.8
vertex -98.4 62.4 24.7
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -96.8 66 23.8
vertex -98.4 62.4 24.7
vertex -96.8 66 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -98.4 62.4 24.7
vertex -96.8 66 24.7
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.4 62.4 23.8
vertex -102 60.8 23.8
vertex -102 60.8 24.7
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.4 62.4 23.8
vertex -102 60.8 24.7
vertex -98.4 62.4 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -102 60.8 24.7
vertex -98.4 62.4 24.7
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 60.8 23.8
vertex -105.6 62.4 23.8
vertex -105.6 62.4 24.7
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 60.8 23.8
vertex -105.6 62.4 24.7
vertex -102 60.8 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -105.6 62.4 24.7
vertex -102 60.8 24.7
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.6 62.4 23.8
vertex -107.2 66 23.8
vertex -107.2 66 24.7
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.6 62.4 23.8
vertex -107.2 66 24.7
vertex -105.6 62.4 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -107.2 66 24.7
vertex -105.6 62.4 24.7
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -107.2 66 23.8
vertex -105.6 69.6 23.8
vertex -105.6 69.6 24.7
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -107.2 66 23.8
vertex -105.6 69.6 24.7
vertex -107.2 66 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -105.6 69.6 24.7
vertex -107.2 66 24.7
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.6 69.6 23.8
vertex -102 71.2 23.8
vertex -102 71.2 24.7
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.6 69.6 23.8
vertex -102 71.2 24.7
vertex -105.6 69.6 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -102 71.2 24.7
vertex -105.6 69.6 24.7
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 71.2 23.8
vertex -98.4 69.6 23.8
vertex -98.4 69.6 24.7
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 71.2 23.8
vertex -98.4 69.6 24.7
vertex -102 71.2 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -98.4 69.6 24.7
vertex -102 71.2 24.7
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.4 69.6 23.8
vertex -96.8 66 23.8
vertex -96.8 66 24.7
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.4 69.6 23.8
vertex -96.8 66 24.7
vertex -98.4 69.6 24.7
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 24.7
vertex -96.8 66 24.7
vertex -98.4 69.6 24.7
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.8 66 25
vertex -99.7 63.7 25
vertex -99.7 63.7 30
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.8 66 25
vertex -99.7 63.7 30
vertex -98.8 66 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -99.7 63.7 30
vertex -98.8 66 30
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.7 63.7 25
vertex -102 62.8 25
vertex -102 62.8 30
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.7 63.7 25
vertex -102 62.8 30
vertex -99.7 63.7 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -102 62.8 30
vertex -99.7 63.7 30
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.8 25
vertex -104.3 63.7 25
vertex -104.3 63.7 30
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.8 25
vertex -104.3 63.7 30
vertex -102 62.8 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -104.3 63.7 30
vertex -102 62.8 30
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.3 63.7 25
vertex -105.2 66 25
vertex -105.2 66 30
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.3 63.7 25
vertex -105.2 66 30
vertex -104.3 63.7 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -105.2 66 30
vertex -104.3 63.7 30
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.2 66 25
vertex -104.3 68.3 25
vertex -104.3 68.3 30
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.2 66 25
vertex -104.3 68.3 30
vertex -105.2 66 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -104.3 68.3 30
vertex -105.2 66 30
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.3 68.3 25
vertex -102 69.2 25
vertex -102 69.2 30
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.3 68.3 25
vertex -102 69.2 30
vertex -104.3 68.3 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -102 69.2 30
vertex -104.3 68.3 30
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.2 25
vertex -99.7 68.3 25
vertex -99.7 68.3 30
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.2 25
vertex -99.7 68.3 30
vertex -102 69.2 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -99.7 68.3 30
vertex -102 69.2 30
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.7 68.3 25
vertex -98.8 66 25
vertex -98.8 66 30
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.7 68.3 25
vertex -98.8 66 30
vertex -99.7 68.3 30
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30
vertex -98.8 66 30
vertex -99.7 68.3 30
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.3 66 30
vertex -98.7 62.7 30
vertex -98.7 62.7 30.9
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.3 66 30
vertex -98.7 62.7 30.9
vertex -97.3 66 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -98.7 62.7 30.9
vertex -97.3 66 30.9
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.7 62.7 30
vertex -102 61.3 30
vertex -102 61.3 30.9
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -98.7 62.7 30
vertex -102 61.3 30.9
vertex -98.7 62.7 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -102 61.3 30.9
vertex -98.7 62.7 30.9
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.3 30
vertex -105.3 62.7 30
vertex -105.3 62.7 30.9
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.3 30
vertex -105.3 62.7 30.9
vertex -102 61.3 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -105.3 62.7 30.9
vertex -102 61.3 30.9
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.3 62.7 30
vertex -106.7 66 30
vertex -106.7 66 30.9
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105.3 62.7 30
vertex -106.7 66 30.9
vertex -105.3 62.7 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -106.7 66 30.9
vertex -105.3 62.7 30.9
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.7 66 30
vertex -105.3 69.3 30
vertex -105.3 69.3 30.9
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.7 66 30
vertex -105.3 69.3 30.9
vertex -106.7 66 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -105.3 69.3 30.9
vertex -106.7 66 30.9
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.3 69.3 30
vertex -102 70.7 30
vertex -102 70.7 30.9
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105.3 69.3 30
vertex -102 70.7 30.9
vertex -105.3 69.3 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -102 70.7 30.9
vertex -105.3 69.3 30.9
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.7 30
vertex -98.7 69.3 30
vertex -98.7 69.3 30.9
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.7 30
vertex -98.7 69.3 30.9
vertex -102 70.7 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -98.7 69.3 30.9
vertex -102 70.7 30.9
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.7 69.3 30
vertex -97.3 66 30
vertex -97.3 66 30.9
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -98.7 69.3 30
vertex -97.3 66 30.9
vertex -98.7 69.3 30.9
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 30.9
vertex -97.3 66 30.9
vertex -98.7 69.3 30.9
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -99.1 66 31.3
vertex -99.9 63.9 31.3
vertex -99.9 63.9 36.3
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -99.1 66 31.3
vertex -99.9 63.9 36.3
vertex -99.1 66 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -99.9 63.9 36.3
vertex -99.1 66 36.3
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.9 63.9 31.3
vertex -102 63.1 31.3
vertex -102 63.1 36.3
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.9 63.9 31.3
vertex -102 63.1 36.3
vertex -99.9 63.9 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -102 63.1 36.3
vertex -99.9 63.9 36.3
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 63.1 31.3
vertex -104.1 63.9 31.3
vertex -104.1 63.9 36.3
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 63.1 31.3
vertex -104.1 63.9 36.3
vertex -102 63.1 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -104.1 63.9 36.3
vertex -102 63.1 36.3
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.1 63.9 31.3
vertex -104.9 66 31.3
vertex -104.9 66 36.3
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.1 63.9 31.3
vertex -104.9 66 36.3
vertex -104.1 63.9 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -104.9 66 36.3
vertex -104.1 63.9 36.3
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -104.9 66 31.3
vertex -104.1 68.1 31.3
vertex -104.1 68.1 36.3
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -104.9 66 31.3
vertex -104.1 68.1 36.3
vertex -104.9 66 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -104.1 68.1 36.3
vertex -104.9 66 36.3
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.1 68.1 31.3
vertex -102 68.9 31.3
vertex -102 68.9 36.3
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.1 68.1 31.3
vertex -102 68.9 36.3
vertex -104.1 68.1 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -102 68.9 36.3
vertex -104.1 68.1 36.3
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 68.9 31.3
vertex -99.9 68.1 31.3
vertex -99.9 68.1 36.3
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 68.9 31.3
vertex -99.9 68.1 36.3
vertex -102 68.9 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -99.9 68.1 36.3
vertex -102 68.9 36.3
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.9 68.1 31.3
vertex -99.1 66 31.3
vertex -99.1 66 36.3
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.9 68.1 31.3
vertex -99.1 66 36.3
vertex -99.9 68.1 36.3
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 36.3
vertex -99.1 66 36.3
vertex -99.9 68.1 36.3
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.8 66 36.3
vertex -99 63 36.3
vertex -99 63 37.2
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -97.8 66 36.3
vertex -99 63 37.2
vertex -97.8 66 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -99 63 37.2
vertex -97.8 66 37.2
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99 63 36.3
vertex -102 61.8 36.3
vertex -102 61.8 37.2
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99 63 36.3
vertex -102 61.8 37.2
vertex -99 63 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -102 61.8 37.2
vertex -99 63 37.2
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.8 36.3
vertex -105 63 36.3
vertex -105 63 37.2
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 61.8 36.3
vertex -105 63 37.2
vertex -102 61.8 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -105 63 37.2
vertex -102 61.8 37.2
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105 63 36.3
vertex -106.2 66 36.3
vertex -106.2 66 37.2
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -105 63 36.3
vertex -106.2 66 37.2
vertex -105 63 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -106.2 66 37.2
vertex -105 63 37.2
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.2 66 36.3
vertex -105 69 36.3
vertex -105 69 37.2
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -106.2 66 36.3
vertex -105 69 37.2
vertex -106.2 66 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -105 69 37.2
vertex -106.2 66 37.2
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105 69 36.3
vertex -102 70.2 36.3
vertex -102 70.2 37.2
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -105 69 36.3
vertex -102 70.2 37.2
vertex -105 69 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -102 70.2 37.2
vertex -105 69 37.2
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.2 36.3
vertex -99 69 36.3
vertex -99 69 37.2
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 70.2 36.3
vertex -99 69 37.2
vertex -102 70.2 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -99 69 37.2
vertex -102 70.2 37.2
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99 69 36.3
vertex -97.8 66 36.3
vertex -97.8 66 37.2
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99 69 36.3
vertex -97.8 66 37.2
vertex -99 69 37.2
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 37.2
vertex -97.8 66 37.2
vertex -99 69 37.2
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -99.4 66 37.5
vertex -100.2 64.2 37.5
vertex -100.2 64.2 42.5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -99.4 66 37.5
vertex -100.2 64.2 42.5
vertex -99.4 66 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -100.2 64.2 42.5
vertex -99.4 66 42.5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -100.2 64.2 37.5
vertex -102 63.4 37.5
vertex -102 63.4 42.5
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -100.2 64.2 37.5
vertex -102 63.4 42.5
vertex -100.2 64.2 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -102 63.4 42.5
vertex -100.2 64.2 42.5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 63.4 37.5
vertex -103.8 64.2 37.5
vertex -103.8 64.2 42.5
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 63.4 37.5
vertex -103.8 64.2 42.5
vertex -102 63.4 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -103.8 64.2 42.5
vertex -102 63.4 42.5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -103.8 64.2 37.5
vertex -104.6 66 37.5
vertex -104.6 66 42.5
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -103.8 64.2 37.5
vertex -104.6 66 42.5
vertex -103.8 64.2 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -104.6 66 42.5
vertex -103.8 64.2 42.5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -104.6 66 37.5
vertex -103.8 67.8 37.5
vertex -103.8 67.8 42.5
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -104.6 66 37.5
vertex -103.8 67.8 42.5
vertex -104.6 66 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -103.8 67.8 42.5
vertex -104.6 66 42.5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -103.8 67.8 37.5
vertex -102 68.6 37.5
vertex -102 68.6 42.5
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -103.8 67.8 37.5
vertex -102 68.6 42.5
vertex -103.8 67.8 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -102 68.6 42.5
vertex -103.8 67.8 42.5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 68.6 37.5
vertex -100.2 67.8 37.5
vertex -100.2 67.8 42.5
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 68.6 37.5
vertex -100.2 67.8 42.5
vertex -102 68.6 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -100.2 67.8 42.5
vertex -102 68.6 42.5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -100.2 67.8 37.5
vertex -99.4 66 37.5
vertex -99.4 66 42.5
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -100.2 67.8 37.5
vertex -99.4 66 42.5
vertex -100.2 67.8 42.5
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 42.5
vertex -99.4 66 42.5
vertex -100.2 67.8 42.5
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.2 66 42.5
vertex -99.3 63.3 42.5
vertex -99.3 63.3 43.4
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -98.2 66 42.5
vertex -99.3 63.3 43.4
vertex -98.2 66 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -99.3 63.3 43.4
vertex -98.2 66 43.4
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.3 63.3 42.5
vertex -102 62.2 42.5
vertex -102 62.2 43.4
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -99.3 63.3 42.5
vertex -102 62.2 43.4
vertex -99.3 63.3 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -102 62.2 43.4
vertex -99.3 63.3 43.4
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.2 42.5
vertex -104.7 63.3 42.5
vertex -104.7 63.3 43.4
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 62.2 42.5
vertex -104.7 63.3 43.4
vertex -102 62.2 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -104.7 63.3 43.4
vertex -102 62.2 43.4
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.7 63.3 42.5
vertex -105.8 66 42.5
vertex -105.8 66 43.4
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -104.7 63.3 42.5
vertex -105.8 66 43.4
vertex -104.7 63.3 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -105.8 66 43.4
vertex -104.7 63.3 43.4
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.8 66 42.5
vertex -104.7 68.7 42.5
vertex -104.7 68.7 43.4
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -105.8 66 42.5
vertex -104.7 68.7 43.4
vertex -105.8 66 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -104.7 68.7 43.4
vertex -105.8 66 43.4
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.7 68.7 42.5
vertex -102 69.8 42.5
vertex -102 69.8 43.4
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -104.7 68.7 42.5
vertex -102 69.8 43.4
vertex -104.7 68.7 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -102 69.8 43.4
vertex -104.7 68.7 43.4
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.8 42.5
vertex -99.3 68.7 42.5
vertex -99.3 68.7 43.4
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 69.8 42.5
vertex -99.3 68.7 43.4
vertex -102 69.8 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -99.3 68.7 43.4
vertex -102 69.8 43.4
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.3 68.7 42.5
vertex -98.2 66 42.5
vertex -98.2 66 43.4
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -99.3 68.7 42.5
vertex -98.2 66 43.4
vertex -99.3 68.7 43.4
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 43.4
vertex -98.2 66 43.4
vertex -99.3 68.7 43.4
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -101.4 66 43.8
vertex -101.6 65.6 43.8
vertex -101.6 65.6 50
endloop
endfacet
facet normal -0.92 0.38 0.00
outer loop
vertex -101.4 66 43.8
vertex -101.6 65.6 50
vertex -101.4 66 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -101.6 65.6 50
vertex -101.4 66 50
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -101.6 65.6 43.8
vertex -102 65.4 43.8
vertex -102 65.4 50
endloop
endfacet
facet normal -0.38 0.92 0.00
outer loop
vertex -101.6 65.6 43.8
vertex -102 65.4 50
vertex -101.6 65.6 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -102 65.4 50
vertex -101.6 65.6 50
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 65.4 43.8
vertex -102.4 65.6 43.8
vertex -102.4 65.6 50
endloop
endfacet
facet normal 0.38 0.92 0.00
outer loop
vertex -102 65.4 43.8
vertex -102.4 65.6 50
vertex -102 65.4 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -102.4 65.6 50
vertex -102 65.4 50
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -102.4 65.6 43.8
vertex -102.6 66 43.8
vertex -102.6 66 50
endloop
endfacet
facet normal 0.92 0.38 0.00
outer loop
vertex -102.4 65.6 43.8
vertex -102.6 66 50
vertex -102.4 65.6 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -102.6 66 50
vertex -102.4 65.6 50
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -102.6 66 43.8
vertex -102.4 66.4 43.8
vertex -102.4 66.4 50
endloop
endfacet
facet normal 0.92 -0.38 0.00
outer loop
vertex -102.6 66 43.8
vertex -102.4 66.4 50
vertex -102.6 66 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -102.4 66.4 50
vertex -102.6 66 50
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -102.4 66.4 43.8
vertex -102 66.6 43.8
vertex -102 66.6 50
endloop
endfacet
facet normal 0.38 -0.92 0.00
outer loop
vertex -102.4 66.4 43.8
vertex -102 66.6 50
vertex -102.4 66.4 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -102 66.6 50
vertex -102.4 66.4 50
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 66.6 43.8
vertex -101.6 66.4 43.8
vertex -101.6 66.4 50
endloop
endfacet
facet normal -0.38 -0.92 0.00
outer loop
vertex -102 66.6 43.8
vertex -101.6 66.4 50
vertex -102 66.6 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -101.6 66.4 50
vertex -102 66.6 50
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -101.6 66.4 43.8
vertex -101.4 66 43.8
vertex -101.4 66 50
endloop
endfacet
facet normal -0.92 -0.38 0.00
outer loop
vertex -101.6 66.4 43.8
vertex -101.4 66 50
vertex -101.6 66.4 50
endloop
endfacet
facet normal 0.00 0.00 1.00
outer loop
vertex -102 66 50
vertex -101.4 66 50
vertex -101.6 66.4 50
endloop
endfacet
endsolid wuzhen
```

白模由 [`examples/wuzhen/scripts/export-stl.mjs`](examples/wuzhen/scripts/export-stl.mjs) 生成（约 2000 个三角形），单独的文件在 [`docs/wuzhen-massing.stl`](docs/wuzhen-massing.stl)。

## 交付物

| 文件 | 用法 |
|---|---|
| `dist/scene.html` | 自包含单文件（three.js 和场景全部内联），双击就能打开，或 `<iframe src="scene.html">` 嵌入 |
| `dist/scene-embed.js` | `<div data-scene='{"quality":"auto"}' style="height:540px"></div><script src="scene-embed.js"></script>` 挂到任意 div |
| `dist/embed-demo.html` | 两种嵌法的演示页 |

嵌入参数：`quality`（`auto` / `high` / `medium` / `low`，auto 会在帧率不够时自动降档）、`time`（光照时刻）、`hint`（关掉操作提示）。

## 安装

```bash
git clone https://github.com/crawfordxx/xiaoma-opus3D.git
ln -s "$PWD/xiaoma-opus3D/skills/xiaoma-opus3d" ~/.claude/skills/xiaoma-opus3d
```

需要：Node.js 22+、能跑 Playwright 的 Chromium（截图对比和自动测试用无头浏览器，macOS 上走 Metal GPU）。

## 怎么用

在 Claude Code 里直接说要做什么，比如：

> 用 three.js 做一个黄昏时的寺庙 3D 模型，要能嵌到网页里拖着看：主殿、五重塔、拱桥、莲花池、山门。

skill 会按 6 个阶段推进，每个阶段过了检查才进下一步：

| 阶段 | 做什么 | 验收 |
|---|---|---|
| 0 定参数 | 主题、范围、时段、区块清单、值得近看的细节、目标设备 | 你确认区块清单 |
| 1 平面图 | `layout.js` 是全项目唯一的坐标来源 | `check-layout` 查重叠、越界、路径 |
| 2 公共件 | 材质、参数化生成器、光照、施工规范 | 生成器先自测截图 |
| 3 分区施工 | 多个子 Agent 并行，各建一块，各自截图对比最多 3 轮 | 全部区块合起来截一轮 |
| 4 交互与画质 | 初始视角、视角限制、三档画质、NaN 黑帧回归 | 最远、最近、贴地都不穿帮 |
| 5 打包测试 | 单文件 HTML + script 版 + 演示页 | `test-viewer`：像素比 1 和 2 下测尺寸、拖动、缩放、平移、画质切换 |

另外可以按附录导出“特写 → 拉远”的漫游视频。

## 仓库结构

```
skills/xiaoma-opus3d/      skill 本体
  SKILL.md                 6 个阶段 + 每阶段的过关条件
  references/pitfalls.md   实战踩过的坑（NaN + bloom 整帧黑屏、Metal 优化掉 isnan、高像素比画布撑出容器……）
  references/              layout 约定、施工规范模板、镜头语法、例子
  assets/template/         项目骨架：场景核心、交互、画质分级、渐变天空、打包入口
  scripts/                 检查、截图、打包、交互测试、视频导出
examples/wuzhen/           完整实战：乌镇西栅，6 个区块、88 栋民居、4 座桥、3 条船
docs/                      在线演示（GitHub Pages）
```

## 乌镇例子

`examples/wuzhen/` 是这个 skill 的来源：先用 6 个并行 Agent 做了一段 70 秒视频，又改成了交互模型。

```bash
cd examples/wuzhen && npm install
npm run check      # 平面图检查
npm run build      # → dist/wuzhen.html、dist/wuzhen-embed.js、dist/embed-demo.html
npm run serve      # 然后打开 http://127.0.0.1:5173/viewer.html（开发版）
```

规模：240m × 160m 十字河口，88 栋民居、11 处水阁、4 座桥、3 条摇橹船、23 棵树、约 900 栋远景低模，约 700 万三角形。单文件 862 KB。

## License

[MIT](LICENSE)

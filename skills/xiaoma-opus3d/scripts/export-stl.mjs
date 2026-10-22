// 导出场景的简化体块模型（ASCII STL），给 GitHub README 的 ```stl 交互预览用。
// GitHub 会把 Markdown 里的 ```stl 代码块渲染成可拖动、可缩放的 3D 白模；README 本身不能跑 WebGL。
// 体块来自 layout.CHECK.volumes（rect × [y0, y1]），另加一块地面。项目想要更像的白模（坡屋顶、拱桥），
// 照乌镇例子写一个专用版本（examples/wuzhen/scripts/export-stl.mjs）。
// 用法：node scripts/export-stl.mjs > docs/massing.stl   （控制在约 2000 个三角形、250KB 以内）
import * as L from '../src/layout.js';

const tris = [];
const P = ([x, y, z]) => [x, -z, y]; // layout 的 Y 朝上 → STL 的 Z 朝上，北 = +Y
const quad = (a, b, c, d) => { tris.push([P(a), P(b), P(c)], [P(a), P(c), P(d)]); };
function box({ x0, x1, z0, z1 }, y0, y1) {
  quad([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0]);
  quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]);
  quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]);
  quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]);
  quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]);
}
const g = L.LEVELS.ground ?? 0;
box(L.EXTENT, g - 1, g);
for (const v of L.CHECK.volumes ?? []) box(v.rect, Math.max(v.y0, g), v.y1);

const f = (n) => { const s = n.toFixed(1); return s === '-0.0' ? '0.0' : s.replace(/\.0$/, ''); };
const out = ['solid scene'];
for (const [a, b, c] of tris) {
  const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]]; const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
  const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; const len = Math.hypot(...n) || 1;
  out.push(`facet normal ${n.map((x) => (x / len).toFixed(2)).join(' ')}`, 'outer loop', ...[a, b, c].map((p) => `vertex ${p.map(f).join(' ')}`), 'endloop', 'endfacet');
}
out.push('endsolid scene');
process.stdout.write(out.join('\n') + '\n');
console.error(`${tris.length} 个三角形${tris.length > 2500 ? '（偏多：GitHub 渲染大 STL 会慢，README 也会变大）' : ''}`);

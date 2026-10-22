// 从 layout.js 导出乌镇的简化体块模型（ASCII STL），用于 GitHub README 里的 ```stl 交互预览。
// GitHub 的 Markdown 会把 ```stl 代码块渲染成可拖动、可缩放的 3D 白模（只有几何，没有颜色和灯光）。
// 用法：node scripts/export-stl.mjs > wuzhen-massing.stl
// 坐标：STL 习惯 Z 朝上，这里换成 (x, -z, y)，北 = +Y。只保留 1 位小数，控制文件大小。
import * as L from '../src/layout.js';

const tris = [];
const P = ([x, y, z]) => [x, -z, y]; // layout 的 Y 朝上 → STL 的 Z 朝上
const tri = (a, b, c) => tris.push([P(a), P(b), P(c)]);
const quad = (a, b, c, d) => { tri(a, b, c); tri(a, c, d); };

// 轴对齐盒子（不画底面）
function box(x0, x1, y0, y1, z0, z1) {
  const v = (x, y, z) => [x, y, z];
  quad(v(x0, y1, z0), v(x0, y1, z1), v(x1, y1, z1), v(x1, y1, z0)); // 顶
  quad(v(x0, y0, z1), v(x1, y0, z1), v(x1, y1, z1), v(x0, y1, z1)); // 南 +z
  quad(v(x1, y0, z0), v(x0, y0, z0), v(x0, y1, z0), v(x1, y1, z0)); // 北 -z
  quad(v(x1, y0, z1), v(x1, y0, z0), v(x1, y1, z0), v(x1, y1, z1)); // 东 +x
  quad(v(x0, y0, z0), v(x0, y0, z1), v(x0, y1, z1), v(x0, y1, z0)); // 西 -x
}

// 双坡屋顶的房子：屋脊沿开间方向（ridgeAlongX = 开间沿 x）
function house(f, eave, ridge, ridgeAlongX) {
  box(f.x0, f.x1, 0, eave, f.z0, f.z1);
  if (ridgeAlongX) {
    const zm = (f.z0 + f.z1) / 2;
    quad([f.x0, eave, f.z1], [f.x1, eave, f.z1], [f.x1, ridge, zm], [f.x0, ridge, zm]);
    quad([f.x1, eave, f.z0], [f.x0, eave, f.z0], [f.x0, ridge, zm], [f.x1, ridge, zm]);
    tri([f.x0, eave, f.z0], [f.x0, eave, f.z1], [f.x0, ridge, zm]);
    tri([f.x1, eave, f.z1], [f.x1, eave, f.z0], [f.x1, ridge, zm]);
  } else {
    const xm = (f.x0 + f.x1) / 2;
    quad([f.x1, eave, f.z0], [f.x1, eave, f.z1], [xm, ridge, f.z1], [xm, ridge, f.z0]);
    quad([f.x0, eave, f.z1], [f.x0, eave, f.z0], [xm, ridge, f.z0], [xm, ridge, f.z1]);
    tri([f.x0, eave, f.z0], [f.x1, eave, f.z0], [xm, ridge, f.z0]);
    tri([f.x1, eave, f.z1], [f.x0, eave, f.z1], [xm, ridge, f.z1]);
  }
}

// 地面：把区块按两条河切成 4 块，河道低 1.2m
const W = L.LEVELS.water; const E = L.EXTENT;
const main = L.rivers.find((r) => r.id === 'main').rect; const br = L.rivers.find((r) => r.id === 'branch').rect;
for (const [x0, x1] of [[E.x0, br.x0], [br.x1, E.x1]]) {
  for (const [z0, z1] of [[E.z0, main.z0], [main.z1, E.z1]]) box(x0, x1, W - 1.5, 0, z0, z1);
}
quad([E.x0, W, main.z0], [E.x0, W, main.z1], [E.x1, W, main.z1], [E.x1, W, main.z0]); // 主河水面
for (const [z0, z1] of [[E.z0, main.z0], [main.z1, E.z1]]) quad([br.x0, W, z0], [br.x0, W, z1], [br.x1, W, z1], [br.x1, W, z0]);

// 民居和水阁
for (const h of L.houses) {
  const ridge = h.eaveHeight + (h.depth / 2) * 0.5;
  const alongX = h.facing === 'N' || h.facing === 'S';
  house(h.footprint, h.eaveHeight, ridge, alongX);
  const p = L.pavilionFootprint(h);
  if (p) box(p.x0, p.x1, W, 2.8, p.z0, p.z1);
}
// 染坊作坊
const w = L.dyeYard.workshop; house(w, 6.2, 9, true);

// 桥：拱桥用 8 段折线近似拱背，平桥是一块板
for (const b of L.bridges) {
  const half = b.width / 2;
  if (b.type === 'flat') {
    const r = b.axis === 'z' ? [b.at - half, b.at + half, b.from, b.to] : [b.from, b.to, b.at - half, b.at + half];
    box(r[0], r[1], b.deckY - 0.3, b.deckY, r[2], r[3]);
    continue;
  }
  const top = W + b.riseAboveWater + 0.6; const n = 8;
  for (let i = 0; i < n; i++) {
    const s0 = b.from + ((b.to - b.from) * i) / n; const s1 = b.from + ((b.to - b.from) * (i + 1)) / n;
    const h = (s) => top * Math.sin((Math.PI * (s - b.from)) / (b.to - b.from));
    const y0 = h(s0); const y1 = h(s1);
    const seg = b.axis === 'z'
      ? [[b.at - half, y0, s0], [b.at + half, y0, s0], [b.at + half, y1, s1], [b.at - half, y1, s1]]
      : [[s0, y0, b.at + half], [s0, y0, b.at - half], [s1, y1, b.at - half], [s1, y1, b.at + half]];
    quad(...(b.axis === 'z' ? [seg[0], seg[3], seg[2], seg[1]] : seg)); // 桥面朝上
    // 两侧桥身：从桥面垂到水面，让拱背从侧面也看得出来
    if (b.axis === 'z') {
      quad([b.at + half, W, s0], [b.at + half, W, s1], [b.at + half, y1, s1], [b.at + half, y0, s0]);
      quad([b.at - half, W, s1], [b.at - half, W, s0], [b.at - half, y0, s0], [b.at - half, y1, s1]);
    } else {
      quad([s1, W, b.at + half], [s0, W, b.at + half], [s0, y0, b.at + half], [s1, y1, b.at + half]);
      quad([s0, W, b.at - half], [s1, W, b.at - half], [s1, y1, b.at - half], [s0, y0, b.at - half]);
    }
  }
}

// 白莲塔：七层八角，每层一段塔身 + 一圈出檐（为了能在预览里看到，挪到区块西北角内）
const pg = { x: E.x0 + 18, z: E.z0 + 14 };
const oct = (r, y0, y1) => {
  for (let i = 0; i < 8; i++) {
    const a0 = (i / 8) * Math.PI * 2; const a1 = ((i + 1) / 8) * Math.PI * 2;
    const p0 = [pg.x + r * Math.cos(a0), pg.z + r * Math.sin(a0)]; const p1 = [pg.x + r * Math.cos(a1), pg.z + r * Math.sin(a1)];
    quad([p0[0], y0, p0[1]], [p1[0], y0, p1[1]], [p1[0], y1, p1[1]], [p0[0], y1, p0[1]]);
    tri([pg.x, y1, pg.z], [p1[0], y1, p1[1]], [p0[0], y1, p0[1]]);
  }
};
const floorH = L.pagoda.height / (L.pagoda.floors + 1);
for (let k = 0; k < L.pagoda.floors; k++) {
  const r = (L.pagoda.baseWidth / 2) * (1 - k * 0.07);
  oct(r, k * floorH, (k + 0.8) * floorH);
  oct(r * 1.45, (k + 0.8) * floorH, (k + 0.95) * floorH);
}
oct(0.6, L.pagoda.floors * floorH, L.pagoda.height);

// 输出
const f = (n) => { const s = n.toFixed(1); return s === '-0.0' ? '0.0' : s.replace(/\.0$/, ''); };
const lines = ['solid wuzhen'];
for (const [a, b, c] of tris) {
  const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]]; const v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
  const nrm = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const len = Math.hypot(...nrm) || 1;
  lines.push(`facet normal ${nrm.map((x) => (x / len).toFixed(2)).join(' ')}`, 'outer loop', ...[a, b, c].map((p) => `vertex ${p.map(f).join(' ')}`), 'endloop', 'endfacet');
}
lines.push('endsolid wuzhen');
process.stdout.write(lines.join('\n') + '\n');
console.error(`${tris.length} 个三角形`);

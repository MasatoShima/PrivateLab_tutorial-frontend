// 演習 2 — 配列操作 1‑ライナー
const sum: number = [1, 2, 3, 4, 5]
    .map((n: number): number => n * n)
    .reduce((acc: number, v: number): number => acc + v, 0);

console.log(sum);

// End

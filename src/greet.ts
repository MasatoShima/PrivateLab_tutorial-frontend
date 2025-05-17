// 演習 1 — Python 関数を書き換え
function greet(name: string, lang: string): string {
    if (lang === "ja") {
        return `こんにちは、 ${name} さん！`;
    }
    return `Hello, ${name} !`;
}

console.log(greet("Masato", "ja"));

// 演習 2 — 配列操作 1‑ライナー
const num: number[] = [1, 2, 3, 4, 5];
const num_square: number[] = num.map((n: number): number => n * 2);
console.log(num_square);

// End

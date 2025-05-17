import minimist from "minimist";

// 引数の parse.
const args = minimist(process.argv.slice(2), {
    string: ["name", "lang"],
    default: { name: "Unknown", lang: "ja" },
});

// 演習 1 — Python 関数を書き換え
function greet(name: string, lang: string): string {
    if (lang === "ja") {
        return `こんにちは、 ${name} さん！`;
    }
    return `Hello, ${name} !`;
}

console.log(greet(args.name, args.lang));

// End

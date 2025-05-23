import minimist from "minimist";
import zod from "zod";

// 引数の schema.
const argsSchema = zod.object({
    name: zod.string().min(1, "Name must be at least 1 character long"),
    lang: zod.enum(["ja", "en"]).default("ja"),
});

type Args = zod.infer<typeof argsSchema>;

// 引数の parse.
const argsRaw = minimist(process.argv.slice(2));

// 引数の validate.
try {
    const args: Args = argsSchema.parse(argsRaw);
    console.log(greet(args.name, args.lang));
} catch (e) {
    if (e instanceof zod.ZodError) {
        console.error("Invalid arguments:");
        console.error(e.errors);
    }
    else {
        console.error(e);
    }
    process.exit(1);
}

// 演習 1 — Python 関数を書き換え
function greet(name: string, lang: string): string {
    return lang === "ja" ? `こんにちは ${name} さん` : `Hello ${name} !`;
}

// End

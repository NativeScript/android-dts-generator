// Type-checks the expected output against the published Android platform typings. Neither
// output may have any error, except the ones listed in `expected`.
import ts from "typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const platform = path.join(here, "node_modules/@nativescript/types-android/lib/android");

const checks = [
    { file: "../expected-output/kotlin-fixture/android.d.ts", expected: [] },
    {
        file: "../expected-output/android.d.ts",
        // The AndroidX test runs without android.jar as a super jar, so the generator cannot see
        // AsyncTask's onCancelled() overload to declare it beside CommandProcessor's override.
        expected: ["Property 'onCancelled' in type 'CommandProcessor' is not assignable"],
    },
];

let failed = false;
for (const check of checks) {
    const file = path.resolve(here, check.file);
    const program = ts.createProgram({
        // Each output references its own android-declarations.d.ts, which declares the same
        // androidNative.Array as the platform's; only the platform's is loaded.
        rootNames: [
            path.join(platform, "android-declarations.d.ts"),
            path.join(platform, "android-platform-37.d.ts"),
            file,
        ],
        options: { noEmit: true, strict: true, skipLibCheck: false, noResolve: true, lib: ["lib.es2020.d.ts"], types: [] },
    });
    const source = program.getSourceFile(file);
    const diagnostics = [
        ...program.getSyntacticDiagnostics(source),
        ...program.getSemanticDiagnostics(source),
    ].filter((d) => !check.expected.some((text) => ts.flattenDiagnosticMessageText(d.messageText, " ").startsWith(text)));

    for (const d of diagnostics) {
        const { line, character } = source.getLineAndCharacterOfPosition(d.start ?? 0);
        console.log(`${check.file}(${line + 1},${character + 1}): TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`);
    }
    console.log(`${check.file}: ${diagnostics.length} error(s)`);
    failed ||= diagnostics.length > 0;
}
process.exit(failed ? 1 : 0);

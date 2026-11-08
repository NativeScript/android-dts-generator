// Type-checks the expected output against the published Android platform typings.
//
// The generated declarations must never contain syntax or grammar errors (TS1xxx). The Kotlin
// fixture must type-check cleanly as well. The AndroidX output still has type errors the
// generator cannot avoid yet, such as a nullable return type that narrows a base class's, so only
// its syntax is checked.
import ts from "typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const platform = path.join(here, "node_modules/@nativescript/types-android/lib/android");

const checks = [
    { file: "../expected-output/kotlin-fixture/android.d.ts", allErrors: true },
    { file: "../expected-output/android.d.ts", allErrors: false },
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
    ].filter((d) => check.allErrors || d.code < 2000);

    for (const d of diagnostics) {
        const { line, character } = source.getLineAndCharacterOfPosition(d.start ?? 0);
        console.log(`${check.file}(${line + 1},${character + 1}): TS${d.code}: ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`);
    }
    console.log(`${check.file}: ${diagnostics.length} error(s)`);
    failed ||= diagnostics.length > 0;
}
process.exit(failed ? 1 : 0);

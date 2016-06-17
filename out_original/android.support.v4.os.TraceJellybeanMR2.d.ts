/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module os {
				export class TraceJellybeanMR2 {
					public static beginSection(param0: string): void;
					public static endSection(): void;
				}
			}
		}
	}
}

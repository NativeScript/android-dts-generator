/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class Result {
				public setSystemId(param0: string): void;
				public getSystemId(): string;
				public static PI_DISABLE_OUTPUT_ESCAPING: string;
				public static PI_ENABLE_OUTPUT_ESCAPING: string;
			}
		}
	}
}

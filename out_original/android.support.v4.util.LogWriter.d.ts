/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class LogWriter {
					public constructor();
					public constructor(param0: java.lang.Object);
					public constructor(param0: string);
					public close(): void;
					public flush(): void;
					public write(param0: native.Array<string>): void;
					public write(param0: number): void;
					public write(param0: string): void;
					public write(param0: string, param1: number, param2: number): void;
					public write(param0: native.Array<string>, param1: number, param2: number): void;
				}
			}
		}
	}
}

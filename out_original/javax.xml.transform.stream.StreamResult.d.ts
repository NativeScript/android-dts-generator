/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module stream {
				export class StreamResult {
					public constructor();
					public constructor(param0: java.io.OutputStream);
					public constructor(param0: java.io.Writer);
					public constructor(param0: string);
					public constructor(param0: java.io.File);
					public setOutputStream(param0: java.io.OutputStream): void;
					public getOutputStream(): java.io.OutputStream;
					public setWriter(param0: java.io.Writer): void;
					public getWriter(): java.io.Writer;
					public setSystemId(param0: string): void;
					public setSystemId(param0: java.io.File): void;
					public getSystemId(): string;
					public static FEATURE: string;
				}
			}
		}
	}
}

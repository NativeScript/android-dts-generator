/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export module stream {
				export class StreamSource {
					public constructor();
					public constructor(param0: java.io.InputStream);
					public constructor(param0: java.io.InputStream, param1: string);
					public constructor(param0: java.io.Reader);
					public constructor(param0: java.io.Reader, param1: string);
					public constructor(param0: string);
					public constructor(param0: java.io.File);
					public setInputStream(param0: java.io.InputStream): void;
					public getInputStream(): java.io.InputStream;
					public setReader(param0: java.io.Reader): void;
					public getReader(): java.io.Reader;
					public setPublicId(param0: string): void;
					public getPublicId(): string;
					public setSystemId(param0: string): void;
					public getSystemId(): string;
					public setSystemId(param0: java.io.File): void;
					public static FEATURE: string;
				}
			}
		}
	}
}

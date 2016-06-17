/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSOutput {
					public getCharacterStream(): java.io.Writer;
					public setCharacterStream(param0: java.io.Writer): void;
					public getByteStream(): java.io.OutputStream;
					public setByteStream(param0: java.io.OutputStream): void;
					public getSystemId(): string;
					public setSystemId(param0: string): void;
					public getEncoding(): string;
					public setEncoding(param0: string): void;
				}
			}
		}
	}
}

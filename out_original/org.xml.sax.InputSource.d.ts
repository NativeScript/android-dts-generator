/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xml {
		export module sax {
			export class InputSource {
				public constructor();
				public constructor(param0: string);
				public constructor(param0: java.io.InputStream);
				public constructor(param0: java.io.Reader);
				public setPublicId(param0: string): void;
				public getPublicId(): string;
				public setSystemId(param0: string): void;
				public getSystemId(): string;
				public setByteStream(param0: java.io.InputStream): void;
				public getByteStream(): java.io.InputStream;
				public setEncoding(param0: string): void;
				public getEncoding(): string;
				public setCharacterStream(param0: java.io.Reader): void;
				public getCharacterStream(): java.io.Reader;
			}
		}
	}
}

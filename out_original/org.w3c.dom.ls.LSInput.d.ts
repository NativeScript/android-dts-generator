/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSInput {
					public getCharacterStream(): java.io.Reader;
					public setCharacterStream(param0: java.io.Reader): void;
					public getByteStream(): java.io.InputStream;
					public setByteStream(param0: java.io.InputStream): void;
					public getStringData(): string;
					public setStringData(param0: string): void;
					public getSystemId(): string;
					public setSystemId(param0: string): void;
					public getPublicId(): string;
					public setPublicId(param0: string): void;
					public getBaseURI(): string;
					public setBaseURI(param0: string): void;
					public getEncoding(): string;
					public setEncoding(param0: string): void;
					public getCertifiedText(): boolean;
					public setCertifiedText(param0: boolean): void;
				}
			}
		}
	}
}

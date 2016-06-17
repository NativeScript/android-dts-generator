/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />

declare module java {
	export module lang {
		export class Process {
			public constructor();
			public destroy(): void;
			public exitValue(): number;
			public getErrorStream(): java.io.InputStream;
			public getInputStream(): java.io.InputStream;
			public getOutputStream(): java.io.OutputStream;
			public waitFor(): number;
		}
	}
}

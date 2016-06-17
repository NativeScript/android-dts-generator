/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.xml.transform.Result.d.ts" />
/// <reference path="./javax.xml.transform.Source.d.ts" />

declare module java {
	export module sql {
		export class SQLXML {
			public free(): void;
			public getBinaryStream(): java.io.InputStream;
			public setBinaryStream(): java.io.OutputStream;
			public getCharacterStream(): java.io.Reader;
			public setCharacterStream(): java.io.Writer;
			public getString(): string;
			public setString(param0: string): void;
			public getSource(param0: java.lang.Class): javax.xml.transform.Source;
			public setResult(param0: java.lang.Class): javax.xml.transform.Result;
		}
	}
}

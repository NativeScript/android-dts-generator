/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xmlpull {
		export module v1 {
			export class XmlSerializer {
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
				public setOutput(param0: java.io.OutputStream, param1: string): void;
				public setOutput(param0: java.io.Writer): void;
				public startDocument(param0: string, param1: java.lang.Boolean): void;
				public endDocument(): void;
				public setPrefix(param0: string, param1: string): void;
				public getPrefix(param0: string, param1: boolean): string;
				public getDepth(): number;
				public getNamespace(): string;
				public getName(): string;
				public startTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
				public attribute(param0: string, param1: string, param2: string): org.xmlpull.v1.XmlSerializer;
				public endTag(param0: string, param1: string): org.xmlpull.v1.XmlSerializer;
				public text(param0: string): org.xmlpull.v1.XmlSerializer;
				public text(param0: native.Array<string>, param1: number, param2: number): org.xmlpull.v1.XmlSerializer;
				public cdsect(param0: string): void;
				public entityRef(param0: string): void;
				public processingInstruction(param0: string): void;
				public comment(param0: string): void;
				public docdecl(param0: string): void;
				public ignorableWhitespace(param0: string): void;
				public flush(): void;
			}
		}
	}
}

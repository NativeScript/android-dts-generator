/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module xmlpull {
		export module v1 {
			export class XmlPullParser {
				public setFeature(param0: string, param1: boolean): void;
				public getFeature(param0: string): boolean;
				public setProperty(param0: string, param1: java.lang.Object): void;
				public getProperty(param0: string): java.lang.Object;
				public setInput(param0: java.io.Reader): void;
				public setInput(param0: java.io.InputStream, param1: string): void;
				public getInputEncoding(): string;
				public defineEntityReplacementText(param0: string, param1: string): void;
				public getNamespaceCount(param0: number): number;
				public getNamespacePrefix(param0: number): string;
				public getNamespaceUri(param0: number): string;
				public getNamespace(param0: string): string;
				public getDepth(): number;
				public getPositionDescription(): string;
				public getLineNumber(): number;
				public getColumnNumber(): number;
				public isWhitespace(): boolean;
				public getText(): string;
				public getTextCharacters(param0: native.Array<number>): native.Array<string>;
				public getNamespace(): string;
				public getName(): string;
				public getPrefix(): string;
				public isEmptyElementTag(): boolean;
				public getAttributeCount(): number;
				public getAttributeNamespace(param0: number): string;
				public getAttributeName(param0: number): string;
				public getAttributePrefix(param0: number): string;
				public getAttributeType(param0: number): string;
				public isAttributeDefault(param0: number): boolean;
				public getAttributeValue(param0: number): string;
				public getAttributeValue(param0: string, param1: string): string;
				public getEventType(): number;
				public next(): number;
				public nextToken(): number;
				public require(param0: number, param1: string, param2: string): void;
				public nextText(): string;
				public nextTag(): number;
				public static CDSECT: number;
				public static COMMENT: number;
				public static DOCDECL: number;
				public static END_DOCUMENT: number;
				public static END_TAG: number;
				public static ENTITY_REF: number;
				public static FEATURE_PROCESS_DOCDECL: string;
				public static FEATURE_PROCESS_NAMESPACES: string;
				public static FEATURE_REPORT_NAMESPACE_ATTRIBUTES: string;
				public static FEATURE_VALIDATION: string;
				public static IGNORABLE_WHITESPACE: number;
				public static NO_NAMESPACE: string;
				public static PROCESSING_INSTRUCTION: number;
				public static START_DOCUMENT: number;
				public static START_TAG: number;
				public static TEXT: number;
				public static TYPES: native.Array<string>;
			}
		}
	}
}

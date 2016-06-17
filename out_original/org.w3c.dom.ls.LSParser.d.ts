/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.Document.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSInput.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSParserFilter.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSParser {
					public getDomConfig(): org.w3c.dom.DOMConfiguration;
					public getFilter(): org.w3c.dom.ls.LSParserFilter;
					public setFilter(param0: org.w3c.dom.ls.LSParserFilter): void;
					public getAsync(): boolean;
					public getBusy(): boolean;
					public parse(param0: org.w3c.dom.ls.LSInput): org.w3c.dom.Document;
					public parseURI(param0: string): org.w3c.dom.Document;
					public parseWithContext(param0: org.w3c.dom.ls.LSInput, param1: org.w3c.dom.Node, param2: number): org.w3c.dom.Node;
					public abort(): void;
					public static ACTION_APPEND_AS_CHILDREN: number;
					public static ACTION_INSERT_AFTER: number;
					public static ACTION_INSERT_BEFORE: number;
					public static ACTION_REPLACE: number;
					public static ACTION_REPLACE_CHILDREN: number;
				}
			}
		}
	}
}

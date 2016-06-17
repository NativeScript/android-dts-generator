/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.DOMConfiguration.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />
/// <reference path="./org.w3c.dom.ls.LSOutput.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSSerializer {
					public getDomConfig(): org.w3c.dom.DOMConfiguration;
					public getNewLine(): string;
					public setNewLine(param0: string): void;
					public write(param0: org.w3c.dom.Node, param1: org.w3c.dom.ls.LSOutput): boolean;
					public writeToURI(param0: org.w3c.dom.Node, param1: string): boolean;
					public writeToString(param0: org.w3c.dom.Node): string;
				}
			}
		}
	}
}

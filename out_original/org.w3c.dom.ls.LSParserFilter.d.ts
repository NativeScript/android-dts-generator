/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export module ls {
				export class LSParserFilter {
					public startElement(param0: org.w3c.dom.Element): number;
					public acceptNode(param0: org.w3c.dom.Node): number;
					public getWhatToShow(): number;
					public static FILTER_ACCEPT: number;
					public static FILTER_INTERRUPT: number;
					public static FILTER_REJECT: number;
					public static FILTER_SKIP: number;
				}
			}
		}
	}
}

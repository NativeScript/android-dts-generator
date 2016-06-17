/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Text {
				public splitText(param0: number): org.w3c.dom.Text;
				public isElementContentWhitespace(): boolean;
				public getWholeText(): string;
				public replaceWholeText(param0: string): org.w3c.dom.Text;
			}
		}
	}
}

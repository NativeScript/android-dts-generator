/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.sax.ElementListener.d.ts" />
/// <reference path="./android.sax.EndElementListener.d.ts" />
/// <reference path="./android.sax.EndTextElementListener.d.ts" />
/// <reference path="./android.sax.StartElementListener.d.ts" />
/// <reference path="./android.sax.TextElementListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module sax {
		export class Element {
			public getChild(param0: string): android.sax.Element;
			public getChild(param0: string, param1: string): android.sax.Element;
			public requireChild(param0: string): android.sax.Element;
			public requireChild(param0: string, param1: string): android.sax.Element;
			public setElementListener(param0: android.sax.ElementListener): void;
			public setTextElementListener(param0: android.sax.TextElementListener): void;
			public setStartElementListener(param0: android.sax.StartElementListener): void;
			public setEndElementListener(param0: android.sax.EndElementListener): void;
			public setEndTextElementListener(param0: android.sax.EndTextElementListener): void;
			public toString(): string;
		}
	}
}

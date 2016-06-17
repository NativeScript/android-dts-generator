/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Element.d.ts" />
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Attr {
				public getName(): string;
				public getSpecified(): boolean;
				public getValue(): string;
				public setValue(param0: string): void;
				public getOwnerElement(): org.w3c.dom.Element;
				public getSchemaTypeInfo(): org.w3c.dom.TypeInfo;
				public isId(): boolean;
			}
		}
	}
}

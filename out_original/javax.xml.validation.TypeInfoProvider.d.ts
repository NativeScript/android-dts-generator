/// <reference path="./_helpers.d.ts" />
/// <reference path="./org.w3c.dom.TypeInfo.d.ts" />

declare module javax {
	export module xml {
		export module validation {
			export class TypeInfoProvider {
				public constructor();
				public getElementTypeInfo(): org.w3c.dom.TypeInfo;
				public getAttributeTypeInfo(param0: number): org.w3c.dom.TypeInfo;
				public isIdAttribute(param0: number): boolean;
				public isSpecified(param0: number): boolean;
			}
		}
	}
}

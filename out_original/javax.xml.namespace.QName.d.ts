/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module xml {
		export module namespace {
			export class QName {
				public constructor();
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: string);
				public constructor(param0: string);
				public getNamespaceURI(): string;
				public getLocalPart(): string;
				public getPrefix(): string;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
				public static valueOf(param0: string): javax.xml.namespace.QName;
			}
		}
	}
}

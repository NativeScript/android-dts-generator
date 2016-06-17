/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.ObjectStreamField.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class ObjectStreamClass {
			public forClass(): java.lang.Class;
			public getField(param0: string): java.io.ObjectStreamField;
			public getFields(): native.Array<java.io.ObjectStreamField>;
			public getName(): string;
			public getSerialVersionUID(): number;
			public static lookup(param0: java.lang.Class): java.io.ObjectStreamClass;
			public static lookupAny(param0: java.lang.Class): java.io.ObjectStreamClass;
			public toString(): string;
			public static NO_FIELDS: native.Array<java.io.ObjectStreamField>;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.reflect.GenericDeclaration.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class TypeVariable {
				public getBounds(): native.Array<java.lang.reflect.Type>;
				public getGenericDeclaration(): java.lang.reflect.GenericDeclaration;
				public getName(): string;
			}
		}
	}
}

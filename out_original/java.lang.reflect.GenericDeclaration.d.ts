/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.reflect.TypeVariable.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class GenericDeclaration {
				public getTypeParameters(): native.Array<java.lang.reflect.TypeVariable>;
			}
		}
	}
}

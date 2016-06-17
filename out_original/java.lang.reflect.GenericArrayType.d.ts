/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class GenericArrayType {
				public getGenericComponentType(): java.lang.reflect.Type;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class WildcardType {
				public getUpperBounds(): native.Array<java.lang.reflect.Type>;
				public getLowerBounds(): native.Array<java.lang.reflect.Type>;
			}
		}
	}
}

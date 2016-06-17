/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class ParameterizedType {
				public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
				public getOwnerType(): java.lang.reflect.Type;
				public getRawType(): java.lang.reflect.Type;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.annotation.ElementType.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class Target {
				public value(): native.Array<java.lang.annotation.ElementType>;
			}
		}
	}
}

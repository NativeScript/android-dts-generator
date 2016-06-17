/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module lang {
		export module annotation {
			export class Annotation {
				public annotationType(): java.lang.Class;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Member {
				public getDeclaringClass(): java.lang.Class;
				public getModifiers(): number;
				public getName(): string;
				public isSynthetic(): boolean;
				public static DECLARED: number;
				public static PUBLIC: number;
			}
		}
	}
}

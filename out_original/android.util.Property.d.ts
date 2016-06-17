/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class Property {
			public constructor();
			public constructor(param0: java.lang.Class, param1: string);
			public static of(param0: java.lang.Class, param1: java.lang.Class, param2: string): android.util.Property;
			public isReadOnly(): boolean;
			public set(param0: java.lang.Object, param1: java.lang.Object): void;
			public get(param0: java.lang.Object): java.lang.Object;
			public getName(): string;
			public getType(): java.lang.Class;
		}
	}
}

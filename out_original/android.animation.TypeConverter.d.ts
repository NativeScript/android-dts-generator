/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module animation {
		export class TypeConverter {
			public constructor();
			public constructor(param0: java.lang.Class, param1: java.lang.Class);
			public convert(param0: java.lang.Object): java.lang.Object;
		}
	}
}

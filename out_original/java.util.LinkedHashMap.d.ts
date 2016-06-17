/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module util {
		export class LinkedHashMap {
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Map);
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: number, param1: number, param2: boolean);
			public constructor(param0: java.util.Map);
			public get(param0: java.lang.Object): java.lang.Object;
			public containsValue(param0: java.lang.Object): boolean;
			public clear(): void;
			public removeEldestEntry(param0: java.util.Map.Entry): boolean;
		}
	}
}

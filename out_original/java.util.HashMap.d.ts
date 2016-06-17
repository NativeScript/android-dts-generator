/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class HashMap {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Map);
			public clone(): java.lang.Object;
			public isEmpty(): boolean;
			public size(): number;
			public get(param0: java.lang.Object): java.lang.Object;
			public containsKey(param0: java.lang.Object): boolean;
			public containsValue(param0: java.lang.Object): boolean;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public putAll(param0: java.util.Map): void;
			public remove(param0: java.lang.Object): java.lang.Object;
			public clear(): void;
			public keySet(): java.util.Set;
			public values(): java.util.Collection;
			public entrySet(): java.util.Set;
		}
	}
}

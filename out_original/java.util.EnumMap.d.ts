/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class EnumMap {
			public constructor();
			public constructor(param0: java.lang.Class);
			public constructor(param0: java.util.EnumMap);
			public constructor(param0: java.util.Map);
			public clear(): void;
			public clone(): java.lang.Object;
			public clone(): java.util.EnumMap;
			public containsKey(param0: java.lang.Object): boolean;
			public containsValue(param0: java.lang.Object): boolean;
			public entrySet(): java.util.Set;
			public equals(param0: java.lang.Object): boolean;
			public get(param0: java.lang.Object): java.lang.Object;
			public keySet(): java.util.Set;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public put(param0: java.lang.Enum, param1: java.lang.Object): java.lang.Object;
			public putAll(param0: java.util.Map): void;
			public remove(param0: java.lang.Object): java.lang.Object;
			public size(): number;
			public values(): java.util.Collection;
		}
	}
}

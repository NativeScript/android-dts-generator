/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class Map {
			public clear(): void;
			public containsKey(param0: java.lang.Object): boolean;
			public containsValue(param0: java.lang.Object): boolean;
			public entrySet(): java.util.Set;
			public equals(param0: java.lang.Object): boolean;
			public get(param0: java.lang.Object): java.lang.Object;
			public hashCode(): number;
			public isEmpty(): boolean;
			public keySet(): java.util.Set;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public putAll(param0: java.util.Map): void;
			public remove(param0: java.lang.Object): java.lang.Object;
			public size(): number;
			public values(): java.util.Collection;
		}
		export module Map {
			export class Entry {
				public equals(param0: java.lang.Object): boolean;
				public getKey(): java.lang.Object;
				public getValue(): java.lang.Object;
				public hashCode(): number;
				public setValue(param0: java.lang.Object): java.lang.Object;
			}
		}
	}
}

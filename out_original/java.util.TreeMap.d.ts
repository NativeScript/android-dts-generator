/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.NavigableMap.d.ts" />
/// <reference path="./java.util.NavigableSet.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />

declare module java {
	export module util {
		export class TreeMap {
			public constructor();
			public constructor(param0: java.util.Map);
			public constructor(param0: java.util.Comparator);
			public constructor(param0: java.util.SortedMap);
			public clone(): java.lang.Object;
			public size(): number;
			public isEmpty(): boolean;
			public get(param0: java.lang.Object): java.lang.Object;
			public containsKey(param0: java.lang.Object): boolean;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public clear(): void;
			public remove(param0: java.lang.Object): java.lang.Object;
			public firstEntry(): java.util.Map.Entry;
			public pollFirstEntry(): java.util.Map.Entry;
			public firstKey(): java.lang.Object;
			public lastEntry(): java.util.Map.Entry;
			public pollLastEntry(): java.util.Map.Entry;
			public lastKey(): java.lang.Object;
			public lowerEntry(param0: java.lang.Object): java.util.Map.Entry;
			public lowerKey(param0: java.lang.Object): java.lang.Object;
			public floorEntry(param0: java.lang.Object): java.util.Map.Entry;
			public floorKey(param0: java.lang.Object): java.lang.Object;
			public ceilingEntry(param0: java.lang.Object): java.util.Map.Entry;
			public ceilingKey(param0: java.lang.Object): java.lang.Object;
			public higherEntry(param0: java.lang.Object): java.util.Map.Entry;
			public higherKey(param0: java.lang.Object): java.lang.Object;
			public comparator(): java.util.Comparator;
			public entrySet(): java.util.Set;
			public keySet(): java.util.Set;
			public navigableKeySet(): java.util.NavigableSet;
			public subMap(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.NavigableMap;
			public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedMap;
			public headMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
			public headMap(param0: java.lang.Object): java.util.SortedMap;
			public tailMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
			public tailMap(param0: java.lang.Object): java.util.SortedMap;
			public descendingMap(): java.util.NavigableMap;
			public descendingKeySet(): java.util.NavigableSet;
		}
	}
}

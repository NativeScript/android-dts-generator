/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.NavigableSet.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />
/// <reference path="./java.util.concurrent.ConcurrentNavigableMap.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ConcurrentSkipListMap {
				public constructor();
				public constructor(param0: java.util.Comparator);
				public constructor(param0: java.util.Map);
				public constructor(param0: java.util.SortedMap);
				public clone(): java.lang.Object;
				public clone(): java.util.concurrent.ConcurrentSkipListMap;
				public containsKey(param0: java.lang.Object): boolean;
				public get(param0: java.lang.Object): java.lang.Object;
				public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public remove(param0: java.lang.Object): java.lang.Object;
				public containsValue(param0: java.lang.Object): boolean;
				public size(): number;
				public isEmpty(): boolean;
				public clear(): void;
				public keySet(): java.util.Set;
				public keySet(): java.util.NavigableSet;
				public navigableKeySet(): java.util.NavigableSet;
				public values(): java.util.Collection;
				public entrySet(): java.util.Set;
				public descendingMap(): java.util.concurrent.ConcurrentNavigableMap;
				public descendingKeySet(): java.util.NavigableSet;
				public equals(param0: java.lang.Object): boolean;
				public putIfAbsent(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public remove(param0: java.lang.Object, param1: java.lang.Object): boolean;
				public replace(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
				public replace(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public comparator(): java.util.Comparator;
				public firstKey(): java.lang.Object;
				public lastKey(): java.lang.Object;
				public subMap(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public headMap(param0: java.lang.Object, param1: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public tailMap(param0: java.lang.Object, param1: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public headMap(param0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public tailMap(param0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public lowerEntry(param0: java.lang.Object): java.util.Map.Entry;
				public lowerKey(param0: java.lang.Object): java.lang.Object;
				public floorEntry(param0: java.lang.Object): java.util.Map.Entry;
				public floorKey(param0: java.lang.Object): java.lang.Object;
				public ceilingEntry(param0: java.lang.Object): java.util.Map.Entry;
				public ceilingKey(param0: java.lang.Object): java.lang.Object;
				public higherEntry(param0: java.lang.Object): java.util.Map.Entry;
				public higherKey(param0: java.lang.Object): java.lang.Object;
				public firstEntry(): java.util.Map.Entry;
				public lastEntry(): java.util.Map.Entry;
				public pollFirstEntry(): java.util.Map.Entry;
				public pollLastEntry(): java.util.Map.Entry;
			}
		}
	}
}

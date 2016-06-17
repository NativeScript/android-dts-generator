/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.NavigableSet.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />

declare module java {
	export module util {
		export class NavigableMap {
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
			public descendingMap(): java.util.NavigableMap;
			public navigableKeySet(): java.util.NavigableSet;
			public descendingKeySet(): java.util.NavigableSet;
			public subMap(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.NavigableMap;
			public headMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
			public tailMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
			public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedMap;
			public headMap(param0: java.lang.Object): java.util.SortedMap;
			public tailMap(param0: java.lang.Object): java.util.SortedMap;
		}
	}
}

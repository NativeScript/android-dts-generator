/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Deque.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.ListIterator.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Queue.d.ts" />
/// <reference path="./java.util.Random.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />
/// <reference path="./java.util.SortedSet.d.ts" />

declare module java {
	export module util {
		export class Collections {
			public static binarySearch(param0: java.util.List, param1: java.lang.Object): number;
			public static binarySearch(param0: java.util.List, param1: java.lang.Object, param2: java.util.Comparator): number;
			public static copy(param0: java.util.List, param1: java.util.List): void;
			public static enumeration(param0: java.util.Collection): java.util.Enumeration;
			public static fill(param0: java.util.List, param1: java.lang.Object): void;
			public static max(param0: java.util.Collection): java.lang.Object;
			public static max(param0: java.util.Collection, param1: java.util.Comparator): java.lang.Object;
			public static min(param0: java.util.Collection): java.lang.Object;
			public static min(param0: java.util.Collection, param1: java.util.Comparator): java.lang.Object;
			public static nCopies(param0: number, param1: java.lang.Object): java.util.List;
			public static reverse(param0: java.util.List): void;
			public static reverseOrder(): java.util.Comparator;
			public static reverseOrder(param0: java.util.Comparator): java.util.Comparator;
			public static shuffle(param0: java.util.List): void;
			public static shuffle(param0: java.util.List, param1: java.util.Random): void;
			public static singleton(param0: java.lang.Object): java.util.Set;
			public static singletonList(param0: java.lang.Object): java.util.List;
			public static singletonMap(param0: java.lang.Object, param1: java.lang.Object): java.util.Map;
			public static sort(param0: java.util.List): void;
			public static sort(param0: java.util.List, param1: java.util.Comparator): void;
			public static swap(param0: java.util.List, param1: number, param2: number): void;
			public static replaceAll(param0: java.util.List, param1: java.lang.Object, param2: java.lang.Object): boolean;
			public static rotate(param0: java.util.List, param1: number): void;
			public static indexOfSubList(param0: java.util.List, param1: java.util.List): number;
			public static lastIndexOfSubList(param0: java.util.List, param1: java.util.List): number;
			public static list(param0: java.util.Enumeration): java.util.ArrayList;
			public static synchronizedCollection(param0: java.util.Collection): java.util.Collection;
			public static synchronizedList(param0: java.util.List): java.util.List;
			public static synchronizedMap(param0: java.util.Map): java.util.Map;
			public static synchronizedSet(param0: java.util.Set): java.util.Set;
			public static synchronizedSortedMap(param0: java.util.SortedMap): java.util.SortedMap;
			public static synchronizedSortedSet(param0: java.util.SortedSet): java.util.SortedSet;
			public static unmodifiableCollection(param0: java.util.Collection): java.util.Collection;
			public static unmodifiableList(param0: java.util.List): java.util.List;
			public static unmodifiableMap(param0: java.util.Map): java.util.Map;
			public static unmodifiableSet(param0: java.util.Set): java.util.Set;
			public static unmodifiableSortedMap(param0: java.util.SortedMap): java.util.SortedMap;
			public static unmodifiableSortedSet(param0: java.util.SortedSet): java.util.SortedSet;
			public static frequency(param0: java.util.Collection, param1: java.lang.Object): number;
			public static emptyList(): java.util.List;
			public static emptySet(): java.util.Set;
			public static emptyMap(): java.util.Map;
			public static emptyEnumeration(): java.util.Enumeration;
			public static emptyIterator(): java.util.Iterator;
			public static emptyListIterator(): java.util.ListIterator;
			public static checkedCollection(param0: java.util.Collection, param1: java.lang.Class): java.util.Collection;
			public static checkedMap(param0: java.util.Map, param1: java.lang.Class, param2: java.lang.Class): java.util.Map;
			public static checkedList(param0: java.util.List, param1: java.lang.Class): java.util.List;
			public static checkedSet(param0: java.util.Set, param1: java.lang.Class): java.util.Set;
			public static checkedSortedMap(param0: java.util.SortedMap, param1: java.lang.Class, param2: java.lang.Class): java.util.SortedMap;
			public static checkedSortedSet(param0: java.util.SortedSet, param1: java.lang.Class): java.util.SortedSet;
			public static addAll(param0: java.util.Collection, param1: native.Array<java.lang.Object>): boolean;
			public static disjoint(param0: java.util.Collection, param1: java.util.Collection): boolean;
			public static newSetFromMap(param0: java.util.Map): java.util.Set;
			public static asLifoQueue(param0: java.util.Deque): java.util.Queue;
			public static EMPTY_LIST: java.util.List;
			public static EMPTY_MAP: java.util.Map;
			public static EMPTY_SET: java.util.Set;
		}
	}
}

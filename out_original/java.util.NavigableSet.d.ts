/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.SortedSet.d.ts" />

declare module java {
	export module util {
		export class NavigableSet {
			public lower(param0: java.lang.Object): java.lang.Object;
			public floor(param0: java.lang.Object): java.lang.Object;
			public ceiling(param0: java.lang.Object): java.lang.Object;
			public higher(param0: java.lang.Object): java.lang.Object;
			public pollFirst(): java.lang.Object;
			public pollLast(): java.lang.Object;
			public iterator(): java.util.Iterator;
			public descendingSet(): java.util.NavigableSet;
			public descendingIterator(): java.util.Iterator;
			public subSet(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.NavigableSet;
			public headSet(param0: java.lang.Object, param1: boolean): java.util.NavigableSet;
			public tailSet(param0: java.lang.Object, param1: boolean): java.util.NavigableSet;
			public subSet(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedSet;
			public headSet(param0: java.lang.Object): java.util.SortedSet;
			public tailSet(param0: java.lang.Object): java.util.SortedSet;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />

declare module java {
	export module util {
		export class SortedMap {
			public comparator(): java.util.Comparator;
			public firstKey(): java.lang.Object;
			public headMap(param0: java.lang.Object): java.util.SortedMap;
			public lastKey(): java.lang.Object;
			public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedMap;
			public tailMap(param0: java.lang.Object): java.util.SortedMap;
		}
	}
}

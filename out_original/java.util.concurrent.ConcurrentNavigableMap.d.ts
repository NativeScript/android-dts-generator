/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.NavigableSet.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export class ConcurrentNavigableMap {
				public subMap(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public headMap(param0: java.lang.Object, param1: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public tailMap(param0: java.lang.Object, param1: boolean): java.util.concurrent.ConcurrentNavigableMap;
				public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public headMap(param0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public tailMap(param0: java.lang.Object): java.util.concurrent.ConcurrentNavigableMap;
				public descendingMap(): java.util.concurrent.ConcurrentNavigableMap;
				public navigableKeySet(): java.util.NavigableSet;
				public keySet(): java.util.NavigableSet;
				public descendingKeySet(): java.util.NavigableSet;
			}
		}
	}
}

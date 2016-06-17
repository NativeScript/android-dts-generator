/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />

declare module java {
	export module util {
		export class SortedSet {
			public comparator(): java.util.Comparator;
			public first(): java.lang.Object;
			public headSet(param0: java.lang.Object): java.util.SortedSet;
			public last(): java.lang.Object;
			public subSet(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedSet;
			public tailSet(param0: java.lang.Object): java.util.SortedSet;
		}
	}
}

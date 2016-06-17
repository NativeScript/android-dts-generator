/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.support.v4.util.SimpleArrayMap.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class ArrayMap {
					public constructor(param0: number);
					public constructor(param0: android.support.v4.util.SimpleArrayMap);
					public constructor();
					public constructor(param0: number);
					public constructor(param0: android.support.v4.util.SimpleArrayMap);
					public containsAll(param0: java.util.Collection): boolean;
					public putAll(param0: android.support.v4.util.SimpleArrayMap): void;
					public putAll(param0: java.util.Map): void;
					public removeAll(param0: java.util.Collection): boolean;
					public retainAll(param0: java.util.Collection): boolean;
					public entrySet(): java.util.Set;
					public keySet(): java.util.Set;
					public values(): java.util.Collection;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class LruCache {
					public constructor();
					public constructor(param0: number);
					public resize(param0: number): void;
					public get(param0: java.lang.Object): java.lang.Object;
					public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
					public trimToSize(param0: number): void;
					public remove(param0: java.lang.Object): java.lang.Object;
					public entryRemoved(param0: boolean, param1: java.lang.Object, param2: java.lang.Object, param3: java.lang.Object): void;
					public create(param0: java.lang.Object): java.lang.Object;
					public sizeOf(param0: java.lang.Object, param1: java.lang.Object): number;
					public evictAll(): void;
					public size(): number;
					public maxSize(): number;
					public hitCount(): number;
					public missCount(): number;
					public createCount(): number;
					public putCount(): number;
					public evictionCount(): number;
					public snapshot(): java.util.Map;
					public toString(): string;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.ref.ReferenceQueue.d.ts" />

declare module java {
	export module lang {
		export module ref {
			export class SoftReference {
				public constructor();
				public constructor(param0: java.lang.Object);
				public constructor(param0: java.lang.Object, param1: java.lang.ref.ReferenceQueue);
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ref.Reference.d.ts" />

declare module java {
	export module lang {
		export module ref {
			export class ReferenceQueue {
				public constructor();
				public poll(): java.lang.ref.Reference;
				public remove(): java.lang.ref.Reference;
				public remove(param0: number): java.lang.ref.Reference;
			}
		}
	}
}

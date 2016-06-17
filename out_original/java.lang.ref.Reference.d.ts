/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module lang {
		export module ref {
			export class Reference {
				public clear(): void;
				public enqueue(): boolean;
				public get(): java.lang.Object;
				public isEnqueued(): boolean;
			}
		}
	}
}

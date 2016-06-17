/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module lang {
		export class ThreadLocal {
			public constructor();
			public get(): java.lang.Object;
			public initialValue(): java.lang.Object;
			public set(param0: java.lang.Object): void;
			public remove(): void;
		}
	}
}

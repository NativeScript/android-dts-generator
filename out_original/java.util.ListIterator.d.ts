/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module java {
	export module util {
		export class ListIterator {
			public add(param0: java.lang.Object): void;
			public hasNext(): boolean;
			public hasPrevious(): boolean;
			public next(): java.lang.Object;
			public nextIndex(): number;
			public previous(): java.lang.Object;
			public previousIndex(): number;
			public remove(): void;
			public set(param0: java.lang.Object): void;
		}
	}
}

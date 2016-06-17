/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class CircularArray {
					public constructor();
					public constructor(param0: number);
					public addFirst(param0: java.lang.Object): void;
					public addLast(param0: java.lang.Object): void;
					public popFirst(): java.lang.Object;
					public popLast(): java.lang.Object;
					public clear(): void;
					public removeFromStart(param0: number): void;
					public removeFromEnd(param0: number): void;
					public getFirst(): java.lang.Object;
					public getLast(): java.lang.Object;
					public get(param0: number): java.lang.Object;
					public size(): number;
					public isEmpty(): boolean;
				}
			}
		}
	}
}

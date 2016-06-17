/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class CircularIntArray {
					public constructor();
					public constructor(param0: number);
					public addFirst(param0: number): void;
					public addLast(param0: number): void;
					public popFirst(): number;
					public popLast(): number;
					public clear(): void;
					public removeFromStart(param0: number): void;
					public removeFromEnd(param0: number): void;
					public getFirst(): number;
					public getLast(): number;
					public get(param0: number): number;
					public size(): number;
					public isEmpty(): boolean;
				}
			}
		}
	}
}

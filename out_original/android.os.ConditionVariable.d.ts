/// <reference path="./_helpers.d.ts" />

declare module android {
	export module os {
		export class ConditionVariable {
			public constructor();
			public constructor(param0: boolean);
			public open(): void;
			public close(): void;
			public block(): void;
			public block(param0: number): boolean;
		}
	}
}

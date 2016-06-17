/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingChild {
					public setNestedScrollingEnabled(param0: boolean): void;
					public isNestedScrollingEnabled(): boolean;
					public startNestedScroll(param0: number): boolean;
					public stopNestedScroll(): void;
					public hasNestedScrollingParent(): boolean;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
				}
			}
		}
	}
}

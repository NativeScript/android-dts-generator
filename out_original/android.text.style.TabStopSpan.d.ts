/// <reference path="./_helpers.d.ts" />

declare module android {
	export module text {
		export module style {
			export class TabStopSpan {
				public getTabStop(): number;
			}
			export module TabStopSpan {
				export class Standard {
					public constructor();
					public constructor(param0: number);
					public getTabStop(): number;
				}
			}
		}
	}
}

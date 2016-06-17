/// <reference path="./_helpers.d.ts" />

declare module android {
	export module test {
		export module mock {
			export class MockDialogInterface {
				public constructor();
				public cancel(): void;
				public dismiss(): void;
			}
		}
	}
}

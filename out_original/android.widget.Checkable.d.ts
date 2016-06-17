/// <reference path="./_helpers.d.ts" />

declare module android {
	export module widget {
		export class Checkable {
			public setChecked(param0: boolean): void;
			public isChecked(): boolean;
			public toggle(): void;
		}
	}
}

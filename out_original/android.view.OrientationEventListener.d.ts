/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module view {
		export class OrientationEventListener {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public enable(): void;
			public disable(): void;
			public canDetectOrientation(): boolean;
			public onOrientationChanged(param0: number): void;
			public static ORIENTATION_UNKNOWN: number;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />

declare module android {
	export module view {
		export class OrientationListener {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: number);
			public enable(): void;
			public disable(): void;
			public onAccuracyChanged(param0: number, param1: number): void;
			public onSensorChanged(param0: number, param1: native.Array<number>): void;
			public onOrientationChanged(param0: number): void;
			public static ORIENTATION_UNKNOWN: number;
		}
	}
}

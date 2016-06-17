/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module transition {
		export class ArcMotion {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setMinimumHorizontalAngle(param0: number): void;
			public getMinimumHorizontalAngle(): number;
			public setMinimumVerticalAngle(param0: number): void;
			public getMinimumVerticalAngle(): number;
			public setMaximumAngle(param0: number): void;
			public getMaximumAngle(): number;
			public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
		}
	}
}

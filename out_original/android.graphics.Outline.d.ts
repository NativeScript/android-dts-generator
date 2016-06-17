/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module graphics {
		export class Outline {
			public constructor();
			public constructor(param0: android.graphics.Outline);
			public setEmpty(): void;
			public isEmpty(): boolean;
			public canClip(): boolean;
			public setAlpha(param0: number): void;
			public getAlpha(): number;
			public set(param0: android.graphics.Outline): void;
			public setRect(param0: number, param1: number, param2: number, param3: number): void;
			public setRect(param0: android.graphics.Rect): void;
			public setRoundRect(param0: number, param1: number, param2: number, param3: number, param4: number): void;
			public setRoundRect(param0: android.graphics.Rect, param1: number): void;
			public setOval(param0: number, param1: number, param2: number, param3: number): void;
			public setOval(param0: android.graphics.Rect): void;
			public setConvexPath(param0: android.graphics.Path): void;
			public offset(param0: number, param1: number): void;
		}
	}
}

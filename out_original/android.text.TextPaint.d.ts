/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />

declare module android {
	export module text {
		export class TextPaint {
			public constructor(param0: number);
			public constructor(param0: android.graphics.Paint);
			public constructor();
			public constructor(param0: number);
			public constructor(param0: android.graphics.Paint);
			public set(param0: android.graphics.Paint): void;
			public set(param0: android.text.TextPaint): void;
			public baselineShift: number;
			public bgColor: number;
			public density: number;
			public drawableState: native.Array<number>;
			public linkColor: number;
		}
	}
}

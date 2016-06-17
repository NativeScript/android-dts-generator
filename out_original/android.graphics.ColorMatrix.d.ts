/// <reference path="./_helpers.d.ts" />

declare module android {
	export module graphics {
		export class ColorMatrix {
			public constructor();
			public constructor(param0: native.Array<number>);
			public constructor(param0: android.graphics.ColorMatrix);
			public getArray(): native.Array<number>;
			public reset(): void;
			public set(param0: android.graphics.ColorMatrix): void;
			public set(param0: native.Array<number>): void;
			public setScale(param0: number, param1: number, param2: number, param3: number): void;
			public setRotate(param0: number, param1: number): void;
			public setConcat(param0: android.graphics.ColorMatrix, param1: android.graphics.ColorMatrix): void;
			public preConcat(param0: android.graphics.ColorMatrix): void;
			public postConcat(param0: android.graphics.ColorMatrix): void;
			public setSaturation(param0: number): void;
			public setRGB2YUV(): void;
			public setYUV2RGB(): void;
		}
	}
}

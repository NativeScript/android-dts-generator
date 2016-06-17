/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class TransitionDrawable {
				public constructor();
				public constructor(param0: native.Array<android.graphics.drawable.Drawable>);
				public startTransition(param0: number): void;
				public resetTransition(): void;
				public reverseTransition(param0: number): void;
				public draw(param0: android.graphics.Canvas): void;
				public setCrossFadeEnabled(param0: boolean): void;
				public isCrossFadeEnabled(): boolean;
			}
		}
	}
}

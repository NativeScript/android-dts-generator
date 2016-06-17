/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />

declare module android {
	export module text {
		export module style {
			export class CharacterStyle {
				public constructor();
				public updateDrawState(param0: android.text.TextPaint): void;
				public static wrap(param0: android.text.style.CharacterStyle): android.text.style.CharacterStyle;
				public getUnderlying(): android.text.style.CharacterStyle;
			}
		}
	}
}

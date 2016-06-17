/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />

declare module android {
	export module media {
		export class TimedText {
			public getText(): string;
			public getBounds(): android.graphics.Rect;
		}
	}
}

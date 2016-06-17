/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module widget {
		export class ImageSwitcher {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public setImageResource(param0: number): void;
			public setImageURI(param0: android.net.Uri): void;
			public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
			public getAccessibilityClassName(): string;
		}
	}
}

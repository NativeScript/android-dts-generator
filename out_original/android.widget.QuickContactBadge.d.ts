/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class QuickContactBadge {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public setMode(param0: number): void;
			public setPrioritizedMimeType(param0: string): void;
			public onDraw(param0: android.graphics.Canvas): void;
			public setImageToDefault(): void;
			public assignContactUri(param0: android.net.Uri): void;
			public assignContactFromEmail(param0: string, param1: boolean): void;
			public assignContactFromEmail(param0: string, param1: boolean, param2: android.os.Bundle): void;
			public assignContactFromPhone(param0: string, param1: boolean): void;
			public assignContactFromPhone(param0: string, param1: boolean, param2: android.os.Bundle): void;
			public setOverlay(param0: android.graphics.drawable.Drawable): void;
			public onClick(param0: android.view.View): void;
			public getAccessibilityClassName(): string;
			public setExcludeMimes(param0: native.Array<string>): void;
			public mExcludeMimes: native.Array<string>;
		}
	}
}

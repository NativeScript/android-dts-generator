/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatCheckedTextView {
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public constructor();
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setCheckMarkDrawable(param0: android.graphics.drawable.Drawable): void;
					public setCheckMarkDrawable(param0: number): void;
					public setTextAppearance(param0: number): void;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public drawableStateChanged(): void;
				}
			}
		}
	}
}

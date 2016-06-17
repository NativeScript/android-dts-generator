/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class InsetDrawable {
				public constructor(param0: android.graphics.drawable.Drawable);
				public constructor();
				public constructor(param0: android.graphics.drawable.Drawable, param1: number);
				public constructor(param0: android.graphics.drawable.Drawable, param1: number, param2: number, param3: number, param4: number);
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public getPadding(param0: android.graphics.Rect): boolean;
				public getOpacity(): number;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getOutline(param0: android.graphics.Outline): void;
			}
		}
	}
}

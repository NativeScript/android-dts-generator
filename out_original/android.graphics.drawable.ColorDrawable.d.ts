/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class ColorDrawable {
				public constructor();
				public constructor(param0: number);
				public getChangingConfigurations(): number;
				public mutate(): android.graphics.drawable.Drawable;
				public draw(param0: android.graphics.Canvas): void;
				public getColor(): number;
				public setColor(param0: number): void;
				public getAlpha(): number;
				public setAlpha(param0: number): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public onStateChange(param0: native.Array<number>): boolean;
				public isStateful(): boolean;
				public getOpacity(): number;
				public getOutline(param0: android.graphics.Outline): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public canApplyTheme(): boolean;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
			}
		}
	}
}

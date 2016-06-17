/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class VectorDrawable {
				public constructor();
				public mutate(): android.graphics.drawable.Drawable;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public draw(param0: android.graphics.Canvas): void;
				public getAlpha(): number;
				public setAlpha(param0: number): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public getColorFilter(): android.graphics.ColorFilter;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public isStateful(): boolean;
				public onStateChange(param0: native.Array<number>): boolean;
				public getOpacity(): number;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public canApplyTheme(): boolean;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public getChangingConfigurations(): number;
				public setAutoMirrored(param0: boolean): void;
				public isAutoMirrored(): boolean;
			}
		}
	}
}

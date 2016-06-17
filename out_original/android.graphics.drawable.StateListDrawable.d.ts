/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class StateListDrawable {
				public constructor();
				public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable): void;
				public isStateful(): boolean;
				public onStateChange(param0: native.Array<number>): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public mutate(): android.graphics.drawable.Drawable;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;
			}
		}
	}
}

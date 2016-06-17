/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class AnimatedStateListDrawable {
				public constructor();
				public setVisible(param0: boolean, param1: boolean): boolean;
				public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable): void;
				public addState(param0: native.Array<number>, param1: android.graphics.drawable.Drawable, param2: number): void;
				public addTransition(param0: number, param1: number, param2: android.graphics.drawable.Drawable, param3: boolean): void;
				public isStateful(): boolean;
				public onStateChange(param0: native.Array<number>): boolean;
				public jumpToCurrentState(): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public mutate(): android.graphics.drawable.Drawable;
				public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;
			}
		}
	}
}

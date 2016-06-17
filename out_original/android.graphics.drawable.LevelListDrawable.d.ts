/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class LevelListDrawable {
				public constructor();
				public addLevel(param0: number, param1: number, param2: android.graphics.drawable.Drawable): void;
				public onLevelChange(param0: number): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public mutate(): android.graphics.drawable.Drawable;
				public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;
			}
		}
	}
}

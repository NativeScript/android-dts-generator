/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class RotateDrawable {
				public constructor(param0: android.graphics.drawable.Drawable);
				public constructor();
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public draw(param0: android.graphics.Canvas): void;
				public setFromDegrees(param0: number): void;
				public getFromDegrees(): number;
				public setToDegrees(param0: number): void;
				public getToDegrees(): number;
				public setPivotX(param0: number): void;
				public getPivotX(): number;
				public setPivotXRelative(param0: boolean): void;
				public isPivotXRelative(): boolean;
				public setPivotY(param0: number): void;
				public getPivotY(): number;
				public setPivotYRelative(param0: boolean): void;
				public isPivotYRelative(): boolean;
				public onLevelChange(param0: number): boolean;
			}
		}
	}
}

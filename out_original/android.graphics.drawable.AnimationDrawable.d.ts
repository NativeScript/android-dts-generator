/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class AnimationDrawable {
				public constructor();
				public setVisible(param0: boolean, param1: boolean): boolean;
				public start(): void;
				public stop(): void;
				public isRunning(): boolean;
				public run(): void;
				public unscheduleSelf(param0: java.lang.Runnable): void;
				public getNumberOfFrames(): number;
				public getFrame(param0: number): android.graphics.drawable.Drawable;
				public getDuration(param0: number): number;
				public isOneShot(): boolean;
				public setOneShot(param0: boolean): void;
				public addFrame(param0: android.graphics.drawable.Drawable, param1: number): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public mutate(): android.graphics.drawable.Drawable;
				public setConstantState(param0: android.graphics.drawable.DrawableContainer.DrawableContainerState): void;
			}
		}
	}
}

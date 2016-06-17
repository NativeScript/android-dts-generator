/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Shader.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class ShapeDrawable {
				public constructor();
				public constructor(param0: android.graphics.drawable.shapes.Shape);
				public getShape(): android.graphics.drawable.shapes.Shape;
				public setShape(param0: android.graphics.drawable.shapes.Shape): void;
				public setShaderFactory(param0: android.graphics.drawable.ShapeDrawable.ShaderFactory): void;
				public getShaderFactory(): android.graphics.drawable.ShapeDrawable.ShaderFactory;
				public getPaint(): android.graphics.Paint;
				public setPadding(param0: number, param1: number, param2: number, param3: number): void;
				public setPadding(param0: android.graphics.Rect): void;
				public setIntrinsicWidth(param0: number): void;
				public setIntrinsicHeight(param0: number): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getPadding(param0: android.graphics.Rect): boolean;
				public onDraw(param0: android.graphics.drawable.shapes.Shape, param1: android.graphics.Canvas, param2: android.graphics.Paint): void;
				public draw(param0: android.graphics.Canvas): void;
				public getChangingConfigurations(): number;
				public setAlpha(param0: number): void;
				public getAlpha(): number;
				public setTintList(param0: android.content.res.ColorStateList): void;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public getOpacity(): number;
				public setDither(param0: boolean): void;
				public onBoundsChange(param0: android.graphics.Rect): void;
				public onStateChange(param0: native.Array<number>): boolean;
				public isStateful(): boolean;
				public inflateTag(param0: string, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet): boolean;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet): void;
				public inflate(param0: android.content.res.Resources, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): void;
				public applyTheme(param0: android.content.res.Resources.Theme): void;
				public getOutline(param0: android.graphics.Outline): void;
				public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
				public mutate(): android.graphics.drawable.Drawable;
			}
			export module ShapeDrawable {
				export class ShaderFactory {
					public constructor();
					public resize(param0: number, param1: number): android.graphics.Shader;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.drawable.shapes.Shape.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class PaintDrawable {
				public constructor(param0: android.graphics.drawable.shapes.Shape);
				public constructor();
				public constructor(param0: number);
				public setCornerRadius(param0: number): void;
				public setCornerRadii(param0: native.Array<number>): void;
				public inflateTag(param0: string, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet): boolean;
			}
		}
	}
}

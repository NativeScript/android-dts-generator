/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.Spanned.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.xml.sax.XMLReader.d.ts" />

declare module android {
	export module text {
		export class Html {
			public static fromHtml(param0: string): android.text.Spanned;
			public static fromHtml(param0: string, param1: android.text.Html.ImageGetter, param2: android.text.Html.TagHandler): android.text.Spanned;
			public static toHtml(param0: android.text.Spanned): string;
			public static escapeHtml(param0: string): string;
		}
		export module Html {
			export class ImageGetter {
				public getDrawable(param0: string): android.graphics.drawable.Drawable;
			}
			export class TagHandler {
				public handleTag(param0: boolean, param1: string, param2: android.text.Editable, param3: org.xml.sax.XMLReader): void;
			}
		}
	}
}

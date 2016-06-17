/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module style {
			export class ImageSpan {
				public constructor();
				public constructor(param0: number);
				public constructor(param0: android.graphics.Bitmap);
				public constructor(param0: android.graphics.Bitmap, param1: number);
				public constructor(param0: android.content.Context, param1: android.graphics.Bitmap);
				public constructor(param0: android.content.Context, param1: android.graphics.Bitmap, param2: number);
				public constructor(param0: android.graphics.drawable.Drawable);
				public constructor(param0: android.graphics.drawable.Drawable, param1: number);
				public constructor(param0: android.graphics.drawable.Drawable, param1: string);
				public constructor(param0: android.graphics.drawable.Drawable, param1: string, param2: number);
				public constructor(param0: android.content.Context, param1: android.net.Uri);
				public constructor(param0: android.content.Context, param1: android.net.Uri, param2: number);
				public constructor(param0: android.content.Context, param1: number);
				public constructor(param0: android.content.Context, param1: number, param2: number);
				public getDrawable(): android.graphics.drawable.Drawable;
				public getSource(): string;
			}
		}
	}
}

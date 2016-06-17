/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.ColorFilter.d.ts" />
/// <reference path="./android.graphics.Picture.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class PictureDrawable {
				public constructor();
				public constructor(param0: android.graphics.Picture);
				public getPicture(): android.graphics.Picture;
				public setPicture(param0: android.graphics.Picture): void;
				public draw(param0: android.graphics.Canvas): void;
				public getIntrinsicWidth(): number;
				public getIntrinsicHeight(): number;
				public getOpacity(): number;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public setAlpha(param0: number): void;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Outline.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class RoundedBitmapDrawable21 {
						public constructor();
						public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap);
						public getOutline(param0: android.graphics.Outline): void;
						public setMipMap(param0: boolean): void;
						public hasMipMap(): boolean;
					}
				}
			}
		}
	}
}

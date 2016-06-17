/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.support.v4.graphics.drawable.RoundedBitmapDrawable.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class RoundedBitmapDrawableFactory {
						public static create(param0: android.content.res.Resources, param1: android.graphics.Bitmap): android.support.v4.graphics.drawable.RoundedBitmapDrawable;
						public static create(param0: android.content.res.Resources, param1: string): android.support.v4.graphics.drawable.RoundedBitmapDrawable;
						public static create(param0: android.content.res.Resources, param1: java.io.InputStream): android.support.v4.graphics.drawable.RoundedBitmapDrawable;
					}
					export module RoundedBitmapDrawableFactory {
						export class DefaultRoundedBitmapDrawable {
							public setMipMap(param0: boolean): void;
							public hasMipMap(): boolean;
						}
					}
				}
			}
		}
	}
}

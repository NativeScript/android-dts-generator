/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export module drawable {
			export class Icon {
				public loadDrawableAsync(param0: android.content.Context, param1: android.os.Message): void;
				public loadDrawableAsync(param0: android.content.Context, param1: android.graphics.drawable.Icon.OnDrawableLoadedListener, param2: android.os.Handler): void;
				public loadDrawable(param0: android.content.Context): android.graphics.drawable.Drawable;
				public static createWithResource(param0: android.content.Context, param1: number): android.graphics.drawable.Icon;
				public static createWithResource(param0: string, param1: number): android.graphics.drawable.Icon;
				public static createWithBitmap(param0: android.graphics.Bitmap): android.graphics.drawable.Icon;
				public static createWithData(param0: native.Array<number>, param1: number, param2: number): android.graphics.drawable.Icon;
				public static createWithContentUri(param0: string): android.graphics.drawable.Icon;
				public static createWithContentUri(param0: android.net.Uri): android.graphics.drawable.Icon;
				public setTint(param0: number): android.graphics.drawable.Icon;
				public setTintList(param0: android.content.res.ColorStateList): android.graphics.drawable.Icon;
				public setTintMode(param0: android.graphics.PorterDuff.Mode): android.graphics.drawable.Icon;
				public static createWithFilePath(param0: string): android.graphics.drawable.Icon;
				public toString(): string;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public static CREATOR: android.os.Parcelable.Creator;
			}
			export module Icon {
				export class OnDrawableLoadedListener {
					public onDrawableLoaded(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

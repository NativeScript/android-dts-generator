/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.app.WallpaperInfo.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module app {
		export class WallpaperManager {
			public static getInstance(param0: android.content.Context): android.app.WallpaperManager;
			public getDrawable(): android.graphics.drawable.Drawable;
			public getBuiltInDrawable(): android.graphics.drawable.Drawable;
			public getBuiltInDrawable(param0: number, param1: number, param2: boolean, param3: number, param4: number): android.graphics.drawable.Drawable;
			public peekDrawable(): android.graphics.drawable.Drawable;
			public getFastDrawable(): android.graphics.drawable.Drawable;
			public peekFastDrawable(): android.graphics.drawable.Drawable;
			public forgetLoadedWallpaper(): void;
			public getWallpaperInfo(): android.app.WallpaperInfo;
			public getCropAndSetWallpaperIntent(param0: android.net.Uri): android.content.Intent;
			public setResource(param0: number): void;
			public setBitmap(param0: android.graphics.Bitmap): void;
			public setStream(param0: java.io.InputStream): void;
			public hasResourceWallpaper(param0: number): boolean;
			public getDesiredMinimumWidth(): number;
			public getDesiredMinimumHeight(): number;
			public suggestDesiredDimensions(param0: number, param1: number): void;
			public setWallpaperOffsets(param0: android.os.IBinder, param1: number, param2: number): void;
			public setWallpaperOffsetSteps(param0: number, param1: number): void;
			public sendWallpaperCommand(param0: android.os.IBinder, param1: string, param2: number, param3: number, param4: number, param5: android.os.Bundle): void;
			public isWallpaperSupported(): boolean;
			public clearWallpaperOffsets(param0: android.os.IBinder): void;
			public clear(): void;
			public static ACTION_CHANGE_LIVE_WALLPAPER: string;
			public static ACTION_CROP_AND_SET_WALLPAPER: string;
			public static ACTION_LIVE_WALLPAPER_CHOOSER: string;
			public static COMMAND_DROP: string;
			public static COMMAND_SECONDARY_TAP: string;
			public static COMMAND_TAP: string;
			public static EXTRA_LIVE_WALLPAPER_COMPONENT: string;
			public static WALLPAPER_PREVIEW_META_DATA: string;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />
/// <reference path="./android.view.WindowInsets.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module wallpaper {
			export class WallpaperService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onDestroy(): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onCreateEngine(): android.service.wallpaper.WallpaperService.Engine;
				public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
			}
			export module WallpaperService {
				export class Engine {
					public constructor();
					public constructor(param0: android.service.wallpaper.WallpaperService);
					public getSurfaceHolder(): android.view.SurfaceHolder;
					public getDesiredMinimumWidth(): number;
					public getDesiredMinimumHeight(): number;
					public isVisible(): boolean;
					public isPreview(): boolean;
					public setTouchEventsEnabled(param0: boolean): void;
					public setOffsetNotificationsEnabled(param0: boolean): void;
					public onCreate(param0: android.view.SurfaceHolder): void;
					public onDestroy(): void;
					public onVisibilityChanged(param0: boolean): void;
					public onApplyWindowInsets(param0: android.view.WindowInsets): void;
					public onTouchEvent(param0: android.view.MotionEvent): void;
					public onOffsetsChanged(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number): void;
					public onCommand(param0: string, param1: number, param2: number, param3: number, param4: android.os.Bundle, param5: boolean): android.os.Bundle;
					public onDesiredSizeChanged(param0: number, param1: number): void;
					public onSurfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public onSurfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
					public onSurfaceCreated(param0: android.view.SurfaceHolder): void;
					public onSurfaceDestroyed(param0: android.view.SurfaceHolder): void;
					public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./android.view.InputQueue.d.ts" />
/// <reference path="./android.view.SurfaceHolder.d.ts" />

declare module android {
	export module app {
		export class NativeActivity {
			public constructor(param0: android.content.Context, param1: number);
			public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
			public constructor(param0: android.content.Context);
			public constructor();
			public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onCreate(param0: android.os.Bundle): void;
			public onDestroy(): void;
			public onPause(): void;
			public onResume(): void;
			public onSaveInstanceState(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
			public onSaveInstanceState(param0: android.os.Bundle): void;
			public onStart(): void;
			public onStop(): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onLowMemory(): void;
			public onWindowFocusChanged(param0: boolean): void;
			public surfaceCreated(param0: android.view.SurfaceHolder): void;
			public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
			public surfaceRedrawNeeded(param0: android.view.SurfaceHolder): void;
			public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
			public onInputQueueCreated(param0: android.view.InputQueue): void;
			public onInputQueueDestroyed(param0: android.view.InputQueue): void;
			public onGlobalLayout(): void;
			public static META_DATA_FUNC_NAME: string;
			public static META_DATA_LIB_NAME: string;
		}
	}
}

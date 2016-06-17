/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />

declare module android {
	export module service {
		export module media {
			export class CameraPrewarmService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onUnbind(param0: android.content.Intent): boolean;
				public onPrewarm(): void;
				public onCooldown(param0: boolean): void;
			}
		}
	}
}

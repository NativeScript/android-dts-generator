/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.voice.AlwaysOnHotwordDetector.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module service {
		export module voice {
			export class VoiceInteractionService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onLaunchVoiceAssistFromKeyguard(): void;
				public static isActiveService(param0: android.content.Context, param1: android.content.ComponentName): boolean;
				public setDisabledShowContext(param0: number): void;
				public getDisabledShowContext(): number;
				public showSession(param0: android.os.Bundle, param1: number): void;
				public onCreate(): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onReady(): void;
				public onShutdown(): void;
				public createAlwaysOnHotwordDetector(param0: string, param1: java.util.Locale, param2: android.service.voice.AlwaysOnHotwordDetector.Callback): android.service.voice.AlwaysOnHotwordDetector;
				public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
				public static SERVICE_INTERFACE: string;
				public static SERVICE_META_DATA: string;
			}
		}
	}
}

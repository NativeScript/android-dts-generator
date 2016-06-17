/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.service.voice.VoiceInteractionSession.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />

declare module android {
	export module service {
		export module voice {
			export class VoiceInteractionSessionService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onNewSession(param0: android.os.Bundle): android.service.voice.VoiceInteractionSession;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public onConfigurationChanged(param0: android.content.res.Configuration): void;
				public onLowMemory(): void;
				public onTrimMemory(param0: number): void;
				public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
			}
		}
	}
}

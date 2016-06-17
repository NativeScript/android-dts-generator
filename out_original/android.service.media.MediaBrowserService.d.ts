/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module service {
		export module media {
			export class MediaBrowserService {
				public constructor(param0: android.content.Context);
				public constructor();
				public onCreate(): void;
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
				public onGetRoot(param0: string, param1: number, param2: android.os.Bundle): android.service.media.MediaBrowserService.BrowserRoot;
				public onLoadChildren(param0: string, param1: android.service.media.MediaBrowserService.Result): void;
				public onLoadItem(param0: string, param1: android.service.media.MediaBrowserService.Result): void;
				public setSessionToken(param0: android.media.session.MediaSession.Token): void;
				public getSessionToken(): android.media.session.MediaSession.Token;
				public notifyChildrenChanged(param0: string): void;
				public static SERVICE_INTERFACE: string;
			}
			export module MediaBrowserService {
				export class BrowserRoot {
					public constructor();
					public constructor(param0: string, param1: android.os.Bundle);
					public getRootId(): string;
					public getExtras(): android.os.Bundle;
				}
				export class Result {
					public sendResult(param0: java.lang.Object): void;
					public detach(): void;
				}
			}
		}
	}
}

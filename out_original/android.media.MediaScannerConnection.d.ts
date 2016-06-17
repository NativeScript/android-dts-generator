/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class MediaScannerConnection {
			public constructor();
			public constructor(param0: android.content.Context, param1: android.media.MediaScannerConnection.MediaScannerConnectionClient);
			public connect(): void;
			public disconnect(): void;
			public isConnected(): boolean;
			public scanFile(param0: string, param1: string): void;
			public static scanFile(param0: android.content.Context, param1: native.Array<string>, param2: native.Array<string>, param3: android.media.MediaScannerConnection.OnScanCompletedListener): void;
			public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
			public onServiceDisconnected(param0: android.content.ComponentName): void;
		}
		export module MediaScannerConnection {
			export class MediaScannerConnectionClient {
				public onMediaScannerConnected(): void;
				public onScanCompleted(param0: string, param1: android.net.Uri): void;
			}
			export class OnScanCompletedListener {
				public onScanCompleted(param0: string, param1: android.net.Uri): void;
			}
		}
	}
}

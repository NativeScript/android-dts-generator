/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class FileProvider {
					public constructor();
					public onCreate(): boolean;
					public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;
					public static getUriForFile(param0: android.content.Context, param1: string, param2: java.io.File): android.net.Uri;
					public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
					public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
					public getType(param0: android.net.Uri): string;
					public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
					public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
					public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
					public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
					public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
				}
				export module FileProvider {
					export class PathStrategy {
						public getUriForFile(param0: java.io.File): android.net.Uri;
						public getFileForUri(param0: android.net.Uri): java.io.File;
					}
					export class SimplePathStrategy {
						public constructor();
						public constructor(param0: string);
						public addRoot(param0: string, param1: java.io.File): void;
						public getUriForFile(param0: java.io.File): android.net.Uri;
						public getFileForUri(param0: android.net.Uri): java.io.File;
					}
				}
			}
		}
	}
}

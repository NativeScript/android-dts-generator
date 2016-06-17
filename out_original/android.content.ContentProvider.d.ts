/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module content {
		export class ContentProvider {
			public constructor();
			public getContext(): android.content.Context;
			public getCallingPackage(): string;
			public setReadPermission(param0: string): void;
			public getReadPermission(): string;
			public setWritePermission(param0: string): void;
			public getWritePermission(): string;
			public setPathPermissions(param0: native.Array<android.content.pm.PathPermission>): void;
			public getPathPermissions(): native.Array<android.content.pm.PathPermission>;
			public onCreate(): boolean;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public onLowMemory(): void;
			public onTrimMemory(param0: number): void;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public getType(param0: android.net.Uri): string;
			public canonicalize(param0: android.net.Uri): android.net.Uri;
			public uncanonicalize(param0: android.net.Uri): android.net.Uri;
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;
			public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
			public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public openAssetFile(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;
			public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openFileHelper(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
			public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;
			public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;
			public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openPipeHelper(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: java.lang.Object, param4: android.content.ContentProvider.PipeDataWriter): android.os.ParcelFileDescriptor;
			public isTemporary(): boolean;
			public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;
			public applyBatch(param0: java.util.ArrayList): native.Array<android.content.ContentProviderResult>;
			public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;
			public shutdown(): void;
			public dump(param0: java.io.FileDescriptor, param1: java.io.PrintWriter, param2: native.Array<string>): void;
		}
		export module ContentProvider {
			export class PipeDataWriter {
				public writeDataToPipe(param0: android.os.ParcelFileDescriptor, param1: android.net.Uri, param2: string, param3: android.os.Bundle, param4: java.lang.Object): void;
			}
		}
	}
}

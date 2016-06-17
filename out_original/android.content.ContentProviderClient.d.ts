/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module content {
		export class ContentProviderClient {
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public getType(param0: android.net.Uri): string;
			public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;
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
			public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;
			public openTypedAssetFileDescriptor(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public applyBatch(param0: java.util.ArrayList): native.Array<android.content.ContentProviderResult>;
			public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;
			public release(): boolean;
			public finalize(): void;
			public getLocalContentProvider(): android.content.ContentProvider;
		}
	}
}

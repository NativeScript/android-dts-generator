/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProviderResult.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.PathPermission.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module test {
		export module mock {
			export class MockContentProvider {
				public constructor();
				public constructor(param0: android.content.Context);
				public constructor(param0: android.content.Context, param1: string, param2: string, param3: native.Array<android.content.pm.PathPermission>);
				public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
				public getType(param0: android.net.Uri): string;
				public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
				public onCreate(): boolean;
				public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
				public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
				public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public bulkInsert(param0: android.net.Uri, param1: native.Array<android.content.ContentValues>): number;
				public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;
				public applyBatch(param0: java.util.ArrayList): native.Array<android.content.ContentProviderResult>;
				public getStreamTypes(param0: android.net.Uri, param1: string): native.Array<string>;
				public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
				public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;
			}
		}
	}
}

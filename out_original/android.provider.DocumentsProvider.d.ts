/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.pm.ProviderInfo.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.CancellationSignal.d.ts" />
/// <reference path="./android.os.ParcelFileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module provider {
		export class DocumentsProvider {
			public constructor();
			public attachInfo(param0: android.content.Context, param1: android.content.pm.ProviderInfo): void;
			public isChildDocument(param0: string, param1: string): boolean;
			public createDocument(param0: string, param1: string, param2: string): string;
			public renameDocument(param0: string, param1: string): string;
			public deleteDocument(param0: string): void;
			public queryRoots(param0: native.Array<string>): android.database.Cursor;
			public queryRecentDocuments(param0: string, param1: native.Array<string>): android.database.Cursor;
			public queryDocument(param0: string, param1: native.Array<string>): android.database.Cursor;
			public queryChildDocuments(param0: string, param1: native.Array<string>, param2: string): android.database.Cursor;
			public querySearchDocuments(param0: string, param1: string, param2: native.Array<string>): android.database.Cursor;
			public getDocumentType(param0: string): string;
			public openDocument(param0: string, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public openDocumentThumbnail(param0: string, param1: android.graphics.Point, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: android.os.CancellationSignal): android.database.Cursor;
			public query(param0: android.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): android.database.Cursor;
			public getType(param0: android.net.Uri): string;
			public canonicalize(param0: android.net.Uri): android.net.Uri;
			public insert(param0: android.net.Uri, param1: android.content.ContentValues): android.net.Uri;
			public delete(param0: android.net.Uri, param1: string, param2: native.Array<string>): number;
			public update(param0: android.net.Uri, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public call(param0: string, param1: string, param2: android.os.Bundle): android.os.Bundle;
			public revokeDocumentPermission(param0: string): void;
			public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public openFile(param0: android.net.Uri, param1: string): android.os.ParcelFileDescriptor;
			public openFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.os.ParcelFileDescriptor;
			public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openAssetFile(param0: android.net.Uri, param1: string): android.content.res.AssetFileDescriptor;
			public openAssetFile(param0: android.net.Uri, param1: string, param2: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
			public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle): android.content.res.AssetFileDescriptor;
			public openTypedAssetFile(param0: android.net.Uri, param1: string, param2: android.os.Bundle, param3: android.os.CancellationSignal): android.content.res.AssetFileDescriptor;
		}
	}
}

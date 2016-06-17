/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export class CursorWrapper {
			public constructor();
			public constructor(param0: android.database.Cursor);
			public getWrappedCursor(): android.database.Cursor;
			public close(): void;
			public isClosed(): boolean;
			public getCount(): number;
			public deactivate(): void;
			public moveToFirst(): boolean;
			public getColumnCount(): number;
			public getColumnIndex(param0: string): number;
			public getColumnIndexOrThrow(param0: string): number;
			public getColumnName(param0: number): string;
			public getColumnNames(): native.Array<string>;
			public getDouble(param0: number): number;
			public setExtras(param0: android.os.Bundle): void;
			public getExtras(): android.os.Bundle;
			public getFloat(param0: number): number;
			public getInt(param0: number): number;
			public getLong(param0: number): number;
			public getShort(param0: number): number;
			public getString(param0: number): string;
			public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
			public getBlob(param0: number): native.Array<number>;
			public getWantsAllOnMoveCalls(): boolean;
			public isAfterLast(): boolean;
			public isBeforeFirst(): boolean;
			public isFirst(): boolean;
			public isLast(): boolean;
			public getType(param0: number): number;
			public isNull(param0: number): boolean;
			public moveToLast(): boolean;
			public move(param0: number): boolean;
			public moveToPosition(param0: number): boolean;
			public moveToNext(): boolean;
			public getPosition(): number;
			public moveToPrevious(): boolean;
			public registerContentObserver(param0: android.database.ContentObserver): void;
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public requery(): boolean;
			public respond(param0: android.os.Bundle): android.os.Bundle;
			public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
			public getNotificationUri(): android.net.Uri;
			public unregisterContentObserver(param0: android.database.ContentObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
		}
	}
}

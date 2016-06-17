/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.database.ContentObserver.d.ts" />
/// <reference path="./android.database.CursorWindow.d.ts" />
/// <reference path="./android.database.DataSetObserver.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export class AbstractCursor {
			public constructor();
			public getCount(): number;
			public getColumnNames(): native.Array<string>;
			public getString(param0: number): string;
			public getShort(param0: number): number;
			public getInt(param0: number): number;
			public getLong(param0: number): number;
			public getFloat(param0: number): number;
			public getDouble(param0: number): number;
			public isNull(param0: number): boolean;
			public getType(param0: number): number;
			public getBlob(param0: number): native.Array<number>;
			public getWindow(): android.database.CursorWindow;
			public getColumnCount(): number;
			public deactivate(): void;
			public requery(): boolean;
			public isClosed(): boolean;
			public close(): void;
			public onMove(param0: number, param1: number): boolean;
			public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
			public getPosition(): number;
			public moveToPosition(param0: number): boolean;
			public fillWindow(param0: number, param1: android.database.CursorWindow): void;
			public move(param0: number): boolean;
			public moveToFirst(): boolean;
			public moveToLast(): boolean;
			public moveToNext(): boolean;
			public moveToPrevious(): boolean;
			public isFirst(): boolean;
			public isLast(): boolean;
			public isBeforeFirst(): boolean;
			public isAfterLast(): boolean;
			public getColumnIndex(param0: string): number;
			public getColumnIndexOrThrow(param0: string): number;
			public getColumnName(param0: number): string;
			public registerContentObserver(param0: android.database.ContentObserver): void;
			public unregisterContentObserver(param0: android.database.ContentObserver): void;
			public registerDataSetObserver(param0: android.database.DataSetObserver): void;
			public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
			public onChange(param0: boolean): void;
			public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
			public getNotificationUri(): android.net.Uri;
			public getWantsAllOnMoveCalls(): boolean;
			public setExtras(param0: android.os.Bundle): void;
			public getExtras(): android.os.Bundle;
			public respond(param0: android.os.Bundle): android.os.Bundle;
			public isFieldUpdated(param0: number): boolean;
			public getUpdatedField(param0: number): java.lang.Object;
			public checkPosition(): void;
			public finalize(): void;
			public mClosed: boolean;
			public mContentResolver: android.content.ContentResolver;
			public mPos: number;
		}
		export module AbstractCursor {
			export class SelfContentObserver {
				public constructor(param0: android.os.Handler);
				public constructor();
				public constructor(param0: android.database.AbstractCursor);
				public deliverSelfNotifications(): boolean;
				public onChange(param0: boolean, param1: android.net.Uri): void;
				public onChange(param0: boolean): void;
			}
		}
	}
}

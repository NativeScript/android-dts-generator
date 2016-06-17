/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.CharArrayBuffer.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module database {
		export class CursorWindow {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: boolean);
			public finalize(): void;
			public clear(): void;
			public getStartPosition(): number;
			public setStartPosition(param0: number): void;
			public getNumRows(): number;
			public setNumColumns(param0: number): boolean;
			public allocRow(): boolean;
			public freeLastRow(): void;
			public isNull(param0: number, param1: number): boolean;
			public isBlob(param0: number, param1: number): boolean;
			public isLong(param0: number, param1: number): boolean;
			public isFloat(param0: number, param1: number): boolean;
			public isString(param0: number, param1: number): boolean;
			public getType(param0: number, param1: number): number;
			public getBlob(param0: number, param1: number): native.Array<number>;
			public getString(param0: number, param1: number): string;
			public copyStringToBuffer(param0: number, param1: number, param2: android.database.CharArrayBuffer): void;
			public getLong(param0: number, param1: number): number;
			public getDouble(param0: number, param1: number): number;
			public getShort(param0: number, param1: number): number;
			public getInt(param0: number, param1: number): number;
			public getFloat(param0: number, param1: number): number;
			public putBlob(param0: native.Array<number>, param1: number, param2: number): boolean;
			public putString(param0: string, param1: number, param2: number): boolean;
			public putLong(param0: number, param1: number, param2: number): boolean;
			public putDouble(param0: number, param1: number, param2: number): boolean;
			public putNull(param0: number, param1: number): boolean;
			public static newFromParcel(param0: android.os.Parcel): android.database.CursorWindow;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public onAllReferencesReleased(): void;
			public toString(): string;
			public static CREATOR: android.os.Parcelable.Creator;
		}
	}
}

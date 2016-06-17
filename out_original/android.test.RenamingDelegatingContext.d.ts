/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentProvider.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.FileInputStream.d.ts" />
/// <reference path="./java.io.FileOutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module test {
		export class RenamingDelegatingContext {
			public constructor(param0: android.content.Context);
			public constructor();
			public constructor(param0: android.content.Context, param1: string);
			public constructor(param0: android.content.Context, param1: android.content.Context, param2: string);
			public static providerWithRenamedContext(param0: java.lang.Class, param1: android.content.Context, param2: string): android.content.ContentProvider;
			public static providerWithRenamedContext(param0: java.lang.Class, param1: android.content.Context, param2: string, param3: boolean): android.content.ContentProvider;
			public makeExistingFilesAndDbsAccessible(): void;
			public getDatabasePrefix(): string;
			public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
			public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory): android.database.sqlite.SQLiteDatabase;
			public openOrCreateDatabase(param0: string, param1: number, param2: android.database.sqlite.SQLiteDatabase.CursorFactory, param3: android.database.DatabaseErrorHandler): android.database.sqlite.SQLiteDatabase;
			public deleteDatabase(param0: string): boolean;
			public getDatabasePath(param0: string): java.io.File;
			public databaseList(): native.Array<string>;
			public openFileInput(param0: string): java.io.FileInputStream;
			public openFileOutput(param0: string, param1: number): java.io.FileOutputStream;
			public getFileStreamPath(param0: string): java.io.File;
			public deleteFile(param0: string): boolean;
			public fileList(): native.Array<string>;
			public getCacheDir(): java.io.File;
		}
	}
}

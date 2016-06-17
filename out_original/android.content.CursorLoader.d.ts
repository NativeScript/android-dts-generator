/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export class CursorLoader {
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string);
			public loadInBackground(): java.lang.Object;
			public loadInBackground(): android.database.Cursor;
			public cancelLoadInBackground(): void;
			public deliverResult(param0: java.lang.Object): void;
			public deliverResult(param0: android.database.Cursor): void;
			public onStartLoading(): void;
			public onStopLoading(): void;
			public onCanceled(param0: java.lang.Object): void;
			public onCanceled(param0: android.database.Cursor): void;
			public onReset(): void;
			public getUri(): android.net.Uri;
			public setUri(param0: android.net.Uri): void;
			public getProjection(): native.Array<string>;
			public setProjection(param0: native.Array<string>): void;
			public getSelection(): string;
			public setSelection(param0: string): void;
			public getSelectionArgs(): native.Array<string>;
			public setSelectionArgs(param0: native.Array<string>): void;
			public getSortOrder(): string;
			public setSortOrder(param0: string): void;
			public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
		}
	}
}

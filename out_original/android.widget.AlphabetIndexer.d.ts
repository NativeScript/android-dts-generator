/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module widget {
		export class AlphabetIndexer {
			public constructor();
			public constructor(param0: android.database.Cursor, param1: number, param2: string);
			public getSections(): native.Array<java.lang.Object>;
			public setCursor(param0: android.database.Cursor): void;
			public compare(param0: string, param1: string): number;
			public getPositionForSection(param0: number): number;
			public getSectionForPosition(param0: number): number;
			public onChanged(): void;
			public onInvalidated(): void;
			public mAlphabet: string;
			public mColumnIndex: number;
			public mDataCursor: android.database.Cursor;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />

declare module android {
	export module content {
		export class Entity {
			public constructor();
			public constructor(param0: android.content.ContentValues);
			public getEntityValues(): android.content.ContentValues;
			public getSubValues(): java.util.ArrayList;
			public addSubValue(param0: android.net.Uri, param1: android.content.ContentValues): void;
			public toString(): string;
		}
		export module Entity {
			export class NamedContentValues {
				public constructor();
				public constructor(param0: android.net.Uri, param1: android.content.ContentValues);
				public uri: android.net.Uri;
				public values: android.content.ContentValues;
			}
		}
	}
}

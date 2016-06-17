/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PatternMatcher.d.ts" />
/// <reference path="./android.util.Printer.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlSerializer.d.ts" />

declare module android {
	export module content {
		export class IntentFilter {
			public constructor();
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: android.content.IntentFilter);
			public static create(param0: string, param1: string): android.content.IntentFilter;
			public setPriority(param0: number): void;
			public getPriority(): number;
			public addAction(param0: string): void;
			public countActions(): number;
			public getAction(param0: number): string;
			public hasAction(param0: string): boolean;
			public matchAction(param0: string): boolean;
			public actionsIterator(): java.util.Iterator;
			public addDataType(param0: string): void;
			public hasDataType(param0: string): boolean;
			public countDataTypes(): number;
			public getDataType(param0: number): string;
			public typesIterator(): java.util.Iterator;
			public addDataScheme(param0: string): void;
			public countDataSchemes(): number;
			public getDataScheme(param0: number): string;
			public hasDataScheme(param0: string): boolean;
			public schemesIterator(): java.util.Iterator;
			public addDataSchemeSpecificPart(param0: string, param1: number): void;
			public countDataSchemeSpecificParts(): number;
			public getDataSchemeSpecificPart(param0: number): android.os.PatternMatcher;
			public hasDataSchemeSpecificPart(param0: string): boolean;
			public schemeSpecificPartsIterator(): java.util.Iterator;
			public addDataAuthority(param0: string, param1: string): void;
			public countDataAuthorities(): number;
			public getDataAuthority(param0: number): android.content.IntentFilter.AuthorityEntry;
			public hasDataAuthority(param0: android.net.Uri): boolean;
			public authoritiesIterator(): java.util.Iterator;
			public addDataPath(param0: string, param1: number): void;
			public countDataPaths(): number;
			public getDataPath(param0: number): android.os.PatternMatcher;
			public hasDataPath(param0: string): boolean;
			public pathsIterator(): java.util.Iterator;
			public matchDataAuthority(param0: android.net.Uri): number;
			public matchData(param0: string, param1: string, param2: android.net.Uri): number;
			public addCategory(param0: string): void;
			public countCategories(): number;
			public getCategory(param0: number): string;
			public hasCategory(param0: string): boolean;
			public categoriesIterator(): java.util.Iterator;
			public matchCategories(param0: java.util.Set): string;
			public match(param0: android.content.ContentResolver, param1: android.content.Intent, param2: boolean, param3: string): number;
			public match(param0: string, param1: string, param2: string, param3: android.net.Uri, param4: java.util.Set, param5: string): number;
			public writeToXml(param0: org.xmlpull.v1.XmlSerializer): void;
			public readFromXml(param0: org.xmlpull.v1.XmlPullParser): void;
			public dump(param0: android.util.Printer, param1: string): void;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static CREATOR: android.os.Parcelable.Creator;
			public static MATCH_ADJUSTMENT_MASK: number;
			public static MATCH_ADJUSTMENT_NORMAL: number;
			public static MATCH_CATEGORY_EMPTY: number;
			public static MATCH_CATEGORY_HOST: number;
			public static MATCH_CATEGORY_MASK: number;
			public static MATCH_CATEGORY_PATH: number;
			public static MATCH_CATEGORY_PORT: number;
			public static MATCH_CATEGORY_SCHEME: number;
			public static MATCH_CATEGORY_SCHEME_SPECIFIC_PART: number;
			public static MATCH_CATEGORY_TYPE: number;
			public static NO_MATCH_ACTION: number;
			public static NO_MATCH_CATEGORY: number;
			public static NO_MATCH_DATA: number;
			public static NO_MATCH_TYPE: number;
			public static SYSTEM_HIGH_PRIORITY: number;
			public static SYSTEM_LOW_PRIORITY: number;
		}
		export module IntentFilter {
			export class AuthorityEntry {
				public constructor();
				public constructor(param0: string, param1: string);
				public getHost(): string;
				public getPort(): number;
				public match(param0: android.net.Uri): number;
			}
			export class MalformedMimeTypeException {
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
				public constructor(param0: string);
			}
		}
	}
}

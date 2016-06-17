/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module location {
		export class Geocoder {
			public constructor();
			public constructor(param0: android.content.Context, param1: java.util.Locale);
			public constructor(param0: android.content.Context);
			public static isPresent(): boolean;
			public getFromLocation(param0: number, param1: number, param2: number): java.util.List;
			public getFromLocationName(param0: string, param1: number): java.util.List;
			public getFromLocationName(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): java.util.List;
		}
	}
}

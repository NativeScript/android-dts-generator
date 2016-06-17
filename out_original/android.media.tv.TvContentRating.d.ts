/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />

declare module android {
	export module media {
		export module tv {
			export class TvContentRating {
				public static createRating(param0: string, param1: string, param2: string, param3: native.Array<string>): android.media.tv.TvContentRating;
				public static unflattenFromString(param0: string): android.media.tv.TvContentRating;
				public getDomain(): string;
				public getRatingSystem(): string;
				public getMainRating(): string;
				public getSubRatings(): java.util.List;
				public flattenToString(): string;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public static UNRATED: android.media.tv.TvContentRating;
			}
		}
	}
}

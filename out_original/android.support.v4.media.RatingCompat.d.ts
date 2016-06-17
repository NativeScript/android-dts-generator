/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class RatingCompat {
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: android.os.Parcel, param1: number): void;
					public static newUnratedRating(param0: number): android.support.v4.media.RatingCompat;
					public static newHeartRating(param0: boolean): android.support.v4.media.RatingCompat;
					public static newThumbRating(param0: boolean): android.support.v4.media.RatingCompat;
					public static newStarRating(param0: number, param1: number): android.support.v4.media.RatingCompat;
					public static newPercentageRating(param0: number): android.support.v4.media.RatingCompat;
					public isRated(): boolean;
					public getRatingStyle(): number;
					public hasHeart(): boolean;
					public isThumbUp(): boolean;
					public getStarRating(): number;
					public getPercentRating(): number;
					public static fromRating(param0: java.lang.Object): android.support.v4.media.RatingCompat;
					public getRating(): java.lang.Object;
					public static RATING_NONE: number;
					public static RATING_HEART: number;
					public static RATING_THUMB_UP_DOWN: number;
					public static RATING_3_STARS: number;
					public static RATING_4_STARS: number;
					public static RATING_5_STARS: number;
					public static RATING_PERCENTAGE: number;
					public static CREATOR: android.os.Parcelable.Creator;
				}
				export module RatingCompat {
					export class StarStyle {
					}
					export class Style {
					}
				}
			}
		}
	}
}

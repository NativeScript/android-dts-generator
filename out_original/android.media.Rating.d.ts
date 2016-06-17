/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />

declare module android {
	export module media {
		export class Rating {
			public toString(): string;
			public describeContents(): number;
			public writeToParcel(param0: android.os.Parcel, param1: number): void;
			public static newUnratedRating(param0: number): android.media.Rating;
			public static newHeartRating(param0: boolean): android.media.Rating;
			public static newThumbRating(param0: boolean): android.media.Rating;
			public static newStarRating(param0: number, param1: number): android.media.Rating;
			public static newPercentageRating(param0: number): android.media.Rating;
			public isRated(): boolean;
			public getRatingStyle(): number;
			public hasHeart(): boolean;
			public isThumbUp(): boolean;
			public getStarRating(): number;
			public getPercentRating(): number;
			public static CREATOR: android.os.Parcelable.Creator;
			public static RATING_3_STARS: number;
			public static RATING_4_STARS: number;
			public static RATING_5_STARS: number;
			public static RATING_HEART: number;
			public static RATING_NONE: number;
			public static RATING_PERCENTAGE: number;
			public static RATING_THUMB_UP_DOWN: number;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module media {
				export class RatingCompatApi21 {
					public static newUnratedRating(param0: number): java.lang.Object;
					public static newHeartRating(param0: boolean): java.lang.Object;
					public static newThumbRating(param0: boolean): java.lang.Object;
					public static newStarRating(param0: number, param1: number): java.lang.Object;
					public static newPercentageRating(param0: number): java.lang.Object;
					public static isRated(param0: java.lang.Object): boolean;
					public static getRatingStyle(param0: java.lang.Object): number;
					public static hasHeart(param0: java.lang.Object): boolean;
					public static isThumbUp(param0: java.lang.Object): boolean;
					public static getStarRating(param0: java.lang.Object): number;
					public static getPercentRating(param0: java.lang.Object): number;
				}
			}
		}
	}
}

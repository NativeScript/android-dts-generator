/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.Spannable.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.regex.Matcher.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />

declare module android {
	export module text {
		export module util {
			export class Linkify {
				public constructor();
				public static addLinks(param0: android.text.Spannable, param1: number): boolean;
				public static addLinks(param0: android.widget.TextView, param1: number): boolean;
				public static addLinks(param0: android.widget.TextView, param1: java.util.regex.Pattern, param2: string): void;
				public static addLinks(param0: android.widget.TextView, param1: java.util.regex.Pattern, param2: string, param3: android.text.util.Linkify.MatchFilter, param4: android.text.util.Linkify.TransformFilter): void;
				public static addLinks(param0: android.text.Spannable, param1: java.util.regex.Pattern, param2: string): boolean;
				public static addLinks(param0: android.text.Spannable, param1: java.util.regex.Pattern, param2: string, param3: android.text.util.Linkify.MatchFilter, param4: android.text.util.Linkify.TransformFilter): boolean;
				public static ALL: number;
				public static EMAIL_ADDRESSES: number;
				public static MAP_ADDRESSES: number;
				public static PHONE_NUMBERS: number;
				public static WEB_URLS: number;
				public static sPhoneNumberMatchFilter: android.text.util.Linkify.MatchFilter;
				public static sPhoneNumberTransformFilter: android.text.util.Linkify.TransformFilter;
				public static sUrlMatchFilter: android.text.util.Linkify.MatchFilter;
			}
			export module Linkify {
				export class MatchFilter {
					public acceptMatch(param0: string, param1: number, param2: number): boolean;
				}
				export class TransformFilter {
					public transformUrl(param0: java.util.regex.Matcher, param1: string): string;
				}
			}
		}
	}
}

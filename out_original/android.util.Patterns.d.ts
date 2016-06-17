/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.regex.Matcher.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />

declare module android {
	export module util {
		export class Patterns {
			public static concatGroups(param0: java.util.regex.Matcher): string;
			public static digitsAndPlusOnly(param0: java.util.regex.Matcher): string;
			public static DOMAIN_NAME: java.util.regex.Pattern;
			public static EMAIL_ADDRESS: java.util.regex.Pattern;
			public static GOOD_IRI_CHAR: string;
			public static IP_ADDRESS: java.util.regex.Pattern;
			public static PHONE: java.util.regex.Pattern;
			public static TOP_LEVEL_DOMAIN: java.util.regex.Pattern;
			public static TOP_LEVEL_DOMAIN_STR: string;
			public static TOP_LEVEL_DOMAIN_STR_FOR_WEB_URL: string;
			public static WEB_URL: java.util.regex.Pattern;
		}
	}
}

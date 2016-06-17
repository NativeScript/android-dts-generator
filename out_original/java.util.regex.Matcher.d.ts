/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuffer.d.ts" />
/// <reference path="./java.util.regex.MatchResult.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />

declare module java {
	export module util {
		export module regex {
			export class Matcher {
				public appendReplacement(param0: java.lang.StringBuffer, param1: string): java.util.regex.Matcher;
				public reset(): java.util.regex.Matcher;
				public reset(param0: string): java.util.regex.Matcher;
				public usePattern(param0: java.util.regex.Pattern): java.util.regex.Matcher;
				public region(param0: number, param1: number): java.util.regex.Matcher;
				public appendTail(param0: java.lang.StringBuffer): java.lang.StringBuffer;
				public replaceFirst(param0: string): string;
				public replaceAll(param0: string): string;
				public pattern(): java.util.regex.Pattern;
				public find(param0: number): boolean;
				public find(): boolean;
				public lookingAt(): boolean;
				public matches(): boolean;
				public static quoteReplacement(param0: string): string;
				public toMatchResult(): java.util.regex.MatchResult;
				public useAnchoringBounds(param0: boolean): java.util.regex.Matcher;
				public hasAnchoringBounds(): boolean;
				public useTransparentBounds(param0: boolean): java.util.regex.Matcher;
				public hasTransparentBounds(): boolean;
				public regionStart(): number;
				public regionEnd(): number;
				public requireEnd(): boolean;
				public hitEnd(): boolean;
				public finalize(): void;
				public toString(): string;
				public end(): number;
				public end(param0: number): number;
				public group(): string;
				public group(param0: number): string;
				public groupCount(): number;
				public start(): number;
				public start(param0: number): number;
			}
		}
	}
}

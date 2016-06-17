/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module net {
		export class MailTo {
			public static isMailTo(param0: string): boolean;
			public static parse(param0: string): android.net.MailTo;
			public getTo(): string;
			public getCc(): string;
			public getSubject(): string;
			public getBody(): string;
			public getHeaders(): java.util.Map;
			public toString(): string;
			public static MAILTO_SCHEME: string;
		}
	}
}

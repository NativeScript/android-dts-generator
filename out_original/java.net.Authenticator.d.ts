/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.PasswordAuthentication.d.ts" />
/// <reference path="./java.net.URL.d.ts" />

declare module java {
	export module net {
		export class Authenticator {
			public constructor();
			public getPasswordAuthentication(): java.net.PasswordAuthentication;
			public getRequestingPort(): number;
			public getRequestingSite(): java.net.InetAddress;
			public getRequestingPrompt(): string;
			public getRequestingProtocol(): string;
			public getRequestingScheme(): string;
			public static requestPasswordAuthentication(param0: java.net.InetAddress, param1: number, param2: string, param3: string, param4: string): java.net.PasswordAuthentication;
			public static setDefault(param0: java.net.Authenticator): void;
			public static requestPasswordAuthentication(param0: string, param1: java.net.InetAddress, param2: number, param3: string, param4: string, param5: string): java.net.PasswordAuthentication;
			public getRequestingHost(): string;
			public static requestPasswordAuthentication(param0: string, param1: java.net.InetAddress, param2: number, param3: string, param4: string, param5: string, param6: java.net.URL, param7: java.net.Authenticator.RequestorType): java.net.PasswordAuthentication;
			public getRequestingURL(): java.net.URL;
			public getRequestorType(): java.net.Authenticator.RequestorType;
		}
		export module Authenticator {
			export class RequestorType {
				public static values(): native.Array<java.net.Authenticator.RequestorType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.net.Authenticator.RequestorType;
				public static PROXY: java.net.Authenticator.RequestorType;
				public static SERVER: java.net.Authenticator.RequestorType;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module net {
		export class LocalSocketAddress {
			public constructor();
			public constructor(param0: string, param1: android.net.LocalSocketAddress.Namespace);
			public constructor(param0: string);
			public getName(): string;
			public getNamespace(): android.net.LocalSocketAddress.Namespace;
		}
		export module LocalSocketAddress {
			export class Namespace {
				public static values(): native.Array<android.net.LocalSocketAddress.Namespace>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.net.LocalSocketAddress.Namespace;
				public static ABSTRACT: android.net.LocalSocketAddress.Namespace;
				public static FILESYSTEM: android.net.LocalSocketAddress.Namespace;
				public static RESERVED: android.net.LocalSocketAddress.Namespace;
			}
		}
	}
}

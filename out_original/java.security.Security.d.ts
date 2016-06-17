/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export class Security {
			public static getAlgorithmProperty(param0: string, param1: string): string;
			public static insertProviderAt(param0: java.security.Provider, param1: number): number;
			public static addProvider(param0: java.security.Provider): number;
			public static removeProvider(param0: string): void;
			public static getProviders(): native.Array<java.security.Provider>;
			public static getProvider(param0: string): java.security.Provider;
			public static getProviders(param0: string): native.Array<java.security.Provider>;
			public static getProviders(param0: java.util.Map): native.Array<java.security.Provider>;
			public static getProperty(param0: string): string;
			public static setProperty(param0: string, param1: string): void;
			public static getAlgorithms(param0: string): java.util.Set;
		}
	}
}

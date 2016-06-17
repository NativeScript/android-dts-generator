/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.CodeSource.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />

declare module java {
	export module security {
		export class Policy {
			public constructor();
			public static getInstance(param0: string, param1: java.security.Policy.Parameters): java.security.Policy;
			public static getInstance(param0: string, param1: java.security.Policy.Parameters, param2: string): java.security.Policy;
			public static getInstance(param0: string, param1: java.security.Policy.Parameters, param2: java.security.Provider): java.security.Policy;
			public getParameters(): java.security.Policy.Parameters;
			public getProvider(): java.security.Provider;
			public getType(): string;
			public getPermissions(param0: java.security.CodeSource): java.security.PermissionCollection;
			public refresh(): void;
			public getPermissions(param0: java.security.ProtectionDomain): java.security.PermissionCollection;
			public implies(param0: java.security.ProtectionDomain, param1: java.security.Permission): boolean;
			public static getPolicy(): java.security.Policy;
			public static setPolicy(param0: java.security.Policy): void;
			public static UNSUPPORTED_EMPTY_COLLECTION: java.security.PermissionCollection;
		}
		export module Policy {
			export class Parameters {
			}
		}
	}
}

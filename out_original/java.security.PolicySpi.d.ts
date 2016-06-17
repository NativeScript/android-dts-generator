/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.CodeSource.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />

declare module java {
	export module security {
		export class PolicySpi {
			public constructor();
			public engineImplies(param0: java.security.ProtectionDomain, param1: java.security.Permission): boolean;
			public engineRefresh(): void;
			public engineGetPermissions(param0: java.security.CodeSource): java.security.PermissionCollection;
			public engineGetPermissions(param0: java.security.ProtectionDomain): java.security.PermissionCollection;
		}
	}
}

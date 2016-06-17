/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />

declare module java {
	export module security {
		export class UnresolvedPermission {
			public constructor(param0: string);
			public constructor();
			public constructor(param0: string, param1: string, param2: string, param3: native.Array<java.security.cert.Certificate>);
			public getUnresolvedName(): string;
			public getUnresolvedActions(): string;
			public getUnresolvedType(): string;
			public getUnresolvedCerts(): native.Array<java.security.cert.Certificate>;
			public getActions(): string;
			public implies(param0: java.security.Permission): boolean;
		}
	}
}

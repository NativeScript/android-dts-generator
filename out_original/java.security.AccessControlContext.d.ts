/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.DomainCombiner.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />

declare module java {
	export module security {
		export class AccessControlContext {
			public constructor();
			public constructor(param0: java.security.AccessControlContext, param1: java.security.DomainCombiner);
			public constructor(param0: native.Array<java.security.ProtectionDomain>);
			public checkPermission(param0: java.security.Permission): void;
			public getDomainCombiner(): java.security.DomainCombiner;
		}
	}
}

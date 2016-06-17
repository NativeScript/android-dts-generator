/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />

declare module java {
	export module security {
		export class DomainCombiner {
			public combine(param0: native.Array<java.security.ProtectionDomain>, param1: native.Array<java.security.ProtectionDomain>): native.Array<java.security.ProtectionDomain>;
		}
	}
}

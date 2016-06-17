/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.ProtectionDomain.d.ts" />
/// <reference path="./javax.security.auth.Subject.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export class SubjectDomainCombiner {
				public constructor();
				public constructor(param0: javax.security.auth.Subject);
				public getSubject(): javax.security.auth.Subject;
				public combine(param0: native.Array<java.security.ProtectionDomain>, param1: native.Array<java.security.ProtectionDomain>): native.Array<java.security.ProtectionDomain>;
			}
		}
	}
}

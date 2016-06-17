/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.KeyStore.d.ts" />
/// <reference path="./java.security.cert.CertSelector.d.ts" />
/// <reference path="./java.security.cert.CertStore.d.ts" />
/// <reference path="./java.security.cert.PKIXCertPathChecker.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PKIXParameters {
				public constructor();
				public constructor(param0: java.util.Set);
				public constructor(param0: java.security.KeyStore);
				public getTrustAnchors(): java.util.Set;
				public setTrustAnchors(param0: java.util.Set): void;
				public isAnyPolicyInhibited(): boolean;
				public setAnyPolicyInhibited(param0: boolean): void;
				public getCertPathCheckers(): java.util.List;
				public setCertPathCheckers(param0: java.util.List): void;
				public addCertPathChecker(param0: java.security.cert.PKIXCertPathChecker): void;
				public getCertStores(): java.util.List;
				public setCertStores(param0: java.util.List): void;
				public addCertStore(param0: java.security.cert.CertStore): void;
				public getDate(): java.util.Date;
				public setDate(param0: java.util.Date): void;
				public isExplicitPolicyRequired(): boolean;
				public setExplicitPolicyRequired(param0: boolean): void;
				public getInitialPolicies(): java.util.Set;
				public setInitialPolicies(param0: java.util.Set): void;
				public isPolicyMappingInhibited(): boolean;
				public setPolicyMappingInhibited(param0: boolean): void;
				public getPolicyQualifiersRejected(): boolean;
				public setPolicyQualifiersRejected(param0: boolean): void;
				public isRevocationEnabled(): boolean;
				public setRevocationEnabled(param0: boolean): void;
				public getSigProvider(): string;
				public setSigProvider(param0: string): void;
				public getTargetCertConstraints(): java.security.cert.CertSelector;
				public setTargetCertConstraints(param0: java.security.cert.CertSelector): void;
				public clone(): java.lang.Object;
				public toString(): string;
			}
		}
	}
}

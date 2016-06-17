/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PolicyNode {
				public getChildren(): java.util.Iterator;
				public getDepth(): number;
				public getExpectedPolicies(): java.util.Set;
				public getParent(): java.security.cert.PolicyNode;
				public getPolicyQualifiers(): java.util.Set;
				public getValidPolicy(): string;
				public isCritical(): boolean;
			}
		}
	}
}

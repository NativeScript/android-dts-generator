/// <reference path="./_helpers.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class PolicyQualifierInfo {
				public constructor();
				public constructor(param0: native.Array<number>);
				public getEncoded(): native.Array<number>;
				public getPolicyQualifierId(): string;
				public getPolicyQualifier(): native.Array<number>;
				public toString(): string;
			}
		}
	}
}

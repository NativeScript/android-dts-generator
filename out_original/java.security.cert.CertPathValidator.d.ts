/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />
/// <reference path="./java.security.cert.CertPathValidatorResult.d.ts" />
/// <reference path="./java.security.cert.CertPathValidatorSpi.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathValidator {
				public constructor();
				public constructor(param0: java.security.cert.CertPathValidatorSpi, param1: java.security.Provider, param2: string);
				public getAlgorithm(): string;
				public getProvider(): java.security.Provider;
				public static getInstance(param0: string): java.security.cert.CertPathValidator;
				public static getInstance(param0: string, param1: string): java.security.cert.CertPathValidator;
				public static getInstance(param0: string, param1: java.security.Provider): java.security.cert.CertPathValidator;
				public validate(param0: java.security.cert.CertPath, param1: java.security.cert.CertPathParameters): java.security.cert.CertPathValidatorResult;
				public static getDefaultType(): string;
			}
		}
	}
}

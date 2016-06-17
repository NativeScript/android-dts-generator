/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.cert.CertPathBuilderResult.d.ts" />
/// <reference path="./java.security.cert.CertPathBuilderSpi.d.ts" />
/// <reference path="./java.security.cert.CertPathParameters.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathBuilder {
				public constructor();
				public constructor(param0: java.security.cert.CertPathBuilderSpi, param1: java.security.Provider, param2: string);
				public getAlgorithm(): string;
				public getProvider(): java.security.Provider;
				public static getInstance(param0: string): java.security.cert.CertPathBuilder;
				public static getInstance(param0: string, param1: string): java.security.cert.CertPathBuilder;
				public static getInstance(param0: string, param1: java.security.Provider): java.security.cert.CertPathBuilder;
				public build(param0: java.security.cert.CertPathParameters): java.security.cert.CertPathBuilderResult;
				public static getDefaultType(): string;
			}
		}
	}
}

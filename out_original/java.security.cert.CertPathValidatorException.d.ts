/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.security.cert.CertPath.d.ts" />

declare module java {
	export module security {
		export module cert {
			export class CertPathValidatorException {
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string, param1: java.lang.Throwable, param2: java.security.cert.CertPath, param3: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public getCertPath(): java.security.cert.CertPath;
				public getIndex(): number;
			}
		}
	}
}

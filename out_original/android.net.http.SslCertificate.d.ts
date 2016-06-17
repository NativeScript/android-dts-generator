/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.Date.d.ts" />

declare module android {
	export module net {
		export module http {
			export class SslCertificate {
				public constructor();
				public constructor(param0: string, param1: string, param2: string, param3: string);
				public constructor(param0: string, param1: string, param2: java.util.Date, param3: java.util.Date);
				public constructor(param0: java.security.cert.X509Certificate);
				public static saveState(param0: android.net.http.SslCertificate): android.os.Bundle;
				public static restoreState(param0: android.os.Bundle): android.net.http.SslCertificate;
				public getValidNotBeforeDate(): java.util.Date;
				public getValidNotBefore(): string;
				public getValidNotAfterDate(): java.util.Date;
				public getValidNotAfter(): string;
				public getIssuedTo(): android.net.http.SslCertificate.DName;
				public getIssuedBy(): android.net.http.SslCertificate.DName;
				public toString(): string;
			}
			export module SslCertificate {
				export class DName {
					public constructor();
					public constructor(param0: android.net.http.SslCertificate, param1: string);
					public getDName(): string;
					public getCName(): string;
					public getOName(): string;
					public getUName(): string;
				}
			}
		}
	}
}

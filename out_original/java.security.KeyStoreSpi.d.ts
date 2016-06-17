/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export class KeyStoreSpi {
			public constructor();
			public engineGetKey(param0: string, param1: native.Array<string>): java.security.Key;
			public engineGetCertificateChain(param0: string): native.Array<java.security.cert.Certificate>;
			public engineGetCertificate(param0: string): java.security.cert.Certificate;
			public engineGetCreationDate(param0: string): java.util.Date;
			public engineSetKeyEntry(param0: string, param1: java.security.Key, param2: native.Array<string>, param3: native.Array<java.security.cert.Certificate>): void;
			public engineSetKeyEntry(param0: string, param1: native.Array<number>, param2: native.Array<java.security.cert.Certificate>): void;
			public engineSetCertificateEntry(param0: string, param1: java.security.cert.Certificate): void;
			public engineDeleteEntry(param0: string): void;
			public engineAliases(): java.util.Enumeration;
			public engineContainsAlias(param0: string): boolean;
			public engineSize(): number;
			public engineIsKeyEntry(param0: string): boolean;
			public engineIsCertificateEntry(param0: string): boolean;
			public engineGetCertificateAlias(param0: java.security.cert.Certificate): string;
			public engineStore(param0: java.io.OutputStream, param1: native.Array<string>): void;
			public engineStore(param0: java.security.KeyStore.LoadStoreParameter): void;
			public engineLoad(param0: java.io.InputStream, param1: native.Array<string>): void;
			public engineLoad(param0: java.security.KeyStore.LoadStoreParameter): void;
			public engineGetEntry(param0: string, param1: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Entry;
			public engineSetEntry(param0: string, param1: java.security.KeyStore.Entry, param2: java.security.KeyStore.ProtectionParameter): void;
			public engineEntryInstanceOf(param0: string, param1: java.lang.Class): boolean;
		}
	}
}

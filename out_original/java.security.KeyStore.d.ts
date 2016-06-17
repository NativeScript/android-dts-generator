/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Key.d.ts" />
/// <reference path="./java.security.KeyStoreSpi.d.ts" />
/// <reference path="./java.security.PrivateKey.d.ts" />
/// <reference path="./java.security.Provider.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./javax.crypto.SecretKey.d.ts" />
/// <reference path="./javax.security.auth.callback.CallbackHandler.d.ts" />

declare module java {
	export module security {
		export class KeyStore {
			public constructor();
			public constructor(param0: java.security.KeyStoreSpi, param1: java.security.Provider, param2: string);
			public static getInstance(param0: string): java.security.KeyStore;
			public static getInstance(param0: string, param1: string): java.security.KeyStore;
			public static getInstance(param0: string, param1: java.security.Provider): java.security.KeyStore;
			public static getDefaultType(): string;
			public getProvider(): java.security.Provider;
			public getType(): string;
			public getKey(param0: string, param1: native.Array<string>): java.security.Key;
			public getCertificateChain(param0: string): native.Array<java.security.cert.Certificate>;
			public getCertificate(param0: string): java.security.cert.Certificate;
			public getCreationDate(param0: string): java.util.Date;
			public setKeyEntry(param0: string, param1: java.security.Key, param2: native.Array<string>, param3: native.Array<java.security.cert.Certificate>): void;
			public setKeyEntry(param0: string, param1: native.Array<number>, param2: native.Array<java.security.cert.Certificate>): void;
			public setCertificateEntry(param0: string, param1: java.security.cert.Certificate): void;
			public deleteEntry(param0: string): void;
			public aliases(): java.util.Enumeration;
			public containsAlias(param0: string): boolean;
			public size(): number;
			public isKeyEntry(param0: string): boolean;
			public isCertificateEntry(param0: string): boolean;
			public getCertificateAlias(param0: java.security.cert.Certificate): string;
			public store(param0: java.io.OutputStream, param1: native.Array<string>): void;
			public store(param0: java.security.KeyStore.LoadStoreParameter): void;
			public load(param0: java.io.InputStream, param1: native.Array<string>): void;
			public load(param0: java.security.KeyStore.LoadStoreParameter): void;
			public getEntry(param0: string, param1: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Entry;
			public setEntry(param0: string, param1: java.security.KeyStore.Entry, param2: java.security.KeyStore.ProtectionParameter): void;
			public entryInstanceOf(param0: string, param1: java.lang.Class): boolean;
		}
		export module KeyStore {
			export class Builder {
				public constructor();
				public getKeyStore(): java.security.KeyStore;
				public getProtectionParameter(param0: string): java.security.KeyStore.ProtectionParameter;
				public static newInstance(param0: java.security.KeyStore, param1: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
				public static newInstance(param0: string, param1: java.security.Provider, param2: java.io.File, param3: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
				public static newInstance(param0: string, param1: java.security.Provider, param2: java.security.KeyStore.ProtectionParameter): java.security.KeyStore.Builder;
			}
			export class CallbackHandlerProtection {
				public constructor();
				public constructor(param0: javax.security.auth.callback.CallbackHandler);
				public getCallbackHandler(): javax.security.auth.callback.CallbackHandler;
			}
			export class Entry {
			}
			export class LoadStoreParameter {
				public getProtectionParameter(): java.security.KeyStore.ProtectionParameter;
			}
			export class PasswordProtection {
				public constructor();
				public constructor(param0: native.Array<string>);
				public getPassword(): native.Array<string>;
				public destroy(): void;
				public isDestroyed(): boolean;
			}
			export class PrivateKeyEntry {
				public constructor();
				public constructor(param0: java.security.PrivateKey, param1: native.Array<java.security.cert.Certificate>);
				public getPrivateKey(): java.security.PrivateKey;
				public getCertificateChain(): native.Array<java.security.cert.Certificate>;
				public getCertificate(): java.security.cert.Certificate;
				public toString(): string;
			}
			export class ProtectionParameter {
			}
			export class SecretKeyEntry {
				public constructor();
				public constructor(param0: javax.crypto.SecretKey);
				public getSecretKey(): javax.crypto.SecretKey;
				public toString(): string;
			}
			export class TrustedCertificateEntry {
				public constructor();
				public constructor(param0: java.security.cert.Certificate);
				public getTrustedCertificate(): java.security.cert.Certificate;
				public toString(): string;
			}
		}
	}
}

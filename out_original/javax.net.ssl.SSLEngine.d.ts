/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />
/// <reference path="./javax.net.ssl.SSLEngineResult.d.ts" />
/// <reference path="./javax.net.ssl.SSLParameters.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLEngine {
				public constructor();
				public constructor(param0: string, param1: number);
				public getPeerHost(): string;
				public getPeerPort(): number;
				public beginHandshake(): void;
				public closeInbound(): void;
				public closeOutbound(): void;
				public getDelegatedTask(): java.lang.Runnable;
				public getEnabledCipherSuites(): native.Array<string>;
				public getEnabledProtocols(): native.Array<string>;
				public getEnableSessionCreation(): boolean;
				public getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus;
				public getNeedClientAuth(): boolean;
				public getSession(): javax.net.ssl.SSLSession;
				public getSupportedCipherSuites(): native.Array<string>;
				public getSupportedProtocols(): native.Array<string>;
				public getUseClientMode(): boolean;
				public getWantClientAuth(): boolean;
				public isInboundDone(): boolean;
				public isOutboundDone(): boolean;
				public setEnabledCipherSuites(param0: native.Array<string>): void;
				public setEnabledProtocols(param0: native.Array<string>): void;
				public setEnableSessionCreation(param0: boolean): void;
				public setNeedClientAuth(param0: boolean): void;
				public setUseClientMode(param0: boolean): void;
				public setWantClientAuth(param0: boolean): void;
				public unwrap(param0: java.nio.ByteBuffer, param1: native.Array<java.nio.ByteBuffer>, param2: number, param3: number): javax.net.ssl.SSLEngineResult;
				public wrap(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number, param3: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult;
				public unwrap(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult;
				public unwrap(param0: java.nio.ByteBuffer, param1: native.Array<java.nio.ByteBuffer>): javax.net.ssl.SSLEngineResult;
				public wrap(param0: native.Array<java.nio.ByteBuffer>, param1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult;
				public wrap(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): javax.net.ssl.SSLEngineResult;
				public getSSLParameters(): javax.net.ssl.SSLParameters;
				public setSSLParameters(param0: javax.net.ssl.SSLParameters): void;
			}
		}
	}
}

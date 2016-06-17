/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module javax {
	export module net {
		export module ssl {
			export class SSLEngineResult {
				public constructor();
				public constructor(param0: javax.net.ssl.SSLEngineResult.Status, param1: javax.net.ssl.SSLEngineResult.HandshakeStatus, param2: number, param3: number);
				public getStatus(): javax.net.ssl.SSLEngineResult.Status;
				public getHandshakeStatus(): javax.net.ssl.SSLEngineResult.HandshakeStatus;
				public bytesConsumed(): number;
				public bytesProduced(): number;
				public toString(): string;
			}
			export module SSLEngineResult {
				export class HandshakeStatus {
					public static values(): native.Array<javax.net.ssl.SSLEngineResult.HandshakeStatus>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): javax.net.ssl.SSLEngineResult.HandshakeStatus;
					public static FINISHED: javax.net.ssl.SSLEngineResult.HandshakeStatus;
					public static NEED_TASK: javax.net.ssl.SSLEngineResult.HandshakeStatus;
					public static NEED_UNWRAP: javax.net.ssl.SSLEngineResult.HandshakeStatus;
					public static NEED_WRAP: javax.net.ssl.SSLEngineResult.HandshakeStatus;
					public static NOT_HANDSHAKING: javax.net.ssl.SSLEngineResult.HandshakeStatus;
				}
				export class Status {
					public static values(): native.Array<javax.net.ssl.SSLEngineResult.Status>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): javax.net.ssl.SSLEngineResult.Status;
					public static BUFFER_OVERFLOW: javax.net.ssl.SSLEngineResult.Status;
					public static BUFFER_UNDERFLOW: javax.net.ssl.SSLEngineResult.Status;
					public static CLOSED: javax.net.ssl.SSLEngineResult.Status;
					public static OK: javax.net.ssl.SSLEngineResult.Status;
				}
			}
		}
	}
}

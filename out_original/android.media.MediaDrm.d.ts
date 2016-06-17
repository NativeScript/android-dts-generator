/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module media {
		export class MediaDrm {
			public constructor();
			public constructor(param0: java.util.UUID);
			public static isCryptoSchemeSupported(param0: java.util.UUID): boolean;
			public static isCryptoSchemeSupported(param0: java.util.UUID, param1: string): boolean;
			public setOnExpirationUpdateListener(param0: android.media.MediaDrm.OnExpirationUpdateListener, param1: android.os.Handler): void;
			public setOnKeyStatusChangeListener(param0: android.media.MediaDrm.OnKeyStatusChangeListener, param1: android.os.Handler): void;
			public setOnEventListener(param0: android.media.MediaDrm.OnEventListener): void;
			public openSession(): native.Array<number>;
			public closeSession(param0: native.Array<number>): void;
			public getKeyRequest(param0: native.Array<number>, param1: native.Array<number>, param2: string, param3: number, param4: java.util.HashMap): android.media.MediaDrm.KeyRequest;
			public provideKeyResponse(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
			public restoreKeys(param0: native.Array<number>, param1: native.Array<number>): void;
			public removeKeys(param0: native.Array<number>): void;
			public queryKeyStatus(param0: native.Array<number>): java.util.HashMap;
			public getProvisionRequest(): android.media.MediaDrm.ProvisionRequest;
			public provideProvisionResponse(param0: native.Array<number>): void;
			public getSecureStops(): java.util.List;
			public getSecureStop(param0: native.Array<number>): native.Array<number>;
			public releaseSecureStops(param0: native.Array<number>): void;
			public releaseAllSecureStops(): void;
			public getPropertyString(param0: string): string;
			public getPropertyByteArray(param0: string): native.Array<number>;
			public setPropertyString(param0: string, param1: string): void;
			public setPropertyByteArray(param0: string, param1: native.Array<number>): void;
			public getCryptoSession(param0: native.Array<number>, param1: string, param2: string): android.media.MediaDrm.CryptoSession;
			public finalize(): void;
			public release(): void;
			public static EVENT_KEY_EXPIRED: number;
			public static EVENT_KEY_REQUIRED: number;
			public static EVENT_PROVISION_REQUIRED: number;
			public static EVENT_SESSION_RECLAIMED: number;
			public static EVENT_VENDOR_DEFINED: number;
			public static KEY_TYPE_OFFLINE: number;
			public static KEY_TYPE_RELEASE: number;
			public static KEY_TYPE_STREAMING: number;
			public static PROPERTY_ALGORITHMS: string;
			public static PROPERTY_DESCRIPTION: string;
			public static PROPERTY_DEVICE_UNIQUE_ID: string;
			public static PROPERTY_VENDOR: string;
			public static PROPERTY_VERSION: string;
		}
		export module MediaDrm {
			export class CryptoSession {
				public encrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
				public decrypt(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): native.Array<number>;
				public sign(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
				public verify(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>): boolean;
			}
			export class KeyRequest {
				public getData(): native.Array<number>;
				public getDefaultUrl(): string;
				public getRequestType(): number;
				public static REQUEST_TYPE_INITIAL: number;
				public static REQUEST_TYPE_RELEASE: number;
				public static REQUEST_TYPE_RENEWAL: number;
			}
			export class KeyStatus {
				public getStatusCode(): number;
				public getKeyId(): native.Array<number>;
				public static STATUS_EXPIRED: number;
				public static STATUS_INTERNAL_ERROR: number;
				public static STATUS_OUTPUT_NOT_ALLOWED: number;
				public static STATUS_PENDING: number;
				public static STATUS_USABLE: number;
			}
			export class MediaDrmStateException {
				public getDiagnosticInfo(): string;
			}
			export class OnEventListener {
				public onEvent(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number, param3: number, param4: native.Array<number>): void;
			}
			export class OnExpirationUpdateListener {
				public onExpirationUpdate(param0: android.media.MediaDrm, param1: native.Array<number>, param2: number): void;
			}
			export class OnKeyStatusChangeListener {
				public onKeyStatusChange(param0: android.media.MediaDrm, param1: native.Array<number>, param2: java.util.List, param3: boolean): void;
			}
			export class ProvisionRequest {
				public getData(): native.Array<number>;
				public getDefaultUrl(): string;
			}
		}
	}
}

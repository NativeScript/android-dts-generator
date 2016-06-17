/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />

declare module android {
	export module media {
		export class MediaCrypto {
			public constructor();
			public constructor(param0: java.util.UUID, param1: native.Array<number>);
			public static isCryptoSchemeSupported(param0: java.util.UUID): boolean;
			public requiresSecureDecoderComponent(param0: string): boolean;
			public setMediaDrmSession(param0: native.Array<number>): void;
			public finalize(): void;
			public release(): void;
		}
	}
}

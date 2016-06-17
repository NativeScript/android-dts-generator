/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class ReadableByteChannel {
				public read(param0: java.nio.ByteBuffer): number;
			}
		}
	}
}

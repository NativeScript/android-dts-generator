/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class ScatteringByteChannel {
				public read(param0: native.Array<java.nio.ByteBuffer>): number;
				public read(param0: native.Array<java.nio.ByteBuffer>, param1: number, param2: number): number;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export class MappedByteBuffer {
			public isLoaded(): boolean;
			public load(): java.nio.MappedByteBuffer;
			public force(): java.nio.MappedByteBuffer;
		}
	}
}

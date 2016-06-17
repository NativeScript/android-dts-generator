/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.channels.FileChannel.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class FileLock {
				public constructor();
				public constructor(param0: java.nio.channels.FileChannel, param1: number, param2: number, param3: boolean);
				public channel(): java.nio.channels.FileChannel;
				public position(): number;
				public size(): number;
				public isShared(): boolean;
				public overlaps(param0: number, param1: number): boolean;
				public isValid(): boolean;
				public release(): void;
				public close(): void;
				public toString(): string;
			}
		}
	}
}

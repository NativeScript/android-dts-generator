/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module system {
		export class StructPollfd {
			public constructor();
			public toString(): string;
			public events: number;
			public fd: java.io.FileDescriptor;
			public revents: number;
			public userData: java.lang.Object;
		}
	}
}

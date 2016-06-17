/// <reference path="./_helpers.d.ts" />

declare module java {
	export module io {
		export class FileDescriptor {
			public constructor();
			public sync(): void;
			public valid(): boolean;
			public toString(): string;
			public static err: java.io.FileDescriptor;
			public static in: java.io.FileDescriptor;
			public static out: java.io.FileDescriptor;
		}
	}
}

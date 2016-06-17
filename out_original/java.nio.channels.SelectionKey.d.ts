/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.nio.channels.SelectableChannel.d.ts" />
/// <reference path="./java.nio.channels.Selector.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class SelectionKey {
				public constructor();
				public attach(param0: java.lang.Object): java.lang.Object;
				public attachment(): java.lang.Object;
				public cancel(): void;
				public channel(): java.nio.channels.SelectableChannel;
				public interestOps(): number;
				public interestOps(param0: number): java.nio.channels.SelectionKey;
				public isAcceptable(): boolean;
				public isConnectable(): boolean;
				public isReadable(): boolean;
				public isValid(): boolean;
				public isWritable(): boolean;
				public readyOps(): number;
				public selector(): java.nio.channels.Selector;
				public static OP_ACCEPT: number;
				public static OP_CONNECT: number;
				public static OP_READ: number;
				public static OP_WRITE: number;
			}
		}
	}
}

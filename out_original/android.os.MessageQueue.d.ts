/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />

declare module android {
	export module os {
		export class MessageQueue {
			public finalize(): void;
			public isIdle(): boolean;
			public addIdleHandler(param0: android.os.MessageQueue.IdleHandler): void;
			public removeIdleHandler(param0: android.os.MessageQueue.IdleHandler): void;
			public addOnFileDescriptorEventListener(param0: java.io.FileDescriptor, param1: number, param2: android.os.MessageQueue.OnFileDescriptorEventListener): void;
			public removeOnFileDescriptorEventListener(param0: java.io.FileDescriptor): void;
		}
		export module MessageQueue {
			export class IdleHandler {
				public queueIdle(): boolean;
			}
			export class OnFileDescriptorEventListener {
				public onFileDescriptorEvents(param0: java.io.FileDescriptor, param1: number): number;
				public static EVENT_ERROR: number;
				public static EVENT_INPUT: number;
				public static EVENT_OUTPUT: number;
			}
		}
	}
}

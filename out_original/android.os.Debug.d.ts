/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module android {
	export module os {
		export class Debug {
			public static waitForDebugger(): void;
			public static waitingForDebugger(): boolean;
			public static isDebuggerConnected(): boolean;
			public static changeDebugPort(param0: number): void;
			public static startNativeTracing(): void;
			public static stopNativeTracing(): void;
			public static enableEmulatorTraceOutput(): void;
			public static startMethodTracing(): void;
			public static startMethodTracing(param0: string): void;
			public static startMethodTracing(param0: string, param1: number): void;
			public static startMethodTracing(param0: string, param1: number, param2: number): void;
			public static startMethodTracingSampling(param0: string, param1: number, param2: number): void;
			public static stopMethodTracing(): void;
			public static threadCpuTimeNanos(): number;
			public static startAllocCounting(): void;
			public static stopAllocCounting(): void;
			public static getGlobalAllocCount(): number;
			public static resetGlobalAllocCount(): void;
			public static getGlobalAllocSize(): number;
			public static resetGlobalAllocSize(): void;
			public static getGlobalFreedCount(): number;
			public static resetGlobalFreedCount(): void;
			public static getGlobalFreedSize(): number;
			public static resetGlobalFreedSize(): void;
			public static getGlobalGcInvocationCount(): number;
			public static resetGlobalGcInvocationCount(): void;
			public static getGlobalClassInitCount(): number;
			public static resetGlobalClassInitCount(): void;
			public static getGlobalClassInitTime(): number;
			public static resetGlobalClassInitTime(): void;
			public static getGlobalExternalAllocCount(): number;
			public static resetGlobalExternalAllocSize(): void;
			public static resetGlobalExternalAllocCount(): void;
			public static getGlobalExternalAllocSize(): number;
			public static getGlobalExternalFreedCount(): number;
			public static resetGlobalExternalFreedCount(): void;
			public static getGlobalExternalFreedSize(): number;
			public static resetGlobalExternalFreedSize(): void;
			public static getThreadAllocCount(): number;
			public static resetThreadAllocCount(): void;
			public static getThreadAllocSize(): number;
			public static resetThreadAllocSize(): void;
			public static getThreadExternalAllocCount(): number;
			public static resetThreadExternalAllocCount(): void;
			public static getThreadExternalAllocSize(): number;
			public static resetThreadExternalAllocSize(): void;
			public static getThreadGcInvocationCount(): number;
			public static resetThreadGcInvocationCount(): void;
			public static resetAllCounts(): void;
			public static getRuntimeStat(param0: string): string;
			public static getRuntimeStats(): java.util.Map;
			public static getNativeHeapSize(): number;
			public static getNativeHeapAllocatedSize(): number;
			public static getNativeHeapFreeSize(): number;
			public static getMemoryInfo(param0: android.os.Debug.MemoryInfo): void;
			public static getPss(): number;
			public static setAllocationLimit(param0: number): number;
			public static setGlobalAllocationLimit(param0: number): number;
			public static printLoadedClasses(param0: number): void;
			public static getLoadedClassCount(): number;
			public static dumpHprofData(param0: string): void;
			public static getBinderSentTransactions(): number;
			public static getBinderReceivedTransactions(): number;
			public static getBinderLocalObjectCount(): number;
			public static getBinderProxyObjectCount(): number;
			public static getBinderDeathObjectCount(): number;
			public static dumpService(param0: string, param1: java.io.FileDescriptor, param2: native.Array<string>): boolean;
			public static SHOW_CLASSLOADER: number;
			public static SHOW_FULL_DETAIL: number;
			public static SHOW_INITIALIZED: number;
			public static TRACE_COUNT_ALLOCS: number;
		}
		export module Debug {
			export class InstructionCount {
				public constructor();
				public resetAndStart(): boolean;
				public collect(): boolean;
				public globalTotal(): number;
				public globalMethodInvocations(): number;
			}
			export class MemoryInfo {
				public constructor();
				public getTotalPss(): number;
				public getTotalSwappablePss(): number;
				public getTotalPrivateDirty(): number;
				public getTotalSharedDirty(): number;
				public getTotalPrivateClean(): number;
				public getTotalSharedClean(): number;
				public getMemoryStat(param0: string): string;
				public getMemoryStats(): java.util.Map;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public readFromParcel(param0: android.os.Parcel): void;
				public static CREATOR: android.os.Parcelable.Creator;
				public dalvikPrivateDirty: number;
				public dalvikPss: number;
				public dalvikSharedDirty: number;
				public nativePrivateDirty: number;
				public nativePss: number;
				public nativeSharedDirty: number;
				public otherPrivateDirty: number;
				public otherPss: number;
				public otherSharedDirty: number;
			}
		}
	}
}

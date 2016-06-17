/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module os {
		export class StrictMode {
			public static setThreadPolicy(param0: android.os.StrictMode.ThreadPolicy): void;
			public static getThreadPolicy(): android.os.StrictMode.ThreadPolicy;
			public static allowThreadDiskWrites(): android.os.StrictMode.ThreadPolicy;
			public static allowThreadDiskReads(): android.os.StrictMode.ThreadPolicy;
			public static setVmPolicy(param0: android.os.StrictMode.VmPolicy): void;
			public static getVmPolicy(): android.os.StrictMode.VmPolicy;
			public static enableDefaults(): void;
			public static noteSlowCall(param0: string): void;
		}
		export module StrictMode {
			export class ThreadPolicy {
				public toString(): string;
				public static LAX: android.os.StrictMode.ThreadPolicy;
			}
			export module ThreadPolicy {
				export class Builder {
					public constructor();
					public constructor(param0: android.os.StrictMode.ThreadPolicy);
					public detectAll(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitAll(): android.os.StrictMode.ThreadPolicy.Builder;
					public detectNetwork(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitNetwork(): android.os.StrictMode.ThreadPolicy.Builder;
					public detectDiskReads(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitDiskReads(): android.os.StrictMode.ThreadPolicy.Builder;
					public detectCustomSlowCalls(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitCustomSlowCalls(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitResourceMismatches(): android.os.StrictMode.ThreadPolicy.Builder;
					public detectResourceMismatches(): android.os.StrictMode.ThreadPolicy.Builder;
					public detectDiskWrites(): android.os.StrictMode.ThreadPolicy.Builder;
					public permitDiskWrites(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyDialog(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyDeath(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyDeathOnNetwork(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyFlashScreen(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyLog(): android.os.StrictMode.ThreadPolicy.Builder;
					public penaltyDropBox(): android.os.StrictMode.ThreadPolicy.Builder;
					public build(): android.os.StrictMode.ThreadPolicy;
				}
			}
			export class VmPolicy {
				public toString(): string;
				public static LAX: android.os.StrictMode.VmPolicy;
			}
			export module VmPolicy {
				export class Builder {
					public constructor();
					public constructor(param0: android.os.StrictMode.VmPolicy);
					public setClassInstanceLimit(param0: java.lang.Class, param1: number): android.os.StrictMode.VmPolicy.Builder;
					public detectActivityLeaks(): android.os.StrictMode.VmPolicy.Builder;
					public detectAll(): android.os.StrictMode.VmPolicy.Builder;
					public detectLeakedSqlLiteObjects(): android.os.StrictMode.VmPolicy.Builder;
					public detectLeakedClosableObjects(): android.os.StrictMode.VmPolicy.Builder;
					public detectLeakedRegistrationObjects(): android.os.StrictMode.VmPolicy.Builder;
					public detectFileUriExposure(): android.os.StrictMode.VmPolicy.Builder;
					public detectCleartextNetwork(): android.os.StrictMode.VmPolicy.Builder;
					public penaltyDeath(): android.os.StrictMode.VmPolicy.Builder;
					public penaltyDeathOnCleartextNetwork(): android.os.StrictMode.VmPolicy.Builder;
					public penaltyLog(): android.os.StrictMode.VmPolicy.Builder;
					public penaltyDropBox(): android.os.StrictMode.VmPolicy.Builder;
					public build(): android.os.StrictMode.VmPolicy;
				}
			}
		}
	}
}

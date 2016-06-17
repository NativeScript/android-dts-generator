/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.Executor.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module content {
				export class ParallelExecutorCompat {
					public static getParallelExecutor(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

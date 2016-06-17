/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module webkit {
		export class DownloadListener {
			public onDownloadStart(param0: string, param1: string, param2: string, param3: string, param4: number): void;
		}
	}
}

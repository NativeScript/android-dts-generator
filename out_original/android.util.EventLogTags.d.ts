/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.BufferedReader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class EventLogTags {
			public constructor();
			public constructor(param0: java.io.BufferedReader);
			public get(param0: string): android.util.EventLogTags.Description;
			public get(param0: number): android.util.EventLogTags.Description;
		}
		export module EventLogTags {
			export class Description {
				public mName: string;
				public mTag: number;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.Process.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />

declare module java {
	export module lang {
		export class ProcessBuilder {
			public constructor();
			public constructor(param0: native.Array<string>);
			public constructor(param0: java.util.List);
			public command(): java.util.List;
			public command(param0: native.Array<string>): java.lang.ProcessBuilder;
			public command(param0: java.util.List): java.lang.ProcessBuilder;
			public directory(): java.io.File;
			public directory(param0: java.io.File): java.lang.ProcessBuilder;
			public environment(): java.util.Map;
			public redirectErrorStream(): boolean;
			public redirectErrorStream(param0: boolean): java.lang.ProcessBuilder;
			public start(): java.lang.Process;
		}
	}
}

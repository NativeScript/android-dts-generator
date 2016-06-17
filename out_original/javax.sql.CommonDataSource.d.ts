/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />

declare module javax {
	export module sql {
		export class CommonDataSource {
			public getLoginTimeout(): number;
			public getLogWriter(): java.io.PrintWriter;
			public setLoginTimeout(param0: number): void;
			public setLogWriter(param0: java.io.PrintWriter): void;
		}
	}
}

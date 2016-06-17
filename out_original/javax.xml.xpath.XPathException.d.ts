/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />

declare module javax {
	export module xml {
		export module xpath {
			export class XPathException {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
				public constructor(param0: java.lang.Throwable);
				public getCause(): java.lang.Throwable;
				public printStackTrace(): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public printStackTrace(param0: java.io.PrintStream): void;
				public printStackTrace(): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
			}
		}
	}
}

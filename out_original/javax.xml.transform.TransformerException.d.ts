/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./javax.xml.transform.SourceLocator.d.ts" />

declare module javax {
	export module xml {
		export module transform {
			export class TransformerException {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator);
				public constructor(param0: string, param1: javax.xml.transform.SourceLocator, param2: java.lang.Throwable);
				public getLocator(): javax.xml.transform.SourceLocator;
				public setLocator(param0: javax.xml.transform.SourceLocator): void;
				public getException(): java.lang.Throwable;
				public getCause(): java.lang.Throwable;
				public initCause(param0: java.lang.Throwable): java.lang.Throwable;
				public getMessageAndLocation(): string;
				public getLocationAsString(): string;
				public printStackTrace(param0: java.io.PrintStream): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public printStackTrace(): void;
				public printStackTrace(param0: java.io.PrintStream): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
			}
		}
	}
}

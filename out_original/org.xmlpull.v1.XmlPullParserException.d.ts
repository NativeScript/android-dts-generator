/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./org.xmlpull.v1.XmlPullParser.d.ts" />

declare module org {
	export module xmlpull {
		export module v1 {
			export class XmlPullParserException {
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: string);
				public constructor(param0: string, param1: org.xmlpull.v1.XmlPullParser, param2: java.lang.Throwable);
				public getDetail(): java.lang.Throwable;
				public getLineNumber(): number;
				public getColumnNumber(): number;
				public printStackTrace(param0: java.io.PrintStream): void;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public printStackTrace(): void;
				public column: number;
				public detail: java.lang.Throwable;
				public row: number;
			}
		}
	}
}

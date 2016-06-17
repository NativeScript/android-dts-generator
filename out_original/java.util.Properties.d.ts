/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.io.PrintWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export class Properties {
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Map);
			public constructor();
			public constructor(param0: java.util.Properties);
			public getProperty(param0: string): string;
			public getProperty(param0: string, param1: string): string;
			public list(param0: java.io.PrintStream): void;
			public list(param0: java.io.PrintWriter): void;
			public load(param0: java.io.InputStream): void;
			public load(param0: java.io.Reader): void;
			public propertyNames(): java.util.Enumeration;
			public stringPropertyNames(): java.util.Set;
			public save(param0: java.io.OutputStream, param1: string): void;
			public setProperty(param0: string, param1: string): java.lang.Object;
			public store(param0: java.io.OutputStream, param1: string): void;
			public store(param0: java.io.Writer, param1: string): void;
			public loadFromXML(param0: java.io.InputStream): void;
			public storeToXML(param0: java.io.OutputStream, param1: string): void;
			public storeToXML(param0: java.io.OutputStream, param1: string, param2: string): void;
			public defaults: java.util.Properties;
		}
	}
}

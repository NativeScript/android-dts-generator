/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.PrintStream.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module java {
	export module util {
		export class Formatter {
			public constructor();
			public constructor(param0: java.lang.Appendable);
			public constructor(param0: java.util.Locale);
			public constructor(param0: java.lang.Appendable, param1: java.util.Locale);
			public constructor(param0: string);
			public constructor(param0: string, param1: string);
			public constructor(param0: string, param1: string, param2: java.util.Locale);
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: java.io.File, param1: string, param2: java.util.Locale);
			public constructor(param0: java.io.OutputStream);
			public constructor(param0: java.io.OutputStream, param1: string);
			public constructor(param0: java.io.OutputStream, param1: string, param2: java.util.Locale);
			public constructor(param0: java.io.PrintStream);
			public locale(): java.util.Locale;
			public out(): java.lang.Appendable;
			public toString(): string;
			public flush(): void;
			public close(): void;
			public ioException(): java.io.IOException;
			public format(param0: string, param1: native.Array<java.lang.Object>): java.util.Formatter;
			public format(param0: java.util.Locale, param1: string, param2: native.Array<java.lang.Object>): java.util.Formatter;
		}
		export module Formatter {
			export class BigDecimalLayoutForm {
				public static values(): native.Array<java.util.Formatter.BigDecimalLayoutForm>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.util.Formatter.BigDecimalLayoutForm;
				public static DECIMAL_FLOAT: java.util.Formatter.BigDecimalLayoutForm;
				public static SCIENTIFIC: java.util.Formatter.BigDecimalLayoutForm;
			}
		}
	}
}

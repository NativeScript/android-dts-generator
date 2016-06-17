/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.Readable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.nio.channels.ReadableByteChannel.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.regex.MatchResult.d.ts" />
/// <reference path="./java.util.regex.Pattern.d.ts" />

declare module java {
	export module util {
		export class Scanner {
			public constructor();
			public constructor(param0: java.io.File);
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: string);
			public constructor(param0: java.io.InputStream);
			public constructor(param0: java.io.InputStream, param1: string);
			public constructor(param0: java.lang.Readable);
			public constructor(param0: java.nio.channels.ReadableByteChannel);
			public constructor(param0: java.nio.channels.ReadableByteChannel, param1: string);
			public close(): void;
			public delimiter(): java.util.regex.Pattern;
			public findInLine(param0: java.util.regex.Pattern): string;
			public findInLine(param0: string): string;
			public findWithinHorizon(param0: java.util.regex.Pattern, param1: number): string;
			public findWithinHorizon(param0: string, param1: number): string;
			public hasNext(): boolean;
			public hasNext(param0: java.util.regex.Pattern): boolean;
			public hasNext(param0: string): boolean;
			public hasNextBigDecimal(): boolean;
			public hasNextBigInteger(): boolean;
			public hasNextBigInteger(param0: number): boolean;
			public hasNextBoolean(): boolean;
			public hasNextByte(): boolean;
			public hasNextByte(param0: number): boolean;
			public hasNextDouble(): boolean;
			public hasNextFloat(): boolean;
			public hasNextInt(): boolean;
			public hasNextInt(param0: number): boolean;
			public hasNextLine(): boolean;
			public hasNextLong(): boolean;
			public hasNextLong(param0: number): boolean;
			public hasNextShort(): boolean;
			public hasNextShort(param0: number): boolean;
			public ioException(): java.io.IOException;
			public locale(): java.util.Locale;
			public match(): java.util.regex.MatchResult;
			public next(): string;
			public next(param0: java.util.regex.Pattern): string;
			public next(param0: string): string;
			public nextBigDecimal(): java.math.BigDecimal;
			public nextBigInteger(): java.math.BigInteger;
			public nextBigInteger(param0: number): java.math.BigInteger;
			public nextBoolean(): boolean;
			public nextByte(): number;
			public nextByte(param0: number): number;
			public nextDouble(): number;
			public nextFloat(): number;
			public nextInt(): number;
			public nextInt(param0: number): number;
			public nextLine(): string;
			public nextLong(): number;
			public nextLong(param0: number): number;
			public nextShort(): number;
			public nextShort(param0: number): number;
			public radix(): number;
			public skip(param0: java.util.regex.Pattern): java.util.Scanner;
			public skip(param0: string): java.util.Scanner;
			public toString(): string;
			public useDelimiter(param0: java.util.regex.Pattern): java.util.Scanner;
			public useDelimiter(param0: string): java.util.Scanner;
			public useLocale(param0: java.util.Locale): java.util.Scanner;
			public useRadix(param0: number): java.util.Scanner;
			public remove(): void;
			public reset(): java.util.Scanner;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.channels.ReadableByteChannel.d.ts" />
/// <reference path="./java.nio.channels.WritableByteChannel.d.ts" />
/// <reference path="./java.nio.charset.CharsetDecoder.d.ts" />
/// <reference path="./java.nio.charset.CharsetEncoder.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class Channels {
				public static newInputStream(param0: java.nio.channels.ReadableByteChannel): java.io.InputStream;
				public static newOutputStream(param0: java.nio.channels.WritableByteChannel): java.io.OutputStream;
				public static newChannel(param0: java.io.InputStream): java.nio.channels.ReadableByteChannel;
				public static newChannel(param0: java.io.OutputStream): java.nio.channels.WritableByteChannel;
				public static newReader(param0: java.nio.channels.ReadableByteChannel, param1: java.nio.charset.CharsetDecoder, param2: number): java.io.Reader;
				public static newReader(param0: java.nio.channels.ReadableByteChannel, param1: string): java.io.Reader;
				public static newWriter(param0: java.nio.channels.WritableByteChannel, param1: java.nio.charset.CharsetEncoder, param2: number): java.io.Writer;
				public static newWriter(param0: java.nio.channels.WritableByteChannel, param1: string): java.io.Writer;
			}
		}
	}
}

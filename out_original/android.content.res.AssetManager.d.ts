/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.AssetFileDescriptor.d.ts" />
/// <reference path="./android.content.res.XmlResourceParser.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module content {
		export module res {
			export class AssetManager {
				public close(): void;
				public open(param0: string): java.io.InputStream;
				public open(param0: string, param1: number): java.io.InputStream;
				public openFd(param0: string): android.content.res.AssetFileDescriptor;
				public list(param0: string): native.Array<string>;
				public openNonAssetFd(param0: string): android.content.res.AssetFileDescriptor;
				public openNonAssetFd(param0: number, param1: string): android.content.res.AssetFileDescriptor;
				public openXmlResourceParser(param0: string): android.content.res.XmlResourceParser;
				public openXmlResourceParser(param0: number, param1: string): android.content.res.XmlResourceParser;
				public finalize(): void;
				public getLocales(): native.Array<string>;
				public static ACCESS_BUFFER: number;
				public static ACCESS_RANDOM: number;
				public static ACCESS_STREAMING: number;
				public static ACCESS_UNKNOWN: number;
			}
			export module AssetManager {
				export class AssetInputStream {
					public read(param0: native.Array<number>): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
					public markSupported(): boolean;
					public available(): number;
					public close(): void;
					public mark(param0: number): void;
					public reset(): void;
					public read(param0: native.Array<number>): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public skip(param0: number): number;
					public finalize(): void;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Paint.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module graphics {
		export class Movie {
			public width(): number;
			public height(): number;
			public isOpaque(): boolean;
			public duration(): number;
			public setTime(param0: number): boolean;
			public draw(param0: android.graphics.Canvas, param1: number, param2: number, param3: android.graphics.Paint): void;
			public draw(param0: android.graphics.Canvas, param1: number, param2: number): void;
			public static decodeStream(param0: java.io.InputStream): android.graphics.Movie;
			public static decodeByteArray(param0: native.Array<number>, param1: number, param2: number): android.graphics.Movie;
			public static decodeFile(param0: string): android.graphics.Movie;
			public finalize(): void;
		}
	}
}

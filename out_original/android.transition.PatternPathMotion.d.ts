/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Path.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />

declare module android {
	export module transition {
		export class PatternPathMotion {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor();
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.graphics.Path);
			public getPatternPath(): android.graphics.Path;
			public setPatternPath(param0: android.graphics.Path): void;
			public getPath(param0: number, param1: number, param2: number, param3: number): android.graphics.Path;
		}
	}
}

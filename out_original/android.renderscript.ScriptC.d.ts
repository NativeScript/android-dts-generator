/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class ScriptC {
			public constructor();
			public constructor(param0: number, param1: android.renderscript.RenderScript);
			public constructor(param0: number, param1: android.renderscript.RenderScript);
			public constructor(param0: android.renderscript.RenderScript, param1: android.content.res.Resources, param2: number);
			public constructor(param0: android.renderscript.RenderScript, param1: string, param2: native.Array<number>, param3: native.Array<number>);
		}
	}
}

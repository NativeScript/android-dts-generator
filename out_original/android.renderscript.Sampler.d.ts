/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class Sampler {
			public getMinification(): android.renderscript.Sampler.Value;
			public getMagnification(): android.renderscript.Sampler.Value;
			public getWrapS(): android.renderscript.Sampler.Value;
			public getWrapT(): android.renderscript.Sampler.Value;
			public getAnisotropy(): number;
			public static CLAMP_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static CLAMP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static CLAMP_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static WRAP_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static WRAP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static WRAP_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static MIRRORED_REPEAT_NEAREST(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static MIRRORED_REPEAT_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
			public static MIRRORED_REPEAT_LINEAR_MIP_LINEAR(param0: android.renderscript.RenderScript): android.renderscript.Sampler;
		}
		export module Sampler {
			export class Builder {
				public constructor();
				public constructor(param0: android.renderscript.RenderScript);
				public setMinification(param0: android.renderscript.Sampler.Value): void;
				public setMagnification(param0: android.renderscript.Sampler.Value): void;
				public setWrapS(param0: android.renderscript.Sampler.Value): void;
				public setWrapT(param0: android.renderscript.Sampler.Value): void;
				public setAnisotropy(param0: number): void;
				public create(): android.renderscript.Sampler;
			}
			export class Value {
				public static values(): native.Array<android.renderscript.Sampler.Value>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.Sampler.Value;
				public static CLAMP: android.renderscript.Sampler.Value;
				public static LINEAR: android.renderscript.Sampler.Value;
				public static LINEAR_MIP_LINEAR: android.renderscript.Sampler.Value;
				public static LINEAR_MIP_NEAREST: android.renderscript.Sampler.Value;
				public static MIRRORED_REPEAT: android.renderscript.Sampler.Value;
				public static NEAREST: android.renderscript.Sampler.Value;
				public static WRAP: android.renderscript.Sampler.Value;
			}
		}
	}
}

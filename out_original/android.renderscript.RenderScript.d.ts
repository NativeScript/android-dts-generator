/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class RenderScript {
			public static getMinorVersion(): number;
			public setMessageHandler(param0: android.renderscript.RenderScript.RSMessageHandler): void;
			public getMessageHandler(): android.renderscript.RenderScript.RSMessageHandler;
			public sendMessage(param0: number, param1: native.Array<number>): void;
			public setErrorHandler(param0: android.renderscript.RenderScript.RSErrorHandler): void;
			public getErrorHandler(): android.renderscript.RenderScript.RSErrorHandler;
			public setPriority(param0: android.renderscript.RenderScript.Priority): void;
			public getApplicationContext(): android.content.Context;
			public static create(param0: android.content.Context): android.renderscript.RenderScript;
			public static create(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType): android.renderscript.RenderScript;
			public static create(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType, param2: number): android.renderscript.RenderScript;
			public static releaseAllContexts(): void;
			public static createMultiContext(param0: android.content.Context, param1: android.renderscript.RenderScript.ContextType, param2: number, param3: number): android.renderscript.RenderScript;
			public contextDump(): void;
			public finish(): void;
			public finalize(): void;
			public destroy(): void;
			public static CREATE_FLAG_LOW_LATENCY: number;
			public static CREATE_FLAG_LOW_POWER: number;
			public static CREATE_FLAG_NONE: number;
		}
		export module RenderScript {
			export class ContextType {
				public static values(): native.Array<android.renderscript.RenderScript.ContextType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.RenderScript.ContextType;
				public static DEBUG: android.renderscript.RenderScript.ContextType;
				public static NORMAL: android.renderscript.RenderScript.ContextType;
				public static PROFILE: android.renderscript.RenderScript.ContextType;
			}
			export class Priority {
				public static values(): native.Array<android.renderscript.RenderScript.Priority>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.renderscript.RenderScript.Priority;
				public static LOW: android.renderscript.RenderScript.Priority;
				public static NORMAL: android.renderscript.RenderScript.Priority;
			}
			export class RSErrorHandler {
				public constructor();
				public run(): void;
				public mErrorMessage: string;
				public mErrorNum: number;
			}
			export class RSMessageHandler {
				public constructor();
				public run(): void;
				public mData: native.Array<number>;
				public mID: number;
				public mLength: number;
			}
		}
	}
}

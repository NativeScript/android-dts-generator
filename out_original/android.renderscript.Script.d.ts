/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.renderscript.Allocation.d.ts" />
/// <reference path="./android.renderscript.BaseObj.d.ts" />
/// <reference path="./android.renderscript.Element.d.ts" />
/// <reference path="./android.renderscript.FieldPacker.d.ts" />
/// <reference path="./android.renderscript.RenderScript.d.ts" />
/// <reference path="./android.renderscript.Type.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module renderscript {
		export class Script {
			public createKernelID(param0: number, param1: number, param2: android.renderscript.Element, param3: android.renderscript.Element): android.renderscript.Script.KernelID;
			public createInvokeID(param0: number): android.renderscript.Script.InvokeID;
			public createFieldID(param0: number, param1: android.renderscript.Element): android.renderscript.Script.FieldID;
			public invoke(param0: number): void;
			public invoke(param0: number, param1: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: android.renderscript.Allocation, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker): void;
			public forEach(param0: number, param1: native.Array<android.renderscript.Allocation>, param2: android.renderscript.Allocation, param3: android.renderscript.FieldPacker, param4: android.renderscript.Script.LaunchOptions): void;
			public bindAllocation(param0: android.renderscript.Allocation, param1: number): void;
			public setVar(param0: number, param1: number): void;
			public getVarF(param0: number): number;
			public setVar(param0: number, param1: number): void;
			public getVarD(param0: number): number;
			public setVar(param0: number, param1: number): void;
			public getVarI(param0: number): number;
			public setVar(param0: number, param1: number): void;
			public getVarJ(param0: number): number;
			public setVar(param0: number, param1: boolean): void;
			public getVarB(param0: number): boolean;
			public setVar(param0: number, param1: android.renderscript.BaseObj): void;
			public setVar(param0: number, param1: android.renderscript.FieldPacker): void;
			public setVar(param0: number, param1: android.renderscript.FieldPacker, param2: android.renderscript.Element, param3: native.Array<number>): void;
			public getVarV(param0: number, param1: android.renderscript.FieldPacker): void;
			public setTimeZone(param0: string): void;
		}
		export module Script {
			export class Builder {
			}
			export class FieldBase {
				public constructor();
				public init(param0: android.renderscript.RenderScript, param1: number): void;
				public init(param0: android.renderscript.RenderScript, param1: number, param2: number): void;
				public getElement(): android.renderscript.Element;
				public getType(): android.renderscript.Type;
				public getAllocation(): android.renderscript.Allocation;
				public updateAllocation(): void;
				public mAllocation: android.renderscript.Allocation;
				public mElement: android.renderscript.Element;
			}
			export class FieldID {
			}
			export class InvokeID {
			}
			export class KernelID {
			}
			export class LaunchOptions {
				public constructor();
				public setX(param0: number, param1: number): android.renderscript.Script.LaunchOptions;
				public setY(param0: number, param1: number): android.renderscript.Script.LaunchOptions;
				public setZ(param0: number, param1: number): android.renderscript.Script.LaunchOptions;
				public getXStart(): number;
				public getXEnd(): number;
				public getYStart(): number;
				public getYEnd(): number;
				public getZStart(): number;
				public getZEnd(): number;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />

declare module java {
	export module sql {
		export class ParameterMetaData {
			public getParameterClassName(param0: number): string;
			public getParameterCount(): number;
			public getParameterMode(param0: number): number;
			public getParameterType(param0: number): number;
			public getParameterTypeName(param0: number): string;
			public getPrecision(param0: number): number;
			public getScale(param0: number): number;
			public isNullable(param0: number): number;
			public isSigned(param0: number): boolean;
			public static parameterModeIn: number;
			public static parameterModeInOut: number;
			public static parameterModeOut: number;
			public static parameterModeUnknown: number;
			public static parameterNoNulls: number;
			public static parameterNullable: number;
			public static parameterNullableUnknown: number;
		}
	}
}

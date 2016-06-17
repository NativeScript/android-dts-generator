/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />

declare module java {
	export module lang {
		export module reflect {
			export class Field {
				public getModifiers(): number;
				public isEnumConstant(): boolean;
				public isSynthetic(): boolean;
				public getName(): string;
				public getDeclaringClass(): java.lang.Class;
				public getType(): java.lang.Class;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public toGenericString(): string;
				public getGenericType(): java.lang.reflect.Type;
				public getDeclaredAnnotations(): native.Array<java.lang.annotation.Annotation>;
				public getAnnotation(param0: java.lang.Class): java.lang.annotation.Annotation;
				public isAnnotationPresent(param0: java.lang.Class): boolean;
				public get(param0: java.lang.Object): java.lang.Object;
				public getBoolean(param0: java.lang.Object): boolean;
				public getByte(param0: java.lang.Object): number;
				public getChar(param0: java.lang.Object): string;
				public getDouble(param0: java.lang.Object): number;
				public getFloat(param0: java.lang.Object): number;
				public getInt(param0: java.lang.Object): number;
				public getLong(param0: java.lang.Object): number;
				public getShort(param0: java.lang.Object): number;
				public set(param0: java.lang.Object, param1: java.lang.Object): void;
				public setBoolean(param0: java.lang.Object, param1: boolean): void;
				public setByte(param0: java.lang.Object, param1: number): void;
				public setChar(param0: java.lang.Object, param1: string): void;
				public setDouble(param0: java.lang.Object, param1: number): void;
				public setFloat(param0: java.lang.Object, param1: number): void;
				public setInt(param0: java.lang.Object, param1: number): void;
				public setLong(param0: java.lang.Object, param1: number): void;
				public setShort(param0: java.lang.Object, param1: number): void;
				public toString(): string;
			}
		}
	}
}

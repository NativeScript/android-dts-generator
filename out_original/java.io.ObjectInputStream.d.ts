/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.ObjectInputValidation.d.ts" />
/// <reference path="./java.io.ObjectStreamClass.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class ObjectInputStream {
			public constructor();
			public constructor(param0: java.io.InputStream);
			public available(): number;
			public close(): void;
			public defaultReadObject(): void;
			public enableResolveObject(param0: boolean): boolean;
			public read(param0: native.Array<number>): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public read(): number;
			public read(param0: native.Array<number>, param1: number, param2: number): number;
			public readBoolean(): boolean;
			public readByte(): number;
			public readChar(): string;
			public readDouble(): number;
			public readFields(): java.io.ObjectInputStream.GetField;
			public readFloat(): number;
			public readFully(param0: native.Array<number>): void;
			public readFully(param0: native.Array<number>, param1: number, param2: number): void;
			public readInt(): number;
			public readLine(): string;
			public readLong(): number;
			public readClassDescriptor(): java.io.ObjectStreamClass;
			public resolveProxyClass(param0: native.Array<string>): java.lang.Class;
			public readObject(): java.lang.Object;
			public readUnshared(): java.lang.Object;
			public readObjectOverride(): java.lang.Object;
			public readShort(): number;
			public readStreamHeader(): void;
			public readUnsignedByte(): number;
			public readUnsignedShort(): number;
			public readUTF(): string;
			public registerValidation(param0: java.io.ObjectInputValidation, param1: number): void;
			public resolveClass(param0: java.io.ObjectStreamClass): java.lang.Class;
			public resolveObject(param0: java.lang.Object): java.lang.Object;
			public skipBytes(param0: number): number;
		}
		export module ObjectInputStream {
			export class GetField {
				public constructor();
				public getObjectStreamClass(): java.io.ObjectStreamClass;
				public defaulted(param0: string): boolean;
				public get(param0: string, param1: boolean): boolean;
				public get(param0: string, param1: string): string;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: number): number;
				public get(param0: string, param1: java.lang.Object): java.lang.Object;
			}
		}
	}
}

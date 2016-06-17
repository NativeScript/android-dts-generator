/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.ObjectOutput.d.ts" />
/// <reference path="./java.io.ObjectStreamClass.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module io {
		export class ObjectOutputStream {
			public constructor();
			public constructor(param0: java.io.OutputStream);
			public annotateClass(param0: java.lang.Class): void;
			public annotateProxyClass(param0: java.lang.Class): void;
			public close(): void;
			public defaultWriteObject(): void;
			public drain(): void;
			public enableReplaceObject(param0: boolean): boolean;
			public flush(): void;
			public putFields(): java.io.ObjectOutputStream.PutField;
			public replaceObject(param0: java.lang.Object): java.lang.Object;
			public reset(): void;
			public useProtocolVersion(param0: number): void;
			public write(param0: native.Array<number>): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: number): void;
			public writeBoolean(param0: boolean): void;
			public writeByte(param0: number): void;
			public writeBytes(param0: string): void;
			public writeChar(param0: number): void;
			public writeChars(param0: string): void;
			public writeDouble(param0: number): void;
			public writeFields(): void;
			public writeFloat(param0: number): void;
			public writeInt(param0: number): void;
			public writeLong(param0: number): void;
			public writeClassDescriptor(param0: java.io.ObjectStreamClass): void;
			public writeObject(param0: java.lang.Object): void;
			public writeUnshared(param0: java.lang.Object): void;
			public writeObjectOverride(param0: java.lang.Object): void;
			public writeShort(param0: number): void;
			public writeStreamHeader(): void;
			public writeUTF(param0: string): void;
		}
		export module ObjectOutputStream {
			export class PutField {
				public constructor();
				public put(param0: string, param1: boolean): void;
				public put(param0: string, param1: string): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: number): void;
				public put(param0: string, param1: java.lang.Object): void;
				public write(param0: java.io.ObjectOutput): void;
			}
		}
	}
}

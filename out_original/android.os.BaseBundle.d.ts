/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module android {
	export module os {
		export class BaseBundle {
			public size(): number;
			public isEmpty(): boolean;
			public clear(): void;
			public containsKey(param0: string): boolean;
			public get(param0: string): java.lang.Object;
			public remove(param0: string): void;
			public putAll(param0: android.os.PersistableBundle): void;
			public keySet(): java.util.Set;
			public putBoolean(param0: string, param1: boolean): void;
			public putInt(param0: string, param1: number): void;
			public putLong(param0: string, param1: number): void;
			public putDouble(param0: string, param1: number): void;
			public putString(param0: string, param1: string): void;
			public putBooleanArray(param0: string, param1: native.Array<boolean>): void;
			public putIntArray(param0: string, param1: native.Array<number>): void;
			public putLongArray(param0: string, param1: native.Array<number>): void;
			public putDoubleArray(param0: string, param1: native.Array<number>): void;
			public putStringArray(param0: string, param1: native.Array<string>): void;
			public getBoolean(param0: string): boolean;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getInt(param0: string): number;
			public getInt(param0: string, param1: number): number;
			public getLong(param0: string): number;
			public getLong(param0: string, param1: number): number;
			public getDouble(param0: string): number;
			public getDouble(param0: string, param1: number): number;
			public getString(param0: string): string;
			public getString(param0: string, param1: string): string;
			public getBooleanArray(param0: string): native.Array<boolean>;
			public getIntArray(param0: string): native.Array<number>;
			public getLongArray(param0: string): native.Array<number>;
			public getDoubleArray(param0: string): native.Array<number>;
			public getStringArray(param0: string): native.Array<string>;
		}
	}
}

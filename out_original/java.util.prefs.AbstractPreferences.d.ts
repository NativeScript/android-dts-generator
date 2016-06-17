/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.prefs.NodeChangeListener.d.ts" />
/// <reference path="./java.util.prefs.PreferenceChangeListener.d.ts" />
/// <reference path="./java.util.prefs.Preferences.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class AbstractPreferences {
				public constructor();
				public constructor(param0: java.util.prefs.AbstractPreferences, param1: string);
				public cachedChildren(): native.Array<java.util.prefs.AbstractPreferences>;
				public getChild(param0: string): java.util.prefs.AbstractPreferences;
				public isRemoved(): boolean;
				public flushSpi(): void;
				public childrenNamesSpi(): native.Array<string>;
				public childSpi(param0: string): java.util.prefs.AbstractPreferences;
				public putSpi(param0: string, param1: string): void;
				public getSpi(param0: string): string;
				public keysSpi(): native.Array<string>;
				public removeNodeSpi(): void;
				public removeSpi(param0: string): void;
				public syncSpi(): void;
				public absolutePath(): string;
				public childrenNames(): native.Array<string>;
				public clear(): void;
				public exportNode(param0: java.io.OutputStream): void;
				public exportSubtree(param0: java.io.OutputStream): void;
				public flush(): void;
				public get(param0: string, param1: string): string;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getByteArray(param0: string, param1: native.Array<number>): native.Array<number>;
				public getDouble(param0: string, param1: number): number;
				public getFloat(param0: string, param1: number): number;
				public getInt(param0: string, param1: number): number;
				public getLong(param0: string, param1: number): number;
				public isUserNode(): boolean;
				public keys(): native.Array<string>;
				public name(): string;
				public node(param0: string): java.util.prefs.Preferences;
				public nodeExists(param0: string): boolean;
				public parent(): java.util.prefs.Preferences;
				public put(param0: string, param1: string): void;
				public putBoolean(param0: string, param1: boolean): void;
				public putByteArray(param0: string, param1: native.Array<number>): void;
				public putDouble(param0: string, param1: number): void;
				public putFloat(param0: string, param1: number): void;
				public putInt(param0: string, param1: number): void;
				public putLong(param0: string, param1: number): void;
				public remove(param0: string): void;
				public removeNode(): void;
				public addNodeChangeListener(param0: java.util.prefs.NodeChangeListener): void;
				public addPreferenceChangeListener(param0: java.util.prefs.PreferenceChangeListener): void;
				public removeNodeChangeListener(param0: java.util.prefs.NodeChangeListener): void;
				public removePreferenceChangeListener(param0: java.util.prefs.PreferenceChangeListener): void;
				public sync(): void;
				public toString(): string;
				public lock: java.lang.Object;
				public newNode: boolean;
			}
		}
	}
}

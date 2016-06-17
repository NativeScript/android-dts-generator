/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class Attributes {
				public constructor();
				public constructor(param0: java.util.jar.Attributes);
				public constructor(param0: number);
				public clear(): void;
				public containsKey(param0: java.lang.Object): boolean;
				public containsValue(param0: java.lang.Object): boolean;
				public entrySet(): java.util.Set;
				public get(param0: java.lang.Object): java.lang.Object;
				public isEmpty(): boolean;
				public keySet(): java.util.Set;
				public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public putAll(param0: java.util.Map): void;
				public remove(param0: java.lang.Object): java.lang.Object;
				public size(): number;
				public values(): java.util.Collection;
				public clone(): java.lang.Object;
				public hashCode(): number;
				public equals(param0: java.lang.Object): boolean;
				public getValue(param0: java.util.jar.Attributes.Name): string;
				public getValue(param0: string): string;
				public putValue(param0: string, param1: string): string;
				public map: java.util.Map;
			}
			export module Attributes {
				export class Name {
					public constructor();
					public constructor(param0: string);
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public toString(): string;
					public static CLASS_PATH: java.util.jar.Attributes.Name;
					public static CONTENT_TYPE: java.util.jar.Attributes.Name;
					public static EXTENSION_INSTALLATION: java.util.jar.Attributes.Name;
					public static EXTENSION_LIST: java.util.jar.Attributes.Name;
					public static EXTENSION_NAME: java.util.jar.Attributes.Name;
					public static IMPLEMENTATION_TITLE: java.util.jar.Attributes.Name;
					public static IMPLEMENTATION_URL: java.util.jar.Attributes.Name;
					public static IMPLEMENTATION_VENDOR: java.util.jar.Attributes.Name;
					public static IMPLEMENTATION_VENDOR_ID: java.util.jar.Attributes.Name;
					public static IMPLEMENTATION_VERSION: java.util.jar.Attributes.Name;
					public static MAIN_CLASS: java.util.jar.Attributes.Name;
					public static MANIFEST_VERSION: java.util.jar.Attributes.Name;
					public static SEALED: java.util.jar.Attributes.Name;
					public static SIGNATURE_VERSION: java.util.jar.Attributes.Name;
					public static SPECIFICATION_TITLE: java.util.jar.Attributes.Name;
					public static SPECIFICATION_VENDOR: java.util.jar.Attributes.Name;
					public static SPECIFICATION_VERSION: java.util.jar.Attributes.Name;
				}
			}
		}
	}
}

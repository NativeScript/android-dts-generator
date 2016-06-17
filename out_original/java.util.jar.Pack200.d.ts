/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.util.SortedMap.d.ts" />
/// <reference path="./java.util.jar.JarFile.d.ts" />
/// <reference path="./java.util.jar.JarInputStream.d.ts" />
/// <reference path="./java.util.jar.JarOutputStream.d.ts" />

declare module java {
	export module util {
		export module jar {
			export class Pack200 {
				public static newPacker(): java.util.jar.Pack200.Packer;
				public static newUnpacker(): java.util.jar.Pack200.Unpacker;
			}
			export module Pack200 {
				export class Packer {
					public properties(): java.util.SortedMap;
					public pack(param0: java.util.jar.JarFile, param1: java.io.OutputStream): void;
					public pack(param0: java.util.jar.JarInputStream, param1: java.io.OutputStream): void;
					public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public static CLASS_ATTRIBUTE_PFX: string;
					public static CODE_ATTRIBUTE_PFX: string;
					public static DEFLATE_HINT: string;
					public static EFFORT: string;
					public static ERROR: string;
					public static FALSE: string;
					public static FIELD_ATTRIBUTE_PFX: string;
					public static KEEP: string;
					public static KEEP_FILE_ORDER: string;
					public static LATEST: string;
					public static METHOD_ATTRIBUTE_PFX: string;
					public static MODIFICATION_TIME: string;
					public static PASS: string;
					public static PASS_FILE_PFX: string;
					public static PROGRESS: string;
					public static SEGMENT_LIMIT: string;
					public static STRIP: string;
					public static TRUE: string;
					public static UNKNOWN_ATTRIBUTE: string;
				}
				export class Unpacker {
					public properties(): java.util.SortedMap;
					public unpack(param0: java.io.InputStream, param1: java.util.jar.JarOutputStream): void;
					public unpack(param0: java.io.File, param1: java.util.jar.JarOutputStream): void;
					public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
					public static DEFLATE_HINT: string;
					public static FALSE: string;
					public static KEEP: string;
					public static PROGRESS: string;
					public static TRUE: string;
				}
			}
		}
	}
}

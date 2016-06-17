/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module security {
		export class KeyRep {
			public constructor();
			public constructor(param0: java.security.KeyRep.Type, param1: string, param2: string, param3: native.Array<number>);
			public readResolve(): java.lang.Object;
		}
		export module KeyRep {
			export class Type {
				public static values(): native.Array<java.security.KeyRep.Type>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): java.security.KeyRep.Type;
				public static PRIVATE: java.security.KeyRep.Type;
				public static PUBLIC: java.security.KeyRep.Type;
				public static SECRET: java.security.KeyRep.Type;
			}
		}
	}
}

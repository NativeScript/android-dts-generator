/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.w3c.dom.Node.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class UserDataHandler {
				public handle(param0: number, param1: string, param2: java.lang.Object, param3: org.w3c.dom.Node, param4: org.w3c.dom.Node): void;
				public static NODE_ADOPTED: number;
				public static NODE_CLONED: number;
				public static NODE_DELETED: number;
				public static NODE_IMPORTED: number;
				public static NODE_RENAMED: number;
			}
		}
	}
}

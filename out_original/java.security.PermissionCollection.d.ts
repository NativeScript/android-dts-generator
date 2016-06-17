/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export class PermissionCollection {
			public constructor();
			public add(param0: java.security.Permission): void;
			public elements(): java.util.Enumeration;
			public implies(param0: java.security.Permission): boolean;
			public isReadOnly(): boolean;
			public setReadOnly(): void;
		}
	}
}

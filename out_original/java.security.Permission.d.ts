/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.PermissionCollection.d.ts" />

declare module java {
	export module security {
		export class Permission {
			public constructor();
			public constructor(param0: string);
			public getName(): string;
			public checkGuard(param0: java.lang.Object): void;
			public newPermissionCollection(): java.security.PermissionCollection;
			public getActions(): string;
			public implies(param0: java.security.Permission): boolean;
		}
	}
}

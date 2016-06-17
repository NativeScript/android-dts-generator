/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.acl.Permission.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export module acl {
			export class AclEntry {
				public setPrincipal(param0: java.security.Principal): boolean;
				public getPrincipal(): java.security.Principal;
				public setNegativePermissions(): void;
				public isNegative(): boolean;
				public addPermission(param0: java.security.acl.Permission): boolean;
				public removePermission(param0: java.security.acl.Permission): boolean;
				public checkPermission(param0: java.security.acl.Permission): boolean;
				public permissions(): java.util.Enumeration;
				public toString(): string;
				public clone(): java.lang.Object;
			}
		}
	}
}

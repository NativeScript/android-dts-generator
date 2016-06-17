/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.security.acl.AclEntry.d.ts" />
/// <reference path="./java.security.acl.Permission.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export module acl {
			export class Acl {
				public setName(param0: java.security.Principal, param1: string): void;
				public getName(): string;
				public addEntry(param0: java.security.Principal, param1: java.security.acl.AclEntry): boolean;
				public removeEntry(param0: java.security.Principal, param1: java.security.acl.AclEntry): boolean;
				public getPermissions(param0: java.security.Principal): java.util.Enumeration;
				public entries(): java.util.Enumeration;
				public checkPermission(param0: java.security.Principal, param1: java.security.acl.Permission): boolean;
				public toString(): string;
			}
		}
	}
}

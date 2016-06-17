/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />

declare module java {
	export module security {
		export module acl {
			export class Owner {
				public addOwner(param0: java.security.Principal, param1: java.security.Principal): boolean;
				public deleteOwner(param0: java.security.Principal, param1: java.security.Principal): boolean;
				public isOwner(param0: java.security.Principal): boolean;
			}
		}
	}
}

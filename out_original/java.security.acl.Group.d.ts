/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.Enumeration.d.ts" />

declare module java {
	export module security {
		export module acl {
			export class Group {
				public addMember(param0: java.security.Principal): boolean;
				public removeMember(param0: java.security.Principal): boolean;
				public isMember(param0: java.security.Principal): boolean;
				public members(): java.util.Enumeration;
			}
		}
	}
}

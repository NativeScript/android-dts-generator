/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.security.AccessControlContext.d.ts" />
/// <reference path="./java.security.PrivilegedAction.d.ts" />
/// <reference path="./java.security.PrivilegedExceptionAction.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module javax {
	export module security {
		export module auth {
			export class Subject {
				public constructor();
				public constructor(param0: boolean, param1: java.util.Set, param2: java.util.Set, param3: java.util.Set);
				public static doAs(param0: javax.security.auth.Subject, param1: java.security.PrivilegedAction): java.lang.Object;
				public static doAsPrivileged(param0: javax.security.auth.Subject, param1: java.security.PrivilegedAction, param2: java.security.AccessControlContext): java.lang.Object;
				public static doAs(param0: javax.security.auth.Subject, param1: java.security.PrivilegedExceptionAction): java.lang.Object;
				public static doAsPrivileged(param0: javax.security.auth.Subject, param1: java.security.PrivilegedExceptionAction, param2: java.security.AccessControlContext): java.lang.Object;
				public equals(param0: java.lang.Object): boolean;
				public getPrincipals(): java.util.Set;
				public getPrincipals(param0: java.lang.Class): java.util.Set;
				public getPrivateCredentials(): java.util.Set;
				public getPrivateCredentials(param0: java.lang.Class): java.util.Set;
				public getPublicCredentials(): java.util.Set;
				public getPublicCredentials(param0: java.lang.Class): java.util.Set;
				public hashCode(): number;
				public setReadOnly(): void;
				public isReadOnly(): boolean;
				public toString(): string;
				public static getSubject(param0: java.security.AccessControlContext): javax.security.auth.Subject;
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.ThreadGroup.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.security.Permission.d.ts" />

declare module java {
	export module lang {
		export class SecurityManager {
			public constructor();
			public checkAccept(param0: string, param1: number): void;
			public checkAccess(param0: java.lang.Thread): void;
			public checkAccess(param0: java.lang.ThreadGroup): void;
			public checkConnect(param0: string, param1: number): void;
			public checkConnect(param0: string, param1: number, param2: java.lang.Object): void;
			public checkCreateClassLoader(): void;
			public checkDelete(param0: string): void;
			public checkExec(param0: string): void;
			public checkExit(param0: number): void;
			public checkLink(param0: string): void;
			public checkListen(param0: number): void;
			public checkMemberAccess(param0: java.lang.Class, param1: number): void;
			public checkMulticast(param0: java.net.InetAddress): void;
			public checkMulticast(param0: java.net.InetAddress, param1: number): void;
			public checkPackageAccess(param0: string): void;
			public checkPackageDefinition(param0: string): void;
			public checkPropertiesAccess(): void;
			public checkPropertyAccess(param0: string): void;
			public checkRead(param0: java.io.FileDescriptor): void;
			public checkRead(param0: string): void;
			public checkRead(param0: string, param1: java.lang.Object): void;
			public checkSecurityAccess(param0: string): void;
			public checkSetFactory(): void;
			public checkTopLevelWindow(param0: java.lang.Object): boolean;
			public checkSystemClipboardAccess(): void;
			public checkAwtEventQueueAccess(): void;
			public checkPrintJobAccess(): void;
			public checkWrite(param0: java.io.FileDescriptor): void;
			public checkWrite(param0: string): void;
			public getInCheck(): boolean;
			public getClassContext(): native.Array<java.lang.Class>;
			public currentClassLoader(): java.lang.ClassLoader;
			public classLoaderDepth(): number;
			public currentLoadedClass(): java.lang.Class;
			public classDepth(param0: string): number;
			public inClass(param0: string): boolean;
			public inClassLoader(): boolean;
			public getThreadGroup(): java.lang.ThreadGroup;
			public getSecurityContext(): java.lang.Object;
			public checkPermission(param0: java.security.Permission): void;
			public checkPermission(param0: java.security.Permission, param1: java.lang.Object): void;
			public inCheck: boolean;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.system.StructPollfd.d.ts" />
/// <reference path="./android.system.StructStat.d.ts" />
/// <reference path="./android.system.StructStatVfs.d.ts" />
/// <reference path="./android.system.StructUtsname.d.ts" />
/// <reference path="./android.util.MutableInt.d.ts" />
/// <reference path="./android.util.MutableLong.d.ts" />
/// <reference path="./java.io.FileDescriptor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
/// <reference path="./java.net.InetSocketAddress.d.ts" />
/// <reference path="./java.net.SocketAddress.d.ts" />
/// <reference path="./java.nio.ByteBuffer.d.ts" />

declare module android {
	export module system {
		export class Os {
			public static accept(param0: java.io.FileDescriptor, param1: java.net.InetSocketAddress): java.io.FileDescriptor;
			public static access(param0: string, param1: number): boolean;
			public static bind(param0: java.io.FileDescriptor, param1: java.net.InetAddress, param2: number): void;
			public static chmod(param0: string, param1: number): void;
			public static chown(param0: string, param1: number, param2: number): void;
			public static close(param0: java.io.FileDescriptor): void;
			public static connect(param0: java.io.FileDescriptor, param1: java.net.InetAddress, param2: number): void;
			public static dup(param0: java.io.FileDescriptor): java.io.FileDescriptor;
			public static dup2(param0: java.io.FileDescriptor, param1: number): java.io.FileDescriptor;
			public static environ(): native.Array<string>;
			public static execv(param0: string, param1: native.Array<string>): void;
			public static execve(param0: string, param1: native.Array<string>, param2: native.Array<string>): void;
			public static fchmod(param0: java.io.FileDescriptor, param1: number): void;
			public static fchown(param0: java.io.FileDescriptor, param1: number, param2: number): void;
			public static fdatasync(param0: java.io.FileDescriptor): void;
			public static fstat(param0: java.io.FileDescriptor): android.system.StructStat;
			public static fstatvfs(param0: java.io.FileDescriptor): android.system.StructStatVfs;
			public static fsync(param0: java.io.FileDescriptor): void;
			public static ftruncate(param0: java.io.FileDescriptor, param1: number): void;
			public static gai_strerror(param0: number): string;
			public static getegid(): number;
			public static geteuid(): number;
			public static getgid(): number;
			public static getenv(param0: string): string;
			public static getpeername(param0: java.io.FileDescriptor): java.net.SocketAddress;
			public static getpid(): number;
			public static getppid(): number;
			public static getsockname(param0: java.io.FileDescriptor): java.net.SocketAddress;
			public static gettid(): number;
			public static getuid(): number;
			public static if_indextoname(param0: number): string;
			public static inet_pton(param0: number, param1: string): java.net.InetAddress;
			public static isatty(param0: java.io.FileDescriptor): boolean;
			public static kill(param0: number, param1: number): void;
			public static lchown(param0: string, param1: number, param2: number): void;
			public static link(param0: string, param1: string): void;
			public static listen(param0: java.io.FileDescriptor, param1: number): void;
			public static lseek(param0: java.io.FileDescriptor, param1: number, param2: number): number;
			public static lstat(param0: string): android.system.StructStat;
			public static mincore(param0: number, param1: number, param2: native.Array<number>): void;
			public static mkdir(param0: string, param1: number): void;
			public static mkfifo(param0: string, param1: number): void;
			public static mlock(param0: number, param1: number): void;
			public static mmap(param0: number, param1: number, param2: number, param3: number, param4: java.io.FileDescriptor, param5: number): number;
			public static msync(param0: number, param1: number, param2: number): void;
			public static munlock(param0: number, param1: number): void;
			public static munmap(param0: number, param1: number): void;
			public static open(param0: string, param1: number, param2: number): java.io.FileDescriptor;
			public static pipe(): native.Array<java.io.FileDescriptor>;
			public static poll(param0: native.Array<android.system.StructPollfd>, param1: number): number;
			public static posix_fallocate(param0: java.io.FileDescriptor, param1: number, param2: number): void;
			public static prctl(param0: number, param1: number, param2: number, param3: number, param4: number): number;
			public static pread(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer, param2: number): number;
			public static pread(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
			public static pwrite(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer, param2: number): number;
			public static pwrite(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number): number;
			public static read(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer): number;
			public static read(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number): number;
			public static readlink(param0: string): string;
			public static readv(param0: java.io.FileDescriptor, param1: native.Array<java.lang.Object>, param2: native.Array<number>, param3: native.Array<number>): number;
			public static recvfrom(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer, param2: number, param3: java.net.InetSocketAddress): number;
			public static recvfrom(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: java.net.InetSocketAddress): number;
			public static remove(param0: string): void;
			public static rename(param0: string, param1: string): void;
			public static sendfile(param0: java.io.FileDescriptor, param1: java.io.FileDescriptor, param2: android.util.MutableLong, param3: number): number;
			public static sendto(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer, param2: number, param3: java.net.InetAddress, param4: number): number;
			public static sendto(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number, param4: number, param5: java.net.InetAddress, param6: number): number;
			public static setegid(param0: number): void;
			public static setenv(param0: string, param1: string, param2: boolean): void;
			public static seteuid(param0: number): void;
			public static setgid(param0: number): void;
			public static setsid(): number;
			public static setuid(param0: number): void;
			public static shutdown(param0: java.io.FileDescriptor, param1: number): void;
			public static socket(param0: number, param1: number, param2: number): java.io.FileDescriptor;
			public static socketpair(param0: number, param1: number, param2: number, param3: java.io.FileDescriptor, param4: java.io.FileDescriptor): void;
			public static stat(param0: string): android.system.StructStat;
			public static statvfs(param0: string): android.system.StructStatVfs;
			public static strerror(param0: number): string;
			public static strsignal(param0: number): string;
			public static symlink(param0: string, param1: string): void;
			public static sysconf(param0: number): number;
			public static tcdrain(param0: java.io.FileDescriptor): void;
			public static tcsendbreak(param0: java.io.FileDescriptor, param1: number): void;
			public static umask(param0: number): number;
			public static uname(): android.system.StructUtsname;
			public static unsetenv(param0: string): void;
			public static waitpid(param0: number, param1: android.util.MutableInt, param2: number): number;
			public static write(param0: java.io.FileDescriptor, param1: java.nio.ByteBuffer): number;
			public static write(param0: java.io.FileDescriptor, param1: native.Array<number>, param2: number, param3: number): number;
			public static writev(param0: java.io.FileDescriptor, param1: native.Array<java.lang.Object>, param2: native.Array<number>, param3: native.Array<number>): number;
		}
	}
}

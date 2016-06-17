/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.concurrent.locks.Lock.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class ReadWriteLock {
					public readLock(): java.util.concurrent.locks.Lock;
					public writeLock(): java.util.concurrent.locks.Lock;
				}
			}
		}
	}
}

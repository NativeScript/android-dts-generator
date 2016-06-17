/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />

declare module java {
	export module util {
		export module concurrent {
			export module locks {
				export class AbstractOwnableSynchronizer {
					public constructor();
					public setExclusiveOwnerThread(param0: java.lang.Thread): void;
					public getExclusiveOwnerThread(): java.lang.Thread;
				}
			}
		}
	}
}

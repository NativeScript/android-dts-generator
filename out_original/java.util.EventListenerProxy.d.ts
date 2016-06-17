/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.EventListener.d.ts" />

declare module java {
	export module util {
		export class EventListenerProxy {
			public constructor();
			public constructor(param0: java.util.EventListener);
			public getListener(): java.util.EventListener;
		}
	}
}

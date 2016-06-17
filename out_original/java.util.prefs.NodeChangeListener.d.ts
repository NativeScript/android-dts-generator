/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.util.prefs.NodeChangeEvent.d.ts" />

declare module java {
	export module util {
		export module prefs {
			export class NodeChangeListener {
				public childAdded(param0: java.util.prefs.NodeChangeEvent): void;
				public childRemoved(param0: java.util.prefs.NodeChangeEvent): void;
			}
		}
	}
}

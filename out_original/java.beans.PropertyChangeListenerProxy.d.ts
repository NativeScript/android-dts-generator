/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.EventListener.d.ts" />

declare module java {
	export module beans {
		export class PropertyChangeListenerProxy {
			public constructor(param0: java.util.EventListener);
			public constructor();
			public constructor(param0: string, param1: java.beans.PropertyChangeListener);
			public getPropertyName(): string;
			public propertyChange(param0: java.beans.PropertyChangeEvent): void;
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />

declare module java {
	export module beans {
		export class PropertyChangeListener {
			public propertyChange(param0: java.beans.PropertyChangeEvent): void;
		}
	}
}

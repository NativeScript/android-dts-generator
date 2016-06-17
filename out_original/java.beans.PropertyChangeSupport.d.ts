/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.beans.PropertyChangeEvent.d.ts" />
/// <reference path="./java.beans.PropertyChangeListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module beans {
		export class PropertyChangeSupport {
			public constructor();
			public constructor(param0: java.lang.Object);
			public firePropertyChange(param0: string, param1: java.lang.Object, param2: java.lang.Object): void;
			public fireIndexedPropertyChange(param0: string, param1: number, param2: java.lang.Object, param3: java.lang.Object): void;
			public removePropertyChangeListener(param0: string, param1: java.beans.PropertyChangeListener): void;
			public addPropertyChangeListener(param0: string, param1: java.beans.PropertyChangeListener): void;
			public getPropertyChangeListeners(param0: string): native.Array<java.beans.PropertyChangeListener>;
			public firePropertyChange(param0: string, param1: boolean, param2: boolean): void;
			public fireIndexedPropertyChange(param0: string, param1: number, param2: boolean, param3: boolean): void;
			public firePropertyChange(param0: string, param1: number, param2: number): void;
			public fireIndexedPropertyChange(param0: string, param1: number, param2: number, param3: number): void;
			public hasListeners(param0: string): boolean;
			public removePropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
			public addPropertyChangeListener(param0: java.beans.PropertyChangeListener): void;
			public getPropertyChangeListeners(): native.Array<java.beans.PropertyChangeListener>;
			public firePropertyChange(param0: java.beans.PropertyChangeEvent): void;
		}
	}
}

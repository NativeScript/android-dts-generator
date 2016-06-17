/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module java {
	export module beans {
		export class PropertyChangeEvent {
			public constructor(param0: java.lang.Object);
			public constructor();
			public constructor(param0: java.lang.Object, param1: string, param2: java.lang.Object, param3: java.lang.Object);
			public getPropertyName(): string;
			public setPropagationId(param0: java.lang.Object): void;
			public getPropagationId(): java.lang.Object;
			public getOldValue(): java.lang.Object;
			public getNewValue(): java.lang.Object;
		}
	}
}

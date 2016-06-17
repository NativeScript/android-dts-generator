/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Observer.d.ts" />

declare module java {
	export module util {
		export class Observable {
			public constructor();
			public addObserver(param0: java.util.Observer): void;
			public clearChanged(): void;
			public countObservers(): number;
			public deleteObserver(param0: java.util.Observer): void;
			public deleteObservers(): void;
			public hasChanged(): boolean;
			public notifyObservers(): void;
			public notifyObservers(param0: java.lang.Object): void;
			public setChanged(): void;
		}
	}
}

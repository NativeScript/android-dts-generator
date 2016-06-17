/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./java.util.Set.d.ts" />

declare module java {
	export module security {
		export class Provider {
			public constructor();
			public constructor(param0: java.util.Properties);
			public constructor(param0: number);
			public constructor(param0: number, param1: number);
			public constructor(param0: java.util.Map);
			public constructor(param0: string, param1: number, param2: string);
			public getName(): string;
			public getVersion(): number;
			public getInfo(): string;
			public toString(): string;
			public clear(): void;
			public load(param0: java.io.Reader): void;
			public load(param0: java.io.InputStream): void;
			public putAll(param0: java.util.Map): void;
			public entrySet(): java.util.Set;
			public keySet(): java.util.Set;
			public values(): java.util.Collection;
			public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
			public remove(param0: java.lang.Object): java.lang.Object;
			public getService(param0: string, param1: string): java.security.Provider.Service;
			public getServices(): java.util.Set;
			public putService(param0: java.security.Provider.Service): void;
			public removeService(param0: java.security.Provider.Service): void;
		}
		export module Provider {
			export class Service {
				public constructor();
				public constructor(param0: java.security.Provider, param1: string, param2: string, param3: string, param4: java.util.List, param5: java.util.Map);
				public getType(): string;
				public getAlgorithm(): string;
				public getProvider(): java.security.Provider;
				public getClassName(): string;
				public getAttribute(param0: string): string;
				public newInstance(param0: java.lang.Object): java.lang.Object;
				public supportsParameter(param0: java.lang.Object): boolean;
				public toString(): string;
			}
		}
	}
}

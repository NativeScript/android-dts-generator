/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.io.ObjectInput.d.ts" />
/// <reference path="./java.io.ObjectOutput.d.ts" />

declare module java {
	export module io {
		export class Externalizable {
			public readExternal(param0: java.io.ObjectInput): void;
			public writeExternal(param0: java.io.ObjectOutput): void;
		}
	}
}

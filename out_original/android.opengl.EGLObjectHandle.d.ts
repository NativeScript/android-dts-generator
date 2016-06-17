/// <reference path="./_helpers.d.ts" />

declare module android {
	export module opengl {
		export class EGLObjectHandle {
			public constructor();
			public constructor(param0: number);
			public constructor(param0: number);
			public getHandle(): number;
			public getNativeHandle(): number;
			public hashCode(): number;
		}
	}
}

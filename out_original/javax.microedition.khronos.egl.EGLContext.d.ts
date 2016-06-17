/// <reference path="./_helpers.d.ts" />
/// <reference path="./javax.microedition.khronos.egl.EGL.d.ts" />
/// <reference path="./javax.microedition.khronos.opengles.GL.d.ts" />

declare module javax {
	export module microedition {
		export module khronos {
			export module egl {
				export class EGLContext {
					public constructor();
					public static getEGL(): javax.microedition.khronos.egl.EGL;
					public getGL(): javax.microedition.khronos.opengles.GL;
				}
			}
		}
	}
}

/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.nio.Buffer.d.ts" />
/// <reference path="./java.nio.FloatBuffer.d.ts" />
/// <reference path="./java.nio.IntBuffer.d.ts" />

declare module javax {
	export module microedition {
		export module khronos {
			export module opengles {
				export class GL11ExtensionPack {
					public glBindFramebufferOES(param0: number, param1: number): void;
					public glBindRenderbufferOES(param0: number, param1: number): void;
					public glBindTexture(param0: number, param1: number): void;
					public glBlendEquation(param0: number): void;
					public glBlendEquationSeparate(param0: number, param1: number): void;
					public glBlendFuncSeparate(param0: number, param1: number, param2: number, param3: number): void;
					public glCheckFramebufferStatusOES(param0: number): number;
					public glCompressedTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: java.nio.Buffer): void;
					public glCopyTexImage2D(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public glDeleteFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
					public glDeleteFramebuffersOES(param0: number, param1: java.nio.IntBuffer): void;
					public glDeleteRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
					public glDeleteRenderbuffersOES(param0: number, param1: java.nio.IntBuffer): void;
					public glEnable(param0: number): void;
					public glFramebufferRenderbufferOES(param0: number, param1: number, param2: number, param3: number): void;
					public glFramebufferTexture2DOES(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public glGenerateMipmapOES(param0: number): void;
					public glGenFramebuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
					public glGenFramebuffersOES(param0: number, param1: java.nio.IntBuffer): void;
					public glGenRenderbuffersOES(param0: number, param1: native.Array<number>, param2: number): void;
					public glGenRenderbuffersOES(param0: number, param1: java.nio.IntBuffer): void;
					public glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: number): void;
					public glGetFramebufferAttachmentParameterivOES(param0: number, param1: number, param2: number, param3: java.nio.IntBuffer): void;
					public glGetIntegerv(param0: number, param1: native.Array<number>, param2: number): void;
					public glGetIntegerv(param0: number, param1: java.nio.IntBuffer): void;
					public glGetRenderbufferParameterivOES(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glGetRenderbufferParameterivOES(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glGetTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glGetTexGenfv(param0: number, param1: number, param2: java.nio.FloatBuffer): void;
					public glGetTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glGetTexGeniv(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glGetTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glGetTexGenxv(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glIsFramebufferOES(param0: number): boolean;
					public glIsRenderbufferOES(param0: number): boolean;
					public glRenderbufferStorageOES(param0: number, param1: number, param2: number, param3: number): void;
					public glStencilOp(param0: number, param1: number, param2: number): void;
					public glTexEnvf(param0: number, param1: number, param2: number): void;
					public glTexEnvfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glTexEnvfv(param0: number, param1: number, param2: java.nio.FloatBuffer): void;
					public glTexEnvx(param0: number, param1: number, param2: number): void;
					public glTexEnvxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glTexEnvxv(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glTexGenf(param0: number, param1: number, param2: number): void;
					public glTexGenfv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glTexGenfv(param0: number, param1: number, param2: java.nio.FloatBuffer): void;
					public glTexGeni(param0: number, param1: number, param2: number): void;
					public glTexGeniv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glTexGeniv(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glTexGenx(param0: number, param1: number, param2: number): void;
					public glTexGenxv(param0: number, param1: number, param2: native.Array<number>, param3: number): void;
					public glTexGenxv(param0: number, param1: number, param2: java.nio.IntBuffer): void;
					public glTexParameterf(param0: number, param1: number, param2: number): void;
					public static GL_BLEND_DST_ALPHA: number;
					public static GL_BLEND_DST_RGB: number;
					public static GL_BLEND_EQUATION: number;
					public static GL_BLEND_EQUATION_ALPHA: number;
					public static GL_BLEND_EQUATION_RGB: number;
					public static GL_BLEND_SRC_ALPHA: number;
					public static GL_BLEND_SRC_RGB: number;
					public static GL_COLOR_ATTACHMENT0_OES: number;
					public static GL_COLOR_ATTACHMENT10_OES: number;
					public static GL_COLOR_ATTACHMENT11_OES: number;
					public static GL_COLOR_ATTACHMENT12_OES: number;
					public static GL_COLOR_ATTACHMENT13_OES: number;
					public static GL_COLOR_ATTACHMENT14_OES: number;
					public static GL_COLOR_ATTACHMENT15_OES: number;
					public static GL_COLOR_ATTACHMENT1_OES: number;
					public static GL_COLOR_ATTACHMENT2_OES: number;
					public static GL_COLOR_ATTACHMENT3_OES: number;
					public static GL_COLOR_ATTACHMENT4_OES: number;
					public static GL_COLOR_ATTACHMENT5_OES: number;
					public static GL_COLOR_ATTACHMENT6_OES: number;
					public static GL_COLOR_ATTACHMENT7_OES: number;
					public static GL_COLOR_ATTACHMENT8_OES: number;
					public static GL_COLOR_ATTACHMENT9_OES: number;
					public static GL_DECR_WRAP: number;
					public static GL_DEPTH_ATTACHMENT_OES: number;
					public static GL_DEPTH_COMPONENT: number;
					public static GL_DEPTH_COMPONENT16: number;
					public static GL_DEPTH_COMPONENT24: number;
					public static GL_DEPTH_COMPONENT32: number;
					public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME_OES: number;
					public static GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE_OES: number;
					public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE_OES: number;
					public static GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL_OES: number;
					public static GL_FRAMEBUFFER_BINDING_OES: number;
					public static GL_FRAMEBUFFER_COMPLETE_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_FORMATS_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT_OES: number;
					public static GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER_OES: number;
					public static GL_FRAMEBUFFER_OES: number;
					public static GL_FRAMEBUFFER_UNSUPPORTED_OES: number;
					public static GL_FUNC_ADD: number;
					public static GL_FUNC_REVERSE_SUBTRACT: number;
					public static GL_FUNC_SUBTRACT: number;
					public static GL_INCR_WRAP: number;
					public static GL_INVALID_FRAMEBUFFER_OPERATION_OES: number;
					public static GL_MAX_COLOR_ATTACHMENTS_OES: number;
					public static GL_MAX_CUBE_MAP_TEXTURE_SIZE: number;
					public static GL_MAX_RENDERBUFFER_SIZE_OES: number;
					public static GL_MIRRORED_REPEAT: number;
					public static GL_NORMAL_MAP: number;
					public static GL_REFLECTION_MAP: number;
					public static GL_RENDERBUFFER_ALPHA_SIZE_OES: number;
					public static GL_RENDERBUFFER_BINDING_OES: number;
					public static GL_RENDERBUFFER_BLUE_SIZE_OES: number;
					public static GL_RENDERBUFFER_DEPTH_SIZE_OES: number;
					public static GL_RENDERBUFFER_GREEN_SIZE_OES: number;
					public static GL_RENDERBUFFER_HEIGHT_OES: number;
					public static GL_RENDERBUFFER_INTERNAL_FORMAT_OES: number;
					public static GL_RENDERBUFFER_OES: number;
					public static GL_RENDERBUFFER_RED_SIZE_OES: number;
					public static GL_RENDERBUFFER_STENCIL_SIZE_OES: number;
					public static GL_RENDERBUFFER_WIDTH_OES: number;
					public static GL_RGB565_OES: number;
					public static GL_RGB5_A1: number;
					public static GL_RGB8: number;
					public static GL_RGBA4: number;
					public static GL_RGBA8: number;
					public static GL_STENCIL_ATTACHMENT_OES: number;
					public static GL_STENCIL_INDEX: number;
					public static GL_STENCIL_INDEX1_OES: number;
					public static GL_STENCIL_INDEX4_OES: number;
					public static GL_STENCIL_INDEX8_OES: number;
					public static GL_STR: number;
					public static GL_TEXTURE_BINDING_CUBE_MAP: number;
					public static GL_TEXTURE_CUBE_MAP: number;
					public static GL_TEXTURE_CUBE_MAP_NEGATIVE_X: number;
					public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
					public static GL_TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
					public static GL_TEXTURE_CUBE_MAP_POSITIVE_X: number;
					public static GL_TEXTURE_CUBE_MAP_POSITIVE_Y: number;
					public static GL_TEXTURE_CUBE_MAP_POSITIVE_Z: number;
					public static GL_TEXTURE_GEN_MODE: number;
					public static GL_TEXTURE_GEN_STR: number;
				}
			}
		}
	}
}

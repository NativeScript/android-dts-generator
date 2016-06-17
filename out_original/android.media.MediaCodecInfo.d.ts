/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.media.MediaFormat.d.ts" />
/// <reference path="./android.util.Range.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module media {
		export class MediaCodecInfo {
			public getName(): string;
			public isEncoder(): boolean;
			public getSupportedTypes(): native.Array<string>;
			public getCapabilitiesForType(param0: string): android.media.MediaCodecInfo.CodecCapabilities;
		}
		export module MediaCodecInfo {
			export class AudioCapabilities {
				public getBitrateRange(): android.util.Range;
				public getSupportedSampleRates(): native.Array<number>;
				public getSupportedSampleRateRanges(): native.Array<android.util.Range>;
				public getMaxInputChannelCount(): number;
				public isSampleRateSupported(param0: number): boolean;
			}
			export class CodecCapabilities {
				public constructor();
				public isFeatureSupported(param0: string): boolean;
				public isFeatureRequired(param0: string): boolean;
				public isFormatSupported(param0: android.media.MediaFormat): boolean;
				public getDefaultFormat(): android.media.MediaFormat;
				public getMimeType(): string;
				public getMaxSupportedInstances(): number;
				public getAudioCapabilities(): android.media.MediaCodecInfo.AudioCapabilities;
				public getEncoderCapabilities(): android.media.MediaCodecInfo.EncoderCapabilities;
				public getVideoCapabilities(): android.media.MediaCodecInfo.VideoCapabilities;
				public static createFromProfileLevel(param0: string, param1: number, param2: number): android.media.MediaCodecInfo.CodecCapabilities;
				public static COLOR_Format12bitRGB444: number;
				public static COLOR_Format16bitARGB1555: number;
				public static COLOR_Format16bitARGB4444: number;
				public static COLOR_Format16bitBGR565: number;
				public static COLOR_Format16bitRGB565: number;
				public static COLOR_Format18BitBGR666: number;
				public static COLOR_Format18bitARGB1665: number;
				public static COLOR_Format18bitRGB666: number;
				public static COLOR_Format19bitARGB1666: number;
				public static COLOR_Format24BitABGR6666: number;
				public static COLOR_Format24BitARGB6666: number;
				public static COLOR_Format24bitARGB1887: number;
				public static COLOR_Format24bitBGR888: number;
				public static COLOR_Format24bitRGB888: number;
				public static COLOR_Format25bitARGB1888: number;
				public static COLOR_Format32bitABGR8888: number;
				public static COLOR_Format32bitARGB8888: number;
				public static COLOR_Format32bitBGRA8888: number;
				public static COLOR_Format8bitRGB332: number;
				public static COLOR_FormatCbYCrY: number;
				public static COLOR_FormatCrYCbY: number;
				public static COLOR_FormatL16: number;
				public static COLOR_FormatL2: number;
				public static COLOR_FormatL24: number;
				public static COLOR_FormatL32: number;
				public static COLOR_FormatL4: number;
				public static COLOR_FormatL8: number;
				public static COLOR_FormatMonochrome: number;
				public static COLOR_FormatRGBAFlexible: number;
				public static COLOR_FormatRGBFlexible: number;
				public static COLOR_FormatRawBayer10bit: number;
				public static COLOR_FormatRawBayer8bit: number;
				public static COLOR_FormatRawBayer8bitcompressed: number;
				public static COLOR_FormatSurface: number;
				public static COLOR_FormatYCbYCr: number;
				public static COLOR_FormatYCrYCb: number;
				public static COLOR_FormatYUV411PackedPlanar: number;
				public static COLOR_FormatYUV411Planar: number;
				public static COLOR_FormatYUV420Flexible: number;
				public static COLOR_FormatYUV420PackedPlanar: number;
				public static COLOR_FormatYUV420PackedSemiPlanar: number;
				public static COLOR_FormatYUV420Planar: number;
				public static COLOR_FormatYUV420SemiPlanar: number;
				public static COLOR_FormatYUV422Flexible: number;
				public static COLOR_FormatYUV422PackedPlanar: number;
				public static COLOR_FormatYUV422PackedSemiPlanar: number;
				public static COLOR_FormatYUV422Planar: number;
				public static COLOR_FormatYUV422SemiPlanar: number;
				public static COLOR_FormatYUV444Flexible: number;
				public static COLOR_FormatYUV444Interleaved: number;
				public static COLOR_QCOM_FormatYUV420SemiPlanar: number;
				public static COLOR_TI_FormatYUV420PackedSemiPlanar: number;
				public static FEATURE_AdaptivePlayback: string;
				public static FEATURE_SecurePlayback: string;
				public static FEATURE_TunneledPlayback: string;
				public colorFormats: native.Array<number>;
				public profileLevels: native.Array<android.media.MediaCodecInfo.CodecProfileLevel>;
			}
			export class CodecProfileLevel {
				public constructor();
				public static AACObjectELD: number;
				public static AACObjectERLC: number;
				public static AACObjectHE: number;
				public static AACObjectHE_PS: number;
				public static AACObjectLC: number;
				public static AACObjectLD: number;
				public static AACObjectLTP: number;
				public static AACObjectMain: number;
				public static AACObjectSSR: number;
				public static AACObjectScalable: number;
				public static AVCLevel1: number;
				public static AVCLevel11: number;
				public static AVCLevel12: number;
				public static AVCLevel13: number;
				public static AVCLevel1b: number;
				public static AVCLevel2: number;
				public static AVCLevel21: number;
				public static AVCLevel22: number;
				public static AVCLevel3: number;
				public static AVCLevel31: number;
				public static AVCLevel32: number;
				public static AVCLevel4: number;
				public static AVCLevel41: number;
				public static AVCLevel42: number;
				public static AVCLevel5: number;
				public static AVCLevel51: number;
				public static AVCLevel52: number;
				public static AVCProfileBaseline: number;
				public static AVCProfileExtended: number;
				public static AVCProfileHigh: number;
				public static AVCProfileHigh10: number;
				public static AVCProfileHigh422: number;
				public static AVCProfileHigh444: number;
				public static AVCProfileMain: number;
				public static H263Level10: number;
				public static H263Level20: number;
				public static H263Level30: number;
				public static H263Level40: number;
				public static H263Level45: number;
				public static H263Level50: number;
				public static H263Level60: number;
				public static H263Level70: number;
				public static H263ProfileBackwardCompatible: number;
				public static H263ProfileBaseline: number;
				public static H263ProfileH320Coding: number;
				public static H263ProfileHighCompression: number;
				public static H263ProfileHighLatency: number;
				public static H263ProfileISWV2: number;
				public static H263ProfileISWV3: number;
				public static H263ProfileInterlace: number;
				public static H263ProfileInternet: number;
				public static HEVCHighTierLevel1: number;
				public static HEVCHighTierLevel2: number;
				public static HEVCHighTierLevel21: number;
				public static HEVCHighTierLevel3: number;
				public static HEVCHighTierLevel31: number;
				public static HEVCHighTierLevel4: number;
				public static HEVCHighTierLevel41: number;
				public static HEVCHighTierLevel5: number;
				public static HEVCHighTierLevel51: number;
				public static HEVCHighTierLevel52: number;
				public static HEVCHighTierLevel6: number;
				public static HEVCHighTierLevel61: number;
				public static HEVCHighTierLevel62: number;
				public static HEVCMainTierLevel1: number;
				public static HEVCMainTierLevel2: number;
				public static HEVCMainTierLevel21: number;
				public static HEVCMainTierLevel3: number;
				public static HEVCMainTierLevel31: number;
				public static HEVCMainTierLevel4: number;
				public static HEVCMainTierLevel41: number;
				public static HEVCMainTierLevel5: number;
				public static HEVCMainTierLevel51: number;
				public static HEVCMainTierLevel52: number;
				public static HEVCMainTierLevel6: number;
				public static HEVCMainTierLevel61: number;
				public static HEVCMainTierLevel62: number;
				public static HEVCProfileMain: number;
				public static HEVCProfileMain10: number;
				public static MPEG2LevelH14: number;
				public static MPEG2LevelHL: number;
				public static MPEG2LevelLL: number;
				public static MPEG2LevelML: number;
				public static MPEG2Profile422: number;
				public static MPEG2ProfileHigh: number;
				public static MPEG2ProfileMain: number;
				public static MPEG2ProfileSNR: number;
				public static MPEG2ProfileSimple: number;
				public static MPEG2ProfileSpatial: number;
				public static MPEG4Level0: number;
				public static MPEG4Level0b: number;
				public static MPEG4Level1: number;
				public static MPEG4Level2: number;
				public static MPEG4Level3: number;
				public static MPEG4Level4: number;
				public static MPEG4Level4a: number;
				public static MPEG4Level5: number;
				public static MPEG4ProfileAdvancedCoding: number;
				public static MPEG4ProfileAdvancedCore: number;
				public static MPEG4ProfileAdvancedRealTime: number;
				public static MPEG4ProfileAdvancedScalable: number;
				public static MPEG4ProfileAdvancedSimple: number;
				public static MPEG4ProfileBasicAnimated: number;
				public static MPEG4ProfileCore: number;
				public static MPEG4ProfileCoreScalable: number;
				public static MPEG4ProfileHybrid: number;
				public static MPEG4ProfileMain: number;
				public static MPEG4ProfileNbit: number;
				public static MPEG4ProfileScalableTexture: number;
				public static MPEG4ProfileSimple: number;
				public static MPEG4ProfileSimpleFBA: number;
				public static MPEG4ProfileSimpleFace: number;
				public static MPEG4ProfileSimpleScalable: number;
				public static VP8Level_Version0: number;
				public static VP8Level_Version1: number;
				public static VP8Level_Version2: number;
				public static VP8Level_Version3: number;
				public static VP8ProfileMain: number;
				public level: number;
				public profile: number;
			}
			export class EncoderCapabilities {
				public getComplexityRange(): android.util.Range;
				public isBitrateModeSupported(param0: number): boolean;
				public static BITRATE_MODE_CBR: number;
				public static BITRATE_MODE_CQ: number;
				public static BITRATE_MODE_VBR: number;
			}
			export class VideoCapabilities {
				public getBitrateRange(): android.util.Range;
				public getSupportedWidths(): android.util.Range;
				public getSupportedHeights(): android.util.Range;
				public getWidthAlignment(): number;
				public getHeightAlignment(): number;
				public getSupportedFrameRates(): android.util.Range;
				public getSupportedWidthsFor(param0: number): android.util.Range;
				public getSupportedHeightsFor(param0: number): android.util.Range;
				public getSupportedFrameRatesFor(param0: number, param1: number): android.util.Range;
				public getAchievableFrameRatesFor(param0: number, param1: number): android.util.Range;
				public areSizeAndRateSupported(param0: number, param1: number, param2: number): boolean;
				public isSizeSupported(param0: number, param1: number): boolean;
			}
		}
	}
}

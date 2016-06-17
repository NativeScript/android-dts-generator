/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module speech {
		export module tts {
			export class SynthesisRequest {
				public constructor();
				public constructor(param0: string, param1: android.os.Bundle);
				public constructor(param0: string, param1: android.os.Bundle);
				public getText(): string;
				public getCharSequenceText(): string;
				public getVoiceName(): string;
				public getLanguage(): string;
				public getCountry(): string;
				public getVariant(): string;
				public getSpeechRate(): number;
				public getPitch(): number;
				public getParams(): android.os.Bundle;
				public getCallerUid(): number;
			}
		}
	}
}

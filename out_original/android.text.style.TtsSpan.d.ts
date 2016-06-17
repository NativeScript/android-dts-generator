/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.PersistableBundle.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module text {
		export module style {
			export class TtsSpan {
				public constructor();
				public constructor(param0: string, param1: android.os.PersistableBundle);
				public constructor(param0: android.os.Parcel);
				public getType(): string;
				public getArgs(): android.os.PersistableBundle;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getSpanTypeId(): number;
				public static ANIMACY_ANIMATE: string;
				public static ANIMACY_INANIMATE: string;
				public static ARG_ANIMACY: string;
				public static ARG_CASE: string;
				public static ARG_COUNTRY_CODE: string;
				public static ARG_CURRENCY: string;
				public static ARG_DAY: string;
				public static ARG_DENOMINATOR: string;
				public static ARG_DIGITS: string;
				public static ARG_DOMAIN: string;
				public static ARG_EXTENSION: string;
				public static ARG_FRACTIONAL_PART: string;
				public static ARG_FRAGMENT_ID: string;
				public static ARG_GENDER: string;
				public static ARG_HOURS: string;
				public static ARG_INTEGER_PART: string;
				public static ARG_MINUTES: string;
				public static ARG_MONTH: string;
				public static ARG_MULTIPLICITY: string;
				public static ARG_NUMBER: string;
				public static ARG_NUMBER_PARTS: string;
				public static ARG_NUMERATOR: string;
				public static ARG_PASSWORD: string;
				public static ARG_PATH: string;
				public static ARG_PORT: string;
				public static ARG_PROTOCOL: string;
				public static ARG_QUANTITY: string;
				public static ARG_QUERY_STRING: string;
				public static ARG_TEXT: string;
				public static ARG_UNIT: string;
				public static ARG_USERNAME: string;
				public static ARG_VERBATIM: string;
				public static ARG_WEEKDAY: string;
				public static ARG_YEAR: string;
				public static CASE_ABLATIVE: string;
				public static CASE_ACCUSATIVE: string;
				public static CASE_DATIVE: string;
				public static CASE_GENITIVE: string;
				public static CASE_INSTRUMENTAL: string;
				public static CASE_LOCATIVE: string;
				public static CASE_NOMINATIVE: string;
				public static CASE_VOCATIVE: string;
				public static GENDER_FEMALE: string;
				public static GENDER_MALE: string;
				public static GENDER_NEUTRAL: string;
				public static MONTH_APRIL: number;
				public static MONTH_AUGUST: number;
				public static MONTH_DECEMBER: number;
				public static MONTH_FEBRUARY: number;
				public static MONTH_JANUARY: number;
				public static MONTH_JULY: number;
				public static MONTH_JUNE: number;
				public static MONTH_MARCH: number;
				public static MONTH_MAY: number;
				public static MONTH_NOVEMBER: number;
				public static MONTH_OCTOBER: number;
				public static MONTH_SEPTEMBER: number;
				public static MULTIPLICITY_DUAL: string;
				public static MULTIPLICITY_PLURAL: string;
				public static MULTIPLICITY_SINGLE: string;
				public static TYPE_CARDINAL: string;
				public static TYPE_DATE: string;
				public static TYPE_DECIMAL: string;
				public static TYPE_DIGITS: string;
				public static TYPE_ELECTRONIC: string;
				public static TYPE_FRACTION: string;
				public static TYPE_MEASURE: string;
				public static TYPE_MONEY: string;
				public static TYPE_ORDINAL: string;
				public static TYPE_TELEPHONE: string;
				public static TYPE_TEXT: string;
				public static TYPE_TIME: string;
				public static TYPE_VERBATIM: string;
				public static WEEKDAY_FRIDAY: number;
				public static WEEKDAY_MONDAY: number;
				public static WEEKDAY_SATURDAY: number;
				public static WEEKDAY_SUNDAY: number;
				public static WEEKDAY_THURSDAY: number;
				public static WEEKDAY_TUESDAY: number;
				public static WEEKDAY_WEDNESDAY: number;
			}
			export module TtsSpan {
				export class Builder {
					public constructor();
					public constructor(param0: string);
					public build(): android.text.style.TtsSpan;
					public setStringArgument(param0: string, param1: string): android.text.style.TtsSpan.Builder;
					public setIntArgument(param0: string, param1: number): android.text.style.TtsSpan.Builder;
					public setLongArgument(param0: string, param1: number): android.text.style.TtsSpan.Builder;
				}
				export class CardinalBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: number);
					public constructor(param0: string);
					public setNumber(param0: number): android.text.style.TtsSpan.CardinalBuilder;
					public setNumber(param0: string): android.text.style.TtsSpan.CardinalBuilder;
				}
				export class DateBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.Integer, param1: java.lang.Integer, param2: java.lang.Integer, param3: java.lang.Integer);
					public setWeekday(param0: number): android.text.style.TtsSpan.DateBuilder;
					public setDay(param0: number): android.text.style.TtsSpan.DateBuilder;
					public setMonth(param0: number): android.text.style.TtsSpan.DateBuilder;
					public setYear(param0: number): android.text.style.TtsSpan.DateBuilder;
				}
				export class DecimalBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
					public constructor(param0: string, param1: string);
					public setArgumentsFromDouble(param0: number, param1: number, param2: number): android.text.style.TtsSpan.DecimalBuilder;
					public setIntegerPart(param0: number): android.text.style.TtsSpan.DecimalBuilder;
					public setIntegerPart(param0: string): android.text.style.TtsSpan.DecimalBuilder;
					public setFractionalPart(param0: string): android.text.style.TtsSpan.DecimalBuilder;
				}
				export class DigitsBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string);
					public setDigits(param0: string): android.text.style.TtsSpan.DigitsBuilder;
				}
				export class ElectronicBuilder {
					public constructor(param0: string);
					public constructor();
					public setEmailArguments(param0: string, param1: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setProtocol(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setUsername(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setPassword(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setDomain(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setPort(param0: number): android.text.style.TtsSpan.ElectronicBuilder;
					public setPath(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setQueryString(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
					public setFragmentId(param0: string): android.text.style.TtsSpan.ElectronicBuilder;
				}
				export class FractionBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: number, param1: number, param2: number);
					public setIntegerPart(param0: number): android.text.style.TtsSpan.FractionBuilder;
					public setIntegerPart(param0: string): android.text.style.TtsSpan.FractionBuilder;
					public setNumerator(param0: number): android.text.style.TtsSpan.FractionBuilder;
					public setNumerator(param0: string): android.text.style.TtsSpan.FractionBuilder;
					public setDenominator(param0: number): android.text.style.TtsSpan.FractionBuilder;
					public setDenominator(param0: string): android.text.style.TtsSpan.FractionBuilder;
				}
				export class MeasureBuilder {
					public constructor(param0: string);
					public constructor();
					public setNumber(param0: number): android.text.style.TtsSpan.MeasureBuilder;
					public setNumber(param0: string): android.text.style.TtsSpan.MeasureBuilder;
					public setIntegerPart(param0: number): android.text.style.TtsSpan.MeasureBuilder;
					public setIntegerPart(param0: string): android.text.style.TtsSpan.MeasureBuilder;
					public setFractionalPart(param0: string): android.text.style.TtsSpan.MeasureBuilder;
					public setNumerator(param0: number): android.text.style.TtsSpan.MeasureBuilder;
					public setNumerator(param0: string): android.text.style.TtsSpan.MeasureBuilder;
					public setDenominator(param0: number): android.text.style.TtsSpan.MeasureBuilder;
					public setDenominator(param0: string): android.text.style.TtsSpan.MeasureBuilder;
					public setUnit(param0: string): android.text.style.TtsSpan.MeasureBuilder;
				}
				export class MoneyBuilder {
					public constructor(param0: string);
					public constructor();
					public setIntegerPart(param0: number): android.text.style.TtsSpan.MoneyBuilder;
					public setIntegerPart(param0: string): android.text.style.TtsSpan.MoneyBuilder;
					public setFractionalPart(param0: string): android.text.style.TtsSpan.MoneyBuilder;
					public setCurrency(param0: string): android.text.style.TtsSpan.MoneyBuilder;
					public setQuantity(param0: string): android.text.style.TtsSpan.MoneyBuilder;
				}
				export class OrdinalBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: number);
					public constructor(param0: string);
					public setNumber(param0: number): android.text.style.TtsSpan.OrdinalBuilder;
					public setNumber(param0: string): android.text.style.TtsSpan.OrdinalBuilder;
				}
				export class SemioticClassBuilder {
					public constructor();
					public constructor(param0: string);
					public setGender(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;
					public setAnimacy(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;
					public setMultiplicity(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;
					public setCase(param0: string): android.text.style.TtsSpan.SemioticClassBuilder;
				}
				export class TelephoneBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string);
					public setCountryCode(param0: string): android.text.style.TtsSpan.TelephoneBuilder;
					public setNumberParts(param0: string): android.text.style.TtsSpan.TelephoneBuilder;
					public setExtension(param0: string): android.text.style.TtsSpan.TelephoneBuilder;
				}
				export class TextBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string);
					public setText(param0: string): android.text.style.TtsSpan.TextBuilder;
				}
				export class TimeBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: number, param1: number);
					public setHours(param0: number): android.text.style.TtsSpan.TimeBuilder;
					public setMinutes(param0: number): android.text.style.TtsSpan.TimeBuilder;
				}
				export class VerbatimBuilder {
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string);
					public setVerbatim(param0: string): android.text.style.TtsSpan.VerbatimBuilder;
				}
			}
		}
	}
}

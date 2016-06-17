/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.GregorianCalendar.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
/// <reference path="./java.util.TimeZone.d.ts" />
/// <reference path="./javax.xml.datatype.Duration.d.ts" />
/// <reference path="./javax.xml.namespace.QName.d.ts" />

declare module javax {
	export module xml {
		export module datatype {
			export class XMLGregorianCalendar {
				public constructor();
				public clear(): void;
				public reset(): void;
				public setYear(param0: java.math.BigInteger): void;
				public setYear(param0: number): void;
				public setMonth(param0: number): void;
				public setDay(param0: number): void;
				public setTimezone(param0: number): void;
				public setTime(param0: number, param1: number, param2: number): void;
				public setHour(param0: number): void;
				public setMinute(param0: number): void;
				public setSecond(param0: number): void;
				public setMillisecond(param0: number): void;
				public setFractionalSecond(param0: java.math.BigDecimal): void;
				public setTime(param0: number, param1: number, param2: number, param3: java.math.BigDecimal): void;
				public setTime(param0: number, param1: number, param2: number, param3: number): void;
				public getEon(): java.math.BigInteger;
				public getYear(): number;
				public getEonAndYear(): java.math.BigInteger;
				public getMonth(): number;
				public getDay(): number;
				public getTimezone(): number;
				public getHour(): number;
				public getMinute(): number;
				public getSecond(): number;
				public getMillisecond(): number;
				public getFractionalSecond(): java.math.BigDecimal;
				public compare(param0: javax.xml.datatype.XMLGregorianCalendar): number;
				public normalize(): javax.xml.datatype.XMLGregorianCalendar;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public toXMLFormat(): string;
				public getXMLSchemaType(): javax.xml.namespace.QName;
				public toString(): string;
				public isValid(): boolean;
				public add(param0: javax.xml.datatype.Duration): void;
				public toGregorianCalendar(): java.util.GregorianCalendar;
				public toGregorianCalendar(param0: java.util.TimeZone, param1: java.util.Locale, param2: javax.xml.datatype.XMLGregorianCalendar): java.util.GregorianCalendar;
				public getTimeZone(param0: number): java.util.TimeZone;
				public clone(): java.lang.Object;
			}
		}
	}
}

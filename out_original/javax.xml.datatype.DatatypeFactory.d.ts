/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.ClassLoader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.GregorianCalendar.d.ts" />
/// <reference path="./javax.xml.datatype.Duration.d.ts" />
/// <reference path="./javax.xml.datatype.XMLGregorianCalendar.d.ts" />

declare module javax {
	export module xml {
		export module datatype {
			export class DatatypeFactory {
				public constructor();
				public static newInstance(): javax.xml.datatype.DatatypeFactory;
				public static newInstance(param0: string, param1: java.lang.ClassLoader): javax.xml.datatype.DatatypeFactory;
				public newDuration(param0: string): javax.xml.datatype.Duration;
				public newDuration(param0: number): javax.xml.datatype.Duration;
				public newDuration(param0: boolean, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: java.math.BigInteger, param5: java.math.BigInteger, param6: java.math.BigDecimal): javax.xml.datatype.Duration;
				public newDuration(param0: boolean, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): javax.xml.datatype.Duration;
				public newDurationDayTime(param0: string): javax.xml.datatype.Duration;
				public newDurationDayTime(param0: number): javax.xml.datatype.Duration;
				public newDurationDayTime(param0: boolean, param1: java.math.BigInteger, param2: java.math.BigInteger, param3: java.math.BigInteger, param4: java.math.BigInteger): javax.xml.datatype.Duration;
				public newDurationDayTime(param0: boolean, param1: number, param2: number, param3: number, param4: number): javax.xml.datatype.Duration;
				public newDurationYearMonth(param0: string): javax.xml.datatype.Duration;
				public newDurationYearMonth(param0: number): javax.xml.datatype.Duration;
				public newDurationYearMonth(param0: boolean, param1: java.math.BigInteger, param2: java.math.BigInteger): javax.xml.datatype.Duration;
				public newDurationYearMonth(param0: boolean, param1: number, param2: number): javax.xml.datatype.Duration;
				public newXMLGregorianCalendar(): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendar(param0: string): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendar(param0: java.util.GregorianCalendar): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendar(param0: java.math.BigInteger, param1: number, param2: number, param3: number, param4: number, param5: number, param6: java.math.BigDecimal, param7: number): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendar(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendarDate(param0: number, param1: number, param2: number, param3: number): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: number): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: java.math.BigDecimal, param4: number): javax.xml.datatype.XMLGregorianCalendar;
				public newXMLGregorianCalendarTime(param0: number, param1: number, param2: number, param3: number, param4: number): javax.xml.datatype.XMLGregorianCalendar;
				public static DATATYPEFACTORY_IMPLEMENTATION_CLASS: string;
				public static DATATYPEFACTORY_PROPERTY: string;
			}
		}
	}
}

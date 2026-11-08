package fixture

// Companion methods are called on the instance in the static Companion field.
class MediaKind private constructor(val value: String) {
    companion object {
        fun parse(value: String): MediaKind? = if (value.isEmpty()) null else MediaKind(value)

        // A JVM name that is not an identifier has to stay a quoted member name.
        @Deprecated("Use parse")
        @JvmName("-deprecated_parse")
        fun deprecatedParse(value: String): MediaKind? = parse(value)
    }
}

// A companion object that is not called Companion.
class Factory {
    companion object Builder {
        fun create(): Factory = Factory()
    }
}

// The companion gives the interface a static initializer.
fun interface Interceptor {
    fun intercept(value: String): String

    companion object {
        val NONE: Interceptor = Interceptor { it }
    }
}

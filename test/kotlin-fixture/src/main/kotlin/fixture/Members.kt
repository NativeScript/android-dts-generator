package fixture

// Kotlin names a setter's parameter <set-?>.
class Settings {
    var idleCallback: Runnable? = null
    lateinit var label: String
}

// Kotlin names an extension receiver $this$shout.
object Text {
    fun String.shout(times: Int): String = uppercase().repeat(times)

    // The receiver is not null, the parameter after it can be.
    fun String.tagged(label: String?): String = this + label
}

// Inlined lambdas put locals ahead of the parameters in the LocalVariableTable.
class Window {
    fun enable(scrim: Int, label: String): String {
        val result = label.also { println(it) }.let { it + scrim }
        return result
    }
}

// kotlin.* types, generic arguments and all, become any.
class Callbacks {
    fun register(callback: (String) -> Boolean) {}
    fun handlers(): Map<String, (Int) -> Unit> = emptyMap()
}

interface Copyable<T> {
    fun copyOf(): T?
}

// A type parameter with two bounds.
class Bounded<E>(val error: E) where E : Throwable, E : Copyable<E>

// An inner class constructor takes the outer instance first.
class Cache {
    inner class Editor(val key: String, val note: String?) {
        fun commit(): Boolean = true
    }
}

// A skipped class in the middle of a nesting chain.
class Outer {
    internal class Hidden {
        class Visible {
            fun ping(): Int = 1
        }
    }

    class After
}

// Constants with and without a TypeScript literal.
object Limits {
    const val MAX_COUNT = 42
    const val NEGATIVE = -7
    const val SAFE_LONG = 9007199254740991L
    const val BIG_LONG = Long.MAX_VALUE
    const val RATIO = 0.1f
    const val NOT_A_NUMBER = Double.NaN
    const val INITIAL = 'x'
    const val QUOTE = '"'
    const val ENABLED = true
    const val GREETING = "say \"hi\"\n\\ */ done"
}

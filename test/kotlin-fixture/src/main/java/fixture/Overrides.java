package fixture;

import org.jetbrains.annotations.Nullable;

public class Overrides {
    // The implementation lists the interface's declaration beside its own, and the subclass only
    // the interface's.
    public interface Panel {
        @Nullable
        String title();
    }

    public static class BasePanel implements Panel {
        public String title() {
            return "base";
        }
    }

    public static class DerivedPanel extends BasePanel {
    }

    // A declaration without parameter names borrows them from one that has them, but keeps its
    // own types: E, not the interface's T.
    public interface Source<T> {
        default T make(T fallback, String tag) {
            return fallback;
        }
    }

    public abstract static class Pipe<E> implements Source<E>, java.io.Serializable {
        public abstract E make(E fallback, String tag);
    }

    // Deck declares another entry(), so it lists Card's entry(int) again, which has to return
    // null as Card's typings say it does, not as Card's raw annotation says.
    public interface Named {
        @Nullable
        String entry(int index);
    }

    public interface Labeled extends Named {
    }

    public static class Card implements Labeled {
        public String entry(int index) {
            return "";
        }
    }

    public static class Deck extends Card {
        public String entry(String key) {
            return key;
        }
    }

    public static class Hand extends Deck {
        @Override
        @Nullable
        public String entry(int index) {
            return null;
        }
    }

    // An override cannot declare a wider return type than its base class does.
    public static class Shape {
        public String label() {
            return "";
        }
    }

    public static class Circle extends Shape {
        @Override
        @Nullable
        public String label() {
            return null;
        }
    }
}

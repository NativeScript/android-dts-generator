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

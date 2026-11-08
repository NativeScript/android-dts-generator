package fixture;

import java.util.List;

public class JavaOuter {
    // Only the constructor with generic parameter types gets a Signature, which omits the outer instance.
    public class Inner {
        public Inner(List<String> items, long size) {
        }

        public Inner(int count) {
        }
    }

    // long and double take two local variable slots.
    public static String describe(long size, int count, double ratio, String label) {
        return label;
    }

    public String format(long size, int count, double ratio, String label) {
        return label;
    }
}

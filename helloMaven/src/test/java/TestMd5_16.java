import org.junit.jupiter.api.Test;
import top.yaovan.utils.Utils;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class TestMd5_16 {
    @Test
    public void test() {
//        String str = Utils.getUUID();
        final Set<String> strings = new HashSet<>();

        for (int i = 0; i < 1; i++) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    for (int i = 0; i < 100000000; i++) {
                        String str = Utils.toMd5_16(Utils.getUUID());
                        if (!strings.contains(str)) {
                            strings.add(str);
                        } else {
                            throw new RuntimeException("重复了" + strings.size());
                        }
                    }
                    System.out.println(strings.size());
                }
            }).start();
        }
        while (true) {
            try {
                Thread.sleep(10000l);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

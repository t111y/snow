
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class TestList {
    @Test
    public void testForEach() {
        int count = 100000000;
        TestUser user = new TestUser();
        List<TestUser> list = new LinkedList<>();
        list = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            list.add(user);
        }
        long t = System.currentTimeMillis();
        list.forEach(b -> {
            b.setAge(b.getAge() + 1);
        });
        long t1 = System.currentTimeMillis();
//        for (int i = 0; i < count; i++) {
//            TestUser b = list.get(i);
//            b.setAge(b.getAge() + 1);
//        }
        long t2 = System.currentTimeMillis();
        for (TestUser testUser : list) {
            TestUser b = testUser;
            b.setAge(b.getAge() + 1);
        }
        long t3 = System.currentTimeMillis();

        System.out.println(t1 - t);
        System.out.println(t2 - t1);
        System.out.println(t3 - t2);
    }
    @Test
    public void testGet(){
        List<String> strings = new ArrayList<>();
        strings.add("1");

        System.out.println(strings.indexOf("1"));
        System.out.println(strings.indexOf("2"));
        System.out.println(strings.remove("1"));
        System.out.println(strings.remove("2"));
    }
}

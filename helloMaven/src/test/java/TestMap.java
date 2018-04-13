
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class TestMap {
    @Test
    public void test(){
        Map<Integer,Boolean> map = new HashMap<>();
        Long size = SizeOfObject.sizeOf(map);
        System.out.println(size);

        map = new ConcurrentHashMap<>();
        size = SizeOfObject.sizeOf(map);
        System.out.println(size);

        System.out.println(SizeOfObject.sizeOf(new ArrayList<>()));
        size = SizeOfObject.sizeOf((short)1);
        System.out.println(size);
        size = SizeOfObject.sizeOf(1d);
        System.out.println(size);
        size = SizeOfObject.sizeOf(1l);
        System.out.println(size);
        size = SizeOfObject.sizeOf("1");
        System.out.println(size);
        size = SizeOfObject.sizeOf("我");
        System.out.println(size);
    }
    @Test
    public void testRemove(){
        Map<String,String> map = new ConcurrentHashMap<>();
        List<String> list = new CopyOnWriteArrayList<>();
        for (int i = 0; i < 100; i++) {
            map.put(i+"",i+"");
            list.add(i+"");
        }
        for (String key: map.values()             ) {
            map.remove(key);
            System.out.println(map.size());
        }

        for (String key :list             ) {
            list.remove(key);
            System.out.println(list.size());
        }
    }
}
